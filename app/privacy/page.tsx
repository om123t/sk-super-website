import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-12 pb-8 bg-[#F5F0EB]">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-[#3D2314] mb-4">Privacy Policy</h1>
          <p className="text-[#6B5A4D]">Understanding how we collect, use, and protect your information</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 prose prose-sm md:prose-base max-w-none text-[#3D2314]">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#3D2314] mb-4">Information We Collect</h2>
              <p className="text-[#6B5A4D]">
                We collect only the information you voluntarily share with us, such as your name, phone number, or email
                when you contact us. This information is used solely to respond to your inquiries and provide details
                about our plywood, XDHMR boards, and flush door products.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#3D2314] mb-4">How We Use Your Information</h2>
              <p className="text-[#6B5A4D] mb-4">The information you provide is used for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 text-[#6B5A4D]">
                <li>Responding to your product inquiries and questions</li>
                <li>Providing information about our products and services</li>
                <li>Communicating about orders or quotes</li>
                <li>Improving our website and customer service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#3D2314] mb-4">Data Protection</h2>
              <p className="text-[#6B5A4D]">
                We do not sell or share your personal information with third parties, except as required by law. We take
                reasonable steps to protect your data through secure communication channels and practices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#3D2314] mb-4">Your Rights</h2>
              <p className="text-[#6B5A4D]">
                You have the right to request access to, update, or delete your personal information. Please contact us
                at Sksuperply@gmail.com if you wish to exercise any of these rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#3D2314] mb-4">Policy Updates</h2>
              <p className="text-[#6B5A4D]">
                We may update this privacy policy from time to time. Changes will be posted on this page with an updated
                revision date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#3D2314] mb-4">Contact Us</h2>
              <p className="text-[#6B5A4D]">
                If you have questions about this privacy policy, please contact us at Sksuperply@gmail.com or reach out
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
