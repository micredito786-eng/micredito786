import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { PostSummary } from '@/lib/blog/posts';

interface StartHereProps {
  posts: PostSummary[];
}

/** "Empieza por estas guías": ruta para quien llega por primera vez (campo startHere del frontmatter) */
export function StartHere({ posts }: StartHereProps) {
  if (posts.length === 0) return null;

  return (
    <section
      aria-labelledby="empieza-aqui"
      className="mt-20 grid gap-8 rounded-[2rem] bg-primary-dark p-6 text-white sm:mt-24 sm:p-10 lg:grid-cols-12 lg:gap-6 lg:p-16"
    >
      <div className="lg:col-span-4">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[#BFE6C2] sm:text-[13px]">
          ¿Primera vez aquí?
        </p>
        <h2 id="empieza-aqui" className="mb-4 font-display text-3xl font-semibold leading-tight sm:text-[2.75rem]">
          Empieza por {posts.length === 1 ? 'esta guía' : `estas ${posts.length} guías`}
        </h2>
        <p className="text-[17px] leading-relaxed text-[#D3DDEB]">
          El camino corto para entender dónde estás y qué hacer primero.
        </p>
      </div>

      <ol className="flex flex-col gap-3 lg:col-span-8">
        {posts.map((post, index) => (
          <li key={post.slug}>
            <Link
              href={post.path}
              className="group flex items-center gap-4 rounded-2xl bg-primary p-4 transition-colors hover:bg-primary-light sm:gap-6 sm:px-7 sm:py-6"
            >
              <span className="w-7 font-display text-3xl font-semibold text-secondary sm:w-11 sm:text-[2.75rem]">
                {index + 1}
              </span>
              <span className="flex flex-1 flex-col gap-1">
                <span className="text-base font-bold leading-snug sm:text-xl">{post.title}</span>
                <span className="text-sm text-[#D3DDEB]">
                  {post.readingTime} min · {post.category}
                </span>
              </span>
              <ArrowRight
                className="hidden h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1 sm:block"
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
