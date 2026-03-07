"use client";

import { MessageCircle } from "lucide-react";
import { animate, stagger } from "animejs";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import { LeadGate } from "./LeadGate";

export function FinalCTA() {
  const sectionRef = useScrollAnimate<HTMLElement>((el) => {
    // Label — slide from left
    animate(el.querySelectorAll(".anim-label"), {
      opacity: [0, 1],
      translateX: [-20, 0],
      duration: 600,
      ease: "outExpo",
    });

    // Headline lines — stagger up
    animate(el.querySelectorAll(".anim-h2-line"), {
      opacity: [0, 1],
      translateY: [36, 0],
      duration: 750,
      delay: stagger(110, { start: 150 }),
      ease: "outExpo",
    });

    // Body paragraphs
    animate(el.querySelectorAll(".anim-body"), {
      opacity: [0, 1],
      translateY: [16, 0],
      duration: 600,
      delay: stagger(80, { start: 450 }),
      ease: "outExpo",
    });

    // Key messages list items
    animate(el.querySelectorAll(".anim-msg"), {
      opacity: [0, 1],
      translateX: [-12, 0],
      duration: 550,
      delay: stagger(70, { start: 650 }),
      ease: "outExpo",
    });

    // Quote + WA link
    animate(el.querySelectorAll(".anim-footer"), {
      opacity: [0, 1],
      translateY: [12, 0],
      duration: 600,
      delay: stagger(80, { start: 900 }),
      ease: "outExpo",
    });
  });

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#0A0A0A] relative overflow-hidden"
      aria-label="CTA final — Falar com a equipe"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,_rgba(201,168,76,0.09)_0%,_transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Copy */}
          <div className="flex flex-col justify-center">
            {/* Label */}
            <div className="anim-label flex items-center gap-3 mb-8 opacity-0">
              <div className="h-px w-12 bg-gold-500/60" />
              <span className="text-gold-500 text-xs font-semibold tracking-[0.3em] uppercase">
                A brincadeira acabou
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[0.95] tracking-tighter overflow-hidden">
              <span className="anim-h2-line block opacity-0">A ordem será</span>
              <span className="anim-h2-line block opacity-0">
                <span className="text-gold-gradient">restabelecida.</span>
              </span>
            </h2>

            <p className="anim-body mt-6 text-white/50 text-lg leading-relaxed opacity-0">
              Você carrega o mundo nas costas. Família, trabalho, rotina.
              <br />
              O shape que você quer não será construído com desculpas.
            </p>

            <p className="anim-body mt-4 text-white/30 text-base leading-relaxed opacity-0">
              Ele será forjado com método, disciplina e verdade. Isso é o
              Pacholok Team.
            </p>

            {/* Key messages */}
            <div className="mt-10 space-y-3">
              {[
                "Protocolo que leva o tempo que precisa para ser feito direito",
                "Equipe treinada pelo método, não por estagiários",
                "Você é alguém aqui — não mais um número",
              ].map((msg) => (
                <div key={msg} className="anim-msg flex items-start gap-3 opacity-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                  <p className="text-white/50 text-sm">{msg}</p>
                </div>
              ))}
            </div>

            {/* Divider quote */}
            <blockquote className="anim-footer mt-10 pl-4 border-l-2 border-gold-500/30 opacity-0">
              <p className="text-white/25 text-sm italic leading-relaxed">
                &ldquo;Não há negociação. Não há atalho. Apenas o próximo
                passo. E depois o próximo. A inércia teme a constância.&rdquo;
              </p>
            </blockquote>

            {/* Direct WhatsApp link */}
            <a
              href={`https://wa.me/5500000000000`}
              target="_blank"
              rel="noopener noreferrer"
              className="anim-footer mt-8 inline-flex items-center gap-2 text-white/30 text-xs hover:text-gold-500 transition-colors opacity-0"
            >
              <MessageCircle size={14} />
              Ou fale diretamente pelo WhatsApp
            </a>
          </div>

          {/* Right — Form */}
          <div>
            <LeadGate />
          </div>
        </div>
      </div>
    </section>
  );
}
