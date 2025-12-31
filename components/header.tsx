"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  {
    label: "Products",
    href: "/products",
    submenu: [
      { href: "/products#plywood", label: "Plywood" },
      { href: "/products#xdhmr", label: "XDHMR Boards" },
      { href: "/products#flush-door", label: "Flush Doors" },
    ],
  },
  {
    label: "Inspiration",
    href: "/inspiration",
    submenu: [
      { href: "/inspiration?room=living-room", label: "Living Room" },
      { href: "/inspiration?room=bedroom", label: "Bedroom" },
      { href: "/inspiration?room=kitchen", label: "Kitchen" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#8B4513] text-white py-2 px-3 sm:px-4 text-xs sm:text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          <p className="font-medium hidden sm:block">दाम में कम | क्वालिटी में दम</p>
          <div className="flex items-center gap-2 sm:gap-6 flex-wrap">
            <a
              href="mailto:Sksuperply@gmail.com"
              className="flex items-center gap-1 sm:gap-2 hover:text-[#FFD700] transition-colors"
            >
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden lg:inline">Sksuperply@gmail.com</span>
            </a>
            <span className="text-white/60 hidden sm:block">|</span>
            <span className="text-white/80 text-xs">Greater Noida</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm",
        )}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1 sm:gap-2">
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-bold text-[#3D2314] tracking-tight">S.K SUPER</span>
                <span className="text-[0.65rem] sm:text-xs text-[#8B4513] tracking-wider">XDHMR & PLYWOOD</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md",
                      pathname === item.href
                        ? "text-[#8B4513]"
                        : "text-[#3D2314] hover:text-[#8B4513] hover:bg-[#F5F0EB]",
                    )}
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Submenu */}
                  {item.submenu && activeSubmenu === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-[#E8E0D8] py-2 animate-in fade-in-0 zoom-in-95">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="block px-4 py-3 text-sm text-[#3D2314] hover:bg-[#F5F0EB] hover:text-[#8B4513] transition-colors"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#3D2314] hover:bg-[#F5F0EB] rounded-md"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full max-w-full sm:w-96 w-full bg-white z-50 shadow-2xl animate-in slide-in-from-right overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-[#E8E0D8] sticky top-0 bg-white">
              <span className="text-lg font-bold text-[#3D2314]">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-[#F5F0EB] rounded-md">
                <X className="w-5 h-5 text-[#3D2314]" />
              </button>
            </div>
            <nav className="p-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-[#3D2314] font-medium hover:bg-[#F5F0EB] rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1 mt-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-[#6B5A4D] hover:text-[#8B4513] transition-colors"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  )
}
