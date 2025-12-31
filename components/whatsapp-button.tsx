import { MessageCircle } from "lucide-react"

interface WhatsAppButtonProps {
  productName?: string
  className?: string
}

export function WhatsAppButton({ productName, className = "" }: WhatsAppButtonProps) {
  const phoneNumber = "919876543210" // Replace with actual number
  const message = productName
    ? `Hi, I'm interested in ${productName}. Please share more details.`
    : "Hi, I'm interested in your products. Please share more details."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold transition-all duration-200 rounded-sm ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>Inquire via WhatsApp</span>
    </a>
  )
}
