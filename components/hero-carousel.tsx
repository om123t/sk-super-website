"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "/images/inspiration-board.png",
    title: "Explore The Elegance of Wood",
    subtitle:
      "Experience the art of superior craftsmanship with SK SUPER where innovation meets unmatched quality to create enduring spaces.",
    cta: { label: "Explore Products", href: "/products" },
  },
  {
    image: "/images/inspiration-board.png",
    title: "Transform Your Bedroom",
    subtitle: "Premium XDHMR & Plywood solutions for luxurious and lasting bedroom interiors.",
    cta: { label: "View Inspiration", href: "/inspiration?room=bedroom" },
  },
  {
    image: "/images/inspiration-board.png",
    title: "Crafted for Excellence",
    subtitle: "Our goal is to create interiors that you will love for years to come.",
    cta: { label: "Learn More", href: "/about" },
  },
]

const roomCategories = [
  { label: "Living Room", href: "/inspiration?room=living-room" },
  { label: "Bedroom", href: "/inspiration?room=bedroom" },
  { label: "Kitchen", href: "/inspiration?room=kitchen" },
  { label: "Minimal Interiors", href: "/inspiration?room=minimal" },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, nextSlide])

  return (
    <section className="relative">
      {/* Main Carousel */}
      <div
        className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 w-full">
                <div className="max-w-2xl">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-8 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <Link
                    href={slide.cta.href}
                    className="inline-flex items-center gap-2 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-[#8B4513] hover:bg-[#6D3610] text-white font-medium text-sm sm:text-base rounded-md transition-colors"
                  >
                    {slide.cta.label}
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows - Hidden on mobile */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors hidden sm:block"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors hidden sm:block"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "rounded-full transition-all",
                index === currentSlide
                  ? "bg-white w-6 sm:w-8 h-2.5 sm:h-3"
                  : "bg-white/50 hover:bg-white/70 w-2.5 h-2.5 sm:w-3 sm:h-3",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Room Categories Bar */}
      <div className="bg-[#F5F0EB] border-t border-[#E8E0D8]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <div className="flex items-center gap-2 py-3 sm:py-4 overflow-x-auto scrollbar-hide">
            {roomCategories.map((category) => (
              <Link
                key={category.label}
                href={category.href}
                className="flex-shrink-0 px-4 sm:px-6 py-2 sm:py-2.5 bg-white hover:bg-[#8B4513] hover:text-white text-[#3D2314] font-medium text-xs sm:text-sm rounded-full border border-[#E8E0D8] hover:border-[#8B4513] transition-all"
              >
                {category.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
