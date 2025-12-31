import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-12 pb-8 bg-[#F5F0EB]">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-[#3D2314] mb-4">Terms of Service</h1>
          <p className="text-[#6B5A4D]">Please read these terms carefully before using our website and services</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 prose prose-sm md:prose-base max-w-none text-[#3D2314]">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#3D2314] mb-4">Website Usage</h2>
              <p className="text-[#6B5A4D]">
                This website is intended to provide general information about our products and services. All content on
                this site is the property of SK SUPER and may not be used without permission. You agree to use this
                website only for lawful purposes and in a way that does not violate the rights of others or restrict
                their use and enjoyment of the website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#3D2314] mb-4">Product Information</h2>
              <p className="text-[#6B5A4D] mb-4">
                Product details, availability, and specifications may change without prior notice. We provide accurate
                information to the best of our knowledge, but do not guarantee that all product descriptions and
                specifications are error-free or complete.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#3D2314] mb-4">Orders and Payments</h2>
              <p className="text-[#6B5A4D]">
                We do not process online orders or payments through this website. All inquiries should be made through
                our contact form or email. Pricing and availability are subject to change. Any quotes provided are valid
                only for the specified period and are not binding until confirmed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#3D2314] mb-4">Intellectual Property Rights</h2>
              <p className="text-[#6B5A4D]">
                All content, including but not limited to text, graphics, logos, images, and software, is the exclusive
                property of SK SUPER or its content suppliers and is protected by international copyright laws.
                Unauthorized use is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#3D2314] mb-4">Limitation of Liability</h2>
              <p className="text-[#6B5A4D]">
                To the maximum extent permitted by law, SK SUPER shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages resulting from your use of or inability to use the website
                or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#3D2314] mb-4">Modifications to Terms</h2>
              <p className="text-[#6B5A4D]">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                posting to the website. Your continued use of the website constitutes your acceptance of these modified
                terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#3D2314] mb-4">Contact Information</h2>
              <p className="text-[#6B5A4D]">
                If you have any questions about these terms of service, please contact us at Sksuperply@gmail.com or
                through our contact page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
