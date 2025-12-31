import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SK SUPER | Premium XDHMR & Plywood - Greater Noida",
  description:
    "SK SUPER: The Foundation of Premium Interiors. Premium XDHMR boards and BWP Plywood with 25-Year Warranty. Termite & Borer Proof. दाम में कम | क्वालिटी में दम",
  keywords: ["plywood", "XDHMR", "interior", "Greater Noida", "BWP plywood", "kitchen", "bedroom", "furniture"],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
