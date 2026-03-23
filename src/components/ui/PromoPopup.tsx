"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface PromoPopupProps {
  /** Delay em ms antes de exibir o popup (padrão: 4000) */
  delay?: number;
  /** URL da imagem do banner */
  imageUrl?: string;
  /** Texto principal da oferta */
  headline?: string;
  /** Subtítulo / descrição */
  description?: string;
  /** Texto do botão CTA */
  ctaLabel?: string;
  /** URL do botão CTA */
  ctaUrl?: string;
}

export function PromoPopup({
  delay = 4000,
  imageUrl = "/assets/plans/olimpo.png",
  headline = "Oferta Especial por Tempo Limitado",
  description = "Garanta seu plano Olimpo com condições exclusivas. Vagas limitadas!",
  ctaLabel = "Quero Aproveitar",
  ctaUrl = "#planos",
}: PromoPopupProps) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (visible) {
      // Pequeno delay para disparar a transição CSS
      const t = setTimeout(() => setMounted(true), 10);
      return () => clearTimeout(t);
    } else {
      setMounted(false);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    /* Overlay */
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
      onClick={() => setVisible(false)}
    >
      {/* Card */}
      <div
        className={`relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#111] shadow-2xl transition-all duration-300 ${
          mounted ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão fechar */}
        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white/70 transition hover:bg-black hover:text-white"
          aria-label="Fechar"
        >
          <X size={16} />
        </button>

        {/* Imagem do banner */}
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt="Promoção"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay sobre a imagem */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111]" />
        </div>

        {/* Conteúdo */}
        <div className="px-6 pb-6 pt-2 text-center">
          {/* Badge */}
          <span className="mb-3 inline-block rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-400">
            Oferta Exclusiva
          </span>

          <h2 className="mb-2 font-playfair text-xl font-bold leading-tight text-white">
            {headline}
          </h2>

          <p className="mb-5 text-sm leading-relaxed text-white/60">
            {description}
          </p>

          <a
            href={ctaUrl}
            onClick={() => setVisible(false)}
            className="inline-flex w-full items-center justify-center rounded-xl bg-amber-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-amber-300 active:scale-95"
          >
            {ctaLabel}
          </a>

          <button
            onClick={() => setVisible(false)}
            className="mt-3 block w-full text-center text-xs text-white/30 transition hover:text-white/60"
          >
            Não tenho interesse
          </button>
        </div>
      </div>
    </div>
  );
}
