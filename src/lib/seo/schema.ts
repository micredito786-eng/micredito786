import { absoluteUrl, siteConfig } from './config';

/**
 * Esquemas JSON-LD (schema.org). Se renderizan con el componente <JsonLd />.
 * Los @id enlazan las entidades entre sí para que Google las entienda como un grafo.
 */

const ORGANIZATION_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

/** Negocio (FinancialService es un subtipo de LocalBusiness). Va en todas las páginas vía layout */
export function organizationSchema() {
  return {
    '@type': 'FinancialService',
    '@id': ORGANIZATION_ID,
    name: siteConfig.brand,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl(siteConfig.ogImage),
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      ...siteConfig.address,
    },
    openingHoursSpecification: siteConfig.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: siteConfig.areaServed.map((code) => ({ '@type': 'Country', name: code })),
    availableLanguage: ['Spanish', 'English'],
    sameAs: [...siteConfig.social],
  };
}

/** Sitio web. Va en todas las páginas vía layout */
export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: siteConfig.language,
    publisher: { '@id': ORGANIZATION_ID },
  };
}

type WebPageSchemaOptions = {
  title: string;
  description: string;
  path: string;
};

/** Página individual. Cada page.tsx indexable renderiza el suyo */
export function webPageSchema({ title, description, path }: WebPageSchemaOptions) {
  const url = absoluteUrl(path);
  return {
    '@type': 'WebPage',
    '@id': `${url}/#webpage`,
    url,
    name: title,
    description,
    inLanguage: siteConfig.language,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORGANIZATION_ID },
  };
}

type BlogPostingSchemaOptions = {
  title: string;
  description: string;
  path: string;
  /** Fechas ISO */
  datePublished: string;
  dateModified: string;
  author: string;
  category: string;
  keywords: string[];
  /** Ruta o URL de la imagen principal (portada o imagen OG generada) */
  image: string;
  wordCount?: number;
};

/** Artículo del blog. Reemplaza a webPageSchema en /blog/[slug] */
export function blogPostingSchema(post: BlogPostingSchemaOptions) {
  const url = absoluteUrl(post.path);
  return {
    '@type': 'BlogPosting',
    '@id': `${url}/#article`,
    mainEntityOfPage: url,
    url,
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.image),
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    inLanguage: siteConfig.language,
    articleSection: post.category,
    keywords: post.keywords.join(', '),
    ...(post.wordCount && { wordCount: post.wordCount }),
    author: { '@type': 'Organization', name: post.author, url: siteConfig.url },
    publisher: { '@id': ORGANIZATION_ID },
    isPartOf: { '@id': `${absoluteUrl('/blog')}/#blog` },
  };
}

type BlogSchemaOptions = {
  title: string;
  description: string;
  path: string;
  posts: { title: string; path: string; datePublished: string }[];
};

/** Índice del blog con la lista de artículos */
export function blogSchema({ title, description, path, posts }: BlogSchemaOptions) {
  const url = absoluteUrl(path);
  return {
    '@type': 'Blog',
    '@id': `${url}/#blog`,
    url,
    name: title,
    description,
    inLanguage: siteConfig.language,
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORGANIZATION_ID },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      '@id': `${absoluteUrl(post.path)}/#article`,
      headline: post.title,
      url: absoluteUrl(post.path),
      datePublished: post.datePublished,
    })),
  };
}

/** Preguntas frecuentes. Las respuestas deben ser texto plano y coincidir con lo visible en la página */
export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

type BreadcrumbItem = { name: string; path: string };

/** Migas de pan para páginas internas (no hace falta en la home) */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Inicio', path: '/' }, ...items].map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
