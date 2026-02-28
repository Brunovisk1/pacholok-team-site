"use client";

import { MessageCircle } from "lucide-react";
import { LeadGate } from "./LeadGate";

export function FinalCTA() {
  return (
    <section
      className="py-24 bg-[#0A0A0A] relative overflow-hidden"
      aria-label="CTA final — Falar com a equipe"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Copy */}
          <div className="flex flex-col justify-center">
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-gold-500/60" />
              <span className="text-gold-500 text-xs font-semibold tracking-[0.3em] uppercase">
                A brincadeira acabou
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
              A ordem será
              <br />
              <span className="text-transparent bg-clip-text bg-gold-gradient">
                restabelecida.
              </span>
            </h2>

            <p className="mt-6 text-white/50 text-lg leading-relaxed">
              Você carrega o mundo nas costas. Família, trabalho, rotina.
              <br />
              O shape que você quer não será construído com desculpas.
            </p>

            <p className="mt-4 text-white/30 text-base leading-relaxed">
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
                <div key={msg} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                  <p className="text-white/50 text-sm">{msg}</p>
                </div>
              ))}
            </div>

            {/* Divider quote */}
            <blockquote className="mt-10 pl-4 border-l-2 border-gold-500/30">
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
              className="mt-8 inline-flex items-center gap-2 text-white/30 text-xs hover:text-gold-500 transition-colors"
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
