import { siteConfig } from "@/content/site";

export function HowItWorks() {
  const steps = siteConfig.howItWorks;

  return (
    <section
      id="como-funciona"
      className="py-24 bg-[#0A0A0A]"
      aria-label="Como funciona o Pacholok Team"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <p className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Do primeiro contato à evolução contínua
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Como funciona
          </h2>
          <p className="mt-4 text-white/40 max-w-xl text-sm leading-relaxed">
            Sem surpresas, sem burocracia. Um processo estruturado do início ao
            fim — para que você saiba exatamente o que esperar.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-[calc(2.5rem_-_1px)] top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/30 via-gold-500/10 to-transparent" />

          <ol className="space-y-10" role="list">
            {steps.map((step, index) => (
              <li key={step.step} className="relative flex gap-8 group">
                {/* Step number circle */}
                <div className="relative shrink-0 flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border text-xs font-bold tracking-wider transition-all z-10 ${
                      index === 0
                        ? "border-gold-500 bg-gold-500/10 text-gold-500"
                        : "border-white/20 bg-[#0A0A0A] text-white/40 group-hover:border-gold-500/50 group-hover:text-gold-500/60"
                    }`}
                    aria-hidden="true"
                  >
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="pb-2 min-w-0 flex-1">
                  <div className="bg-[#0F0F0F] border border-white/5 p-6 hover:border-white/10 transition-colors">
                    <h3 className="text-white font-semibold text-base mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                    {step.sla && (
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-gold-500/60" />
                        <span className="text-gold-500/60 text-xs tracking-wide">
                          {step.sla}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Bottom note */}
        <div className="mt-16 bg-[#0F0F0F] border border-white/5 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <p className="text-white/70 text-sm leading-relaxed">
                <span className="text-gold-500 font-medium">
                  Pronto para começar?
                </span>{" "}
                O primeiro passo é uma conversa. Nossa equipe avalia seu perfil
                e explica o processo antes de qualquer compromisso.
              </p>
            </div>
            <a
              href="#contato"
              className="shrink-0 px-6 py-3 border border-gold-500/60 text-gold-500 text-xs font-semibold tracking-widest uppercase hover:bg-gold-500/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              Iniciar conversa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
