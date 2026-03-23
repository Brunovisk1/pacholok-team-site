"use client";

import { useEffect, useRef } from "react";

export function CursorSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spot = spotRef.current;
    if (!spot) return;

    // Don't run on touch-only devices
    if (window.matchMedia("(hover: none)").matches) return;

    let raf: number;
    let tx = -999, ty = -999;
    let cx = -999, cy = -999;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const loop = () => {
      // Smooth lerp
      cx += (tx - cx) * 0.1;
      cy += (ty - cy) * 0.1;
      spot.style.transform = `translate(${cx}px, ${cy}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={spotRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-0"
      style={{
        width: 520,
        height: 520,
        marginLeft: -260,
        marginTop: -260,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(201,168,76,0.055) 0%, rgba(201,168,76,0.02) 40%, transparent 70%)",
      }}
    />
  );
}
