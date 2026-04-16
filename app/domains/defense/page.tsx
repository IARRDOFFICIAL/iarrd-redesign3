"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowLeft, Shield, Radar, Target, Navigation, Cpu, Zap, Eye } from "lucide-react"
import { PageWrapper } from "@/components/immersive/page-wrapper"
import { AnimatedSection, StaggeredContainer } from "@/components/immersive/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const NetworkScene = dynamic(
  () => import("@/components/3d/network-scene").then(mod => ({ default: mod.NetworkScene })),
  { ssr: false }
)

const capabilities = [
  {
    icon: Radar,
    title: "Surveillance Systems",
    description: "Advanced radar and sensor networks for comprehensive airspace and maritime monitoring with real-time threat detection.",
    features: ["Multi-band radar", "AIS integration", "Threat classification"]
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "AI-powered target acquisition and tracking systems with sub-meter accuracy for defense applications.",
    features: ["GPS-denied navigation", "Precision guidance", "Autonomous targeting"]
  },
  {
    icon: Navigation,
    title: "Secure Communications",
    description: "Encrypted communication systems and secure data links for military operations and command centers.",
    features: ["Quantum encryption", "Anti-jamming", "Mesh networking"]
  },
  {
    icon: Cpu,
    title: "Command & Control",
    description: "Integrated battle management systems with real-time situational awareness and decision support.",
    features: ["Real-time analytics", "Multi-domain ops", "Decision support"]
  }
]

const projects = [
  {
    name: "Integrated Defense Network",
    description: "Comprehensive surveillance and defense system integrating radar, satellite, and ground-based sensors.",
    status: "Development",
    technologies: ["Radar Systems", "AI/ML", "Secure Networks"]
  },
  {
    name: "Autonomous Reconnaissance",
    description: "AI-powered autonomous systems for reconnaissance and intelligence gathering operations.",
    status: "Prototype",
    technologies: ["Computer Vision", "UAV Systems", "Edge Computing"]
  }
]

const achievements = [
  "Strategic partnership with DRDO for defense technology",
  "Successful integration with Indian Armed Forces networks",
  "Export potential to allied defense forces",
  "Multiple defense patents filed and granted"
]

export default function DefensePage() {
  return (
    <PageWrapper scene={<NetworkScene />}>
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
                <div className="p-3 bg-red-500/10 rounded-xl">
                  <Shield className="h-8 w-8 text-red-500" />
                </div>
                <Badge variant="secondary" className="text-sm">
                  Defense Domain
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Strategic{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Defense Technology
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Developing cutting-edge defense systems with AI integration, autonomous operations,
                and secure communications. Our technology enhances national security through
                innovative surveillance and defense capabilities.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Radar className="h-4 w-4" />
                  View Systems
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Eye className="h-4 w-4" />
                  Defense Portfolio
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
                Defense{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Capabilities
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Advanced defense systems designed for modern warfare and security challenges.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 gap-8" staggerDelay={150}>
            {capabilities.map((capability) => (
              <Card key={capability.title} className="group hover:border-red-500/50 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                      <capability.icon className="h-5 w-5 text-red-500" />
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
                Defense{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Projects
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Classified and strategic defense initiatives enhancing national security.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 gap-8" staggerDelay={150}>
            {projects.map((project) => (
              <Card key={project.name} className="group hover:border-red-500/50 transition-all">
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
                Defense{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Achievements
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Recognition and partnerships that validate our defense technology leadership.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-card/50 rounded-xl border border-border/50 hover:border-red-500/50 transition-all"
              >
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <Zap className="h-5 w-5 text-red-500" />
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