"use client";

import { useEffect, useRef } from "react";

const GOLD = { r: 201, g: 168, b: 76 };

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  trail: { x: number; y: number }[];
}

interface Orb {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  alpha: number;
  phase: number;
  speed: number;
}

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const TRAIL_LEN = 14;
    const PARTICLE_COUNT = 80;

    // ── Atmospheric orbs ──────────────────────────────────────
    const orbs: Orb[] = [
      { x: 0, y: 0, baseX: 0.72, baseY: 0.18, radius: 320, alpha: 0.13, phase: 0, speed: 0.0007 },
      { x: 0, y: 0, baseX: 0.15, baseY: 0.75, radius: 260, alpha: 0.09, phase: 2.1, speed: 0.0009 },
      { x: 0, y: 0, baseX: 0.5,  baseY: 0.45, radius: 180, alpha: 0.06, phase: 4.3, speed: 0.0012 },
    ];

    // ── Particles ─────────────────────────────────────────────
    const particles: Particle[] = [];

    function spawnParticle(w: number, h: number): Particle {
      return {
        x: Math.random() * w,
        y: h + 10,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -(Math.random() * 0.8 + 0.3),
        radius: Math.random() * 2.2 + 0.6,
        alpha: Math.random() * 0.55 + 0.15,
        trail: [],
      };
    }

    function resize() {
      canvas!.width = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
    }

    resize();
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = spawnParticle(canvas.width, canvas.height);
      p.y = Math.random() * canvas.height; // scatter on first frame
      particles.push(p);
    }

    function drawOrbs(t: number) {
      const w = canvas!.width;
      const h = canvas!.height;
      const mx = mouse.current.x / w - 0.5;
      const my = mouse.current.y / h - 0.5;

      for (const orb of orbs) {
        orb.phase += orb.speed;
        const pulse = Math.sin(orb.phase) * 0.3 + 1;          // 0.7–1.3× size
        const alphaP = orb.alpha * (Math.sin(orb.phase * 1.3) * 0.25 + 1);

        // Drift slowly + subtle parallax toward mouse
        orb.x = orb.baseX * w + Math.sin(orb.phase * 0.7) * 40 + mx * 28;
        orb.y = orb.baseY * h + Math.cos(orb.phase * 0.5) * 30 + my * 18;

        const grad = ctx!.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.radius * pulse
        );
        grad.addColorStop(0,   `rgba(${GOLD.r},${GOLD.g},${GOLD.b},${alphaP})`);
        grad.addColorStop(0.5, `rgba(${GOLD.r},${GOLD.g},${GOLD.b},${alphaP * 0.3})`);
        grad.addColorStop(1,   `rgba(${GOLD.r},${GOLD.g},${GOLD.b},0)`);

        ctx!.beginPath();
        ctx!.arc(orb.x, orb.y, orb.radius * pulse, 0, Math.PI * 2);
        ctx!.fillStyle = grad;
        ctx!.fill();
      }
    }

    function drawParticles() {
      const w = canvas!.width;
      const h = canvas!.height;

      for (const p of particles) {
        // Update trail
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > TRAIL_LEN) p.trail.shift();

        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -20 || p.x < -30 || p.x > w + 30) {
          Object.assign(p, spawnParticle(w, h));
          p.trail = [];
        }

        // Draw trail
        for (let i = 1; i < p.trail.length; i++) {
          const t = i / p.trail.length;
          ctx!.beginPath();
          ctx!.moveTo(p.trail[i - 1].x, p.trail[i - 1].y);
          ctx!.lineTo(p.trail[i].x, p.trail[i].y);
          ctx!.strokeStyle = `rgba(${GOLD.r},${GOLD.g},${GOLD.b},${t * p.alpha * 0.6})`;
          ctx!.lineWidth = p.radius * t;
          ctx!.stroke();
        }

        // Draw particle
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${GOLD.r},${GOLD.g},${GOLD.b},${p.alpha})`;
        ctx!.fill();

        // Glow
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${GOLD.r},${GOLD.g},${GOLD.b},${p.alpha * 0.12})`;
        ctx!.fill();
      }
    }

    let t = 0;
    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      drawOrbs(t);
      drawParticles();
      t++;
      animId = requestAnimationFrame(draw);
    }

    draw();

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    // Click burst — spawn 20 particles from click point
    const onClick = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      for (let i = 0; i < 22; i++) {
        const angle = (Math.PI * 2 * i) / 22 + Math.random() * 0.3;
        const speed = Math.random() * 3.5 + 1;
        particles.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1,
          radius: Math.random() * 2.5 + 0.8,
          alpha: Math.random() * 0.7 + 0.3,
          trail: [],
        });
      }
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full cursor-crosshair"
      aria-hidden="true"
    />
  );
}
