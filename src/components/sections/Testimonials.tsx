import { Quote } from "lucide-react";
import { siteConfig } from "@/content/site";

export function Testimonials() {
  const { testimonials } = siteConfig;

  return (
    <section
      id="depoimentos"
      className="py-24 bg-[#0A0A0A]"
      aria-label="Depoimentos de alunos"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Quem esteve no processo
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Resultados reais
          </h2>
          <p className="mt-4 text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
            Shapes construídos. Não fabricados.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="bg-[#0F0F0F] border border-white/5 p-7 flex flex-col relative"
            >
              {/* Quote mark */}
              <Quote
                size={24}
                className="text-gold-500/20 mb-4 shrink-0"
                aria-hidden="true"
              />

              <blockquote className="flex-1">
                <p className="text-white/60 text-sm leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                {/* Avatar placeholder */}
                <div
                  className="w-9 h-9 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <span className="text-gold-500/60 text-xs font-bold uppercase">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">{t.name}</p>
                  <p className="text-white/30 text-xs">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center text-white/20 text-xs">
          Depoimentos serão adicionados com autorização dos alunos após o
          lançamento.
        </p>
      </div>
    </section>
  );
}
