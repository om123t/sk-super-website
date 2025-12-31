import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/inspiration-board.png" alt="SK SUPER Interiors" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#8B4513] text-white p-6 rounded-xl shadow-xl">
              <p className="text-4xl font-bold">25+</p>
              <p className="text-sm text-white/80">Years Warranty</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[#8B4513] font-medium tracking-wider uppercase text-sm mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D2314] mb-6">India's Trusted Plywood Brand</h2>
            <p className="text-[#8B4513] italic font-medium mb-4">
              "लम्बे समय तक चलने वाला और ARCHITECT व इंटीरियर डिज़ाइनर की पहली पसंद"
            </p>
            <p className="text-[#6B5A4D] leading-relaxed mb-6">
              SK SUPER is your one-stop destination for all your interior furnishing needs. We are proud to be
              recognized as one of the best plywood manufacturers in Greater Noida by so many homeowners and
              professionals.
            </p>
            <p className="text-[#6B5A4D] leading-relaxed mb-8">
              We provide functional benefits with our innovative range of products, whether it is the living room,
              bedroom, bathroom, or kitchen. Our products come with special features and technical specifications that
              ensure long-lasting quality.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-[#F5F0EB] rounded-lg">
                <p className="text-3xl font-bold text-[#8B4513]">750+</p>
                <p className="text-sm text-[#6B5A4D]">Happy Customers</p>
              </div>
              <div className="p-4 bg-[#F5F0EB] rounded-lg">
                <p className="text-3xl font-bold text-[#8B4513]">100+</p>
                <p className="text-sm text-[#6B5A4D]">Projects Completed</p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#8B4513] font-medium hover:gap-3 transition-all"
            >
              Read More
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
