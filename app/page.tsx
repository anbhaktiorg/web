"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SocialProgramsSection } from "@/components/social-programs-section"
import { TransparencySection } from "@/components/transparency-section"
import { ImpactSection } from "@/components/impact-section"
import { DonationSection } from "@/components/donation-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SocialProgramsSection />
          <TransparencySection />
          <ImpactSection />
          <DonationSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
