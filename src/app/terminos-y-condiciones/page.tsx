import { Header } from '@/components/layout';
import { FooterSection, TerminosSection } from '@/components/sections';
import { JsonLd } from '@/components/seo';
import { breadcrumbSchema, createMetadata, webPageSchema } from '@/lib/seo';

const page = {
  title: 'Términos y Condiciones del Servicio',
  description:
    'Términos y condiciones de Mi Crédito 786: qué hacemos, cumplimiento de la CROA y la ley de Florida, disponibilidad por estado, pagos, cancelación y SMS.',
  path: '/terminos-y-condiciones',
};

export const metadata = createMetadata(page);

export default function TerminosPage() {
  return (
    <>
      <JsonLd
        schemas={[
          webPageSchema(page),
          breadcrumbSchema([{ name: 'Términos y Condiciones', path: page.path }]),
        ]}
      />
      <Header variant="solid" />
      <main className="bg-white pt-28 pb-20 sm:pt-32 sm:pb-24">
        <TerminosSection path={page.path} />
      </main>
      <FooterSection />
    </>
  );
}
