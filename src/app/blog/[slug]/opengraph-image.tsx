import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { ogImageSize, renderOgImage } from '@/lib/seo/og-image';

export const alt = 'Artículo del blog de Mi Crédito 786';
export const size = ogImageSize;
export const contentType = 'image/png';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return renderOgImage({ eyebrow: post?.category, title: post?.title ?? 'Blog de Mi Crédito 786' });
}
