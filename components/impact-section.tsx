"use client"

import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { Fingerprint, TrendingUp, Heart, Users } from "lucide-react"

export function ImpactSection() {
  const { language } = useLanguage()

  const content = {
    label: language === "id" ? "Dampak Kami" : "Our Impact",
    title: language === "id" ? "Membangun Gerakan Nyata" : "Building Real Movement",
    subtitle: language === "id" 
      ? "Inisiatif budaya kolaboratif dan program pemberdayaan masyarakat berbasis gotong royong."
      : "Collaborative cultural initiatives and community empowerment programs based on gotong royong.",
  }

  const impacts = [
    {
      icon: Fingerprint,
      title: language === "id" ? "Penguatan Identitas" : "Identity Strengthening",
      description: language === "id" 
        ? "Menciptakan kebanggaan terhadap identitas budaya lokal dan nasional di tengah arus global."
        : "Creating pride in local and national cultural identity amidst global currents.",
      metric: language === "id" ? "Program Aktif" : "Active Programs",
      metricDesc: language === "id" ? "Kegiatan budaya berbasis komunitas" : "Community-based cultural activities",
    },
    {
      icon: TrendingUp,
      title: language === "id" ? "Pemberdayaan Ekonomi" : "Economic Empowerment",
      description: language === "id" 
        ? "Menumbuhkan ekonomi komunitas akar rumput melalui pemanfaatan budaya dan ekonomi kreatif secara etis."
        : "Growing grassroots community economy through ethical cultural utilization and creative economy.",
      metric: language === "id" ? "UMKM Lokal" : "Local MSMEs",
      metricDesc: language === "id" ? "Dukungan untuk pedagang dan pengrajin" : "Support for traders and artisans",
    },
    {
      icon: Heart,
      title: language === "id" ? "Gotong Royong" : "Mutual Cooperation",
      description: language === "id" 
        ? "Membangun ketahanan sosial yang tinggi melalui nilai toleransi, kemanusiaan, dan gotong royong Pancasila."
        : "Building high social resilience through tolerance, humanity, and Pancasila gotong royong values.",
      metric: language === "id" ? "Komunitas" : "Communities",
      metricDesc: language === "id" ? "Jaringan kolaborasi budaya dan sosial" : "Cultural and social collaboration network",
    },
  ]

  const ecosystemPartners = language === "id" 
    ? ["Pemerintah", "Akademisi", "Swasta", "Komunitas", "LSM"]
    : ["Government", "Academia", "Private Sector", "Community", "NGOs"]

  return (
    <section id="impact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            {content.label}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {content.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <impact.icon className="w-7 h-7 text-accent" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-foreground mb-3">{impact.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{impact.description}</p>

                {/* Metrics - More humble */}
                <div className="pt-6 border-t border-border">
                  <p className="text-lg font-bold text-accent">{impact.metric}</p>
                  <p className="text-sm text-muted-foreground">{impact.metricDesc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ecosystem Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-center text-lg font-semibold text-foreground mb-8">
            {language === "id" ? "Ekosistem Kolaborasi" : "Collaborative Ecosystem"}
          </h3>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {ecosystemPartners.map((partner) => (
              <div
                key={partner}
                className="px-6 py-3 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-accent/30 transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Building Movement Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground italic max-w-xl mx-auto">
            {language === "id" 
              ? "Gerakan tahap awal untuk pemberdayaan budaya dan sosial — berkembang bersama komunitas."
              : "Early-stage movement for cultural and social empowerment — growing together with communities."}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
