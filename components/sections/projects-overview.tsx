import Link from "next/link"
import { ArrowUpRight, Satellite, Brain, Telescope } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TRLBadge } from "@/components/trl-badge"

const projects = [
  {
    id: "prithivisat",
    name: "PrithiviSat",
    description: "Indigenous 2U CubeSat mission for Earth observation and atmospheric research in Low Earth Orbit.",
    icon: Satellite,
    trl: 5,
    specs: ["2U Form Factor", "LEO Orbit", "Earth Observation"],
    status: "Integration Phase",
    href: "/projects/prithivisat",
  },
  {
    id: "irai-q2",
    name: "IRAI-Q2",
    description: "AI-powered astronomy intelligence platform for real-time celestial object tracking and anomaly detection.",
    icon: Brain,
    trl: 4,
    specs: ["Transformer-based", "Real-time Analysis", "Multi-spectral"],
    status: "Development",
    href: "/projects/irai-q2",
  },
  {
    id: "astronomy-tools",
    name: "Ground Systems",
    description: "Advanced telescope systems and ground-based observation infrastructure for research and tracking.",
    icon: Telescope,
    trl: 6,
    specs: ["High-res Imaging", "Automated Tracking", "Data Pipeline"],
    status: "Operational",
    href: "/projects/astronomy-tools",
  },
]

export function ProjectsOverview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Active Projects</h2>
          <p className="text-lg text-muted-foreground">
            Our portfolio spans satellite systems, AI intelligence platforms, and ground-based 
            observation infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={project.href}>
              <Card className="group h-full bg-card hover:bg-secondary/30 border-border hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <TRLBadge level={project.trl} />
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.specs.map((spec) => (
                      <span
                        key={spec}
                        className="px-2 py-1 bg-secondary/50 text-xs text-muted-foreground rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm text-muted-foreground">{project.status}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
