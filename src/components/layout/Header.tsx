"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const nav = siteConfig.navigation;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#inicio");
          }}
          className="flex items-center gap-3 group"
          aria-label="Pacholok Team — Início"
        >
          <Image
            src={siteConfig.brand.logo}
            alt="Pacholok Team"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
          <span className="text-white font-semibold tracking-widest uppercase text-sm hidden sm:block">
            Pacholok Team
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
          {nav.map((item) =>
            "cta" in item && item.cta ? (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="ml-4 px-5 py-2 border border-gold-500/60 text-gold-500 text-xs font-semibold tracking-widest uppercase transition-all hover:bg-gold-500/10 hover:border-gold-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="px-3 py-2 text-xs font-medium tracking-widest uppercase text-white/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="bg-[#0A0A0A]/98 border-t border-white/5 px-4 py-4 flex flex-col gap-1"
          aria-label="Menu mobile"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={cn(
                "px-4 py-3 text-xs font-medium tracking-widest uppercase transition-colors",
                ("cta" in item && item.cta)
                  ? "text-gold-500 border border-gold-500/40 text-center mt-2"
                  : "text-white/60 hover:text-white"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
