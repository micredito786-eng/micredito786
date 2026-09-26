import Link from 'next/link';
import { siteConfig } from '@/lib/seo';
import { cn } from '@/lib/utils';
import { Gauge } from './Gauge';

/** Tarjeta lateral de la auditoría gratuita (fija al hacer scroll en escritorio) */
export function AuditCard({ className }: { className?: string }) {
  return (
    <aside
      aria-label="Auditoría gratuita"
      className={cn('flex flex-col gap-4 rounded-3xl bg-primary-dark p-6 text-white sm:p-7', className)}
    >
      <Gauge tip="#6FA3E0" className="w-28" />
      <p className="font-display text-2xl font-semibold leading-tight">¿Qué está frenando tu crédito?</p>
      <p className="text-[15px] leading-relaxed text-[#D3DDEB]">Revisamos tu reporte contigo, gratis y en español.</p>
      <Link
        href="/#agendar"
        className="flex h-13 items-center justify-center rounded-full bg-secondary px-5 text-sm font-extrabold tracking-wide text-ink transition-colors hover:bg-secondary-light"
      >
        AGENDA TU AUDITORÍA
      </Link>
      <a
        href={siteConfig.contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 items-center justify-center text-sm font-bold text-white hover:text-[#BFE6C2]"
      >
        Escríbenos por WhatsApp
      </a>
    </aside>
  );
}
