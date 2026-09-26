import { Clock } from 'lucide-react';

/** Recuadro "Resumen en 30 segundos" (campo summary del frontmatter) */
export function KeyTakeaways({ items }: { items: string[] }) {
  if (items.length === 0) return null;

  return (
    <section
      aria-labelledby="resumen-rapido"
      className="mb-10 rounded-3xl border border-line bg-white p-6 sm:px-8 sm:py-7"
    >
      <h2
        id="resumen-rapido"
        className="mb-3.5 flex items-center gap-2.5 text-[13px] font-extrabold uppercase tracking-[0.12em] text-primary sm:text-sm"
      >
        <Clock className="h-5 w-5" aria-hidden="true" />
        Resumen en 30 segundos
      </h2>
      <ul className="flex list-disc flex-col gap-2 pl-5 text-[15px] leading-relaxed text-[#1f2a3a] marker:text-accent-green sm:text-[17px]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
