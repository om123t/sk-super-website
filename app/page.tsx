import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { InspirationGallery } from "@/components/inspiration-gallery"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Mail } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: "plywood",
    name: "Premium Plywood",
    tagline: "25 Year warranty | High-Quality Wood Panels",
    image: "/images/plywood-product.jpg",
    description: "High-quality hardwood panels ideal for furniture and interiors with smooth surface finish.",
  },
  {
    id: "xdhmr",
    name: "XDHMR Boards",
    tagline: " 10 Years Warranty | Extra Dense | High Moisture Resistant",
    image: "/images/xdhmr-product.png",
    description: "Superior water resistance perfect for kitchens and bathrooms with pre-laminated finish.",
  },
  {
    id: "flush-door",
    name: "Flush Doors",
    tagline: "25 Year warranty | Waterproof",
    image: "/images/flush-door-product.jpg",
    description: "Premium Gurjan wood doors with 25-year warranty and 100% waterproof construction.",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroCarousel />

      {/* Products Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <p className="text-[#8B4513] font-medium tracking-wider uppercase text-xs sm:text-sm mb-2 sm:mb-3">
              Our Products
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D2314] mb-3 sm:mb-4">
              Premium Building Materials
            </h2>
            <p className="text-sm sm:text-base text-[#8B4513] italic font-medium mb-2">
              "HAR JARURAT KA REPLY ... SK SUPER PLY"
            </p>
            <p className="text-sm sm:text-base text-[#6B5A4D] max-w-2xl mx-auto px-2">
              Explore SK SUPER's range of high-quality plywood, XDHMR boards, and flush doors for your construction
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-[#F5F0EB] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative h-64 sm:h-72 bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300 p-4"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#3D2314] mb-1">{product.name}</h3>
                  <p className="text-xs sm:text-sm text-[#8B4513] font-medium mb-3">{product.tagline}</p>
                  <p className="text-sm text-[#6B5A4D] mb-5">{product.description}</p>
                  <Link
                    href={`/products#${product.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#8B4513] hover:text-[#6D3610] transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#8B4513] hover:bg-[#6D3610] text-white font-medium rounded-md transition-colors text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Inspiration Gallery */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F5F0EB]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-[#8B4513] font-medium tracking-wider uppercase text-xs sm:text-sm mb-2 sm:mb-3">
              Our Portfolio
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D2314] mb-3 sm:mb-4">
              Interior Inspirations
            </h2>
            <p className="text-sm sm:text-base text-[#6B5A4D] max-w-2xl mx-auto px-2">
              Explore our collection of premium interiors crafted with SK SUPER XDHMR & Plywood
            </p>
          </div>
          <InspirationGallery limit={6} />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Services Image */}
            <div className="relative h-96 sm:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/services-showcase.jpg"
                alt="Trusted Carpenter Services"
                fill
                className="object-cover"
              />
            </div>

            {/* Services Content */}
            <div>
              <p className="text-[#8B4513] font-medium tracking-wider uppercase text-xs sm:text-sm mb-3">
                Our Services
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D2314] mb-4">
                Trusted Carpenter Services
              </h2>
              <p className="text-[#8B4513] italic font-medium mb-4">
                "S.K SUPER प्लाई बोर्ड जो है Water Resistant, Durable, Termite proof, 25 साल की warranty"
              </p>
              <p className="text-sm sm:text-base text-[#6B5A4D] mb-6">
                SK SUPER provides comprehensive carpentry and woodworking services backed by years of expertise and a
                commitment to quality craftsmanship.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#8B4513] mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#6B5A4D]">Custom framing and design</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#8B4513] mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#6B5A4D]">Wooden furniture craftsmanship</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#8B4513] mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#6B5A4D]">Professional project planning</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#8B4513] mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#6B5A4D]">Quality furniture repair & restoration</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#8B4513] hover:bg-[#6D3610] text-white font-medium rounded-md transition-colors mt-8 text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Testimonials */}
      <TestimonialsSection />

      <Footer />
    </main>
  )
}
