"use client";

import { useVacancy, VACANCY_TOTAL } from "./VacancyContext";

export function VacancyBar() {
  const { filled } = useVacancy();
  const remaining = VACANCY_TOTAL - filled;
  const pct = Math.round((filled / VACANCY_TOTAL) * 100);

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
          <span className="font-normal text-white/25">
            de {VACANCY_TOTAL} preenchidas
          </span>
        </span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${barColor}`}
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
