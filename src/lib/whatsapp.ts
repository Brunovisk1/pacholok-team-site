import { UTMParams } from "./utm";
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
  const firstName = lead.name.trim().split(/\s+/)[0] || lead.name;

  const subject = lead.plan
    ? `o plano ${lead.plan}`
    : "a consultoria";

  let msg = `Oi! Sou o ${firstName}, vim do site da Pacholok Team e quero saber mais sobre ${subject}.`;

  if (isInternational) {
    msg += `\n\nMoro fora do Brasil — meu fuso é ___`;
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
