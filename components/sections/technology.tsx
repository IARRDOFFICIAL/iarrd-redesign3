import { Cpu, Shield, Zap } from "lucide-react"

const differentiators = [
  {
    icon: Cpu,
    title: "AI-Driven Systems",
    description: "Proprietary machine learning models for autonomous satellite operations, real-time image processing, and predictive analytics for space missions.",
  },
  {
    icon: Shield,
    title: "Indigenous Development",
    description: "End-to-end in-house design and manufacturing capabilities, reducing dependency on foreign components and ensuring strategic autonomy.",
  },
  {
    icon: Zap,
    title: "Dual-Use Technology",
    description: "Platforms designed for both civilian research and defense applications, maximizing value across multiple market segments.",
  },
]

export function TechnologySection() {
  return (
    <section className="py-24 bg-secondary/10 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Edge</h2>
          <p className="text-lg text-muted-foreground">
            What sets IARRD apart in India&apos;s emerging space technology ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentiators.map((item) => (
            <div key={item.title} className="group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
