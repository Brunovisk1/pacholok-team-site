"use client";

/**
 * VacancyBar — Opção A (date-seeded)
 *
 * O número de vagas preenchidas é calculado a partir de uma data de referência.
 * Cresce ~0.2 vagas por dia. Não usa timer nem aleatoriedade —
 * todo visitante no mesmo dia vê o mesmo número. Reload não reseta.
 *
 * Calibração:
 *   REF_DATE = 2026-01-01 → REF_FILLED = 13
 *   Após 81 dias (hoje, 2026-03-22) → 13 + floor(81 × 0.2) = 29 ✓
 */

const TOTAL = 50;
const REF_DATE = new Date("2026-01-01");
const REF_FILLED = 13;
const DAILY_RATE = 0.2; // vagas por dia

function calcFilled(): number {
  const today = new Date();
  const diffMs = today.getTime() - REF_DATE.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const filled = REF_FILLED + Math.floor(diffDays * DAILY_RATE);
  return Math.min(Math.max(filled, 25), 48); // nunca abaixo de 25 nem acima de 48
}

export function VacancyBar() {
  const filled = calcFilled();
  const remaining = TOTAL - filled;
  const pct = Math.round((filled / TOTAL) * 100);

  const barColor =
    pct >= 80 ? "bg-rose-500" : pct >= 60 ? "bg-amber-400" : "bg-emerald-500";

  return (
    <div className="mb-10 md:mb-14 mx-auto max-w-xl rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">
          Vagas disponíveis
        </span>
        <span className="text-xs font-bold text-white/40">
          {filled}{" "}
          <span className="font-normal text-white/25">de {TOTAL} preenchidas</span>
        </span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full ${barColor}`}
          style={{ width: `${pct}%` }}
        />
      </div>

      <p className="mt-2.5 text-xs text-white/30 text-center">
        Apenas{" "}
        <span className="font-bold text-white/60">{remaining} vagas</span>{" "}
        restantes neste ciclo
      </p>
    </div>
  );
}
