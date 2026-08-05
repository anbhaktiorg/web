// ===========================================
// SITE CONFIGURATION - EDIT THESE VALUES
// ===========================================

export const siteConfig = {
  // Organization Info
  organization: {
    name: "Yayasan AN Bhakti",
    shortName: "ANB",
    tagline: "Budaya, Pengabdian, dan Inovasi Nusantara",
    status: "Dalam proses pengembangan organisasi dan legalitas administratif.",
    legalNote: "Data dan laporan program akan diperbarui secara berkala sesuai perkembangan kegiatan yayasan.",
  },

  // Contact Info - REPLACE XXX WITH ACTUAL VALUES
  contact: {
    email: "info@anbhakti.org",
    whatsapp: "+62 xxx xxxx xxxx",
    address: "Jakarta, Indonesia",
    website: "https://anbhakti.org",
  },

  // Social Media Links - UPDATE WITH ACTUAL LINKS
  social: {
    facebook: "https://facebook.com/anbhakti",
    twitter: "https://twitter.com/anbhakti",
    instagram: "https://instagram.com/anbhakti",
    youtube: "https://youtube.com/@anbhakti",
    linkedin: "https://linkedin.com/company/anbhakti",
  },

  // Images - Cloudinary hosted
  images: {
    logo: "https://res.cloudinary.com/detv1tbep/image/upload/q_auto/f_auto/v1778060448/ANB_logo._kxmdii.png",
    hero: "https://res.cloudinary.com/detv1tbep/image/upload/q_auto/f_auto/v1778062352/ChatGPT_Image_May_6_2026_05_11_06_PM_bhfcrq.png",
    program: "https://res.cloudinary.com/detv1tbep/image/upload/q_auto/f_auto/v1778062352/ChatGPT_Image_May_6_2026_05_11_26_PM_gtmd8i.png",
    communityDiscussion: "https://res.cloudinary.com/detv1tbep/image/upload/q_auto/f_auto/v1778063834/ChatGPT_Image_May_6_2026_05_36_51_PM_sqcy9a.png",
    volunteerActivity: "https://res.cloudinary.com/detv1tbep/image/upload/q_auto/f_auto/v1778063254/ChatGPT_Image_May_6_2026_05_17_37_PM_odl4sh.png",
    groupCommunity: "https://res.cloudinary.com/detv1tbep/image/upload/q_auto/f_auto/v1778063251/ChatGPT_Image_May_6_2026_05_20_12_PM_kfzedw.png",
  },

  // Social Programs - CMS-like data
  socialPrograms: [
    {
      id: "pasar-tradisional",
      title: "Pasar Tradisional Gratis",
      titleId: "Pasar Tradisional Gratis",
      description: "Free basic needs assistance and grassroots economic empowerment through food distribution, local MSME support, and community-based social activities.",
      descriptionId: "Program bantuan kebutuhan pokok dan pemberdayaan ekonomi rakyat kecil melalui distribusi pangan, dukungan UMKM lokal, dan kegiatan sosial berbasis komunitas.",
      icon: "shopping-basket",
      featured: true,
      image: "https://res.cloudinary.com/detv1tbep/image/upload/q_auto/f_auto/v1778062352/ChatGPT_Image_May_6_2026_05_11_26_PM_gtmd8i.png",
      location: "Jakarta, Indonesia",
      beneficiaries: "500+ keluarga",
    },
    {
      id: "pendampingan-komunitas",
      title: "Cultural Community Mentoring",
      titleId: "Pendampingan Komunitas Budaya",
      description: "Mentoring local art and cultural communities through documentation, digital training, social media publication, and strengthening regional cultural identity.",
      descriptionId: "Pendampingan komunitas seni dan budaya lokal melalui dokumentasi, pelatihan digital, publikasi media sosial, dan penguatan identitas budaya daerah.",
      icon: "users",
      featured: false,
    },
    {
      id: "workshop-muda",
      title: "Youth Workshops",
      titleId: "Workshop Generasi Muda",
      description: "Creative workshops on Nusantara culture, digital media, music, visual arts, and gotong royong values for the younger generation.",
      descriptionId: "Workshop kreatif mengenai budaya Nusantara, media digital, musik, visual, dan nilai gotong royong untuk generasi muda.",
      icon: "graduation-cap",
      featured: false,
    },
    {
      id: "digitalisasi",
      title: "Cultural Digitalization",
      titleId: "Digitalisasi Budaya",
      description: "Documentation of local culture through digital platforms, video documentaries, podcasts, and modern creative media.",
      descriptionId: "Pendokumentasian budaya lokal melalui platform digital, video dokumenter, podcast, dan media kreatif modern.",
      icon: "monitor-smartphone",
      featured: false,
    },
  ],

  // Transparency commitments
  transparency: [
    {
      title: "Fund Usage",
      titleId: "Penggunaan Dana",
      description: "Transparent allocation and reporting of all donations",
      descriptionId: "Alokasi dan pelaporan transparan untuk semua donasi",
      icon: "wallet",
    },
    {
      title: "Community Collaboration",
      titleId: "Kolaborasi Komunitas",
      description: "Partnerships with local communities and organizations",
      descriptionId: "Kemitraan dengan komunitas dan organisasi lokal",
      icon: "handshake",
    },
    {
      title: "Activity Reporting",
      titleId: "Pelaporan Kegiatan",
      description: "Regular updates on program progress and outcomes",
      descriptionId: "Update berkala tentang kemajuan dan hasil program",
      icon: "file-text",
    },
    {
      title: "Sustainable Development",
      titleId: "Pengembangan Program Berkelanjutan",
      description: "Long-term planning for lasting community impact",
      descriptionId: "Perencanaan jangka panjang untuk dampak komunitas yang berkelanjutan",
      icon: "trending-up",
    },
  ],

  // Gallery items with Cloudinary images
  gallery: [
    { 
      id: "1", 
      title: "Cultural Community Gathering", 
      titleId: "Kegiatan Komunitas Budaya", 
      image: "https://res.cloudinary.com/detv1tbep/image/upload/q_auto/f_auto/v1778062352/ChatGPT_Image_May_6_2026_05_11_06_PM_bhfcrq.png", 
      alt: "Cultural community gathering by AN Bhakti",
      category: "community" 
    },
    { 
      id: "2", 
      title: "Free Traditional Market", 
      titleId: "Pasar Tradisional Gratis", 
      image: "https://res.cloudinary.com/detv1tbep/image/upload/q_auto/f_auto/v1778062352/ChatGPT_Image_May_6_2026_05_11_26_PM_gtmd8i.png", 
      alt: "Free traditional market social program",
      category: "market" 
    },
    { 
      id: "3", 
      title: "Community Discussion", 
      titleId: "Diskusi Komunitas", 
      image: "https://res.cloudinary.com/detv1tbep/image/upload/q_auto/f_auto/v1778063834/ChatGPT_Image_May_6_2026_05_36_51_PM_sqcy9a.png", 
      alt: "Community cultural discussion session",
      category: "community" 
    },
    { 
      id: "4", 
      title: "Volunteer Activity", 
      titleId: "Kegiatan Relawan", 
      image: "https://res.cloudinary.com/detv1tbep/image/upload/q_auto/f_auto/v1778063254/ChatGPT_Image_May_6_2026_05_17_37_PM_odl4sh.png", 
      alt: "Volunteers preparing social activity materials",
      category: "social" 
    },
    { 
      id: "5", 
      title: "Community Group Photo", 
      titleId: "Foto Grup Komunitas", 
      image: "https://res.cloudinary.com/detv1tbep/image/upload/q_auto/f_auto/v1778063251/ChatGPT_Image_May_6_2026_05_20_12_PM_kfzedw.png", 
      alt: "Community and cultural volunteers group photo",
      category: "community" 
    },
  ],

  // Partners - ADD ACTUAL PARTNER LOGOS
  partners: [
    { name: "Partner 1", logo: "/partners/partner-1.png" },
    { name: "Partner 2", logo: "/partners/partner-2.png" },
  ],
}

export type SiteConfig = typeof siteConfig
