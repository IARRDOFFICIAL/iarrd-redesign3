import { Award, Newspaper, Trophy } from "lucide-react"

const pressItems = [
  {
    type: "award",
    icon: Trophy,
    title: "Space Tech Innovation Award",
    source: "India Startup Awards 2024",
    date: "Dec 2024",
  },
  {
    type: "press",
    icon: Newspaper,
    title: "IARRD Secures IN-SPACe Authorization",
    source: "Economic Times",
    date: "Oct 2024",
  },
  {
    type: "grant",
    icon: Award,
    title: "DST Research Grant Recipient",
    source: "Government of India",
    date: "Aug 2024",
  },
]

export function PressSection() {
  return (
    <section className="py-24 bg-secondary/10 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recognition & Press</h2>
          <p className="text-lg text-muted-foreground">
            Awards, media coverage, and industry recognition.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pressItems.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2">{item.date}</p>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
