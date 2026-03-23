"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

/**
 * Linha dourada que varre horizontalmente quando a seção entra na viewport.
 * Coloque dentro de um elemento com `position: relative`.
 */
export function SweepLine() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);

        animate(line, {
          scaleX: [0, 1],
          opacity: [0.9, 0],
          duration: 900,
          ease: "outExpo",
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(line.parentElement ?? line);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={lineRef}
      aria-hidden="true"
      style={{ transformOrigin: "left", transform: "scaleX(0)", opacity: 0 }}
      className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent pointer-events-none z-20"
    />
  );
}
