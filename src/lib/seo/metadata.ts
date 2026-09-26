import type { Metadata } from 'next';
import { absoluteUrl, siteConfig } from './config';

type ArticleOptions = {
  /** Fechas ISO */
  publishedTime: string;
  modifiedTime: string;
  authors: string[];
  section: string;
  tags: string[];
};

type CreateMetadataOptions = {
  /** Meta título (máx. ~60 caracteres). Se le agrega "| Mi Crédito 786™" salvo que absoluteTitle sea true */
  title: string;
  /** Meta descripción (140-160 caracteres) */
  description: string;
  /** Ruta de la página, empezando con "/". Define la URL canónica */
  path: string;
  /** Usa el título tal cual, sin la plantilla de marca */
  absoluteTitle?: boolean;
  keywords?: string[];
  /** Título/descripción distintos para redes sociales (Open Graph y Twitter). Por defecto los mismos */
  socialTitle?: string;
  socialDescription?: string;
  /**
   * Imagen para redes sociales. Por defecto siteConfig.ogImage.
   * false = la ruta tiene su propio opengraph-image.tsx (imagen generada), no se declara aquí
   */
  image?: string | false;
  /** true para páginas que no deben aparecer en Google (gracias, confirmaciones, etc.) */
  noIndex?: boolean;
  /** Datos de artículo: cambia og:type a "article" y agrega fechas, autor, sección y etiquetas */
  article?: ArticleOptions;
};

/**
 * Genera la metadata de una página con canonical, Open Graph, Twitter y robots.
 * Uso: export const metadata = createMetadata({ title, description, path });
 */
export function createMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  keywords,
  socialTitle,
  socialDescription,
  image = siteConfig.ogImage,
  noIndex = false,
  article,
}: CreateMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = socialTitle ?? (absoluteTitle ? title : siteConfig.titleTemplate.replace('%s', title));
  const ogDescription = socialDescription ?? description;
  const images = image ? [{ url: image, alt: ogTitle }] : undefined;
  // Imagen propia (generada o de portada) = tarjeta grande; logo = tarjeta pequeña
  const largeImage = image !== siteConfig.ogImage;

  const baseOpenGraph = {
    title: ogTitle,
    description: ogDescription,
    url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    ...(images && { images }),
  };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: {
      canonical: url,
    },
    openGraph: article
      ? { ...baseOpenGraph, type: 'article', ...article }
      : { ...baseOpenGraph, type: 'website' },
    twitter: {
      card: largeImage ? 'summary_large_image' : 'summary',
      title: ogTitle,
      description: ogDescription,
      ...(images && { images: images.map((i) => i.url) }),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  };
}
