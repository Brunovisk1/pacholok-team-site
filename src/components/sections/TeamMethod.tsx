import Image from "next/image";
import { siteConfig } from "@/content/site";

export function TeamMethod() {
  const { team } = siteConfig;

  return (
    <section
      id="equipe"
      className="py-24 bg-[#080808]"
      aria-label="Equipe e método Pacholok"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            O método em campo
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Equipe e método
          </h2>
          <p className="mt-4 text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
            Profissionais treinados pelo método Pacholok. Não vendemos um nome —
            entregamos a responsabilidade que esse nome carrega.
          </p>
        </div>

        {/* Founder */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <p className="text-gold-500/60 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Fundador
            </p>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
              {team.founder.name}
            </h3>
            <p className="text-gold-500 text-sm mb-6">{team.founder.role}</p>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              {team.founder.bio}
            </p>

            {/* Method pillars */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Método", desc: "Doutrina própria, não improviso" },
                { label: "Personalização", desc: "Anamnese antes de qualquer protocolo" },
                { label: "Acompanhamento", desc: "Check-ins reais, não automáticos" },
              ].map((pillar) => (
                <div
                  key={pillar.label}
                  className="bg-[#0F0F0F] border border-white/5 p-4"
                >
                  <p className="text-gold-500 text-xs font-semibold mb-1">
                    {pillar.label}
                  </p>
                  <p className="text-white/30 text-xs leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Gold frame accent */}
              <div className="absolute -inset-3 border border-gold-500/10" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-gold-500/40" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-gold-500/40" />

              <div className="relative w-64 h-80 overflow-hidden bg-[#111]">
                <Image
                  src={team.founder.image}
                  alt={`${team.founder.name} — ${team.founder.role}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 256px, 256px"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Athletes / Team */}
        {team.athletes.length > 0 && (
          <>
            <div className="h-px bg-white/5 mb-16" />
            <div className="text-center mb-10">
              <p className="text-white/30 text-xs tracking-widest uppercase mb-2">
                Atletas do time
              </p>
              <h3 className="text-xl font-display font-semibold text-white">
                Resultados com nome e sobrenome
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
              {team.athletes.map((athlete) => (
                <div
                  key={athlete.name}
                  className="bg-[#0F0F0F] border border-white/5 overflow-hidden"
                >
                  <div className="relative h-48 bg-[#111]">
                    <Image
                      src={athlete.image}
                      alt={`${athlete.name} — Atleta Pacholok Team`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 300px"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] to-transparent" />
                  </div>
                  <div className="p-5">
                    <h4 className="text-white font-semibold">{athlete.name}</h4>
                    <p className="text-gold-500/60 text-xs tracking-wide">
                      {athlete.role}
                    </p>
                    {athlete.result && (
                      <p className="mt-2 text-white/30 text-xs">
                        {athlete.result}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
