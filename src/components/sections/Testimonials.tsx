"use client";

import { Quote } from "lucide-react";
import { animate, stagger } from "animejs";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import { siteConfig } from "@/content/site";

export function Testimonials() {
  const { testimonials } = siteConfig;

  const sectionRef = useScrollAnimate<HTMLElement>((el) => {
    // Header
    animate(el.querySelectorAll(".anim-header"), {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      delay: stagger(80),
      ease: "outExpo",
    });

    // Testimonial cards — stagger up
    animate(el.querySelectorAll(".anim-card"), {
      opacity: [0, 1],
      translateY: [28, 0],
      duration: 700,
      delay: stagger(100, { start: 250 }),
      ease: "outExpo",
    });
  });

  return (
    <section
      ref={sectionRef}
      id="depoimentos"
      className="py-14 md:py-24 bg-[#0A0A0A]"
      aria-label="Depoimentos de alunos"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="anim-header text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4 opacity-0">
            Quem esteve no processo
          </p>
          <h2 className="anim-header text-3xl md:text-4xl font-display font-bold text-white opacity-0">
            Resultados reais
          </h2>
          <p className="anim-header mt-4 text-white/40 max-w-xl mx-auto text-sm leading-relaxed opacity-0">
            Shapes construídos. Não fabricados.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="anim-card bg-[#0F0F0F] border border-white/5 border-l-2 border-l-gold-500/30 p-7 flex flex-col relative hover:border-l-gold-500/50 transition-colors opacity-0"
            >
              {/* Quote mark */}
              <Quote
                size={32}
                className="text-gold-500/10 mb-5 shrink-0"
                aria-hidden="true"
              />

              <blockquote className="flex-1">
                <p className="text-white/60 text-sm leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                {/* Avatar placeholder */}
                <div
                  className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <span className="text-gold-500/80 text-sm font-bold uppercase">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">{t.name}</p>
                  <p className="text-white/30 text-xs">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center text-white/20 text-xs">
          Depoimentos serão adicionados com autorização dos alunos após o
          lançamento.
        </p>
      </div>
    </section>
  );
}
