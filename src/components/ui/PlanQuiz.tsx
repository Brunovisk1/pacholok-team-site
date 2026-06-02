"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ArrowRight, ChevronLeft } from "lucide-react";
import { siteConfig } from "@/content/site";
import { buildWhatsAppURL } from "@/lib/whatsapp";

// ─── Tipos ───────────────────────────────────────────────────
type PlanId = "espartano" | "centuriao" | "olimpo";
type Scores = Record<PlanId, number>;

interface Option {
  label: string;
  scores: Scores;
}

interface Question {
  question: string;
  options: Option[];
}

// ─── Perguntas & pontuação ───────────────────────────────────
const QUESTIONS: Question[] = [
  {
    question: "Qual é o seu principal objetivo agora?",
    options: [
      {
        label: "🔥 Secar e definir o corpo",
        scores: { espartano: 2, centuriao: 1, olimpo: 0 },
      },
      {
        label: "💪 Ganhar massa muscular",
        scores: { espartano: 2, centuriao: 1, olimpo: 0 },
      },
      {
        label: "⚡ Melhorar performance e força",
        scores: { espartano: 1, centuriao: 2, olimpo: 1 },
      },
      {
        label: "🏆 Transformação completa de vida",
        scores: { espartano: 0, centuriao: 2, olimpo: 2 },
      },
    ],
  },
  {
    question: "Há quanto tempo você treina com consistência?",
    options: [
      {
        label: "Sou iniciante (menos de 1 ano)",
        scores: { espartano: 2, centuriao: 1, olimpo: 0 },
      },
      {
        label: "Intermediário (1 a 3 anos)",
        scores: { espartano: 2, centuriao: 2, olimpo: 1 },
      },
      {
        label: "Avançado (mais de 3 anos)",
        scores: { espartano: 1, centuriao: 2, olimpo: 2 },
      },
      {
        label: "Treinei antes, mas parei por um tempo",
        scores: { espartano: 2, centuriao: 1, olimpo: 0 },
      },
    ],
  },
  {
    question: "Qual é o seu nível de comprometimento?",
    options: [
      {
        label: "Consigo me comprometer por 3 meses",
        scores: { espartano: 3, centuriao: 0, olimpo: 0 },
      },
      {
        label: "Resultado real exige pelo menos 6 meses",
        scores: { espartano: 0, centuriao: 3, olimpo: 0 },
      },
      {
        label: "Comprometimento total — quero o melhor custo-benefício",
        scores: { espartano: 0, centuriao: 1, olimpo: 3 },
      },
    ],
  },
];

// ─── Dados dos planos para resultado ────────────────────────
const PLAN_DATA: Record<PlanId, { icon: string; color: string; pitch: string }> = {
  espartano: {
    icon: "/assets/plans/espartano.svg",
    color: "text-sky-400",
    pitch: "Três meses é o mínimo para começar a ver transformação real com consistência.",
  },
  centuriao: {
    icon: "/assets/plans/centuriao.svg",
    color: "text-amber-400",
    pitch: "Seis meses no método — duração ideal pra consolidar resultado e ainda economizar em relação ao trimestral.",
  },
  olimpo: {
    icon: "/assets/plans/olimpo.svg",
    color: "text-amber-300",
    pitch: "Doze meses de método. O maior desconto da linha pra quem entende que resultado de verdade leva tempo.",
  },
};

function calcWinner(scores: Scores): PlanId {
  return (Object.entries(scores) as [PlanId, number][]).reduce((a, b) =>
    b[1] > a[1] ? b : a
  )[0];
}

// ─── Componente ──────────────────────────────────────────────
interface PlanQuizProps {
  open: boolean;
  onClose: () => void;
}

const EMPTY_SCORES: Scores = { espartano: 0, centuriao: 0, olimpo: 0 };

export function PlanQuiz({ open, onClose }: PlanQuizProps) {
  const [step, setStep] = useState(0); // 0..2 = perguntas, 3 = resultado
  const [scores, setScores] = useState<Scores>(EMPTY_SCORES);

  if (!open) return null;

  function handleOption(option: Option) {
    const next: Scores = {
      espartano: scores.espartano + option.scores.espartano,
      centuriao: scores.centuriao + option.scores.centuriao,
      olimpo: scores.olimpo + option.scores.olimpo,
    };
    setScores(next);

    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setStep(QUESTIONS.length); // resultado
    }
  }

  function handleBack() {
    if (step > 0) setStep(step - 1);
  }

  function handleClose() {
    setStep(0);
    setScores(EMPTY_SCORES);
    onClose();
  }

  const winner = calcWinner(scores);
  const winnerPlan = siteConfig.plans.find((p) => p.id === winner)!;
  const winnerMeta = PLAN_DATA[winner];
  const isResult = step === QUESTIONS.length;
  const current = QUESTIONS[step];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.80)" }}
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#111] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fechar */}
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/40 transition hover:bg-white/10 hover:text-white"
        >
          <X size={15} />
        </button>

        <div className="px-6 pt-6 pb-7">
          {!isResult ? (
            <>
              {/* Progresso */}
              <div className="mb-6 flex items-center gap-3">
                {step > 0 && (
                  <button
                    onClick={handleBack}
                    className="text-white/30 hover:text-white/70 transition"
                  >
                    <ChevronLeft size={18} />
                  </button>
                )}
                <div className="flex gap-1.5 flex-1">
                  {QUESTIONS.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                        i <= step ? "bg-amber-400" : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-white/30 shrink-0">
                  {step + 1} / {QUESTIONS.length}
                </span>
              </div>

              {/* Pergunta */}
              <h3 className="mb-5 font-display text-lg font-bold text-white leading-snug">
                {current.question}
              </h3>

              {/* Opções */}
              <div className="flex flex-col gap-2.5">
                {current.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOption(opt)}
                    className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3.5 text-left text-sm text-white/70 transition hover:border-amber-400/40 hover:bg-amber-400/5 hover:text-white active:scale-[0.98]"
                  >
                    {opt.label}
                    <ArrowRight size={14} className="shrink-0 text-white/20" />
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* ─── Resultado ─── */
            <div className="text-center">
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-amber-400/70">
                Seu plano ideal
              </p>

              <div className="my-4 flex justify-center">
                <Image
                  src={winnerMeta.icon}
                  alt={winnerPlan.name}
                  width={64}
                  height={64}
                  className="h-16 w-auto object-contain"
                />
              </div>

              <h3 className={`font-display text-3xl font-bold ${winnerMeta.color}`}>
                {winnerPlan.name}
              </h3>
              <p className="mt-1 text-sm text-white/40">{winnerPlan.subtitle}</p>

              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {winnerMeta.pitch}
              </p>

              {/* Preço */}
              <div className="mt-5 mb-6 flex items-baseline justify-center gap-1">
                <span className="text-white/30 text-sm">por</span>
                <span className={`text-3xl font-bold ${winnerMeta.color}`}>
                  {winnerPlan.priceLabel}
                </span>
                <span className="text-white/30 text-sm">{winnerPlan.period}</span>
              </div>

              {/* CTA */}
              <a
                href={buildWhatsAppURL(
                  siteConfig.contact.whatsappNumber,
                  winnerPlan.whatsappMessage + "\n\n📍 Pacholok Team — Quiz de planos"
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-amber-300 active:scale-95"
              >
                {winnerPlan.ctaText}
              </a>

              <button
                onClick={handleClose}
                className="mt-3 block w-full text-center text-xs text-white/25 transition hover:text-white/50"
              >
                Ver todos os planos
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
