"use client";

import { useRef } from "react";
import { ChevronDown, MessageCircle, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadGate } from "./LeadGate";
import { siteConfig } from "@/content/site";

export function Hero() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => {
      const firstInput = formRef.current?.querySelector("input");
      firstInput?.focus();
    }, 600);
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center bg-[#0A0A0A] overflow-hidden"
      aria-label="Hero — Pacholok Team"
    >
      {/* Background texture / overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,168,76,0.07)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(201,168,76,0.04)_0%,_transparent_60%)]" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Thin horizontal gold line */}
      <div className="absolute left-0 right-0 top-[30%] h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 max-w-7xl pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT — Copy */}
          <div className="flex flex-col justify-center">
            {/* Pre-headline label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-gold-500/60" />
              <span className="text-gold-500 text-xs font-semibold tracking-[0.3em] uppercase">
                Método Pacholok
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.05] tracking-tight">
              O melhor shape
              <br />
              da sua vida.
              <br />
              <span className="text-transparent bg-clip-text bg-gold-gradient">
                Forjado.
              </span>{" "}
              <span className="text-white/90">Construído.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg text-white/50 leading-relaxed max-w-lg">
              Assessoria personalizada de treino, dieta e suplementação.
              Protocolos feitos para você — sem atalhos, sem template, sem
              estagiário respondendo no seu lugar.
            </p>

            {/* Divider quote */}
            <blockquote className="mt-8 pl-4 border-l-2 border-gold-500/40">
              <p className="text-white/30 text-sm italic leading-relaxed">
                &ldquo;Não vendemos o nome Fabrício Pacholok.
                <br />
                Entregamos o peso que esse nome carrega.&rdquo;
              </p>
            </blockquote>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <Button
                variant="whatsapp"
                size="lg"
                onClick={scrollToForm}
                className="group"
              >
                <MessageCircle
                  size={18}
                  className="group-hover:animate-bounce"
                />
                Falar no WhatsApp
              </Button>

              {siteConfig.flags.enableDirectPurchaseCTA && (
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
              )}
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap gap-6">
              {[
                "Protocolo 100% personalizado",
                "Sem IA, sem copy-paste",
                "Acesso ao app exclusivo",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
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
