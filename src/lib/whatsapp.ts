import { UTMParams, appendUTMToMessage } from "./utm";
import { sanitizePhone } from "./validation";

export interface LeadData {
  name: string;
  whatsapp: string;
  email: string;
  outsideBrazil: "sim" | "nao";
  plan?: string;
  page?: string;
  utm?: UTMParams;
}

/**
 * Builds the WhatsApp pre-filled message based on lead data.
 */
export function buildWhatsAppMessage(lead: LeadData): string {
  const isInternational = lead.outsideBrazil === "sim";

  let msg = `Olá, equipe Pacholok Team! 👋\n\n`;
  msg += `*Nome:* ${lead.name}\n`;
  msg += `*WhatsApp:* ${lead.whatsapp}\n`;
  msg += `*E-mail:* ${lead.email}\n`;
  msg += `*Mora fora do Brasil:* ${isInternational ? "Sim" : "Não"}\n`;

  if (isInternational) {
    msg += `*País / Cidade e fuso horário:* ____\n`;
  }

  if (lead.plan) {
    msg += `*Plano de interesse:* ${lead.plan}\n`;
  }

  msg += `\n📍 Origem: ${lead.page ?? "Pacholok Team — Landing Page"}\n`;

  if (lead.utm && Object.keys(lead.utm).length > 0) {
    msg = appendUTMToMessage(msg, lead.utm);
  }

  return msg;
}

/**
 * Builds a wa.me URL with a pre-filled message.
 */
export function buildWhatsAppURL(
  whatsappNumber: string,
  message: string
): string {
  const number = sanitizePhone(whatsappNumber);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

/**
 * Sends lead data to webhook (graceful degradation — never throws).
 */
export async function sendLeadToWebhook(
  webhookUrl: string,
  lead: LeadData
): Promise<void> {
  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...lead,
        timestamp: new Date().toISOString(),
        page: lead.page ?? "Pacholok Team — Landing Page",
      }),
      signal: AbortSignal.timeout(4000),
    });
  } catch {
    // Silently fail — never block the WhatsApp redirect
  }
}
