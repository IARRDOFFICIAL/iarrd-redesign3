"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowLeft, Telescope, Cpu, Brain, Database, Zap, Star, Orbit } from "lucide-react"
import { PageWrapper } from "@/components/immersive/page-wrapper"
import { AnimatedSection, StaggeredContainer } from "@/components/immersive/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const TelescopeScene = dynamic(
  () => import("@/components/3d/telescope-scene").then(mod => ({ default: mod.TelescopeScene })),
  { ssr: false }
)

const capabilities = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Machine learning algorithms for automated celestial object detection and classification with 98%+ accuracy.",
    features: ["Real-time processing", "Neural networks", "Pattern recognition"]
  },
  {
    icon: Database,
    title: "Data Processing",
    description: "Advanced data pipelines for processing astronomical observations from multiple telescopes and sensors.",
    features: ["Big data analytics", "Real-time streaming", "Data fusion"]
  },
  {
    icon: Orbit,
    title: "Orbital Mechanics",
    description: "Precise orbital calculations and trajectory optimization for satellite and space mission planning.",
    features: ["Trajectory optimization", "Orbital prediction", "Mission planning"]
  },
  {
    icon: Star,
    title: "Stellar Analysis",
    description: "Comprehensive stellar spectroscopy and photometry for understanding star formation and evolution.",
    features: ["Spectral analysis", "Light curve analysis", "Stellar classification"]
  }
]

const projects = [
  {
    name: "IRAI-Q2",
    description: "AI-powered astronomy intelligence system for real-time celestial analysis and autonomous observation scheduling.",
    status: "Beta Release",
    technologies: ["Python", "TensorFlow", "OpenCV", "PostgreSQL"]
  },
  {
    name: "Ground Station Network",
    description: "Advanced telescope arrays and ground infrastructure for continuous astronomical monitoring.",
    status: "Operational",
    technologies: ["Radio Astronomy", "Optical Systems", "Data Centers"]
  }
]

const achievements = [
  "98% accuracy in asteroid detection trials",
  "24/7 autonomous telescope operations",
  "Integration with ISRO's astronomical network",
  "Published 15+ research papers in peer-reviewed journals"
]

export default function AstronomyPage() {
  return (
    <PageWrapper scene={<TelescopeScene />}>
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
                <div className="p-3 bg-cyan-500/10 rounded-xl">
                  <Telescope className="h-8 w-8 text-cyan-500" />
                </div>
                <Badge variant="secondary" className="text-sm">
                  Astronomy Domain
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Advanced{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Astronomical Intelligence
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Pioneering AI-driven astronomy with autonomous observation systems,
                real-time celestial analysis, and cutting-edge data processing capabilities.
                Our technology enables unprecedented insights into the universe.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Brain className="h-4 w-4" />
                  View IRAI-Q2
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Telescope className="h-4 w-4" />
                  Research Papers
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
                Core{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Capabilities
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Our astronomy division combines traditional astronomical methods with
                modern AI and computational techniques.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 gap-8" staggerDelay={150}>
            {capabilities.map((capability) => (
              <Card key={capability.title} className="group hover:border-cyan-500/50 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                      <capability.icon className="h-5 w-5 text-cyan-500" />
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
                Active{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Projects
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Current initiatives pushing the boundaries of astronomical research and technology.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 gap-8" staggerDelay={150}>
            {projects.map((project) => (
              <Card key={project.name} className="group hover:border-cyan-500/50 transition-all">
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
                Key{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Achievements
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Milestones that demonstrate our leadership in astronomical technology.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-card/50 rounded-xl border border-border/50 hover:border-cyan-500/50 transition-all"
              >
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                  <Zap className="h-5 w-5 text-cyan-500" />
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