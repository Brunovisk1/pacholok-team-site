"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, AlertCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/content/site";
import { isValidPhone, isValidEmail, applyPhoneMask } from "@/lib/validation";
import { captureUTM, UTMParams } from "@/lib/utm";
import {
  buildWhatsAppMessage,
  buildWhatsAppURL,
  sendLeadToWebhook,
} from "@/lib/whatsapp";

interface FormState {
  name: string;
  whatsapp: string;
  email: string;
  outsideBrazil: "sim" | "nao" | "";
}

interface FormErrors {
  name?: string;
  whatsapp?: string;
  email?: string;
  outsideBrazil?: string;
}

interface LeadGateProps {
  selectedPlan?: string;
  formRef?: React.RefObject<HTMLDivElement | null>;
}

export function LeadGate({ selectedPlan, formRef }: LeadGateProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    whatsapp: "",
    email: "",
    outsideBrazil: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [utm, setUtm] = useState<UTMParams>({});
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setUtm(captureUTM());
  }, []);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = "Informe seu nome completo.";
    if (!form.whatsapp.trim() || !isValidPhone(form.whatsapp))
      e.whatsapp =
        "Número inválido. Use formato com DDI para números internacionais.";
    if (!form.email.trim() || !isValidEmail(form.email))
      e.email = "Informe um e-mail válido.";
    if (!form.outsideBrazil)
      e.outsideBrazil = "Selecione uma opção.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Focus first error
      const firstErrKey = Object.keys(errs)[0] as keyof FormErrors;
      document.getElementById(`field-${firstErrKey}`)?.focus();
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    const lead = {
      name: form.name.trim(),
      whatsapp: form.whatsapp.trim(),
      email: form.email.trim(),
      outsideBrazil: form.outsideBrazil as "sim" | "nao",
      plan: selectedPlan,
      page: "Pacholok Team — Landing Page",
      utm,
    };

    if (siteConfig.flags.enableLeadWebhook) {
      await sendLeadToWebhook(siteConfig.leadWebhookUrl, lead);
    }

    const message = buildWhatsAppMessage(lead);
    const url = buildWhatsAppURL(siteConfig.contact.whatsappNumber, message);
    window.open(url, "_blank", "noopener,noreferrer");

    setIsSubmitting(false);
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value;
    setForm((f) => ({ ...f, whatsapp: applyPhoneMask(raw) }));
    if (errors.whatsapp) setErrors((e) => ({ ...e, whatsapp: undefined }));
  }

  return (
    <div
      ref={formRef}
      id="contato"
      className="relative bg-[#0F0F0F] border border-white/10 p-8 md:p-10"
      role="region"
      aria-label="Formulário de contato"
    >
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold-gradient" />

      <div className="mb-8">
        <p className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          Comece por aqui · 30 segundos
        </p>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
          Fale com a equipe
        </h2>
        <p className="mt-2 text-white/40 text-sm">
          Preencha abaixo e nossa equipe abre a conversa no WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="field-name">Nome completo *</Label>
          <Input
            id="field-name"
            ref={nameRef}
            type="text"
            placeholder="Seu nome"
            autoComplete="name"
            value={form.name}
            onChange={(e) => {
              setForm((f) => ({ ...f, name: e.target.value }));
              if (errors.name) setErrors((e) => ({ ...e, name: undefined }));
            }}
            error={errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
            required
          />
        </div>

        {/* WhatsApp */}
        <div className="space-y-2">
          <Label htmlFor="field-whatsapp">
            WhatsApp *{" "}
            <span className="text-white/30 normal-case tracking-normal font-normal">
              (com DDD ou DDI para internacionais)
            </span>
          </Label>
          <Input
            id="field-whatsapp"
            type="tel"
            placeholder="(11) 99999-9999 ou +55 11 99999-9999"
            autoComplete="tel"
            value={form.whatsapp}
            onChange={handlePhoneChange}
            error={errors.whatsapp}
            aria-invalid={!!errors.whatsapp}
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="field-email">E-mail *</Label>
          <Input
            id="field-email"
            type="email"
            placeholder="seu@email.com"
            autoComplete="email"
            value={form.email}
            onChange={(e) => {
              setForm((f) => ({ ...f, email: e.target.value }));
              if (errors.email) setErrors((e) => ({ ...e, email: undefined }));
            }}
            error={errors.email}
            aria-invalid={!!errors.email}
            required
          />
        </div>

        {/* Outside Brazil */}
        <div className="space-y-3">
          <Label id="outside-brazil-label">Mora fora do Brasil? *</Label>
          <div
            className="flex gap-4"
            role="radiogroup"
            aria-labelledby="outside-brazil-label"
            aria-required="true"
          >
            {(["nao", "sim"] as const).map((val) => (
              <label
                key={val}
                className={`flex-1 flex items-center justify-center gap-2 h-12 border cursor-pointer text-sm font-medium transition-all ${
                  form.outsideBrazil === val
                    ? "border-gold-500 bg-gold-500/10 text-gold-500"
                    : "border-white/10 bg-white/5 text-white/50 hover:border-white/30"
                }`}
              >
                <input
                  type="radio"
                  name="outsideBrazil"
                  id={`field-outsideBrazil-${val}`}
                  value={val}
                  checked={form.outsideBrazil === val}
                  onChange={() => {
                    setForm((f) => ({ ...f, outsideBrazil: val }));
                    if (errors.outsideBrazil)
                      setErrors((e) => ({ ...e, outsideBrazil: undefined }));
                  }}
                  className="sr-only"
                />
                {val === "nao" ? "Não" : "Sim"}
              </label>
            ))}
          </div>
          {errors.outsideBrazil && (
            <p className="text-xs text-red-400 flex items-center gap-1" role="alert">
              <AlertCircle size={12} /> {errors.outsideBrazil}
            </p>
          )}
        </div>

        {/* International notice */}
        {form.outsideBrazil === "sim" && (
          <div className="flex items-start gap-3 bg-gold-500/5 border border-gold-500/20 px-4 py-3">
            <Globe size={16} className="text-gold-500 mt-0.5 shrink-0" />
            <p className="text-xs text-white/60 leading-relaxed">
              <span className="text-gold-500 font-medium">Atendimento internacional:</span>{" "}
              confirme seu DDI e fuso horário no WhatsApp.
            </p>
          </div>
        )}

        {/* Selected plan indicator */}
        {selectedPlan && (
          <div className="text-xs text-white/40 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 inline-block" />
            Plano selecionado:{" "}
            <span className="text-gold-500 font-medium">{selectedPlan}</span>
          </div>
        )}

        {/* Submit */}
        <Button
          type="submit"
          variant="whatsapp"
          size="lg"
          className="w-full mt-2 rounded-none"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          <MessageCircle size={18} />
          {isSubmitting ? "Aguarde..." : "Falar com a equipe no WhatsApp"}
        </Button>
      </form>
    </div>
  );
}
