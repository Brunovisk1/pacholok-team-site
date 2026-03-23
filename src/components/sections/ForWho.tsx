"use client";

import { Check, X } from "lucide-react";
import { animate, stagger } from "animejs";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import { SweepLine } from "@/components/ui/SweepLine";
import { siteConfig } from "@/content/site";

export function ForWho() {
  const { isFor, isNotFor } = siteConfig.forWho;

  const sectionRef = useScrollAnimate<HTMLElement>((el) => {
    // Header
    animate(el.querySelectorAll(".anim-header"), {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      delay: stagger(80),
      ease: "outExpo",
    });

    // Two panels — slide in from opposite sides
    animate(el.querySelectorAll(".anim-panel-left"), {
      opacity: [0, 1],
      translateX: [-32, 0],
      duration: 700,
      delay: 200,
      ease: "outExpo",
    });

    animate(el.querySelectorAll(".anim-panel-right"), {
      opacity: [0, 1],
      translateX: [32, 0],
      duration: 700,
      delay: 300,
      ease: "outExpo",
    });

    // List items within panels
    animate(el.querySelectorAll(".anim-item"), {
      opacity: [0, 1],
      translateX: [-10, 0],
      duration: 500,
      delay: stagger(50, { start: 450 }),
      ease: "outExpo",
    });

    // Pull quote
    animate(el.querySelectorAll(".anim-quote"), {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 700,
      delay: 700,
      ease: "outExpo",
    });
  });

  return (
    <section
      ref={sectionRef}
      id="para-quem"
      className="py-14 md:py-24 bg-[#080808] overflow-x-hidden"
      aria-label="Para quem é o Pacholok Team"
    >
      <SweepLine />
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="anim-header text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4 opacity-0">
            Seja honesto consigo mesmo
          </p>
          <h2 className="anim-header text-3xl md:text-4xl font-display font-bold text-white opacity-0">
            Isso é para você?
          </h2>
          <p className="anim-header mt-4 text-white/40 max-w-xl mx-auto text-sm leading-relaxed opacity-0">
            O Pacholok Team não é para todos — e isso é intencional. Cada vaga
            ocupada por alguém que não está pronto tira o lugar de quem estaria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* IS FOR */}
          <div className="anim-panel-left relative opacity-0">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />
            <div className="bg-[#0F0F0F] border border-white/5 p-8">
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10 border border-green-500/30">
                  <Check size={14} className="text-green-400" />
                </span>
                É para você que…
              </h3>
              <ul className="space-y-4" role="list">
                {isFor.map((item, i) => (
                  <li key={i} className="anim-item flex items-start gap-3 opacity-0">
                    <Check
                      size={14}
                      className="text-green-400 mt-1 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-white/70 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* IS NOT FOR */}
          <div className="anim-panel-right relative opacity-0">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
            <div className="bg-[#0F0F0F] border border-white/5 p-8">
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 border border-red-500/30">
                  <X size={14} className="text-red-400" />
                </span>
                Não é para quem…
              </h3>
              <ul className="space-y-4" role="list">
                {isNotFor.map((item, i) => (
                  <li key={i} className="anim-item flex items-start gap-3 opacity-0">
                    <X
                      size={14}
                      className="text-red-400/70 mt-1 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-white/40 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Pull quote */}
        <div className="anim-quote mt-10 md:mt-16 text-center max-w-2xl mx-auto opacity-0">
          <p className="text-white/20 text-xs tracking-widest uppercase mb-4">
            O manifesto
          </p>
          <blockquote className="text-white/70 text-xl md:text-2xl leading-relaxed italic font-display">
            &ldquo;Não vendemos a ilusão do caminho mais rápido. O espelho não
            aceita desculpas. Onde colocamos o nosso nome, colocamos a nossa
            honra.&rdquo;
          </blockquote>
          <cite className="block mt-4 text-gold-500/60 text-xs tracking-widest uppercase not-italic">
            Fabrício Pacholok
          </cite>
        </div>
      </div>
    </section>
  );
}
