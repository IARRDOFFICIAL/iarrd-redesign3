import { CheckCircle2, Circle, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"

const milestones = [
  {
    phase: "Foundation",
    title: "Company Founded",
    description: "IARRD established with a vision to democratize space technology in India.",
    status: "completed",
    year: "2022",
  },
  {
    phase: "Development",
    title: "First Prototype",
    description: "CubeSat subsystem prototypes developed and tested in controlled environments.",
    status: "completed",
    year: "2023",
  },
  {
    phase: "Validation",
    title: "Environmental Testing",
    description: "Thermal vacuum and vibration testing completed for critical subsystems.",
    status: "completed",
    year: "2024",
  },
  {
    phase: "Integration",
    title: "System Integration",
    description: "Full satellite integration and functional testing in progress.",
    status: "current",
    year: "2025",
  },
  {
    phase: "Launch",
    title: "Mission Launch",
    description: "PrithiviSat deployment to Low Earth Orbit via PSLV rideshare.",
    status: "upcoming",
    year: "2026",
  },
]

export function TimelineSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg text-muted-foreground">
            Key milestones in IARRD&apos;s path to becoming a leading space technology company.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.phase}
                className={cn(
                  "relative flex flex-col md:flex-row gap-8 md:gap-16",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Content */}
                <div className={cn(
                  "flex-1 pl-12 md:pl-0",
                  index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
                )}>
                  <div className={cn(
                    "inline-block px-3 py-1 rounded-full text-xs font-medium mb-3",
                    milestone.status === "completed" && "bg-emerald-500/20 text-emerald-400",
                    milestone.status === "current" && "bg-primary/20 text-primary",
                    milestone.status === "upcoming" && "bg-muted text-muted-foreground"
                  )}>
                    {milestone.year} - {milestone.phase}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>

                {/* Icon */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center",
                    milestone.status === "completed" && "bg-emerald-500/20",
                    milestone.status === "current" && "bg-primary/20",
                    milestone.status === "upcoming" && "bg-muted"
                  )}>
                    {milestone.status === "completed" && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    )}
                    {milestone.status === "current" && (
                      <Rocket className="w-5 h-5 text-primary" />
                    )}
                    {milestone.status === "upcoming" && (
                      <Circle className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </div>

                {/* Empty Space for Layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
