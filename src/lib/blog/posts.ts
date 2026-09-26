import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { cache } from 'react';
import { renderMarkdown, renderMarkdownFragment, stripMarkdown, type Heading } from './markdown';

/** Carpeta de los artículos. Los archivos que empiezan con "_" (ej. _plantilla.md) se ignoran */
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

const DEFAULT_AUTHOR = 'Equipo Mi Crédito 786';
const WORDS_PER_MINUTE = 200;

export type PostFaq = {
  question: string;
  /** Respuesta en markdown tal cual está en el archivo */
  answer: string;
};

/** Datos del frontmatter + derivados. Suficiente para listados, sitemap y metadata */
export type PostSummary = {
  slug: string;
  path: string;
  title: string;
  metaTitle: string;
  description: string;
  date: string;
  updated: string;
  author: string;
  category: string;
  tags: string[];
  keywords: string[];
  /** Portada en public/blog/<slug>/ (obligatoria) */
  image: string;
  imageAlt: string;
  faqs: PostFaq[];
  /** Puntos del recuadro "Resumen en 30 segundos" */
  summary: string[];
  /** Posición (1-3) en "Empieza por estas guías" del índice */
  startHere?: number;
  draft: boolean;
  readingTime: number;
};

export type Post = PostSummary & {
  html: string;
  headings: Heading[];
  faqsHtml: { question: string; answerHtml: string; answerText: string }[];
};

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function toIsoDate(value: unknown, field: string, file: string) {
  const date = value instanceof Date ? value : new Date(String(value));
  if (Number.isNaN(date.getTime())) {
    throw new Error(`[blog] ${file}: "${field}" no es una fecha válida (usa AAAA-MM-DD)`);
  }
  return date.toISOString();
}

function requireString(data: Record<string, unknown>, field: string, file: string) {
  const value = data[field];
  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`[blog] ${file}: falta el campo obligatorio "${field}" en el frontmatter`);
  }
  return value.trim();
}

function warnLength(value: string, field: string, min: number, max: number, file: string) {
  if (value.length < min || value.length > max) {
    console.warn(`[blog] ${file}: "${field}" tiene ${value.length} caracteres (recomendado ${min}-${max})`);
  }
}

function parseFile(file: string) {
  const slug = file.replace(/\.md$/, '');
  if (!SLUG_PATTERN.test(slug)) {
    throw new Error(
      `[blog] ${file}: el nombre del archivo es la URL; usa minúsculas, números y guiones, sin acentos ni ñ`
    );
  }

  const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
  const { data, content } = matter(raw);

  const title = requireString(data, 'title', file);
  const metaTitle = typeof data.metaTitle === 'string' ? data.metaTitle.trim() : title;
  const description = requireString(data, 'description', file);
  const category = requireString(data, 'category', file);
  const date = toIsoDate(data.date, 'date', file);
  const updated = data.updated ? toIsoDate(data.updated, 'updated', file) : date;

  warnLength(metaTitle, 'metaTitle/title', 30, 60, file);
  warnLength(description, 'description', 120, 160, file);

  const faqs: PostFaq[] = Array.isArray(data.faqs)
    ? data.faqs.map((faq: Record<string, unknown>, i: number) => {
        if (typeof faq?.question !== 'string' || typeof faq?.answer !== 'string') {
          throw new Error(`[blog] ${file}: la FAQ #${i + 1} necesita "question" y "answer"`);
        }
        return { question: faq.question.trim(), answer: faq.answer.trim() };
      })
    : [];

  // Portada obligatoria: solo imágenes reales (webp/jpg/png) que existan en public/
  const image = requireString(data, 'image', file);
  const imageAlt = requireString(data, 'imageAlt', file);
  if (!/\.(webp|jpe?g|png|avif)$/i.test(image)) {
    throw new Error(`[blog] ${file}: "image" debe ser .webp, .jpg, .png o .avif (no SVG)`);
  }
  if (!fs.existsSync(path.join(PUBLIC_DIR, image))) {
    throw new Error(`[blog] ${file}: la portada "${image}" no existe en public${image}`);
  }

  const startHere = data.startHere === undefined ? undefined : Number(data.startHere);
  if (startHere !== undefined && !(Number.isInteger(startHere) && startHere >= 1 && startHere <= 3)) {
    throw new Error(`[blog] ${file}: "startHere" debe ser 1, 2 o 3`);
  }

  const words = content.trim().split(/\s+/).filter(Boolean).length;

  const summary: PostSummary = {
    slug,
    path: `/blog/${slug}`,
    title,
    metaTitle,
    description,
    date,
    updated,
    author: typeof data.author === 'string' ? data.author : DEFAULT_AUTHOR,
    category,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    keywords: Array.isArray(data.keywords) ? data.keywords.map(String) : [],
    image,
    imageAlt,
    faqs,
    summary: Array.isArray(data.summary) ? data.summary.map((item: unknown) => String(item).trim()) : [],
    startHere,
    draft: data.draft === true,
    readingTime: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
  };

  return { summary, content };
}

const readAll = cache(() => {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const showDrafts = process.env.NODE_ENV !== 'production';

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.md') && !file.startsWith('_'))
    .map(parseFile)
    .filter(({ summary }) => showDrafts || !summary.draft)
    .sort((a, b) => b.summary.date.localeCompare(a.summary.date));
});

/** Artículos publicados, del más reciente al más antiguo (en desarrollo incluye borradores) */
export function getAllPosts(): PostSummary[] {
  return readAll().map(({ summary }) => summary);
}

/** Artículo completo con HTML, encabezados y FAQs renderizadas */
export const getPostBySlug = cache(async (slug: string): Promise<Post | null> => {
  const entry = readAll().find(({ summary }) => summary.slug === slug);
  if (!entry) return null;

  const { html, headings } = await renderMarkdown(entry.content);
  const faqsHtml = await Promise.all(
    entry.summary.faqs.map(async (faq) => ({
      question: faq.question,
      answerHtml: await renderMarkdownFragment(faq.answer),
      answerText: stripMarkdown(faq.answer),
    }))
  );

  return { ...entry.summary, html, headings, faqsHtml };
});

/** Relacionados por categoría y etiquetas en común (enlazado interno) */
export function getRelatedPosts(post: PostSummary, limit = 3): PostSummary[] {
  return getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({
      post: p,
      score:
        (p.category === post.category ? 2 : 0) + p.tags.filter((t) => post.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score || b.post.date.localeCompare(a.post.date))
    .slice(0, limit)
    .map(({ post: p }) => p);
}

/** Guías de "Empieza por aquí", en el orden de su campo startHere */
export function getStartHerePosts(): PostSummary[] {
  return getAllPosts()
    .filter((p) => p.startHere !== undefined)
    .sort((a, b) => (a.startHere ?? 0) - (b.startHere ?? 0));
}

/** Categorías en uso, de la más a la menos frecuente */
export function getCategories(): string[] {
  const counts = new Map<string, number>();
  for (const post of getAllPosts()) counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([name]) => name);
}
