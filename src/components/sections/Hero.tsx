"use client";

import { useRef, useEffect } from "react";
import { ChevronDown, MessageCircle, ShoppingCart } from "lucide-react";
import { animate, stagger } from "animejs";
import { Button } from "@/components/ui/button";
import { LeadGate } from "./LeadGate";
import { HeroParticles } from "./HeroParticles";
import { siteConfig } from "@/content/site";

export function Hero() {
  const formRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => {
      const firstInput = formRef.current?.querySelector("input");
      firstInput?.focus();
    }, 600);
  };

  useEffect(() => {
    const el = copyRef.current;
    if (!el) return;

    // Pre-headline label — slide from left
    animate(el.querySelectorAll(".anim-label"), {
      opacity: [0, 1],
      translateX: [-20, 0],
      duration: 600,
      ease: "outExpo",
    });

    // Headline lines — stagger up
    animate(el.querySelectorAll(".anim-h1-line"), {
      opacity: [0, 1],
      translateY: [36, 0],
      duration: 750,
      delay: stagger(110, { start: 150 }),
      ease: "outExpo",
    });

    // Subheadline + blockquote — fade up
    animate(el.querySelectorAll(".anim-sub"), {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 650,
      delay: stagger(80, { start: 500 }),
      ease: "outExpo",
    });

    // CTAs — slide up
    animate(el.querySelectorAll(".anim-cta"), {
      opacity: [0, 1],
      translateY: [16, 0],
      duration: 600,
      delay: stagger(80, { start: 750 }),
      ease: "outExpo",
    });

    // Trust signals — stagger
    animate(el.querySelectorAll(".anim-trust"), {
      opacity: [0, 1],
      translateX: [-12, 0],
      duration: 500,
      delay: stagger(60, { start: 950 }),
      ease: "outExpo",
    });
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center bg-[#0A0A0A] overflow-x-hidden"
      aria-label="Hero — Pacholok Team"
    >
      {/* Particles */}
      <HeroParticles />

      {/* Background texture / overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_10%,_rgba(201,168,76,0.13)_0%,_transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_90%,_rgba(201,168,76,0.07)_0%,_transparent_65%)]" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Thin horizontal gold line */}
      <div className="absolute left-0 right-0 top-[30%] h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 max-w-7xl pt-20 pb-10 md:pt-28 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT — Copy */}
          <div ref={copyRef} className="flex flex-col justify-center">
            {/* Pre-headline label */}
            <div className="anim-label flex items-center gap-3 mb-6 md:mb-8 opacity-0">
              <div className="h-px w-12 bg-gold-500/60" />
              <span className="text-gold-500 text-xs font-semibold tracking-[0.3em] uppercase">
                Método Pacholok
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse-gold" />
            </div>

            {/* Headline */}
            <h1 className="text-[2.35rem] sm:text-5xl lg:text-7xl font-display font-bold text-white leading-[0.93] tracking-tighter overflow-hidden">
              <span className="anim-h1-line block opacity-0">O melhor shape</span>
              <span className="anim-h1-line block opacity-0">da sua vida.</span>
              <span className="anim-h1-line block opacity-0">
                <span className="text-gold-gradient">Forjado.</span>{" "}
                <span className="text-white/85">Construído.</span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="anim-sub mt-6 text-lg text-white/50 leading-relaxed max-w-lg opacity-0">
              Assessoria personalizada de treino, dieta e suplementação.
              Protocolos feitos para você — sem atalhos, sem template, sem
              estagiário respondendo no seu lugar.
            </p>

            {/* Divider quote */}
            <blockquote className="anim-sub mt-8 pl-4 border-l-2 border-gold-500/40 opacity-0">
              <p className="text-white/30 text-sm italic leading-relaxed">
                &ldquo;Não vendemos o nome Fabrício Pacholok.
                <br />
                Entregamos o peso que esse nome carrega.&rdquo;
              </p>
            </blockquote>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <div className="anim-cta opacity-0 w-full sm:w-auto">
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={scrollToForm}
                  className="group w-full sm:w-auto"
                >
                  <MessageCircle
                    size={18}
                    className="group-hover:animate-bounce"
                  />
                  Falar no WhatsApp
                </Button>
              </div>

              {siteConfig.flags.enableDirectPurchaseCTA && (
                <div className="anim-cta opacity-0">
                  <Button variant="outline" size="lg" asChild>
                    <a
                      href={siteConfig.directPurchaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ShoppingCart size={18} />
                      Quero comprar direto
                    </a>
                  </Button>
                </div>
              )}
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap gap-6">
              {[
                "Protocolo 100% personalizado",
                "Sem IA, sem copy-paste",
                "Acesso ao app exclusivo",
              ].map((item) => (
                <div key={item} className="anim-trust flex items-center gap-2 opacity-0">
                  <div className="w-1 h-1 rounded-full bg-gold-500" />
                  <span className="text-white/30 text-xs tracking-wide">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Lead Gate form */}
          <div className="lg:sticky lg:top-28">
            <LeadGate formRef={formRef} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-white text-[10px] tracking-[0.3em] uppercase">
          Role para baixo
        </span>
        <ChevronDown size={16} className="text-white animate-bounce" />
      </div>
    </section>
  );
}
