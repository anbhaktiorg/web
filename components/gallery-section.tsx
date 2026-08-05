"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { siteConfig } from "@/lib/site-config"
import { motion, AnimatePresence } from "framer-motion"
import { Camera, X, Play } from "lucide-react"

export function GallerySection() {
  const { language } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState("all")

  const sectionTitle = language === "id" ? "Dokumentasi Kegiatan" : "Activity Documentation"
  const sectionSubtitle = language === "id" 
    ? "Momen-momen kegiatan sosial, budaya, dan pemberdayaan masyarakat."
    : "Moments from social, cultural, and community empowerment activities."

  const categories = [
    { id: "all", label: language === "id" ? "Semua" : "All" },
    { id: "social", label: language === "id" ? "Kegiatan Sosial" : "Social Activities" },
    { id: "market", label: language === "id" ? "Pasar Gratis" : "Free Market" },
    { id: "community", label: language === "id" ? "Komunitas" : "Community" },
  ]

  const filteredGallery = activeCategory === "all" 
    ? siteConfig.gallery 
    : siteConfig.gallery.filter(item => item.category === activeCategory)

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Camera className="w-4 h-4" />
            {language === "id" ? "Galeri" : "Gallery"}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-accent/10 text-accent"
                  : "bg-muted text-muted-foreground hover:bg-accent/5 hover:text-accent"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Masonry-like layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedImage(item.image)}
              className={`group relative rounded-2xl overflow-hidden bg-muted cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2 aspect-[4/3]" : "aspect-square"
              }`}
            >
              {/* Actual Image */}
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-white font-medium text-sm">
                    {language === "id" ? item.titleId : item.title}
                  </p>
                  <p className="text-white/70 text-xs mt-1">
                    {language === "id" ? "Klik untuk memperbesar" : "Click to enlarge"}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upload CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted/50 border border-dashed border-border text-muted-foreground">
            <Play className="w-4 h-4" />
            <span className="text-sm">
              {language === "id" 
                ? "Video dokumentasi akan segera hadir"
                : "Documentation videos coming soon"}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Gallery image enlarged"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
