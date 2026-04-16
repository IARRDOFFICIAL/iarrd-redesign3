"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowRight, Satellite, Brain, Telescope } from "lucide-react"
import { PageWrapper } from "@/components/immersive/page-wrapper"
import { AnimatedSection, StaggeredContainer } from "@/components/immersive/animated-section"
import { TRLBadge } from "@/components/trl-badge"
import { Button } from "@/components/ui/button"

const SatelliteScene = dynamic(
  () => import("@/components/3d/satellite-scene").then(mod => ({ default: mod.SatelliteScene })),
  { ssr: false }
)

const projects = [
  {
    id: "prithivisat",
    name: "PrithiviSat",
    description: "Indigenous 2U CubeSat mission for Earth observation and atmospheric research, designed for Low Earth Orbit deployment.",
    icon: Satellite,
    trl: 5,
    status: "Integration Phase",
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
    href: "/projects/prithivisat",
    specs: ["2U Form Factor", "LEO Orbit", "Multi-spectral Imaging"],
  },
  {
    id: "irai-q2",
    name: "IRAI-Q2",
    description: "AI-powered astronomy intelligence platform for real-time celestial analysis, object tracking, and anomaly detection.",
    icon: Brain,
    trl: 4,
    status: "Development",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    href: "/projects/irai-q2",
    specs: ["Transformer Architecture", "Real-time Processing", "98.5% Accuracy"],
  },
  {
    id: "astronomy-tools",
    name: "Ground Systems",
    description: "Advanced ground-based observation systems including custom telescope arrays and automated tracking platforms.",
    icon: Telescope,
    trl: 6,
    status: "Operational",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    href: "/projects/astronomy-tools",
    specs: ["12-inch Primary", "0.5 arcsec Tracking", "1000+ Objects"],
  },
]

export default function ProjectsPage() {
  return (
    <PageWrapper scene={<SatelliteScene />}>
      {/* Hero */}
      <section className="pt-32 pb-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
                Our Projects
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Building the Future of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                  Space Technology
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From CubeSat missions to AI-powered astronomy platforms, our portfolio 
                represents the cutting edge of Indian space technology development.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <StaggeredContainer className="grid gap-8" staggerDelay={150}>
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className={`group block p-8 md:p-12 rounded-2xl border ${project.borderColor} bg-gradient-to-br ${project.color} backdrop-blur-sm hover:scale-[1.01] transition-all duration-300`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-background/50 rounded-xl">
                        <project.icon className="w-8 h-8 text-primary" />
                      </div>
                      <TRLBadge level={project.trl} />
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        {project.status}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {project.name}
                    </h2>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.specs.map((spec) => (
                        <span
                          key={spec}
                          className="px-3 py-1.5 bg-background/50 text-sm text-foreground/80 rounded-lg"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                    
                    <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                      View Project Details
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Metrics</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our commitment to excellence reflected in numbers
              </p>
            </div>
          </AnimatedSection>
          
          <StaggeredContainer 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            staggerDelay={100}
          >
            {[
              { value: "3", label: "Active Projects" },
              { value: "TRL 6", label: "Highest Maturity" },
              { value: "15+", label: "Subsystems Built" },
              { value: "2025", label: "Target Launch" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-8 bg-card/50 backdrop-blur rounded-xl border border-border">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in Collaborating?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you&apos;re a potential partner, researcher, or investor, 
              we&apos;d love to discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn About IARRD</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageWrapper>
  )
}
