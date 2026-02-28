import Image from "next/image";
import { siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#080808] py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src={siteConfig.brand.logo}
              alt="Pacholok Team"
              width={32}
              height={32}
              className="h-8 w-auto object-contain opacity-70"
            />
            <span className="text-white/40 text-xs tracking-widest uppercase font-medium">
              Pacholok Team
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Links do rodapé">
            {siteConfig.navigation.slice(0, 5).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/30 text-xs tracking-wider uppercase hover:text-white/60 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-white/20 text-xs">
            © {year} Pacholok Team. Todos os direitos reservados.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs leading-relaxed max-w-2xl mx-auto">
            As informações desta página são de caráter informativo. Resultados
            individuais variam de acordo com dedicação, histórico e fatores
            biológicos de cada pessoa. Não fazemos promessas de resultados
            específicos.
          </p>
        </div>
      </div>
    </footer>
  );
}
