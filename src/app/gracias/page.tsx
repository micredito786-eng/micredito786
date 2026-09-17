import type { Metadata } from 'next';
import { GraciasSection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Cita Agendada | Mi Crédito 786™',
  description: 'Tu auditoría gratuita ha sido agendada correctamente. Mira este video antes de tu cita.',
};

export default function GraciasPage() {
  return (
    <>
      <main>
        <GraciasSection />
      </main>
    </>
  );
}
