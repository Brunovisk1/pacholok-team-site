"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/content/site";
import { buildWhatsAppURL } from "@/lib/whatsapp";

const WA_URL = buildWhatsAppURL(
  siteConfig.contact.whatsappNumber,
  "Olá! Vim pelo site da Pacholok Team e tenho algumas dúvidas antes de escolher meu plano. Pode me ajudar?"
);

// Ícone SVG oficial do WhatsApp
function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.502L4 29l7.697-1.807A11.94 11.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3z"
        fill="white"
      />
      <path
        d="M21.5 18.5c-.3-.15-1.77-.874-2.044-.973-.275-.1-.474-.15-.674.15-.2.3-.773.973-.947 1.173-.175.2-.35.224-.649.075-.3-.15-1.266-.467-2.412-1.49-.892-.794-1.494-1.775-1.669-2.075-.175-.3-.018-.462.131-.61.134-.133.3-.347.45-.52.149-.174.199-.299.299-.498.1-.2.05-.375-.025-.524-.075-.15-.674-1.623-.923-2.22-.243-.585-.49-.506-.674-.516l-.575-.01c-.2 0-.524.075-.799.375s-1.05 1.024-1.05 2.497 1.075 2.897 1.225 3.097c.15.2 2.115 3.226 5.124 4.524.716.308 1.275.492 1.71.63.718.228 1.372.196 1.889.119.576-.086 1.771-.723 2.021-1.422.25-.698.25-1.297.175-1.422-.075-.124-.275-.199-.574-.348z"
        fill="#25D366"
      />
    </svg>
  );
}

export function WhatsAppBubble() {
  const [balloonVisible, setBalloonVisible] = useState(false);
  const [balloonDismissed, setBalloonDismissed] = useState(false);

  // Exibe balão após 8s (só uma vez)
  useEffect(() => {
    const show = setTimeout(() => {
      if (!balloonDismissed) setBalloonVisible(true);
    }, 8000);
    return () => clearTimeout(show);
  }, []);

  // Esconde balão automaticamente após 7s de exibição
  useEffect(() => {
    if (!balloonVisible) return;
    const hide = setTimeout(() => setBalloonVisible(false), 7000);
    return () => clearTimeout(hide);
  }, [balloonVisible]);

  function dismissBalloon() {
    setBalloonVisible(false);
    setBalloonDismissed(true);
  }

  return (
    <div className="fixed bottom-20 right-6 z-50 flex flex-col items-end gap-2">
      {/* Balão de mensagem */}
      <div
        className={`relative max-w-[220px] rounded-2xl rounded-br-sm border border-white/10 bg-[#1a1a1a] px-4 py-3 shadow-xl transition-all duration-300 ${
          balloonVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        {/* Fechar balão */}
        <button
          onClick={dismissBalloon}
          className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-white/40 hover:text-white transition"
        >
          <X size={10} />
        </button>

        <p className="text-xs leading-relaxed text-white/80">
          Alguma dúvida sobre os planos?{" "}
          <span className="font-semibold text-white">Fala comigo! 👋</span>
        </p>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={dismissBalloon}
          className="mt-2 inline-block rounded-lg bg-[#25D366] px-3 py-1.5 text-xs font-bold text-white transition hover:bg-[#20b858]"
        >
          Chamar no WhatsApp
        </a>

        {/* Rabinho do balão */}
        <div className="absolute -bottom-2 right-3 h-0 w-0 border-l-8 border-r-0 border-t-8 border-l-transparent border-t-[#1a1a1a]" />
      </div>

      {/* Botão flutuante */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={dismissBalloon}
        aria-label="Falar no WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition hover:bg-[#20b858] hover:scale-105 active:scale-95"
      >
        <WhatsAppIcon size={28} />
      </a>
    </div>
  );
}
