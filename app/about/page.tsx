import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Target, Eye, Award, Shield, Bug, Sparkles } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide architects and builders with premium quality plywood and XDHMR boards that exceed industry standards while maintaining affordable pricing.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become the most trusted plywood brand in North India, known for uncompromising quality and exceptional customer service.",
  },
  {
    icon: Award,
    title: "Our Promise",
    description:
      "दाम में कम | क्वालिटी में दम – Affordable pricing without compromising on the quality that your projects deserve.",
  },
]

const badges = [
  {
    icon: Shield,
    title: "25-Year Warranty",
    description: "Long-lasting quality guaranteed",
  },
  {
    icon: Bug,
    title: "Termite & Borer Proof",
    description: "Protected against wood pests",
  },
  {
    icon: Sparkles,
    title: "Virus Protection Shield",
    description: "Anti-microbial surface coating",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative pt-12 pb-20 bg-[#F5F0EB] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#8B4513] font-medium tracking-wider uppercase text-sm mb-3">About Us</p>
              <h1 className="text-3xl md:text-5xl font-bold text-[#3D2314] mb-6">Building Excellence Since Day One</h1>
              <p className="text-[#8B4513] italic font-medium mb-4">
                "Industry का जाना माना नाम और DELHI, NCR, के लोगो की पहली पसंद"
              </p>
              <p className="text-[#6B5A4D] text-lg leading-relaxed mb-6">
                SK SUPER is Greater Noida's trusted name in best XDHMR and Plywood products.
              </p>
              <p className="text-[#6B5A4D] leading-relaxed">
                Our commitment to quality has made us the preferred choice for architects and interior designers across
                North India.
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image src="/images/inspiration-board.png" alt="SK SUPER Showroom" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="p-8 bg-[#F5F0EB] rounded-xl">
                  <div className="w-14 h-14 bg-[#8B4513] rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#3D2314] mb-3">{value.title}</h3>
                  <p className="text-[#6B5A4D] leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#3D2314] mb-12">
            Why Professionals Trust SK SUPER
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {badges.map((badge) => {
              const Icon = badge.icon
              return (
                <div key={badge.title} className="flex items-start gap-4 p-6 bg-[#F5F0EB] rounded-xl">
                  <div className="p-3 bg-[#8B4513] rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3D2314] mb-1">{badge.title}</h3>
                    <p className="text-sm text-[#6B5A4D]">{badge.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
