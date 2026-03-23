"use client";

import { useEffect, useState } from "react";

const NOTIFICATIONS = [
  { name: "João V.", city: "São Paulo, SP", plan: "Olimpo" },
  { name: "Rafael M.", city: "Curitiba, PR", plan: "Gladiador" },
  { name: "Lucas T.", city: "Belo Horizonte, MG", plan: "Olimpo" },
  { name: "Thiago S.", city: "Rio de Janeiro, RJ", plan: "Espartano" },
  { name: "Bruno A.", city: "Porto Alegre, RS", plan: "Olimpo" },
  { name: "Gabriel F.", city: "Florianópolis, SC", plan: "Gladiador" },
  { name: "Mateus R.", city: "Brasília, DF", plan: "Centurião" },
  { name: "Pedro H.", city: "Salvador, BA", plan: "Olimpo" },
  { name: "André L.", city: "Fortaleza, CE", plan: "Gladiador" },
  { name: "Felipe C.", city: "Recife, PE", plan: "Espartano" },
  { name: "Diego N.", city: "Goiânia, GO", plan: "Olimpo" },
  { name: "Vitor M.", city: "Manaus, AM", plan: "Centurião" },
  { name: "Rodrigo B.", city: "Campinas, SP", plan: "Gladiador" },
  { name: "Eduardo P.", city: "Santos, SP", plan: "Olimpo" },
  { name: "Caio L.", city: "Londrina, PR", plan: "Espartano" },
];

const PLAN_COLORS: Record<string, string> = {
  Olimpo: "text-amber-400",
  Gladiador: "text-sky-400",
  Espartano: "text-emerald-400",
  Centurião: "text-rose-400",
};

function getMinutesAgo() {
  return Math.floor(Math.random() * 9) + 1; // 1–9 min atrás
}

function pickRandom<T>(arr: T[], exclude?: T): T {
  const pool = exclude ? arr.filter((i) => i !== exclude) : arr;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function SocialProofToast() {
  const [current, setCurrent] = useState<(typeof NOTIFICATIONS)[0] | null>(null);
  const [minutesAgo, setMinutesAgo] = useState(1);
  const [visible, setVisible] = useState(false);
  const [last, setLast] = useState<(typeof NOTIFICATIONS)[0] | null>(null);

  useEffect(() => {
    // Primeira aparição após 25s
    const firstTimer = setTimeout(() => showNext(null), 25000);
    return () => clearTimeout(firstTimer);
  }, []);

  function showNext(lastItem: (typeof NOTIFICATIONS)[0] | null) {
    const item = pickRandom(NOTIFICATIONS, lastItem ?? undefined);
    const mins = getMinutesAgo();
    setCurrent(item);
    setMinutesAgo(mins);
    setLast(item);
    setVisible(true);

    // Esconde após 5s
    const hideTimer = setTimeout(() => {
      setVisible(false);

      // Próxima aparição 25s depois de sumir
      const nextTimer = setTimeout(() => showNext(item), 25000);
      return () => clearTimeout(nextTimer);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }

  if (!current) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-xl border border-white/10 bg-[#1a1a1a] p-4 shadow-2xl transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
      style={{ maxWidth: 300 }}
    >
      {/* Avatar */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-base font-bold text-white">
        {current.name[0]}
      </div>

      {/* Texto */}
      <div className="min-w-0">
        <p className="text-sm font-semibold text-white leading-tight">
          {current.name}{" "}
          <span className="font-normal text-white/50">de {current.city}</span>
        </p>
        <p className="text-sm text-white/70 leading-tight">
          assinou o plano{" "}
          <span className={`font-bold ${PLAN_COLORS[current.plan] ?? "text-white"}`}>
            {current.plan}
          </span>
        </p>
        <p className="mt-0.5 text-xs text-white/30">{minutesAgo} min atrás</p>
      </div>
    </div>
  );
}
