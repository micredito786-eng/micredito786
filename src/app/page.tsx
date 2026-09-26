import { Header } from '@/components/layout';
import {
  HeroSection,
  PainSection,
  TruthSection,
  OfferSection,
  TestimonialsSection,
  ForWhoSection,
  FAQSection,
  CalendlySection,
  FooterSection,
} from '@/components/sections';
import { JsonLd } from '@/components/seo';
import { createMetadata, siteConfig, webPageSchema } from '@/lib/seo';

const page = {
  title: siteConfig.defaultTitle,
  description: siteConfig.description,
  path: '/',
};

export const metadata = createMetadata({
  ...page,
  absoluteTitle: true,
  socialTitle: 'Mi Crédito 786™ | Reparación de Crédito para Latinos',
  socialDescription:
    'La llave que abre las puertas que te han cerrado en USA. Auditoría gratuita. De latinos, para latinos.',
});

export default function Home() {
  return (
    <>
      <JsonLd schemas={[webPageSchema(page)]} />
      <Header />
      <main>
        <HeroSection />
        <section id="dolor">
          <PainSection />
        </section>
        <section id="verdad">
          <TruthSection />
        </section>
        <section id="oferta">
          <OfferSection />
        </section>
        <section id="testimonios">
          <TestimonialsSection />
        </section>
        <section id="para-quien">
          <ForWhoSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <CalendlySection />
      </main>
      <FooterSection />
    </>
  );
}
