"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  alphaDir: number;
}

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const GOLD = { r: 201, g: 168, b: 76 };
    const PARTICLE_COUNT = 55;

    const particles: Particle[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function spawn(): Particle {
      const w = canvas!.width;
      const h = canvas!.height;
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(Math.random() * 0.4 + 0.1),
        radius: Math.random() * 1.8 + 0.4,
        alpha: Math.random() * 0.4 + 0.05,
        alphaDir: Math.random() > 0.5 ? 1 : -1,
      };
    }

    resize();
    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(spawn());

    const LINE_DIST = 130;

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update + draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaDir * 0.004;
        if (p.alpha >= 0.45 || p.alpha <= 0.04) p.alphaDir *= -1;

        // Reset when off-screen
        if (p.y < -10 || p.x < -20 || p.x > canvas.width + 20) {
          Object.assign(p, spawn());
          p.y = canvas.height + 5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${GOLD.r},${GOLD.g},${GOLD.b},${p.alpha})`;
        ctx.fill();
      }

      // Draw connecting lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DIST) {
            const lineAlpha = ((1 - dist / LINE_DIST) * 0.12);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${GOLD.r},${GOLD.g},${GOLD.b},${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    const ro = new ResizeObserver(() => {
      resize();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
