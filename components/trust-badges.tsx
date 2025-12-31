import { Shield, Bug, Sparkles } from "lucide-react"

const badges = [
  {
    icon: Shield,
    title: "25-Year Warranty",
    description: "Long-lasting quality guaranteed",
  },
  {
    icon: Bug,
    title: "Termite & Borer Proof",
    description: "Protected against wood pests",
  },
  {
    icon: Sparkles,
    title: "Virus Protection Shield",
    description: "Anti-microbial surface coating",
  },
]

export function TrustBadges() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {badges.map((badge, index) => {
        const Icon = badge.icon
        return (
          <div
            key={index}
            className="flex items-start gap-4 p-6 bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#2a2a2a] rounded-sm hover:border-[#FFD700]/50 transition-colors group"
          >
            <div className="p-3 bg-[#FFD700] rounded-sm group-hover:scale-110 transition-transform">
              <Icon className="w-6 h-6 text-[#0f0f0f]" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">{badge.title}</h3>
              <p className="text-sm text-gray-400">{badge.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
