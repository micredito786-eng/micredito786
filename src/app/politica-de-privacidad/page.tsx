import { Header } from '@/components/layout';
import { FooterSection, PrivacidadSection } from '@/components/sections';
import { JsonLd } from '@/components/seo';
import { breadcrumbSchema, createMetadata, webPageSchema } from '@/lib/seo';

const page = {
  title: 'Política de Privacidad y Protección de Datos',
  description:
    'Cómo Mi Crédito 786 recopila, usa y protege tu información: no vendemos tus datos, no compartimos tu número para marketing y puedes pedir acceso o borrado.',
  path: '/politica-de-privacidad',
};

export const metadata = createMetadata(page);

export default function PoliticaDePrivacidadPage() {
  return (
    <>
      <JsonLd
        schemas={[
          webPageSchema(page),
          breadcrumbSchema([{ name: 'Política de Privacidad', path: page.path }]),
        ]}
      />
      <Header variant="solid" />
      <main className="bg-white pt-28 pb-20 sm:pt-32 sm:pb-24">
        <PrivacidadSection path={page.path} />
      </main>
      <FooterSection />
    </>
  );
}
