"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/content/site";

export function FAQ() {
  const faqs = siteConfig.faq;

  return (
    <section
      id="faq"
      className="py-24 bg-[#080808]"
      aria-label="Perguntas frequentes"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Sem mistério
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-white/40 text-sm leading-relaxed">
            Se a resposta que você precisa não está aqui, fale com a equipe.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-0">
          {faqs.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
            >
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-white/30 text-sm mb-4">
            Ainda tem dúvida? Nossa equipe responde antes de você decidir.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-3 border border-gold-500/60 text-gold-500 text-xs font-semibold tracking-widest uppercase hover:bg-gold-500/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
          >
            Falar com a equipe
          </a>
        </div>
      </div>
    </section>
  );
}
