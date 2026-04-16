"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowLeft, Waves, Navigation, Radar, Anchor, Cpu, Zap, Ship } from "lucide-react"
import { PageWrapper } from "@/components/immersive/page-wrapper"
import { AnimatedSection, StaggeredContainer } from "@/components/immersive/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const GlobeScene = dynamic(
  () => import("@/components/3d/globe-scene").then(mod => ({ default: mod.GlobeScene })),
  { ssr: false }
)

const capabilities = [
  {
    icon: Navigation,
    title: "Maritime Navigation",
    description: "Advanced navigation systems with GPS-denied capabilities and precise positioning for maritime operations.",
    features: ["Inertial navigation", "Satellite positioning", "Underwater navigation"]
  },
  {
    icon: Radar,
    title: "Ocean Surveillance",
    description: "Comprehensive ocean monitoring with radar, sonar, and satellite-based surveillance systems.",
    features: ["Ocean radar", "Sonar systems", "Satellite imaging"]
  },
  {
    icon: Anchor,
    title: "Port Security",
    description: "Integrated security systems for ports and harbors with threat detection and access control.",
    features: ["Perimeter security", "Vessel tracking", "Access control"]
  },
  {
    icon: Cpu,
    title: "Autonomous Systems",
    description: "AI-powered autonomous underwater vehicles and surface vessels for marine research and operations.",
    features: ["AUV technology", "Autonomous ships", "Mission planning"]
  }
]

const projects = [
  {
    name: "Maritime Surveillance Network",
    description: "Integrated coastal surveillance system combining radar, satellite, and underwater sensors.",
    status: "Operational",
    technologies: ["Radar Networks", "AIS Systems", "Underwater Sensors"]
  },
  {
    name: "Autonomous Ocean Research",
    description: "Fleet of autonomous underwater vehicles for oceanographic research and data collection.",
    status: "Development",
    technologies: ["AUV Systems", "Ocean Sensors", "AI Navigation"]
  }
]

const achievements = [
  "Deployment in major Indian ports and coastal areas",
  "Integration with Indian Navy maritime operations",
  "International collaboration on ocean research",
  "Patents in underwater navigation technology"
]

export default function MarinePage() {
  return (
    <PageWrapper scene={<GlobeScene />}>
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
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <Waves className="h-8 w-8 text-blue-500" />
                </div>
                <Badge variant="secondary" className="text-sm">
                  Marine Domain
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Advanced{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Maritime Technology
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Revolutionizing maritime operations with autonomous systems, advanced navigation,
                and comprehensive ocean surveillance. Our technology secures India's maritime
                interests and enables sustainable ocean exploration.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Ship className="h-4 w-4" />
                  View Systems
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Navigation className="h-4 w-4" />
                  Marine Portfolio
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
                Maritime{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Capabilities
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive solutions for maritime security, navigation, and ocean research.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 gap-8" staggerDelay={150}>
            {capabilities.map((capability) => (
              <Card key={capability.title} className="group hover:border-blue-500/50 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <capability.icon className="h-5 w-5 text-blue-500" />
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
                Marine{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Projects
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Active initiatives securing India's maritime domain and advancing ocean technology.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 gap-8" staggerDelay={150}>
            {projects.map((project) => (
              <Card key={project.name} className="group hover:border-blue-500/50 transition-all">
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
                Marine{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Achievements
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Recognition for our contributions to maritime security and ocean technology.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-card/50 rounded-xl border border-border/50 hover:border-blue-500/50 transition-all"
              >
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Zap className="h-5 w-5 text-blue-500" />
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