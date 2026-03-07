"use client";

import Image from "next/image";
import { animate, stagger } from "animejs";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import { siteConfig } from "@/content/site";

export function TeamMethod() {
  const { team } = siteConfig;

  const sectionRef = useScrollAnimate<HTMLElement>((el) => {
    // Header
    animate(el.querySelectorAll(".anim-header"), {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      delay: stagger(80),
      ease: "outExpo",
    });

    // Founder copy — slide from left
    animate(el.querySelectorAll(".anim-founder-copy"), {
      opacity: [0, 1],
      translateX: [-28, 0],
      duration: 700,
      delay: 250,
      ease: "outExpo",
    });

    // Founder image — slide from right
    animate(el.querySelectorAll(".anim-founder-img"), {
      opacity: [0, 1],
      translateX: [28, 0],
      duration: 700,
      delay: 350,
      ease: "outExpo",
    });

    // Method pillars — stagger
    animate(el.querySelectorAll(".anim-pillar"), {
      opacity: [0, 1],
      translateY: [16, 0],
      duration: 550,
      delay: stagger(70, { start: 500 }),
      ease: "outExpo",
    });

    // Athlete cards — stagger
    animate(el.querySelectorAll(".anim-athlete"), {
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 650,
      delay: stagger(100, { start: 400 }),
      ease: "outExpo",
    });
  });

  return (
    <section
      ref={sectionRef}
      id="equipe"
      className="py-14 md:py-24 bg-[#080808] overflow-x-hidden"
      aria-label="Equipe e método Pacholok"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="anim-header text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4 opacity-0">
            O método em campo
          </p>
          <h2 className="anim-header text-3xl md:text-4xl font-display font-bold text-white opacity-0">
            Equipe e método
          </h2>
          <p className="anim-header mt-4 text-white/40 max-w-xl mx-auto text-sm leading-relaxed opacity-0">
            Profissionais treinados pelo método Pacholok. Não vendemos um nome —
            entregamos a responsabilidade que esse nome carrega.
          </p>
        </div>

        {/* Founder */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12 md:mb-20">
          <div className="anim-founder-copy order-2 lg:order-1 opacity-0">
            <p className="text-gold-500/60 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Fundador
            </p>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
              {team.founder.name}
            </h3>
            <p className="text-gold-500 text-sm mb-6">{team.founder.role}</p>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              {team.founder.bio}
            </p>

            {/* Method pillars */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Método", desc: "Doutrina própria, não improviso" },
                { label: "Personalização", desc: "Anamnese antes de qualquer protocolo" },
                { label: "Acompanhamento", desc: "Check-ins reais, não automáticos" },
              ].map((pillar) => (
                <div
                  key={pillar.label}
                  className="anim-pillar bg-[#0F0F0F] border border-white/5 p-4 opacity-0"
                >
                  <p className="text-gold-500 text-xs font-semibold mb-1">
                    {pillar.label}
                  </p>
                  <p className="text-white/30 text-xs leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="anim-founder-img order-1 lg:order-2 flex justify-center opacity-0">
            <div className="relative">
              {/* Gold frame accent */}
              <div className="absolute -inset-3 border border-gold-500/10" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-gold-500/40" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-gold-500/40" />

              <div className="relative w-64 h-80 overflow-hidden bg-[#111]">
                <Image
                  src={team.founder.image}
                  alt={`${team.founder.name} — ${team.founder.role}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 256px, 256px"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Athletes / Team */}
        {team.athletes.length > 0 && (
          <>
            <div className="h-px bg-white/5 mb-16" />
            <div className="text-center mb-10">
              <p className="text-white/30 text-xs tracking-widest uppercase mb-2">
                Atletas do time
              </p>
              <h3 className="text-xl font-display font-semibold text-white">
                Resultados com nome e sobrenome
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
              {team.athletes.map((athlete) => (
                <div
                  key={athlete.name}
                  className="anim-athlete bg-[#0F0F0F] border border-white/5 overflow-hidden opacity-0"
                >
                  <div className="relative h-48 bg-[#111]">
                    <Image
                      src={athlete.image}
                      alt={`${athlete.name} — Atleta Pacholok Team`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 300px"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] to-transparent" />
                  </div>
                  <div className="p-5">
                    <h4 className="text-white font-semibold">{athlete.name}</h4>
                    <p className="text-gold-500/60 text-xs tracking-wide">
                      {athlete.role}
                    </p>
                    {athlete.result && (
                      <p className="mt-2 text-white/30 text-xs">
                        {athlete.result}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
