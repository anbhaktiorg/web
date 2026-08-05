"use client"

import { useLanguage } from "@/lib/language-context"
import { siteConfig } from "@/lib/site-config"
import { motion } from "framer-motion"
import { 
  ShoppingBasket, 
  Users, 
  GraduationCap, 
  MonitorSmartphone,
  MapPin,
  Heart,
  Camera,
  Ticket
} from "lucide-react"
import { Button } from "@/components/ui/button"

const iconMap: Record<string, React.ElementType> = {
  "shopping-basket": ShoppingBasket,
  "users": Users,
  "graduation-cap": GraduationCap,
  "monitor-smartphone": MonitorSmartphone,
}

export function SocialProgramsSection() {
  const { language } = useLanguage()

  const sectionTitle = language === "id" ? "Program Sosial & Pengabdian" : "Social Programs & Community Service"
  const sectionSubtitle = language === "id" 
    ? "Kegiatan nyata berbasis gotong royong, pemberdayaan masyarakat, dan pelestarian nilai budaya Nusantara."
    : "Real activities based on mutual cooperation, community empowerment, and preservation of Nusantara cultural values."

  const featuredProgram = siteConfig.socialPrograms.find(p => p.featured)
  const otherPrograms = siteConfig.socialPrograms.filter(p => !p.featured)

  return (
    <section id="programs" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            {language === "id" ? "Program Kami" : "Our Programs"}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Featured Program: Pasar Tradisional Gratis */}
        {featuredProgram && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-card border border-border mb-12"
          >
            <div className="grid gap-0">
              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 w-fit">
                  <ShoppingBasket className="w-4 h-4" />
                  <span>{language === "id" ? "Program Unggulan" : "Featured Program"}</span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {language === "id" ? featuredProgram.titleId : featuredProgram.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {language === "id" ? featuredProgram.descriptionId : featuredProgram.description}
                </p>

                {/* Program Details */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {featuredProgram.location && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{featuredProgram.location}</span>
                    </div>
                  )}
                  {featuredProgram.beneficiaries && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Heart className="w-4 h-4 text-primary" />
                      <span>{featuredProgram.beneficiaries}</span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Ticket className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {language === "id" ? "Voucher belanja gratis untuk keluarga yang membutuhkan" : "Free shopping vouchers for families in need"}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <ShoppingBasket className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {language === "id" ? "Suasana pasar tradisional dengan pedagang lokal" : "Traditional market atmosphere with local vendors"}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Camera className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {language === "id" ? "Pertunjukan budaya dan hiburan" : "Cultural performances and entertainment"}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {language === "id" ? "Mempererat silaturahmi melalui gotong royong" : "Community bonding through gotong royong"}
                    </p>
                  </div>
                </div>

                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit" asChild>
                  <a href="#donate">
                    {language === "id" ? "Dukung Program Ini" : "Support This Program"}
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPrograms.map((program, index) => {
            const Icon = iconMap[program.icon] || Users
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {language === "id" ? program.titleId : program.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === "id" ? program.descriptionId : program.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
