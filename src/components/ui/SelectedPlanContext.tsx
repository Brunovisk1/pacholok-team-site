"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from "react";

export type PlanId = "espartano" | "centuriao" | "olimpo";

interface SelectedPlanCtx {
  planId: PlanId | null;
  planName: string | null;
  select: (planId: PlanId, planName: string) => void;
  clear: () => void;
}

const Ctx = createContext<SelectedPlanCtx>({
  planId: null,
  planName: null,
  select: () => {},
  clear: () => {},
});

export function SelectedPlanProvider({ children }: { children: ReactNode }) {
  const [planId, setPlanId] = useState<PlanId | null>(null);
  const [planName, setPlanName] = useState<string | null>(null);

  const select = useCallback((id: PlanId, name: string) => {
    setPlanId(id);
    setPlanName(name);
  }, []);

  const clear = useCallback(() => {
    setPlanId(null);
    setPlanName(null);
  }, []);

  return (
    <Ctx.Provider value={{ planId, planName, select, clear }}>
      {children}
    </Ctx.Provider>
  );
}

export function useSelectedPlan() {
  return useContext(Ctx);
}
