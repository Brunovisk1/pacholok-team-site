"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Dumbbell, Salad, Pill, Smartphone, Users, TrendingUp, Trophy, Tag } from "lucide-react";
import { animate, stagger } from "animejs";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import { siteConfig } from "@/content/site";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Dumbbell, Salad, Pill, Smartphone, Users, TrendingUp, Trophy, Tag,
};

const ITEM_WIDTH = 260; // px per slide
const GAP = 16;         // gap-4

function AppCarousel({ screenshots }: { screenshots: readonly string[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const total = screenshots.length;

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, total - 1));
    setCurrent(clamped);
    track.scrollTo({
      left: clamped * (ITEM_WIDTH + GAP),
      behavior: "smooth",
    });
  }, [total]);

  const prev = () => scrollTo(current - 1);
  const next = () => scrollTo(current + 1);

  return (
    <div className="relative">
      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Left padding sentinel */}
        <div className="shrink-0 w-1" aria-hidden="true" />
        {screenshots.map((src, i) => (
          <div
            key={i}
            className="shrink-0"
            style={{ width: ITEM_WIDTH }}
          >
            <div
              className="relative overflow-hidden border border-white/10 bg-[#111] transition-all duration-300"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src={src}
                alt={`App Pacholok Team — tela ${i + 1}`}
                fill
                className="object-cover object-center"
                sizes="260px"
                loading={i < 3 ? "eager" : "lazy"}
              />
            </div>
          </div>
        ))}
        {/* Right padding sentinel */}
        <div className="shrink-0 w-1" aria-hidden="true" />
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0A0A0A] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0A0A0A] to-transparent" />

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6 px-1">
        {/* Dots */}
        <div className="flex gap-1.5" role="tablist" aria-label="Slides">
          {screenshots.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={`h-px transition-all duration-300 ${
                i === current
                  ? "bg-gold-500 w-6"
                  : "bg-white/20 w-3 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-8 h-8 flex items-center justify-center border border-white/10 text-white/40 hover:border-gold-500/50 hover:text-gold-500 disabled:opacity-20 transition-all"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            disabled={current === total - 1}
            className="w-8 h-8 flex items-center justify-center border border-white/10 text-white/40 hover:border-gold-500/50 hover:text-gold-500 disabled:opacity-20 transition-all"
            aria-label="Próximo slide"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Counter */}
      <p className="mt-3 text-center text-white/20 text-xs">
        {current + 1} / {total}
      </p>
    </div>
  );
}

export function WhatYouGet() {
  const { deliverables, appScreenshots, flags } = siteConfig;

  const sectionRef = useScrollAnimate<HTMLElement>((el) => {
    animate(el.querySelectorAll(".anim-header"), {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      delay: stagger(80),
      ease: "outExpo",
    });

    animate(el.querySelectorAll(".anim-card"), {
      opacity: [0, 1],
      translateY: [28, 0],
      duration: 650,
      delay: stagger(70, { start: 250 }),
      ease: "outExpo",
    });
  });

  return (
    <section
      ref={sectionRef}
      id="entregas"
      className="py-14 md:py-24 bg-[#0A0A0A]"
      aria-label="O que você recebe no Pacholok Team"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-10 md:mb-16">
          <p className="anim-header text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4 opacity-0">
            Sua entrega, do dia 1
          </p>
          <h2 className="anim-header text-3xl md:text-4xl font-display font-bold text-white opacity-0">
            O que você recebe
          </h2>
          <p className="anim-header mt-4 text-white/40 max-w-xl text-sm leading-relaxed opacity-0">
            Nada de PDF improvisado ou planilha do Google. Sua experiência
            começa no app e termina no shape que você foi buscar.
          </p>
        </div>

        {/* Deliverables grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 md:mb-20">
          {deliverables.map((item, index) => {
            const Icon = iconMap[item.icon] ?? Dumbbell;
            return (
              <div
                key={index}
                className="anim-card group bg-[#0F0F0F] border border-white/5 [border-top:2px_solid_rgba(201,168,76,0.08)] p-6 hover:[border-top:2px_solid_rgba(201,168,76,0.35)] hover:border-gold-500/20 hover:bg-[#111] transition-all opacity-0"
              >
                <div className="mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-gold-500/10 border border-gold-500/20 mb-4 group-hover:bg-gold-500/20 group-hover:border-gold-500/40 transition-colors">
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
          <div>
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

            <AppCarousel screenshots={appScreenshots} />

            <p className="mt-4 text-center text-white/20 text-xs">
              Acesso liberado após assinatura. Exclusivo para alunos ativos.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
