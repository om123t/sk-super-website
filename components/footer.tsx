import Link from "next/link"
import { Mail, MapPin, Youtube, Facebook } from "lucide-react"

const footerLinks = {
  products: [
    { label: "Plywood", href: "/products#plywood" },
    { label: "XDHMR Boards", href: "/products#xdhmr" },
    { label: "Flush Doors", href: "/products#flush-door" },
  ],
  inspiration: [
    { label: "Living Room", href: "/inspiration?room=living-room" },
    { label: "Bedroom", href: "/inspiration?room=bedroom" },
    { label: "Kitchen", href: "/inspiration?room=kitchen" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#1A1512] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold">
                S.K <span className="text-[#C4A77D]">SUPER</span>
              </h3>
              <p className="text-xs text-[#C4A77D] tracking-wider">XDHMR & PLYWOOD</p>
            </Link>
            <p className="text-sm text-[#8B8178] mb-4 sm:mb-6 leading-relaxed">
              SK SUPER is Greater Noida's trusted name in best XDHMR and Plywood products.
            </p>
            <p className="text-[#C4A77D] font-medium text-base sm:text-lg mb-4 sm:mb-6">दाम में कम | क्वालिटी में दम</p>
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="https://www.instagram.com/sksuperply"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-[#8B4513] rounded-full transition-colors"
              >
                <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1CAg7LsnE5/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-[#8B4513] rounded-full transition-colors"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.youtube.com/@SkSuperPly-c1f"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-[#8B4513] rounded-full transition-colors"
              >
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Products</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-[#8B8178] hover:text-[#C4A77D] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Inspiration Column */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Inspiration</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.inspiration.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-[#8B8178] hover:text-[#C4A77D] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-[#8B8178] hover:text-[#C4A77D] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="mailto:Sksuperply@gmail.com"
                  className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-[#8B8178] hover:text-[#C4A77D] transition-colors"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                  <span>Sksuperply@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-[#8B8178]">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                  <span>
                    Greater Noida
                    <br />
                    Uttar Pradesh, India
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-[#8B8178]">© 2025 SK SUPER. All rights reserved.</p>
          <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm text-[#8B8178]">
            <Link href="/privacy" className="hover:text-[#C4A77D] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#C4A77D] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
