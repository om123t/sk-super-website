"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, MapPin, Youtube } from "lucide-react"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.948 0-3.204.013-3.663.072-4.949.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-14.4z" />
    </svg>
  )
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-12 pb-8 bg-[#F5F0EB]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p className="text-[#8B4513] font-medium tracking-wider uppercase text-sm mb-3">Contact Us</p>
          <h1 className="text-3xl md:text-5xl font-bold text-[#3D2314] mb-4">Let's Get In Touch</h1>
          <p className="text-[#6B5A4D] max-w-2xl">Have questions about our products? Reach out to our team directly.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#3D2314] mb-8">Get In Touch</h2>

              <div className="space-y-4 mb-10">
                <a
                  href="mailto:Sksuperply@gmail.com"
                  className="flex items-start gap-4 p-5 bg-[#F5F0EB] rounded-xl hover:shadow-md transition-shadow group"
                >
                  <div className="p-3 bg-[#8B4513] rounded-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3D2314] group-hover:text-[#8B4513] transition-colors">Email</h3>
                    <p className="text-[#6B5A4D]">Sksuperply@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 bg-[#F5F0EB] rounded-xl">
                  <div className="p-3 bg-[#8B4513] rounded-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3D2314]">Location</h3>
                    <p className="text-[#6B5A4D]">
                      Greater Noida
                      <br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                {/* Follow Us */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-[#3D2314] mb-4">Follow Us</h3>
                  <a
                    href="https://www.instagram.com/sksuperply"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-medium rounded-xl transition-transform hover:scale-[1.02]"
                  >
                    <InstagramIcon className="w-6 h-6" />
                    Instagram
                  </a>
                  <a
                    href="https://www.youtube.com/@SkSuperPly-c1f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-[#FF0000] text-white font-medium rounded-xl transition-transform hover:scale-[1.02]"
                  >
                    <Youtube className="w-6 h-6" />
                    YouTube
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-[#F5F0EB] rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#3D2314] mb-4">Get In Touch</h2>
                <p className="text-[#6B5A4D] mb-8">
                  For product inquiries and more information, please email us directly:
                </p>

                <a
                  href="mailto:Sksuperply@gmail.com?subject=Product%20Inquiry%20from%20Website&body=Hello%20SK%20SUPER%20Team,%0A%0AProduct%20Inquiry%3A%0A(Please%20enter%20your%20inquiry%20here)%0A%0AYour%20Email%3A%20(Please%20enter%20your%20email)%0AYour%20Name%3A%20(Please%20enter%20your%20name)%0A%0AThank%20you!"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#8B4513] hover:bg-[#6D3610] text-white font-medium rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>

                <p className="text-[#6B5A4D] text-sm mt-8">
                  Whether you need product specifications, bulk orders, or custom requirements, our team is ready to
                  assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
