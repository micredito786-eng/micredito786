import type { Element, Root } from 'hast';
import { toString } from 'hast-util-to-string';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

export type Heading = {
  id: string;
  text: string;
  level: 2 | 3;
};

/**
 * Ajustes SEO sobre el HTML del artículo:
 * - El H1 es el título del post: cualquier "#" del markdown baja a H2.
 * - Imágenes con carga diferida.
 * - Recolecta H2/H3 para la tabla de contenido.
 */
function rehypeBlogPost(headings: Heading[]) {
  return () => (tree: Root) => {
    visit(tree, 'element', (node: Element) => {
      if (node.tagName === 'h1') node.tagName = 'h2';

      // Anclas sin acentos: "#que-es-el-reporte" en vez de "#qué-es-el-reporte"
      if (/^h[2-6]$/.test(node.tagName) && node.properties.id) {
        node.properties.id = String(node.properties.id)
          .normalize('NFD')
          .replace(/[̀-ͯ]/g, '');
      }

      if (node.tagName === 'img') {
        node.properties.loading = 'lazy';
        node.properties.decoding = 'async';
      }

      if ((node.tagName === 'h2' || node.tagName === 'h3') && node.properties.id) {
        headings.push({
          id: String(node.properties.id),
          text: toString(node),
          level: node.tagName === 'h2' ? 2 : 3,
        });
      }
    });
  };
}

function createProcessor(headings: Heading[] = []) {
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeBlogPost(headings))
    .use(rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] })
    .use(rehypeStringify);
}

/** Convierte el cuerpo de un artículo a HTML y devuelve sus encabezados */
export async function renderMarkdown(markdown: string) {
  const headings: Heading[] = [];
  const html = String(await createProcessor(headings).process(markdown));
  return { html, headings };
}

/** Para textos cortos (respuestas de FAQs) */
export async function renderMarkdownFragment(markdown: string) {
  return String(await createProcessor().process(markdown));
}

/** Texto plano, para el schema FAQPage */
export function stripMarkdown(markdown: string) {
  return markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`#>~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
