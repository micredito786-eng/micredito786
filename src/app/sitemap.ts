import type { MetadataRoute } from 'next';
import { absoluteUrl, sitemapPages } from '@/lib/seo';

// Las páginas se registran en sitemapPages (src/lib/seo/config.ts)
export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapPages.map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
