"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/images/image.png",
    alt: "Modern dark kitchen with herringbone backsplash",
    category: "Kitchen",
  },
  {
    src: "/images/image.png",
    alt: "Luxury bedroom with dark wood wall panel",
    category: "Bedroom",
  },
  {
    src: "/images/image.png",
    alt: "White minimalist kitchen with wooden accents",
    category: "Kitchen",
  },
  {
    src: "/images/image.png",
    alt: "Elegant white living room with tufted sofa",
    category: "Living Room",
  },
  {
    src: "/images/image.png",
    alt: "Beige modern living room with curved sofa",
    category: "Living Room",
  },
  {
    src: "/images/image.png",
    alt: "Furniture mood board collage",
    category: "Inspiration",
  },
  {
    src: "/images/image.png",
    alt: "Interior design grid with wood panels",
    category: "Inspiration",
  },
  {
    src: "/images/image.png",
    alt: "Modern beige bedroom with upholstered headboard",
    category: "Bedroom",
  },
  {
    src: "/images/image.png",
    alt: "Colorful living room with wooden staircase",
    category: "Living Room",
  },
]

export function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>("All")

  const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))]
  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-5 py-2 text-sm font-medium transition-all duration-200 rounded-sm ${
              filter === category
                ? "bg-[#FFD700] text-[#0f0f0f]"
                : "bg-[#1a1a1a] text-gray-300 hover:bg-[#2a2a2a] hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden bg-[#1a1a1a] rounded-sm cursor-pointer group"
            onClick={() => setSelectedImage(image.src)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs text-[#FFD700] font-medium">{image.category}</span>
              <p className="text-sm text-white mt-1 line-clamp-2">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 text-white hover:text-[#FFD700] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image src={selectedImage || "/placeholder.svg"} alt="Selected image" fill className="object-contain" />
          </div>
        </div>
      )}
    </>
  )
}
