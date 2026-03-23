"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const TOTAL = 50;
const REF_DATE = new Date("2026-01-01");
const REF_FILLED = 13;
const DAILY_RATE = 0.2;

export function calcFilled(): number {
  const diffMs = Date.now() - REF_DATE.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const filled = REF_FILLED + Math.floor(diffDays * DAILY_RATE);
  return Math.min(Math.max(filled, 25), 48);
}

export const VACANCY_TOTAL = TOTAL;

interface VacancyCtx {
  filled: number;
  increment: () => void;
}

const VacancyContext = createContext<VacancyCtx>({
  filled: 29,
  increment: () => {},
});

export function VacancyProvider({ children }: { children: ReactNode }) {
  const [filled, setFilled] = useState<number>(calcFilled);

  function increment() {
    setFilled((prev) => Math.min(prev + 1, 48));
  }

  return (
    <VacancyContext.Provider value={{ filled, increment }}>
      {children}
    </VacancyContext.Provider>
  );
}

export function useVacancy() {
  return useContext(VacancyContext);
}
