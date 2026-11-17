import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { Container } from '@/components/ui';
import { getAllPosts } from '@/lib/blog';
import { formatShortDate } from '@/lib/blog/format';

/**
 * Franja compacta con los últimos artículos del blog en la home.
 * Su fin es SEO: la home es la página con más autoridad y enlazar desde aquí
 * ayuda a que Google descubra e indexe rápido cada artículo nuevo.
 */
export function LatestGuidesSection({ limit = 3 }: { limit?: number }) {
  const posts = getAllPosts().slice(0, limit);
  if (posts.length === 0) return null;

  return (
    <section aria-labelledby="blog-home-titulo" className="bg-paper py-10 sm:py-12">
      <Container>
        <div className="mb-5 flex items-baseline gap-6">
          <h2 id="blog-home-titulo" className="text-xl font-bold text-ink sm:text-2xl">
            De nuestro blog
          </h2>
          <Link href="/blog" className="text-sm font-semibold text-primary underline underline-offset-2 hover:text-primary-dark">
            ver todos
          </Link>
        </div>
        <ul className="grid gap-3 lg:grid-cols-3 lg:gap-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={post.path}
                className="group flex h-full items-stretch gap-3 rounded-2xl border border-line bg-white p-1.5 transition-shadow hover:shadow-md"
              >
                <div className="relative w-24 shrink-0 overflow-hidden rounded-xl sm:w-28">
                  <Image src={post.image} alt={post.imageAlt} fill sizes="112px" className="object-cover" />
                </div>
                <div className="flex min-h-24 flex-1 flex-col justify-between gap-2 py-2 pr-3">
                  <h3 className="line-clamp-3 text-[15px] font-bold leading-snug text-ink group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="flex flex-wrap items-center gap-3 text-xs text-ink-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                      <time dateTime={post.date}>{formatShortDate(post.date)}</time>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                      {post.readingTime} min lectura
                    </span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
