"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const { t, language } = useLanguage()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-background/95">
      <div className="container relative mx-auto px-4 lg:px-8 pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">{t("hero.tagline")}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
              {t("hero.title")}
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty">
              {t("hero.subtitle")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
                <a href="#programs">
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="group backdrop-blur-sm" asChild>
                <a href="#about">
                  <Play className="mr-2 w-4 h-4 group-hover:text-accent transition-colors" />
                  {t("hero.secondary")}
                </a>
              </Button>
            </div>

            {/* Stats - Realistic Early Stage */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50">
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-foreground">
                  {language === "id" ? "Komunitas" : "Community"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {language === "id" ? "Berbasis gotong royong" : "Gotong royong based"}
                </p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-foreground">
                  {language === "id" ? "Budaya" : "Culture"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {language === "id" ? "Pelestarian nilai" : "Value preservation"}
                </p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-foreground">
                  {language === "id" ? "Aksi" : "Action"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {language === "id" ? "Nyata & terukur" : "Real & measurable"}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Visual - Logo on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse" />
              
              {/* Logo container */}
              <div className="relative w-full h-full rounded-full bg-card/80 backdrop-blur-md shadow-2xl flex items-center justify-center border border-border/50">
                <img
                  src="https://res.cloudinary.com/detv1tbep/image/upload/q_auto/f_auto/v1778060448/ANB_logo._kxmdii.png"
                  alt="AN Bhakti Logo"
                  className="w-48 h-48 object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-foreground/50"
          />
        </div>
      </motion.div>
    </section>
  )
}
