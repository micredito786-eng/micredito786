import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { cn } from '@/lib/utils';
import { Gauge } from './Gauge';

interface PostCtaProps {
  /** "dark": franja azul al final del artículo. "light": tarjeta blanca en el índice del blog */
  variant?: 'dark' | 'light';
  className?: string;
}

/** Llamada a la acción a la auditoría gratuita */
export function PostCta({ variant = 'dark', className }: PostCtaProps) {
  const dark = variant === 'dark';

  return (
    <aside
      aria-label="Auditoría gratuita"
      className={cn(
        'flex flex-col gap-6 rounded-[2rem] p-7 sm:p-10 lg:flex-row lg:items-center lg:gap-12 lg:px-16 lg:py-14',
        dark ? 'bg-primary text-white' : 'border border-line bg-white text-ink',
        className
      )}
    >
      {!dark && <Gauge track="#E4E1D8" className="w-32 lg:w-44" />}

      <div className="flex-1">
        <p className="mb-3 font-display text-[1.75rem] font-semibold leading-tight sm:text-4xl lg:text-[2.6rem]">
          {dark ? '¿Quieres saber qué está frenando tu crédito?' : '¿Leer no basta? Revisamos tu reporte contigo.'}
        </p>
        <p className={cn('text-base leading-relaxed sm:text-lg', dark ? 'text-[#D3DDEB]' : 'text-ink-muted')}>
          {dark
            ? 'Agenda tu auditoría gratuita. Revisamos tu reporte contigo, en español y sin compromiso.'
            : 'Auditoría gratuita, en español y sin compromiso.'}
        </p>
      </div>

      <div className="flex shrink-0 flex-col gap-2 sm:items-start lg:items-stretch">
        <Link
          href="/#agendar"
          className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-secondary px-7 text-[15px] font-extrabold tracking-wide text-ink transition-colors hover:bg-secondary-light"
        >
          AGENDA TU AUDITORÍA GRATIS
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
        <a
          href={siteConfig.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex h-12 items-center justify-center text-[15px] font-bold',
            dark ? 'text-white hover:text-[#BFE6C2]' : 'text-primary hover:text-primary-dark'
          )}
        >
          o escríbenos por WhatsApp
        </a>
      </div>
    </aside>
  );
}
