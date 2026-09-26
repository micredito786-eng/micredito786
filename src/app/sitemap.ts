import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { absoluteUrl, sitemapPages } from '@/lib/seo';

// Páginas fijas: sitemapPages (src/lib/seo/config.ts). Artículos: content/blog/*.md
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const lastPostUpdate = posts[0]?.updated;

  const pages = sitemapPages.map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified: path === '/blog' && lastPostUpdate ? new Date(lastPostUpdate) : new Date(),
    changeFrequency,
    priority,
  }));

  const articles = posts.map((post) => ({
    url: absoluteUrl(post.path),
    lastModified: new Date(post.updated),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    images: [absoluteUrl(post.image)],
  }));

  return [...pages, ...articles];
}
