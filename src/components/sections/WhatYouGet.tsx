"use client";

import Image from "next/image";
import {
  Dumbbell,
  Salad,
  Pill,
  Smartphone,
  Users,
  TrendingUp,
  Trophy,
  Tag,
} from "lucide-react";
import { siteConfig } from "@/content/site";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Dumbbell,
  Salad,
  Pill,
  Smartphone,
  Users,
  TrendingUp,
  Trophy,
  Tag,
};

export function WhatYouGet() {
  const { deliverables, appScreenshots, flags } = siteConfig;

  return (
    <section
      id="entregas"
      className="py-24 bg-[#0A0A0A]"
      aria-label="O que você recebe no Pacholok Team"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <p className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Sua entrega, do dia 1
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            O que você recebe
          </h2>
          <p className="mt-4 text-white/40 max-w-xl text-sm leading-relaxed">
            Nada de PDF improvisado ou planilha do Google. Sua experiência
            começa no app e termina no shape que você foi buscar.
          </p>
        </div>

        {/* Deliverables grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {deliverables.map((item, index) => {
            const Icon = iconMap[item.icon] ?? Dumbbell;
            return (
              <div
                key={index}
                className="group bg-[#0F0F0F] border border-white/5 p-6 hover:border-gold-500/20 hover:bg-[#111] transition-all"
              >
                <div className="mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-gold-500/10 border border-gold-500/20 mb-4 group-hover:bg-gold-500/15 transition-colors">
                    <Icon size={18} className="text-gold-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* App Section */}
        {flags.enableAppScreenshots && appScreenshots.length > 0 && (
          <div className="relative">
            <div className="mb-10 text-center">
              <p className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Aplicativo exclusivo
              </p>
              <h3 className="text-2xl font-display font-bold text-white">
                Tudo no seu bolso
              </h3>
              <p className="mt-3 text-white/40 text-sm max-w-md mx-auto leading-relaxed">
                Treino, dieta, sleep tracking e comunidade — um app feito
                exclusivamente para alunos do Pacholok Team.
              </p>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
              {appScreenshots.slice(0, 5).map((src, i) => (
                <div
                  key={i}
                  className="snap-start shrink-0 w-[200px] sm:w-[220px]"
                >
                  <div className="relative aspect-[9/19] border border-white/10 overflow-hidden bg-[#111]">
                    <Image
                      src={src}
                      alt={`App Pacholok Team — tela ${i + 1}`}
                      fill
                      className="object-cover object-top"
                      sizes="220px"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-center">
              <p className="text-white/20 text-xs">
                Acesso liberado após assinatura. Exclusivo para alunos ativos.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
