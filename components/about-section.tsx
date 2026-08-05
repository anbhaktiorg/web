"use client"

import { useLanguage } from "@/lib/language-context"
import { siteConfig } from "@/lib/site-config"
import { motion } from "framer-motion"
import { Target, Eye, Users, BookOpen, Shield, Heart } from "lucide-react"

export function AboutSection() {
  const { t, language } = useLanguage()

  const features = [
    { icon: Users, label: language === "id" ? "Berbasis Komunitas" : "Community Based" },
    { icon: Heart, label: language === "id" ? "Gotong Royong" : "Mutual Cooperation" },
    { icon: BookOpen, label: language === "id" ? "Edukasi Budaya" : "Cultural Education" },
    { icon: Shield, label: language === "id" ? "Pelestarian Warisan" : "Heritage Protection" },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            {t("about.label")}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("about.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            {t("about.description")}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden relative">
              {/* Placeholder for image - representing Indonesian archipelago */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Heart className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-lg font-medium text-foreground mb-2">
                    {language === "id" ? "Gerakan Budaya & Sosial" : "Cultural & Social Movement"}
                  </p>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    {language === "id" 
                      ? "Membangun inisiatif budaya kolaboratif berbasis nilai Nusantara" 
                      : "Building collaborative cultural initiatives based on Nusantara values"}
                  </p>
                </div>
              </div>
              
              {/* Decorative dots */}
              <div className="absolute top-4 right-4 flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div className="w-2 h-2 rounded-full bg-accent/60" />
                <div className="w-2 h-2 rounded-full bg-accent/30" />
              </div>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
                >
                  <feature.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Mission */}
            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t("about.mission")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("about.mission.text")}</p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t("about.vision")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("about.vision.text")}</p>
                </div>
              </div>
            </div>

            {/* Organization Status */}
            <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  {language === "id" ? "Status Organisasi:" : "Organization Status:"}
                </span>{" "}
                {siteConfig.organization.status}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
