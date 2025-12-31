"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Home, Package, Info, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/products", label: "Products Catalog", icon: Package },
  { href: "/about", label: "About Us", icon: Info },
  { href: "/contact", label: "Contact Us", icon: Phone },
]

export function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 left-6 z-50 p-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors rounded-sm"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6 text-[#FFD700]" />
      </button>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-80 bg-[#0f0f0f] z-50 transform transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#2a2a2a]">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                SK <span className="text-[#FFD700]">SUPER</span>
              </h2>
              <p className="text-xs text-gray-500 mt-1">XDHMR & Plywood</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-[#2a2a2a] transition-colors rounded-sm"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-8">
            <ul className="space-y-2 px-4">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-4 px-4 py-4 transition-all duration-200 rounded-sm group",
                        isActive ? "bg-[#FFD700] text-[#0f0f0f]" : "text-gray-300 hover:bg-[#1a1a1a] hover:text-white",
                      )}
                    >
                      <Icon
                        className={cn(
                          "w-5 h-5 transition-transform group-hover:scale-110",
                          isActive ? "text-[#0f0f0f]" : "text-[#FFD700]",
                        )}
                      />
                      <span className="font-medium tracking-wide">{item.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-[#2a2a2a]">
            <p className="text-sm text-[#FFD700] font-medium mb-1">दाम में कम | क्वालिटी में दम</p>
            <p className="text-xs text-gray-500">Greater Noida, India</p>
          </div>
        </div>
      </aside>
    </>
  )
}
