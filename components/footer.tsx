"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { siteConfig } from "@/lib/site-config"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const { language } = useLanguage()

  const quickLinks = [
    { href: "#about", label: language === "id" ? "Tentang" : "About" },
    { href: "#programs", label: language === "id" ? "Program" : "Programs" },
    { href: "#gallery", label: language === "id" ? "Dokumentasi" : "Documentation" },
    { href: "#transparency", label: language === "id" ? "Transparansi" : "Transparency" },
    { href: "#donate", label: language === "id" ? "Donasi" : "Donate" },
    { href: "#contact", label: language === "id" ? "Kontak" : "Contact" },
  ]

  const programs = [
    { href: "#programs", label: "Pasar Tradisional Gratis" },
    { href: "#programs", label: language === "id" ? "Pendampingan Komunitas" : "Community Mentoring" },
    { href: "#programs", label: language === "id" ? "Workshop Generasi Muda" : "Youth Workshops" },
    { href: "#programs", label: language === "id" ? "Digitalisasi Budaya" : "Cultural Digitalization" },
  ]


  const footerDescription = language === "id" 
    ? "Gerakan budaya dan pengabdian sosial berbasis nilai Nusantara, gotong royong, pendidikan budaya, dan inovasi kreatif."
    : "Cultural and social service movement based on Nusantara values, mutual cooperation, cultural education, and creative innovation."

  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img 
                src={siteConfig.images.logo}
                alt="AN Bhakti Logo"
                className="w-10 h-10 object-contain"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-background">AN Bhakti</p>
                <p className="text-xs text-background/60">anbhakti.org</p>
              </div>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed mb-6">
              {footerDescription}
            </p>

            {/* Social links removed as requested */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">
              {language === "id" ? "Tautan Cepat" : "Quick Links"}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-background mb-4">
              {language === "id" ? "Program" : "Programs"}
            </h4>
            <ul className="space-y-2">
              {programs.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">
              {language === "id" ? "Kontak" : "Contact"}
            </h4>
            <div className="space-y-3">
              <a 
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.contact.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Jalan Nusa Indah I / Nusan Indah Raya RT 001 RW 004 No. 22, Malaka Jaya - Perumnas Kelender, Duren Sawit, 13460, Jakarta Timur, DKI Jakarta</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © 2026 AN Bhakti. All rights reserved. Managed by Yayasan Bhakti Abdi Nusantara Jaya.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
