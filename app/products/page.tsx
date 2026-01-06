import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Mail } from "lucide-react"

const products = [
  {
    id: "plywood",
    name: "Premium Plywood",
    tagline: "High-Quality Wood Panels | 25 Year warranty",
    image: "/images/plywood-product.jpg",
    specs: [
      { label: "Sizes Available", value: "7×4 ft, 8×4 ft" },
      { label: "Thickness Options", value: "6mm, 12mm, 18mm, 19mm" },
      { label: "Grade", value: "Premium Quality" },
      { label: "Warranty", value: "25 Years" },
      { label: "Application", value: "Furniture, Interiors" },
    ],
    features: [
      "High-quality hardwood construction",
      "Smooth surface finish for laminates",
      "Ideal for wardrobes & furniture",
      "Consistent thickness throughout",
      "25-Year Warranty",
    ],
  },
  {
    id: "xdhmr",
    name: "XDHMR Boards",
    tagline: "10 Year warranty | Extra Dense, High Moisture Resistant",
    image: "/images/xdhmr-product.png",
    specs: [
      { label: "Size", value: "8×4 ft" },
      { label: "Surface", value: "Prelam White Laminates" },
      { label: "5.5mm Thickness", value: "Plain, OSB, BSB" },
      { label: "12mm Thickness", value: "Plain, OSB, BSB" },
      { label: "17mm Thickness", value: "Plain, OSB, BSB" },
    ],
    features: [
      "Superior water resistance for kitchen & bathroom",
      "Pre-laminated with white finish",
      "Available in Plain, OSB, and BSB variants",
      "High screw holding capacity",
      "10-Year Warranty",
    ],
  },
  {
    id: "flush-door",
    name: "Flush Doors",
    tagline: "25 Year warranty | Waterproof | Gurjan",
    image: "/images/flush-door-product.jpg",
    specs: [
      { label: "Warranty", value: "25 Years" },
      { label: "Thickness", value: "32mm" },
      { label: "Water Resistance", value: "100% Waterproof" },
      { label: "Core Material", value: "Gurjan Wood" },
    ],
    features: [
      "25-year manufacturer warranty",
      "100% waterproof construction",
      "Premium Gurjan wood core",
      "Ideal for main doors & bathrooms",
    ],
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-12 pb-8 bg-[#F5F0EB]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p className="text-[#8B4513] font-medium tracking-wider uppercase text-sm mb-3">Products Catalog</p>
          <h1 className="text-3xl md:text-5xl font-bold text-[#3D2314] mb-4">Premium XDHMR & Plywood</h1>
          <p className="text-[#6B5A4D] max-w-2xl">
            Explore our range of high-quality boards crafted for architects and builders who demand excellence.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-20">
          {products.map((product, index) => (
            <div key={product.id} id={product.id} className="scroll-mt-24">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Product Image */}
                <div
                  className={`relative overflow-hidden rounded-2xl shadow-xl bg-gray-100 ${
                    product.id === "plywood" || product.id === "flush-door"
                      ? "aspect-[3/4]"
                      : product.id === "xdhmr"
                        ? "aspect-[4/3]"
                        : "aspect-[4/3]"
                  } ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className={
                      product.id === "plywood" || product.id === "xdhmr" || product.id === "flush-door"
                        ? "object-contain p-2"
                        : "object-cover"
                    }
                  />
                </div>

                {/* Product Details */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#3D2314] mb-2">{product.name}</h2>
                  <p className="text-[#8B4513] font-medium mb-6">{product.tagline}</p>

                  {/* Specs Table */}
                  <div className="bg-[#F5F0EB] rounded-xl overflow-hidden mb-6">
                    <div className="px-6 py-4 bg-[#3D2314]">
                      <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                        Technical Specifications
                      </h3>
                    </div>
                    <table className="w-full">
                      <tbody>
                        {product.specs.map((spec, i) => (
                          <tr key={i} className="border-b border-[#E8E0D8] last:border-0">
                            <td className="px-6 py-3 text-sm text-[#6B5A4D]">{spec.label}</td>
                            <td className="px-6 py-3 text-sm text-[#3D2314] font-medium text-right">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-[#3D2314] uppercase tracking-wider mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#6B5A4D]">
                          <CheckCircle className="w-4 h-4 text-[#8B4513] mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="mailto:Sksuperply@gmail.com?subject=Product%20Inquiry%20-%20SK%20SUPER"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B4513] hover:bg-[#6D3610] text-white font-medium rounded-md transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Inquire via Email
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#3D2314]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need More Information?</h2>
          <p className="text-white/80 mb-8">
            Contact us for product specifications, bulk orders, or custom requirements for your project.
          </p>
          <a
            href="mailto:Sksuperply@gmail.com?subject=Product%20Inquiry"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#8B4513] hover:bg-[#6D3610] text-white font-medium rounded-md transition-colors"
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
