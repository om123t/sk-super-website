import { Header } from "@/components/header"
import { InspirationGallery } from "@/components/inspiration-gallery"
import { Footer } from "@/components/footer"

export default function InspirationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-12 pb-8 bg-[#F5F0EB]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p className="text-[#8B4513] font-medium tracking-wider uppercase text-sm mb-3">Gallery</p>
          <h1 className="text-3xl md:text-5xl font-bold text-[#3D2314] mb-4">Interior Inspirations</h1>
          <p className="text-[#6B5A4D] max-w-2xl">
            Discover stunning interior designs created using SK SUPER XDHMR boards and premium plywood. Get inspired for
            your next project.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <InspirationGallery />
        </div>
      </section>

      <Footer />
    </main>
  )
}
