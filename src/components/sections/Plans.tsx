"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, X, MessageCircle } from "lucide-react";
import { animate, stagger } from "animejs";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import {
  buildWhatsAppMessage,
  buildWhatsAppURL,
} from "@/lib/whatsapp";
import { captureUTM } from "@/lib/utm";
import { cn } from "@/lib/cn";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import { VacancyBar } from "@/components/ui/VacancyBar";
import { PlanQuiz } from "@/components/ui/PlanQuiz";

export function Plans() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [quizOpen, setQuizOpen] = useState(false);

  const sectionRef = useScrollAnimate<HTMLElement>((el) => {
    // Header
    animate(el.querySelectorAll(".anim-header"), {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      delay: stagger(80),
      ease: "outExpo",
    });

    // Plan cards — stagger scale + slide up
    animate(el.querySelectorAll(".anim-card"), {
      opacity: [0, 1],
      translateY: [32, 0],
      scale: [0.97, 1],
      duration: 700,
      delay: stagger(90, { start: 250 }),
      ease: "outExpo",
    });
  });

  const handlePlanCTA = (plan: (typeof siteConfig.plans)[number]) => {
    const utm = captureUTM();
    const message = buildWhatsAppMessage({
      name: "Visitante",
      whatsapp: "",
      email: "",
      outsideBrazil: "nao",
      plan: plan.name,
      page: "Pacholok Team — Planos",
      utm,
    });
    const customMsg = plan.whatsappMessage + "\n\n📍 Pacholok Team — Landing Page";
    const url = buildWhatsAppURL(
      siteConfig.contact.whatsappNumber,
      customMsg
    );
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      ref={sectionRef}
      id="planos"
      className="py-14 md:py-24 bg-[#080808]"
      aria-label="Planos Pacholok Team"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="anim-header text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4 opacity-0">
            Escolha seu nível de comprometimento
          </p>
          <h2 className="anim-header text-3xl md:text-4xl font-display font-bold text-white opacity-0">
            Planos
          </h2>
          <p className="anim-header mt-4 text-white/40 max-w-xl mx-auto text-sm leading-relaxed opacity-0">
            Quanto maior o compromisso, menor o custo mensal e maior o resultado
            acumulado. Todos os planos entregam protocolos 100% personalizados.
          </p>

          <button
            onClick={() => setQuizOpen(true)}
            className="anim-header mt-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/5 px-5 py-2 text-xs font-semibold text-amber-400 transition hover:bg-amber-400/10 opacity-0"
          >
            Não sabe qual escolher? Descubra em 3 perguntas →
          </button>
        </div>

        {/* Barra de vagas */}
        <VacancyBar />

        {/* Plans grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3">
          {siteConfig.plans.map((plan) => (
            <article
              key={plan.id}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={cn(
                "anim-card relative flex flex-col border transition-all duration-300 group opacity-0",
                plan.highlight
                  ? "border-gold-500/60 bg-[#0F0F0F] gold-glow"
                  : hoveredPlan === plan.id
                  ? "border-white/20 bg-[#0F0F0F]"
                  : "border-white/5 bg-[#0D0D0D]"
              )}
              aria-label={`Plano ${plan.name}`}
            >
              {/* Gold top accent for highlighted plan */}
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold-gradient" />
              )}

              {/* Badge */}
              {plan.badge && (
                <div
                  className={cn(
                    "absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] font-semibold tracking-widest uppercase",
                    plan.highlight
                      ? "bg-gold-gradient text-[#0A0A0A]"
                      : "bg-[#1A1A1A] border border-white/10 text-white/50"
                  )}
                >
                  {plan.badge}
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                {/* Icon */}
                <div className="flex items-center justify-between mb-5">
                  <Image
                    src={plan.icon}
                    alt={`Ícone do plano ${plan.name}`}
                    width={48}
                    height={48}
                    className="h-12 w-auto object-contain"
                  />
                  <span className="text-white/20 text-xs tracking-widest uppercase">
                    {plan.subtitle}
                  </span>
                </div>

                {/* Plan name */}
                <h3
                  className={cn(
                    "text-xl font-display font-bold mb-1",
                    plan.highlight ? "text-gold-500" : "text-white"
                  )}
                >
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-white/30 text-xs leading-relaxed mb-5">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-white/30 text-sm">por</span>
                    <span
                      className={cn(
                        "font-bold tracking-tight",
                        plan.highlight ? "text-4xl text-gold-500" : "text-3xl text-white"
                      )}
                    >
                      {plan.priceLabel}
                    </span>
                    <span className="text-white/30 text-sm">{plan.period}</span>
                  </div>
                  {"totalLabel" in plan && plan.totalLabel && (
                    <p className="text-white/20 text-xs mt-1">
                      {plan.totalLabel}
                    </p>
                  )}
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-white/5" />

                {/* Features */}
                <ul className="space-y-2.5 flex-1 mb-6" role="list">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      {feature.included ? (
                        <Check
                          size={13}
                          className="text-gold-500 mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                      ) : (
                        <X
                          size={13}
                          className="text-white/15 mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className={cn(
                          "text-xs leading-relaxed",
                          feature.included ? "text-white/60" : "text-white/20"
                        )}
                      >
                        {feature.text}
                        {!feature.included && (
                          <span className="sr-only"> (não incluído)</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.highlight ? "gold" : "outline"}
                  size="sm"
                  className="w-full"
                  onClick={() => handlePlanCTA(plan)}
                >
                  <MessageCircle size={14} />
                  {plan.ctaText}
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Quiz modal */}
        <PlanQuiz open={quizOpen} onClose={() => setQuizOpen(false)} />

        {/* Footnote */}
        <p className="mt-8 text-center text-white/20 text-xs">
          Todos os planos incluem acesso ao aplicativo exclusivo e protocolos
          100% personalizados. Dúvidas? Fale com a equipe antes de escolher.
        </p>
      </div>
    </section>
  );
}
