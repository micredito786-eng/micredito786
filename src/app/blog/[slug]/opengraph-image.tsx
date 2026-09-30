import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { ogImageSize } from '@/lib/seo/og-image';

type ImageProps = { params: Promise<{ slug: string }> };

export const size = ogImageSize;
export const contentType = 'image/jpeg';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

// El alt de la previsualización es el de la portada de cada artículo
export async function generateImageMetadata({ params }: ImageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return [{ id: 'portada', alt: post?.imageAlt ?? 'Artículo del blog de Mi Crédito 786', size, contentType }];
}

/**
 * Previsualización para redes (WhatsApp, Facebook, LinkedIn, X): la portada real del artículo.
 * Se convierte a JPG 1200x630 porque algunas redes no leen WebP.
 */
export default async function Image({ params }: ImageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return new Response('Not found', { status: 404 });

  const cover = await fs.readFile(path.join(process.cwd(), 'public', post.image));
  const jpg = await sharp(cover)
    .resize(size.width, size.height, { fit: 'cover' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();

  return new Response(new Uint8Array(jpg), { headers: { 'Content-Type': contentType } });
}
