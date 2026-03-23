"use client";

import { animate, stagger } from "animejs";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import { SweepLine } from "@/components/ui/SweepLine";
import { siteConfig } from "@/content/site";

export function HowItWorks() {
  const steps = siteConfig.howItWorks;

  const sectionRef = useScrollAnimate<HTMLDivElement>((el) => {
    // Header block
    animate(el.querySelectorAll(".anim-header"), {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      delay: stagger(80),
      ease: "outExpo",
    });

    // Vertical timeline line — draw downward
    animate(el.querySelectorAll(".anim-vline"), {
      scaleY: [0, 1],
      duration: 900,
      delay: 200,
      ease: "outExpo",
    });

    // Steps — stagger slide in from left
    animate(el.querySelectorAll(".anim-step"), {
      opacity: [0, 1],
      translateX: [-24, 0],
      duration: 650,
      delay: stagger(100, { start: 300 }),
      ease: "outExpo",
    });

    // Step circles — pulse dourado ao entrar
    animate(el.querySelectorAll(".anim-step-circle"), {
      scale: [1, 1.18, 1],
      boxShadow: [
        "0 0 0px rgba(201,168,76,0)",
        "0 0 18px rgba(201,168,76,0.6)",
        "0 0 0px rgba(201,168,76,0)",
      ],
      duration: 600,
      delay: stagger(100, { start: 500 }),
      ease: "outExpo",
    });

    // Bottom note
    animate(el.querySelectorAll(".anim-note"), {
      opacity: [0, 1],
      translateY: [16, 0],
      duration: 600,
      delay: steps.length * 100 + 500,
      ease: "outExpo",
    });
  });

  return (
    <section
      ref={sectionRef}
      id="como-funciona"
      className="py-14 md:py-24 bg-[#0A0A0A]"
      aria-label="Como funciona o Pacholok Team"
    >
      <SweepLine />
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-10 md:mb-16">
          <p className="anim-header text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4 opacity-0">
            Do primeiro contato à evolução contínua
          </p>
          <h2 className="anim-header text-3xl md:text-4xl font-display font-bold text-white opacity-0">
            Como funciona
          </h2>
          <p className="anim-header mt-4 text-white/40 max-w-xl text-sm leading-relaxed opacity-0">
            Sem surpresas, sem burocracia. Um processo estruturado do início ao
            fim — para que você saiba exatamente o que esperar.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="anim-vline hidden md:block absolute left-[calc(2.5rem_-_1px)] top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/30 via-gold-500/10 to-transparent opacity-0"
            style={{ transformOrigin: "top" }}
          />

          <ol className="space-y-10" role="list">
            {steps.map((step, index) => (
              <li key={step.step} className="anim-step relative flex gap-8 group opacity-0">
                {/* Step number circle */}
                <div className="relative shrink-0 flex flex-col items-center">
                  <div
                    className={`anim-step-circle w-12 h-12 rounded-full flex items-center justify-center border text-sm font-bold tracking-wider transition-all z-10 ${
                      index === 0
                        ? "border-gold-500 bg-gold-500/15 text-gold-500"
                        : "border-white/20 bg-[#0A0A0A] text-white/40 group-hover:border-gold-500/50 group-hover:text-gold-500/60"
                    }`}
                    aria-hidden="true"
                  >
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="pb-2 min-w-0 flex-1">
                  <div className="bg-[#0F0F0F] border border-white/5 border-l-2 border-l-gold-500/20 p-6 hover:border-l-gold-500/50 transition-colors">
                    <h3 className="text-white font-semibold text-base mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                    {step.sla && (
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-gold-500/60" />
                        <span className="text-gold-500/60 text-xs tracking-wide">
                          {step.sla}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Bottom note */}
        <div className="anim-note mt-10 md:mt-16 bg-[#0F0F0F] border border-white/5 p-6 md:p-8 opacity-0">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <p className="text-white/70 text-sm leading-relaxed">
                <span className="text-gold-500 font-medium">
                  Pronto para começar?
                </span>{" "}
                O primeiro passo é uma conversa. Nossa equipe avalia seu perfil
                e explica o processo antes de qualquer compromisso.
              </p>
            </div>
            <a
              href="#contato"
              className="shrink-0 px-6 py-3 border border-gold-500/60 text-gold-500 text-xs font-semibold tracking-widest uppercase hover:bg-gold-500/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              Iniciar conversa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
