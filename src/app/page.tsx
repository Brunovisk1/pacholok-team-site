import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ForWho } from "@/components/sections/ForWho";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Plans } from "@/components/sections/Plans";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { TeamMethod } from "@/components/sections/TeamMethod";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* (1) Hero + Lead Gate */}
        <Hero />

        {/* Gold divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

        {/* (2) Para quem é / Para quem não é */}
        <ForWho />

        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* (3) Como funciona */}
        <HowItWorks />

        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* (4) Planos */}
        <Plans />

        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* (5) O que você recebe */}
        <WhatYouGet />

        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* (6) Equipe e método */}
        <TeamMethod />

        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* (7) Depoimentos */}
        <Testimonials />

        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* (8) FAQ */}
        <FAQ />

        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

        {/* (9) CTA Final */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
