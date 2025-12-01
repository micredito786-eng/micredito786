import { Header } from '@/components/layout';
import {
  HeroSection,
  PainSection,
  TruthSection,
  OfferSection,
  TestimonialsSection,
  ForWhoSection,
  FAQSection,
  FooterSection,
} from '@/components/sections';
import { WhatsAppButton } from '@/components/ui';

export default function Home() {
  return (
    <>
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
      </main>
      <FooterSection />
      <WhatsAppButton />
    </>
  );
}
