"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Palette, Ruler, Calculator, Eye, Layers } from "lucide-react"

const tools = [
  {
    id: "visualizer",
    icon: Eye,
    title: "Design Visualizer",
    description:
      "Visualize how our plywood and XDHMR boards will look in your living room, bedroom, kitchen, or office space.",
    image: "/images/services-showcase.png", // updated visualizer image to show carpentry services
    cta: { label: "View Gallery", href: "/inspiration" },
  },
  {
    id: "calculator",
    icon: Calculator,
    title: "Material Calculator",
    description: "Calculate the exact quantity of plywood or XDHMR boards needed for your project based on dimensions.",
    image: "/images/image.png",
    cta: { label: "Contact for Estimate", href: "/contact" },
  },
  {
    id: "color-picker",
    icon: Palette,
    title: "Color & Finish Guide",
    description: "Explore our range of wood finishes, laminates, and textures to match your interior design vision.",
    image: "/images/image.png",
    cta: { label: "View Products", href: "/products" },
  },
  {
    id: "thickness",
    icon: Layers,
    title: "Thickness Guide",
    description:
      "Find the right thickness for your application - from 4mm decorative panels to 25mm structural boards.",
    image: "/images/image.png",
    cta: { label: "View Specifications", href: "/products" },
  },
  {
    id: "measurement",
    icon: Ruler,
    title: "Site Measurement",
    description:
      "Our team provides on-site measurement services to ensure accurate material requirements for your project.",
    image: "/images/image.png",
    cta: { label: "Book a Visit", href: "/contact" },
  },
]

export function ToolsSection() {
  const [activeTool, setActiveTool] = useState(tools[0])

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D2314] mb-3 sm:mb-4">
            Our Tools <span className="text-[#8B4513]">Perfect Tools for Dream Spaces</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6B5A4D] max-w-2xl mx-auto px-2">
            Explore our resources designed to simplify and enhance your home and workspace design journey.
          </p>
        </div>

        {/* Tools Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Tool Tabs */}
          <div className="space-y-2 sm:space-y-3">
            {tools.map((tool) => {
              const Icon = tool.icon
              return (
                <button
                  key={tool.id}
                  onClick={() => setActiveTool(tool)}
                  className={cn(
                    "w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl text-left transition-all",
                    activeTool.id === tool.id
                      ? "bg-white shadow-lg border-l-4 border-[#8B4513]"
                      : "bg-white/50 hover:bg-white hover:shadow-md",
                  )}
                >
                  <div
                    className={cn(
                      "p-2 sm:p-3 rounded-lg flex-shrink-0",
                      activeTool.id === tool.id ? "bg-[#8B4513] text-white" : "bg-[#F5F0EB] text-[#8B4513]",
                    )}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base text-[#3D2314]">{tool.title}</h3>
                    {activeTool.id === tool.id && (
                      <p className="text-xs sm:text-sm text-[#6B5A4D] mt-1 hidden sm:block">{tool.description}</p>
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Tool Preview */}
          <div className="relative mt-6 lg:mt-0">
            <div className="relative aspect-[3/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={activeTool.image || "/placeholder.svg"}
                alt={activeTool.title}
                fill
                className="object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{activeTool.title}</h3>
                <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{activeTool.description}</p>
                <Link
                  href={activeTool.cta.href}
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-white hover:bg-[#F5F0EB] text-[#3D2314] font-medium text-xs sm:text-sm rounded-md transition-colors"
                >
                  {activeTool.cta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
