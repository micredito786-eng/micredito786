import type { MetadataRoute } from 'next';

/**
 * Configuración SEO central del sitio.
 * Cualquier dato de marca, contacto o dominio se cambia SOLO aquí.
 */
export const siteConfig = {
  url: 'https://micredito786.com',
  name: 'Mi Crédito 786',
  brand: 'Mi Crédito 786™',
  legalName: 'Konfia Corp.',
  locale: 'es_US',
  language: 'es',
  /** Se usa cuando una página no define su propio título */
  defaultTitle: 'Mi Crédito 786™ | Reparación de Crédito para Latinos en USA',
  /** Plantilla para los títulos de páginas internas: "Título | Mi Crédito 786™" */
  titleTemplate: '%s | Mi Crédito 786™',
  description:
    'Ayudamos a latinos en USA a reconstruir su crédito de forma legal y profesional. Auditoría gratuita. De 450-600 a 680+ en 90-135 días. Servicio 100% en español.',
  keywords: [
    'credit repair',
    'reparación de crédito',
    'latinos USA',
    'crédito hispanos',
    'Mi Crédito 786',
    'score de crédito',
    'FCRA',
    'reconstrucción crediticia',
    'Miami',
  ],
  ogImage: '/logo.webp',
  logo: '/logo.webp',
  contact: {
    phone: '+1-786-636-7631',
    email: 'micredito786@konfia.io',
    whatsapp: 'https://wa.me/17866367631',
  },
  address: {
    streetAddress: '420 SW 7th ST Suite 907',
    addressLocality: 'Miami',
    addressRegion: 'FL',
    postalCode: '33130',
    addressCountry: 'US',
  },
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '19:00' },
    { days: ['Saturday'], opens: '10:00', closes: '17:00' },
  ],
  areaServed: ['US', 'PR'],
  social: [
    'https://www.instagram.com/soysamtellez/',
    'https://www.facebook.com/micredito786',
    'https://www.tiktok.com/@creditoconsam',
    'https://www.youtube.com/@soysamtellez',
  ],
} as const;

type SitemapEntry = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
  priority: number;
};

/**
 * Páginas indexables. Toda página pública nueva se registra aquí
 * para que aparezca en /sitemap.xml. Las páginas noindex NO van aquí.
 * Los artículos del blog se agregan solos desde content/blog (ver app/sitemap.ts).
 */
export const sitemapPages: SitemapEntry[] = [
  { path: '/', changeFrequency: 'monthly', priority: 1 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
];

/**
 * Rutas que los buscadores no deben rastrear (robots.txt).
 * OJO: las páginas propias con noIndex NO van aquí; si se bloquean,
 * Google no puede leer su etiqueta noindex.
 */
export const disallowedPaths = ['/cdn-cgi/'];

/** Convierte una ruta relativa en URL absoluta del sitio */
export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString().replace(/\/$/, '');
}
