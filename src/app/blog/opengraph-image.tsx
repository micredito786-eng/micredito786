import { ogImageSize, renderOgImage } from '@/lib/seo/og-image';

export const alt = 'Blog de Mi Crédito 786';
export const size = ogImageSize;
export const contentType = 'image/png';

export default function Image() {
  return renderOgImage({ eyebrow: 'Blog', title: 'Guías de crédito en español para latinos en USA' });
}
