import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { absoluteUrl, sitemapPages } from '@/lib/seo';

// Páginas fijas: sitemapPages (src/lib/seo/config.ts). Artículos: content/blog/*.md
// Se regenera en cada deploy: publicar un .md nuevo en main basta para que aparezca aquí.
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  // Los posts vienen ordenados por "date"; la última actualización puede ser de otro
  const lastPostUpdate = posts.map((post) => post.updated).sort().at(-1);

  const pages = sitemapPages.map(({ path, changeFrequency, priority, lastModified }) => {
    const date = path === '/blog' ? lastPostUpdate : lastModified;
    return {
      url: absoluteUrl(path),
      // Sin fecha real no se declara: una fecha de build en cada deploy le resta confianza a Google
      ...(date && { lastModified: new Date(date) }),
      changeFrequency,
      priority,
    };
  });

  const articles = posts.map((post) => ({
    url: absoluteUrl(post.path),
    lastModified: new Date(post.updated),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    images: [absoluteUrl(post.image)],
  }));

  return [...pages, ...articles];
}
