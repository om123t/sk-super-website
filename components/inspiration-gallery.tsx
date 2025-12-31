"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const galleryImages = [
  {
    src: "/images/kitchen-modern-luxury.webp",
    alt: "Modern luxury kitchen with dark navy cabinetry and wooden island",
    category: "Kitchen",
  },
  {
    src: "/images/bedroom-warm-wood.jpg",
    alt: "Contemporary bedroom with warm wooden bed frame and matching wardrobe",
    category: "Bedroom",
  },
  {
    src: "/images/kitchen-dark-modern.png",
    alt: "Premium dark modern kitchen with herringbone backsplash and marble countertops",
    category: "Kitchen",
  },
  {
    src: "/images/living-room-minimalist.png",
    alt: "Minimalist modern living room with white tufted sofa and natural wood accents",
    category: "Living Room",
  },
  {
    src: "/images/living-room-entertainment.png",
    alt: "Luxury entertainment living room with wood paneling and built-in shelving",
    category: "Living Room",
  },
  {
    src: "/images/bedroom-luxury-contemporary.webp",
    alt: "Luxury contemporary bedroom with rattan bed frame and woven accent wall",
    category: "Bedroom",
  },
]

interface InspirationGalleryProps {
  limit?: number
  showFilters?: boolean
}

export function InspirationGallery({ limit, showFilters = true }: InspirationGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("All")

  const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))]
  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)
  const displayImages = limit ? filteredImages.slice(0, limit) : filteredImages

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % displayImages.length : 0))
  const prevImage = () =>
    setSelectedImage((prev) => (prev !== null ? (prev - 1 + displayImages.length) % displayImages.length : 0))

  return (
    <>
      {/* Filter Buttons */}
      {showFilters && (
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={cn(
                "px-6 py-2.5 text-sm font-medium transition-all duration-200 rounded-full border",
                filter === category
                  ? "bg-[#8B4513] text-white border-[#8B4513]"
                  : "bg-white text-[#3D2314] border-[#E8E0D8] hover:border-[#8B4513] hover:text-[#8B4513]",
              )}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayImages.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-[4/3] overflow-hidden bg-[#F5F0EB] rounded-xl cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="inline-block px-3 py-1 bg-[#8B4513] text-white text-xs font-medium rounded-full mb-2">
                {image.category}
              </span>
              <p className="text-sm text-white line-clamp-2">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Link */}
      {limit && filteredImages.length > limit && (
        <div className="text-center mt-10">
          <Link
            href="/inspiration"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#8B4513] hover:bg-[#6D3610] text-white font-medium rounded-md transition-colors"
          >
            View All Inspirations
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      )}

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center" onClick={closeLightbox}>
          <button
            className="absolute top-6 right-6 p-2 text-white hover:text-[#8B4513] transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full p-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={displayImages[selectedImage].src || "/placeholder.svg"}
              alt={displayImages[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <span className="inline-block px-4 py-2 bg-[#8B4513] text-white text-sm font-medium rounded-full">
              {displayImages[selectedImage].category}
            </span>
          </div>
        </div>
      )}
    </>
  )
}
