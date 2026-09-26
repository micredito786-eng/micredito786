import { Plus } from 'lucide-react';
import type { Post } from '@/lib/blog';

interface PostFaqsProps {
  faqs: Post['faqsHtml'];
}

/**
 * FAQs con <details>/<summary> nativo: las respuestas están en el HTML
 * desde el servidor (Google las lee) y no necesitan JavaScript.
 */
export function PostFaqs({ faqs }: PostFaqsProps) {
  if (faqs.length === 0) return null;

  return (
    <section aria-labelledby="preguntas-frecuentes" className="mt-16">
      <h2
        id="preguntas-frecuentes"
        className="mb-6 scroll-mt-28 font-display text-[1.75rem] font-semibold leading-tight text-ink sm:text-4xl"
      >
        Preguntas frecuentes
      </h2>
      <div className="flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <details
            key={faq.question}
            open={index === 0}
            className="group rounded-2xl border border-line bg-white transition-colors open:border-primary/25"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-bold leading-snug text-ink sm:px-6 sm:py-5 sm:text-lg [&::-webkit-details-marker]:hidden">
              <h3>{faq.question}</h3>
              <Plus
                className="h-6 w-6 shrink-0 text-primary transition-transform group-open:rotate-45"
                aria-hidden="true"
              />
            </summary>
            <div
              className="prose max-w-none px-5 pb-5 text-[15px] leading-relaxed text-[#1f2a3a] prose-a:text-primary prose-strong:text-ink sm:px-6 sm:pb-6 sm:text-base"
              dangerouslySetInnerHTML={{ __html: faq.answerHtml }}
            />
          </details>
        ))}
      </div>
    </section>
  );
}
