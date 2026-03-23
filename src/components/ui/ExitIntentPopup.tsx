"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/content/site";
import { buildWhatsAppURL } from "@/lib/whatsapp";

const SESSION_KEY = "exit_intent_shown";

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mostra só uma vez por sessão
    if (sessionStorage.getItem(SESSION_KEY)) return;

    // Aguarda 5s antes de ativar o detector (evita disparar cedo demais)
    let armed = false;
    const armTimer = setTimeout(() => {
      armed = true;
    }, 5000);

    function handleMouseLeave(e: MouseEvent) {
      if (!armed) return;
      if (e.clientY > 10) return; // só dispara saindo pelo topo
      if (sessionStorage.getItem(SESSION_KEY)) return;

      sessionStorage.setItem(SESSION_KEY, "1");
      setVisible(true);
      document.removeEventListener("mouseleave", handleMouseLeave);
    }

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(armTimer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setMounted(true), 10);
      return () => clearTimeout(t);
    } else {
      setMounted(false);
    }
  }, [visible]);

  if (!visible) return null;

  const waUrl = buildWhatsAppURL(
    siteConfig.contact.whatsappNumber,
    "Olá! Vim pelo site da Pacholok Team e quero entender melhor os planos antes de decidir."
  );

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundColor: "rgba(0,0,0,0.82)" }}
      onClick={() => setVisible(false)}
    >
      <div
        className={`relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#111] shadow-2xl transition-all duration-300 ${
          mounted ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Linha vermelha no topo — senso de urgência */}
        <div className="h-[3px] w-full bg-gradient-to-r from-rose-600 via-rose-400 to-rose-600" />

        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/30 transition hover:bg-white/10 hover:text-white"
        >
          <X size={15} />
        </button>

        <div className="px-7 pb-7 pt-6 text-center">
          {/* Emoji de alerta */}
          <div className="mb-3 text-4xl">⚠️</div>

          <h2 className="font-display text-2xl font-bold leading-tight text-white">
            Espera. Você vai deixar<br />
            <span className="text-rose-400">para depois e esquecer.</span>
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-white/50">
            Quem adiou a decisão voltou semanas depois para a mesma vida.
            Quem agiu, está no processo. A diferença começa aqui.
          </p>

          {/* Separador */}
          <div className="my-5 h-px bg-white/5" />

          <p className="mb-5 text-sm font-medium text-white/70">
            Fale com a equipe agora — sem compromisso, sem pressão.
            <br />
            <span className="text-white/40 text-xs">Tira suas dúvidas antes de decidir.</span>
          </p>

          {/* CTAs */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setVisible(false)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/90 active:scale-95"
          >
            Quero entender antes de ir
          </a>

          <button
            onClick={() => setVisible(false)}
            className="mt-3 block w-full text-center text-xs text-white/20 transition hover:text-white/50"
          >
            Não, pode sair
          </button>
        </div>
      </div>
    </div>
  );
}
