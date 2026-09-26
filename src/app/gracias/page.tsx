import { GraciasSection } from '@/components/sections';
import { createMetadata } from '@/lib/seo';

// Página post-agendamiento: noindex y fuera del sitemap
export const metadata = createMetadata({
  title: 'Cita Agendada',
  description: 'Tu auditoría gratuita ha sido agendada correctamente. Mira este video antes de tu cita.',
  path: '/gracias',
  noIndex: true,
});

export default function GraciasPage() {
  return (
    <>
      <main>
        <GraciasSection />
      </main>
    </>
  );
}
