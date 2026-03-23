"use client";

import { useEffect, useState } from "react";

// Deltas: mix realista de subida e descida
const DELTAS = [-3, -2, -1, -1, -1, 1, 1, 1, 2, 2, 3];

// Semente baseada na hora do dia para parecer orgânico
function seedByHour(): number {
  const hour = new Date().getHours();
  if (hour >= 0 && hour < 7)  return 6 + Math.floor(Math.random() * 5);   // madrugada: 6–10
  if (hour >= 7 && hour < 10) return 10 + Math.floor(Math.random() * 8);  // manhã cedo: 10–17
  if (hour >= 10 && hour < 13) return 18 + Math.floor(Math.random() * 10); // manhã: 18–27
  if (hour >= 13 && hour < 18) return 22 + Math.floor(Math.random() * 12); // tarde: 22–33
  if (hour >= 18 && hour < 22) return 18 + Math.floor(Math.random() * 10); // noite: 18–27
  return 12 + Math.floor(Math.random() * 6);                                // noite tarde: 12–17
}

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}

export function LiveViewerBadge() {
  const [count, setCount] = useState<number | null>(null);

  // Inicializa no cliente para evitar hydration mismatch
  useEffect(() => {
    setCount(seedByHour());
  }, []);

  useEffect(() => {
    if (count === null) return;
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === null) return prev;
        const delta = DELTAS[Math.floor(Math.random() * DELTAS.length)];
        return clamp(prev + delta, 6, 40);
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [count === null]);

  if (count === null) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-[#1a1a1a] px-4 py-2 shadow-xl">
      {/* Ponto verde pulsando */}
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      <span className="text-xs font-medium text-white/70">
        <span className="font-bold text-white">{count}</span> pessoas vendo agora
      </span>
    </div>
  );
}
