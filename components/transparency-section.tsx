"use client"

import { useLanguage } from "@/lib/language-context"
import { siteConfig } from "@/lib/site-config"
import { motion } from "framer-motion"
import { 
  Wallet, 
  Handshake, 
  FileText, 
  TrendingUp,
  Shield,
  Eye
} from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  "wallet": Wallet,
  "handshake": Handshake,
  "file-text": FileText,
  "trending-up": TrendingUp,
}

export function TransparencySection() {
  const { language } = useLanguage()

  const sectionTitle = language === "id" ? "Transparansi & Komitmen" : "Transparency & Commitment"
  const sectionSubtitle = language === "id" 
    ? "Kami berkomitmen untuk keterbukaan dan akuntabilitas dalam setiap kegiatan."
    : "We are committed to openness and accountability in all our activities."

  return (
    <section id="transparency" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            {language === "id" ? "Komitmen Kami" : "Our Commitment"}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Transparency Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {siteConfig.transparency.map((item, index) => {
            const Icon = iconMap[item.icon] || Eye
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {language === "id" ? item.titleId : item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === "id" ? item.descriptionId : item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Transparency Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-6 rounded-2xl bg-muted/50 border border-border text-center">
            <Eye className="w-8 h-8 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground leading-relaxed">
              {language === "id" 
                ? siteConfig.organization.legalNote
                : "Data and program reports will be updated periodically according to the foundation's activity progress."}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
