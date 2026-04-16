"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowLeft, Rocket, Cpu, Zap, Target, Flame, Gauge, Wind } from "lucide-react"
import { PageWrapper } from "@/components/immersive/page-wrapper"
import { AnimatedSection, StaggeredContainer } from "@/components/immersive/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const NeuralScene = dynamic(
  () => import("@/components/3d/neural-scene").then(mod => ({ default: mod.NeuralScene })),
  { ssr: false }
)

const capabilities = [
  {
    icon: Cpu,
    title: "Flight Control Systems",
    description: "Advanced avionics and flight control systems with real-time trajectory optimization and autonomous flight management.",
    features: ["Autonomous flight", "Trajectory optimization", "Real-time control"]
  },
  {
    icon: Flame,
    title: "Propulsion Technology",
    description: "Next-generation propulsion systems including hybrid rockets and advanced fuel technologies for efficient space access.",
    features: ["Hybrid propulsion", "Green fuels", "Thrust vectoring"]
  },
  {
    icon: Target,
    title: "Precision Guidance",
    description: "High-precision guidance and navigation systems with GPS-denied capabilities for accurate mission execution.",
    features: ["Precision targeting", "GPS-independent", "Inertial navigation"]
  },
  {
    icon: Gauge,
    title: "Telemetry & Monitoring",
    description: "Comprehensive telemetry systems for real-time monitoring of rocket performance and mission parameters.",
    features: ["Real-time telemetry", "Data analytics", "Mission monitoring"]
  }
]

const projects = [
  {
    name: "Indigenous Launch Vehicle",
    description: "Development of cost-effective launch vehicle for small satellite deployment and space access.",
    status: "Design Phase",
    technologies: ["Rocket Propulsion", "Avionics", "Composite Materials"]
  },
  {
    name: "Hybrid Rocket Engine",
    description: "Advanced hybrid propulsion system for safer and more efficient space launches.",
    status: "Testing",
    technologies: ["Hybrid Propulsion", "Fuel Technology", "Engine Design"]
  }
]

const achievements = [
  "Successful test flights of indigenous rocket systems",
  "Partnership with DRDO for missile technology",
  "Development of green propulsion technologies",
  "Multiple patents in rocket propulsion systems"
]

export default function RocketryPage() {
  return (
    <PageWrapper scene={<NeuralScene />}>
      {/* Header */}
      <section className="pt-32 pb-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <AnimatedSection>
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-orange-500/10 rounded-xl">
                  <Rocket className="h-8 w-8 text-orange-500" />
                </div>
                <Badge variant="secondary" className="text-sm">
                  Rocketry Domain
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Next-Generation{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Rocket Technology
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Developing advanced rocket systems with autonomous flight control, hybrid propulsion,
                and precision guidance. Our technology enables reliable and cost-effective access
                to space for India's growing satellite constellation.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Flame className="h-4 w-4" />
                  View Engines
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Rocket className="h-4 w-4" />
                  Launch Systems
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Rocketry{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Capabilities
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Cutting-edge rocket technology combining traditional propulsion with modern avionics.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 gap-8" staggerDelay={150}>
            {capabilities.map((capability) => (
              <Card key={capability.title} className="group hover:border-orange-500/50 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                      <capability.icon className="h-5 w-5 text-orange-500" />
                    </div>
                    <CardTitle className="text-xl">{capability.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{capability.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {capability.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 relative bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Rocketry{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Projects
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Active development programs advancing India's rocket technology capabilities.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 gap-8" staggerDelay={150}>
            {projects.map((project) => (
              <Card key={project.name} className="group hover:border-orange-500/50 transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <Badge variant="secondary">{project.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Rocketry{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Achievements
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Milestones in rocket technology development and successful test campaigns.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-card/50 rounded-xl border border-border/50 hover:border-orange-500/50 transition-all"
              >
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Zap className="h-5 w-5 text-orange-500" />
                </div>
                <p className="text-muted-foreground">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}