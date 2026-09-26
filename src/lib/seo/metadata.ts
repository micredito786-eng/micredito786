import type { Metadata } from 'next';
import { absoluteUrl, siteConfig } from './config';

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
  /** Imagen para redes sociales. Por defecto siteConfig.ogImage */
  image?: string;
  /** true para páginas que no deben aparecer en Google (gracias, confirmaciones, etc.) */
  noIndex?: boolean;
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
}: CreateMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = socialTitle ?? (absoluteTitle ? title : siteConfig.titleTemplate.replace('%s', title));
  const ogDescription = socialDescription ?? description;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [{ url: image, alt: siteConfig.name }],
    },
    twitter: {
      card: 'summary',
      title: ogTitle,
      description: ogDescription,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
