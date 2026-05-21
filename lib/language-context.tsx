"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "id"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.programs": "Programs",
    "nav.impact": "Impact",
    "nav.contact": "Contact",
    "nav.donate": "Support Us",

    // Hero
    "hero.tagline": "Preserving Identity, Weaving Civilization",
    "hero.title": "Abdi Nusantara Bhakti",
    "hero.subtitle": "Bridging the noble values of Nusantara culture with the implementation of Pancasila through real action.",
    "hero.cta": "Explore Our Programs",
    "hero.secondary": "Learn More",

    // About
    "about.label": "About Us",
    "about.title": "Guardians of Nusantara Heritage",
    "about.description": "Abdi Nusantara Bhakti is a globally-funded foundation dedicated to preserving, developing, and promoting Indonesian cultural heritage. We believe that culture is not merely a legacy of the past, but a compass for our civilization's future.",
    "about.mission": "Our Mission",
    "about.mission.text": "To internalize the noble values of Pancasila through cultural practice, connecting tradition with innovation.",
    "about.vision": "Our Vision",
    "about.vision.text": "A resilient Indonesian civilization rooted in identity, prosperity, and national unity.",

    // Pillars
    "pillars.label": "Our Pillars",
    "pillars.title": "Three Pillars of Transformation",
    "pillars.raga.title": "Raga (Physical)",
    "pillars.raga.subtitle": "Preservation & Innovation",
    "pillars.raga.description": "Keeping the physical form of culture competitive and relevant in the global arena.",
    "pillars.jiwa.title": "Jiwa (Soul)",
    "pillars.jiwa.subtitle": "Character Strengthening",
    "pillars.jiwa.description": "Grounding Pancasila ideology into daily practice and digital interactions.",
    "pillars.abdi.title": "Abdi (Action)",
    "pillars.abdi.subtitle": "Community Empowerment",
    "pillars.abdi.description": "Delivering real solutions based on gotong royong for socio-economic challenges.",

    // Programs
    "programs.label": "Our Programs",
    "programs.title": "Programs & Initiatives",
    "programs.preservation.title": "Cultural Preservation",
    "programs.preservation.description": "Organizing Nusantara Cultural Festival, documenting local traditions, and intensive art & culture training programs.",
    "programs.education.title": "Cultural Education",
    "programs.education.description": "Pancasila value workshops, cultural classes for youth, and national cultural seminars.",
    "programs.empowerment.title": "Community Empowerment",
    "programs.empowerment.description": "Culture-based MSME development, indigenous community assistance, and creative economy acceleration.",
    "programs.digital.title": "Digitalization",
    "programs.digital.description": "Nusantara digital culture platform, educational social media content, and cultural digital archives.",
    "programs.market.title": "Pasar Tradisional Gratis",
    "programs.market.description": "A free traditional market program providing vouchers to underprivileged communities, featuring market activities, entertainment, and cultural introductions.",
    "programs.market.feature1": "Free shopping vouchers for families in need",
    "programs.market.feature2": "Traditional market atmosphere with local vendors",
    "programs.market.feature3": "Cultural performances and entertainment",
    "programs.market.feature4": "Community bonding through gotong royong",

    // Impact
    "impact.label": "Our Impact",
    "impact.title": "Building a Resilient Civilization",
    "impact.identity.title": "Identity Strengthening",
    "impact.identity.description": "Creating pride in local and national cultural identity amidst global currents.",
    "impact.prosperity.title": "Prosperity Enhancement",
    "impact.prosperity.description": "Growing grassroots community economy through ethical cultural utilization and creative economy.",
    "impact.unity.title": "National Unity",
    "impact.unity.description": "Building high social resilience through tolerance, humanity, and Pancasila gotong royong values.",

    // CTA
    "cta.title": "Join Us in Preserving Our Heritage",
    "cta.description": "Together, we can ensure that the noble values of Nusantara culture continue to thrive for future generations.",
    "cta.button": "Get Involved",
    "cta.quote": "\"Culture is not merely a legacy of the past, but a compass for our civilization's future.\"",

    // Footer
    "footer.description": "Bridging the noble values of Nusantara culture with the implementation of Pancasila through real action.",
    "footer.quicklinks": "Quick Links",
    "footer.programs": "Programs",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.address": "Jakarta, Indonesia",

    // Donation
    "donate.label": "Support Our Mission",
    "donate.title": "Make a Donation",
    "donate.description": "Your contribution helps preserve Indonesian cultural heritage and empower communities across the archipelago.",
    "donate.selectAmount": "Select Amount",
    "donate.oneTime": "One-time",
    "donate.monthly": "Monthly",
    "donate.customAmount": "Enter custom amount",
    "donate.paymentMethod": "Payment Method",
    "donate.submit": "Donate Now",
    "donate.secured": "Secured by Bayarind Payment Gateway",
    "donate.yourImpact": "Your Impact",
    "donate.whyTrust": "Why Trust Us",
    "donate.trustSecure": "256-bit SSL encryption",
    "donate.trustBank": "Registered with Bank Indonesia",
    "donate.trustGlobal": "International payments supported",
    "donate.poweredBy": "Powered by",
    "donate.bayarindInfo": "Indonesia's trusted payment gateway",
  },
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.programs": "Program",
    "nav.impact": "Dampak",
    "nav.contact": "Kontak",
    "nav.donate": "Dukung Kami",

    // Hero
    "hero.tagline": "Menjaga Jati Diri, Merajut Peradaban",
    "hero.title": "Abdi Nusantara Bhakti",
    "hero.subtitle": "Menjembatani nilai luhur budaya Nusantara dengan implementasi Pancasila melalui aksi nyata.",
    "hero.cta": "Jelajahi Program Kami",
    "hero.secondary": "Pelajari Lebih Lanjut",

    // About
    "about.label": "Tentang Kami",
    "about.title": "Penjaga Warisan Nusantara",
    "about.description": "Abdi Nusantara Bhakti adalah yayasan yang didanai secara global yang berdedikasi untuk melestarikan, mengembangkan, dan mempromosikan warisan budaya Indonesia. Kami percaya bahwa kebudayaan bukan sekadar warisan masa lalu, melainkan kompas untuk masa depan peradaban kita.",
    "about.mission": "Misi Kami",
    "about.mission.text": "Menginternalisasikan nilai-nilai luhur Pancasila melalui praktik kebudayaan, menghubungkan tradisi dengan inovasi.",
    "about.vision": "Visi Kami",
    "about.vision.text": "Peradaban Indonesia yang tangguh berakar pada identitas, kesejahteraan, dan persatuan nasional.",

    // Pillars
    "pillars.label": "Pilar Kami",
    "pillars.title": "Tiga Pilar Transformasi Sosial",
    "pillars.raga.title": "Raga (Fisik)",
    "pillars.raga.subtitle": "Pelestarian & Inovasi",
    "pillars.raga.description": "Menjaga wujud fisik budaya agar tetap kompetitif dan relevan di ranah global.",
    "pillars.jiwa.title": "Jiwa (Nilai)",
    "pillars.jiwa.subtitle": "Penguatan Karakter",
    "pillars.jiwa.description": "Membumikan ideologi Pancasila ke dalam praktik keseharian dan interaksi digital.",
    "pillars.abdi.title": "Abdi (Aksi)",
    "pillars.abdi.subtitle": "Pemberdayaan Masyarakat",
    "pillars.abdi.description": "Menghadirkan solusi nyata beralaskan gotong royong untuk tantangan sosial-ekonomi.",

    // Programs
    "programs.label": "Program Kami",
    "programs.title": "Program & Inisiatif",
    "programs.preservation.title": "Pelestarian Budaya",
    "programs.preservation.description": "Penyelenggaraan Festival Budaya Nusantara, dokumentasi tradisi lokal, dan pelatihan seni & budaya intensif.",
    "programs.education.title": "Pendidikan Budaya",
    "programs.education.description": "Workshop nilai Pancasila berbasis budaya, kelas budaya untuk generasi muda, dan seminar kebudayaan nasional.",
    "programs.empowerment.title": "Pemberdayaan Masyarakat",
    "programs.empowerment.description": "Pengembangan UMKM berbasis budaya, pendampingan komunitas adat, dan akselerasi ekonomi kreatif lokal.",
    "programs.digital.title": "Digitalisasi",
    "programs.digital.description": "Platform digital budaya Nusantara, produksi konten edukasi medsos, dan pembuatan arsip digital kebudayaan.",
    "programs.market.title": "Pasar Tradisional Gratis",
    "programs.market.description": "Program pasar tradisional gratis yang memberikan voucher kepada masyarakat kurang mampu, dengan kegiatan pasar, hiburan, dan pengenalan budaya.",
    "programs.market.feature1": "Voucher belanja gratis untuk keluarga yang membutuhkan",
    "programs.market.feature2": "Suasana pasar tradisional dengan pedagang lokal",
    "programs.market.feature3": "Pertunjukan budaya dan hiburan",
    "programs.market.feature4": "Mempererat silaturahmi melalui gotong royong",

    // Impact
    "impact.label": "Dampak Kami",
    "impact.title": "Membangun Peradaban Tangguh",
    "impact.identity.title": "Penguatan Identitas",
    "impact.identity.description": "Menciptakan kebanggaan terhadap identitas budaya lokal dan nasional di tengah arus global.",
    "impact.prosperity.title": "Peningkatan Kesejahteraan",
    "impact.prosperity.description": "Menumbuhkan ekonomi komunitas akar rumput melalui pemanfaatan budaya dan ekonomi kreatif secara etis.",
    "impact.unity.title": "Persatuan Nasional",
    "impact.unity.description": "Membangun ketahanan sosial yang tinggi melalui nilai toleransi, kemanusiaan, dan gotong royong Pancasila.",

    // CTA
    "cta.title": "Bergabunglah Bersama Kami",
    "cta.description": "Bersama, kita dapat memastikan bahwa nilai-nilai luhur budaya Nusantara terus berkembang untuk generasi mendatang.",
    "cta.button": "Ikut Berpartisipasi",
    "cta.quote": "\"Kebudayaan bukan sekadar warisan masa lalu, melainkan arah kompas masa depan peradaban kita.\"",

    // Footer
    "footer.description": "Menjembatani nilai luhur budaya Nusantara dengan implementasi Pancasila melalui aksi nyata.",
    "footer.quicklinks": "Tautan Cepat",
    "footer.programs": "Program",
    "footer.contact": "Kontak",
    "footer.rights": "Hak cipta dilindungi.",
    "footer.address": "Jakarta, Indonesia",

    // Donation
    "donate.label": "Dukung Misi Kami",
    "donate.title": "Berikan Donasi",
    "donate.description": "Kontribusi Anda membantu melestarikan warisan budaya Indonesia dan memberdayakan masyarakat di seluruh nusantara.",
    "donate.selectAmount": "Pilih Nominal",
    "donate.oneTime": "Sekali",
    "donate.monthly": "Bulanan",
    "donate.customAmount": "Masukkan nominal lainnya",
    "donate.paymentMethod": "Metode Pembayaran",
    "donate.submit": "Donasi Sekarang",
    "donate.secured": "Diamankan oleh Bayarind Payment Gateway",
    "donate.yourImpact": "Dampak Donasi Anda",
    "donate.whyTrust": "Mengapa Percaya Kami",
    "donate.trustSecure": "Enkripsi SSL 256-bit",
    "donate.trustBank": "Terdaftar di Bank Indonesia",
    "donate.trustGlobal": "Pembayaran internasional didukung",
    "donate.poweredBy": "Didukung oleh",
    "donate.bayarindInfo": "Payment gateway terpercaya Indonesia",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
