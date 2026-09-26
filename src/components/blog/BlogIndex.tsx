'use client';

import { useMemo, useState, type ReactNode } from 'react';
import { Search } from 'lucide-react';
import type { PostSummary } from '@/lib/blog/posts';
import { cn } from '@/lib/utils';
import { PostCard } from './PostCard';

const ALL = 'Todos';
const PAGE_SIZE = 9;

/** Quita acentos y mayúsculas para que "credito" encuentre "crédito" */
function normalize(text: string) {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

interface BlogIndexProps {
  posts: PostSummary[];
  categories: string[];
  /** Titular y entradilla del blog (columna izquierda del encabezado) */
  intro: ReactNode;
}

/**
 * Encabezado con buscador, filtros por categoría y listado.
 * Todas las tarjetas llegan renderizadas desde el servidor; filtrar solo cambia cuáles se muestran.
 */
export function BlogIndex({ posts, categories, intro }: BlogIndexProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(ALL);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const isFiltering = query.trim() !== '' || category !== ALL;

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return posts.filter(
      (post) =>
        (category === ALL || post.category === category) &&
        (!q || normalize(`${post.title} ${post.description} ${post.tags.join(' ')}`).includes(q))
    );
  }, [posts, query, category]);

  const [featured, ...rest] = posts;
  const list = isFiltering ? filtered : rest;
  const total = isFiltering ? filtered.length : posts.length;

  function reset() {
    setQuery('');
    setCategory(ALL);
    setVisible(PAGE_SIZE);
  }

  return (
    <>
      <header className="grid gap-8 pb-8 lg:grid-cols-12 lg:items-end lg:gap-6 lg:pb-10">
        <div className="lg:col-span-8">{intro}</div>

        <form role="search" className="lg:col-span-4" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="buscar-blog" className="mb-2.5 block text-sm font-bold text-ink">
            Buscar en el blog
          </label>
          <div className="flex h-14 items-center gap-3 rounded-full border border-[#D5D1C4] bg-white px-5 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
            <Search className="h-5 w-5 shrink-0 text-ink-muted" aria-hidden="true" />
            <input
              id="buscar-blog"
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisible(PAGE_SIZE);
              }}
              placeholder="Ej. cómo quitar un collection"
              className="min-w-0 flex-1 bg-transparent text-base text-ink outline-none placeholder:text-ink-muted/80"
            />
          </div>
        </form>
      </header>

      {categories.length > 1 && (
        <div
          role="group"
          aria-label="Filtrar por categoría"
          className="-mx-4 mb-10 flex gap-2.5 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {[ALL, ...categories].map((name) => {
            const active = category === name;
            return (
              <button
                key={name}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setCategory(name);
                  setVisible(PAGE_SIZE);
                }}
                className={cn(
                  'h-11 shrink-0 rounded-full border-[1.5px] px-5 text-sm transition-colors',
                  active
                    ? 'border-primary bg-primary font-bold text-white'
                    : 'border-[#D5D1C4] bg-white font-semibold text-ink hover:border-primary hover:text-primary'
                )}
              >
                {name}
              </button>
            );
          })}
        </div>
      )}

      {!isFiltering && featured && (
        <section aria-label="Artículo destacado" className="mb-16 sm:mb-20">
          <PostCard post={featured} featured />
        </section>
      )}

      <section aria-labelledby="listado-blog">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <h2 id="listado-blog" className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            {!isFiltering ? 'Lo más reciente' : category === ALL ? 'Resultados' : category}
          </h2>
          <p className="shrink-0 text-sm text-ink-muted sm:text-[15px]" aria-live="polite">
            {total} {total === 1 ? 'artículo' : 'artículos'}
          </p>
        </div>

        {list.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-[#D5D1C4] bg-white p-10 text-center">
            <p className="text-lg font-semibold text-ink">
              {isFiltering ? 'No encontramos artículos con esa búsqueda.' : 'Pronto publicaremos más guías.'}
            </p>
            {isFiltering && (
              <button type="button" onClick={reset} className="mt-4 font-bold text-primary hover:text-primary-dark">
                Ver todos los artículos
              </button>
            )}
          </div>
        ) : (
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {list.map((post, index) => (
              <div key={post.slug} className={cn('flex', index >= visible && 'hidden')}>
                <PostCard post={post} />
              </div>
            ))}
          </div>
        )}

        {list.length > visible && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="h-13 rounded-full border-[1.5px] border-primary px-7 font-bold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Ver más artículos
            </button>
          </div>
        )}
      </section>
    </>
  );
}
