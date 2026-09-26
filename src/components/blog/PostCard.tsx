import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { formatShortDate } from '@/lib/blog/format';
import type { PostSummary } from '@/lib/blog/posts';
import { cn } from '@/lib/utils';

interface PostCardProps {
  post: PostSummary;
  /** Tarjeta destacada (ancha) para el artículo más reciente */
  featured?: boolean;
  /** Nivel del título: h2 en el índice, h3 en "relacionados" */
  headingLevel?: 'h2' | 'h3';
}

export function PostCard({ post, featured = false, headingLevel = 'h2' }: PostCardProps) {
  const Heading = headingLevel;

  return (
    <article
      className={cn(
        'group relative flex w-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-shadow duration-300 hover:shadow-[0_18px_40px_-20px_rgba(14,27,46,0.35)]',
        featured && 'lg:grid lg:grid-cols-12 lg:rounded-[1.75rem]'
      )}
    >
      <div
        className={cn(
          'relative aspect-[1200/630] overflow-hidden',
          featured && 'lg:col-span-7 lg:aspect-auto lg:min-h-[30rem]'
        )}
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes={
            featured
              ? '(min-width: 1024px) 60vw, 100vw'
              : '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
          }
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          priority={featured}
        />
      </div>

      <div
        className={cn(
          'flex flex-1 flex-col gap-3 p-6 sm:p-7',
          featured && 'lg:col-span-5 lg:justify-center lg:gap-4 lg:p-12 lg:pl-8'
        )}
      >
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-bold sm:text-[13px]">
          <span className="rounded-full bg-mint px-3 py-1.5 text-accent-green">{post.category}</span>
          {featured && <span className="text-primary">Lo más nuevo</span>}
          {post.draft && <span className="rounded-full bg-warning/20 px-3 py-1.5 text-[#8a5a00]">Borrador</span>}
        </div>

        <Heading
          className={cn(
            'text-ink transition-colors group-hover:text-primary',
            featured
              ? 'font-display text-[1.75rem] font-semibold leading-tight sm:text-4xl'
              : 'text-xl font-bold leading-snug'
          )}
        >
          {/* El enlace cubre toda la tarjeta */}
          <Link href={post.path} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </Heading>

        <p className={cn('text-[15px] leading-relaxed text-ink-muted', featured ? 'sm:text-[17px]' : 'line-clamp-3')}>
          {post.description}
        </p>

        <div className="mt-auto flex items-center gap-2 pt-2 text-[13px] text-ink-muted">
          <time dateTime={post.date}>{formatShortDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime} min de lectura</span>
        </div>

        {featured && (
          <span className="mt-2 hidden items-center gap-2 font-bold text-primary lg:flex">
            Leer la guía
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        )}
      </div>
    </article>
  );
}
