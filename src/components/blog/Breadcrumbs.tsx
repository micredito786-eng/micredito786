import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  /** Sin "Inicio": se agrega solo. El último elemento es la página actual */
  items: { name: string; path: string }[];
}

/** Migas de pan visibles; el schema BreadcrumbList va aparte en el page.tsx */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const all = [{ name: 'Inicio', path: '/' }, ...items];

  return (
    <nav aria-label="Migas de pan" className="mb-6 text-sm sm:mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-ink-muted">
        {all.map((item, index) => {
          const isLast = index === all.length - 1;
          return (
            <li key={item.path} className="flex min-w-0 items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="line-clamp-1 font-semibold text-ink">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="hover:text-primary">
                    {item.name}
                  </Link>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
