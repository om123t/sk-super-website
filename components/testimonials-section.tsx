"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Interior Designer, Delhi",
    content:
      "SK SUPER's XDHMR boards have become my go-to choice for kitchen cabinets. The moisture resistance is exceptional, and the quality is consistently excellent.",
    rating: 4.5,
  },
  {
    name: "Priya Agarwal",
    role: "Architect, Noida",
    content:
      "Working with SK SUPER has been a pleasure. Their plywood quality matches premium brands at a much better price point. Highly recommended for professional projects.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Contractor, Greater Noida",
    content:
      "The 25-year warranty gives our clients confidence. We've used SK SUPER products in over 50 projects without any complaints.",
    rating: 4,
  },
  {
    name: "Sunita Verma",
    role: "Homeowner, Noida",
    content:
      "Our entire home furniture is made with SK SUPER plywood. Two years in, and everything looks as good as new. True value for money!",
    rating: 3.5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-5 h-5 text-[#C4A77D]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>,
      )
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-5 h-5">
          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <div className="absolute top-0 left-0 overflow-hidden w-2.5">
            <svg className="w-5 h-5 text-[#C4A77D]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>,
      )
    }

    return stars
  }

  return (
    <section className="py-20 bg-[#3D2314]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#C4A77D] font-medium tracking-wider uppercase text-sm mb-3">Building Trust</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Customers Say</h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center">
                    <Quote className="w-12 h-12 text-[#C4A77D] mx-auto mb-6" />
                    <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">"{testimonial.content}"</p>
                    <div className="flex items-center justify-center gap-1 mb-4">{renderStars(testimonial.rating)}</div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-[#C4A77D] text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all",
                    index === currentIndex ? "bg-[#C4A77D] w-6" : "bg-white/30 hover:bg-white/50",
                  )}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
