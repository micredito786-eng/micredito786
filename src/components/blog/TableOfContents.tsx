'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Heading } from '@/lib/blog/markdown';
import { cn } from '@/lib/utils';

interface TableOfContentsProps {
  headings: Heading[];
  className?: string;
}

/** Marca como activa la última sección cuyo título ya pasó bajo el header */
function useActiveHeading(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    if (elements.length === 0) return;

    const update = () => {
      let current: string | null = null;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= 140) current = el.id;
      }
      setActive(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [ids]);

  return active;
}

/**
 * Índice del artículo a partir de los H2/H3 del markdown.
 * Escritorio: lista con la sección actual marcada. Móvil: desplegable.
 */
export function TableOfContents({ headings, className }: TableOfContentsProps) {
  const active = useActiveHeading(headings.map((h) => h.id));
  if (headings.length < 2) return null;

  const items = (
    <ol className="flex flex-col">
      {headings.map((heading) => {
        const isActive = heading.id === active;
        return (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              aria-current={isActive ? 'location' : undefined}
              className={cn(
                'block border-l-2 py-1.5 text-sm leading-snug transition-colors',
                heading.level === 3 ? 'pl-7' : 'pl-3.5',
                isActive
                  ? 'border-primary font-bold text-primary'
                  : 'border-line text-ink-muted hover:border-ink-muted hover:text-ink'
              )}
            >
              {heading.text}
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <div className={className}>
      <details className="group rounded-2xl border border-line bg-white px-5 py-4 lg:hidden">
        <summary className="flex min-h-7 cursor-pointer list-none items-center justify-between text-sm font-extrabold uppercase tracking-[0.08em] text-primary [&::-webkit-details-marker]:hidden">
          En este artículo
          <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" aria-hidden="true" />
        </summary>
        <nav aria-label="Contenido del artículo" className="mt-3">
          {items}
        </nav>
      </details>

      <nav aria-label="Contenido del artículo" className="hidden lg:block">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.14em] text-ink-muted">En este artículo</p>
        {items}
      </nav>
    </div>
  );
}
