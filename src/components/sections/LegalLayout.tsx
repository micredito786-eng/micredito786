import type { ReactNode } from 'react';
import { Container } from '@/components/ui';
import { Breadcrumbs } from '@/components/blog';

/** Estructura común de las páginas legales (Términos, Privacidad) */
export function LegalLayout({
  title,
  breadcrumb,
  path,
  updated,
  children,
}: {
  title: string;
  breadcrumb: string;
  path: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <Container>
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs items={[{ name: breadcrumb, path }]} />

        <header className="mb-10 border-b border-gray-200 pb-8">
          <h1 className="mb-3 text-3xl font-extrabold text-foreground sm:text-4xl">{title}</h1>
          <p className="text-sm text-foreground-muted">Última actualización: {updated}</p>
        </header>

        <div className="space-y-10">{children}</div>
      </div>
    </Container>
  );
}

export function Clause({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={`clausula-${n}`} className="scroll-mt-28">
      <h2 id={`clausula-${n}`} className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
        {n}. {title}
      </h2>
      <div className="space-y-3 leading-relaxed text-foreground-muted">{children}</div>
    </section>
  );
}

export function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-2 pl-5">{children}</ul>;
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="text-foreground">{children}</strong>;
}

export const legalLinkClass = 'font-semibold text-primary underline underline-offset-2 hover:text-secondary';

/** Bloque de contacto compartido por las páginas legales */
export function LegalContact() {
  return (
    <address className="not-italic">
      <p className="font-semibold text-foreground">Mi Crédito 786™ / KONFIA Corp</p>
      <p>420 SW 7th St, Suite 907, Miami, FL 33130</p>
      <p>
        <a href="mailto:micredito786@konfia.io" className={legalLinkClass}>
          micredito786@konfia.io
        </a>{' '}
        ·{' '}
        <a href="mailto:info@konfia.io" className={legalLinkClass}>
          info@konfia.io
        </a>
      </p>
      <p>
        <a href="tel:+17867551243" className={legalLinkClass}>
          +1 786-755-1243
        </a>
      </p>
    </address>
  );
}
