"use client";

import { useEffect, useState } from "react";

const TOTAL = 50;
const INITIAL = 29;
const INTERVAL_MS = 10_000;

// Deltas possíveis: maioria positiva para simular preenchimento
const DELTAS = [-3, -2, -1, 1, 1, 2, 2, 3, 5];

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}

export function VacancyBar() {
  const [filled, setFilled] = useState(INITIAL);

  useEffect(() => {
    const timer = setInterval(() => {
      setFilled((prev) => {
        const delta = DELTAS[Math.floor(Math.random() * DELTAS.length)];
        return clamp(prev + delta, 24, 48); // nunca abaixo de 24 nem acima de 48
      });
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const pct = Math.round((filled / TOTAL) * 100);
  const remaining = TOTAL - filled;

  // Cor da barra conforme ocupação
  const barColor =
    pct >= 80
      ? "bg-rose-500"
      : pct >= 60
      ? "bg-amber-400"
      : "bg-emerald-500";

  return (
    <div className="mb-10 md:mb-14 mx-auto max-w-xl rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
      {/* Topo: texto + vagas restantes */}
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">
          Vagas disponíveis
        </span>
        <span className="text-xs font-bold text-white/40">
          {filled}{" "}
          <span className="font-normal text-white/25">de {TOTAL} preenchidas</span>
        </span>
      </div>

      {/* Barra de progresso */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${barColor}`}
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Rodapé */}
      <p className="mt-2.5 text-xs text-white/30 text-center">
        Apenas{" "}
        <span className="font-bold text-white/60">{remaining} vagas</span>{" "}
        restantes neste ciclo
      </p>
    </div>
  );
}
