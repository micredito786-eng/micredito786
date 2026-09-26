import type { MetadataRoute } from 'next';
import { absoluteUrl, disallowedPaths, siteConfig } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: disallowedPaths,
    },
    sitemap: absoluteUrl('/sitemap.xml'),
    host: siteConfig.url,
  };
}
