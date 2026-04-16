"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowLeft, Satellite, Cpu, Radio, Battery, Antenna, Zap, Orbit } from "lucide-react"
import { PageWrapper } from "@/components/immersive/page-wrapper"
import { AnimatedSection, StaggeredContainer } from "@/components/immersive/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const SatelliteScene = dynamic(
  () => import("@/components/3d/satellite-scene").then(mod => ({ default: mod.SatelliteScene })),
  { ssr: false }
)

const capabilities = [
  {
    icon: Cpu,
    title: "Satellite Systems",
    description: "Complete satellite bus design and development with indigenous subsystems for Earth observation and communication missions.",
    features: ["Satellite bus", "Payload integration", "Mission control"]
  },
  {
    icon: Radio,
    title: "Communication Systems",
    description: "Advanced communication payloads with high-throughput data transmission and secure communication protocols.",
    features: ["High-throughput", "Secure comms", "Data transmission"]
  },
  {
    icon: Antenna,
    title: "RF & Antenna Systems",
    description: "Custom antenna designs and RF systems optimized for satellite communication and remote sensing applications.",
    features: ["Phased arrays", "RF design", "Signal processing"]
  },
  {
    icon: Battery,
    title: "Power & Thermal",
    description: "Advanced power management and thermal control systems ensuring reliable operation in space environment.",
    features: ["Solar arrays", "Battery systems", "Thermal control"]
  }
]

const projects = [
  {
    name: "PrithiviSat",
    description: "3U CubeSat mission for Earth observation with indigenous subsystems and AI-powered data processing.",
    status: "Assembly Phase",
    technologies: ["CubeSat Bus", "Earth Sensors", "AI Processing"]
  },
  {
    name: "Communication Satellite",
    description: "High-throughput communication satellite for broadband internet and secure government communications.",
    status: "Design Phase",
    technologies: ["Ka-band Systems", "Phased Arrays", "Secure Payloads"]
  }
]

const achievements = [
  "Successful PrithiviSat mission planning and subsystem development",
  "ISRO certification for satellite component manufacturing",
  "Export orders for satellite subsystems to international customers",
  "Multiple patents in satellite communication technology"
]

export default function SatellitePage() {
  return (
    <PageWrapper scene={<SatelliteScene />}>
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
                <div className="p-3 bg-purple-500/10 rounded-xl">
                  <Satellite className="h-8 w-8 text-purple-500" />
                </div>
                <Badge variant="secondary" className="text-sm">
                  Satellite Domain
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Indigenous{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Satellite Technology
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Building India's satellite infrastructure with fully indigenous systems, from CubeSats
                to communication satellites. Our technology enables sovereign space capabilities
                and advances India's position in the global space economy.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Orbit className="h-4 w-4" />
                  View PrithiviSat
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Satellite className="h-4 w-4" />
                  Satellite Portfolio
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
                Satellite{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Capabilities
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                End-to-end satellite development from design to deployment with indigenous technology.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 gap-8" staggerDelay={150}>
            {capabilities.map((capability) => (
              <Card key={capability.title} className="group hover:border-purple-500/50 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                      <capability.icon className="h-5 w-5 text-purple-500" />
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
                Satellite{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Projects
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Current satellite missions and development programs advancing India's space capabilities.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 gap-8" staggerDelay={150}>
            {projects.map((project) => (
              <Card key={project.name} className="group hover:border-purple-500/50 transition-all">
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
                Satellite{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Achievements
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Recognition for our contributions to India's satellite technology and space program.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-card/50 rounded-xl border border-border/50 hover:border-purple-500/50 transition-all"
              >
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Zap className="h-5 w-5 text-purple-500" />
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