"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { AnimatedText } from "@/components/animated-text"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight, Satellite, Brain, Telescope } from "lucide-react"
import Link from "next/link"

interface Project {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  trl: number
  status: string
  timeline: string
  href: string
  color: string
}

const projects: Project[] = [
  {
    id: "prithivisat",
    name: "PrithiviSat",
    description: "Indigenous 3U CubeSat mission for Earth observation and atmospheric research. Featuring custom-built subsystems and India-first technologies.",
    icon: <Satellite className="h-8 w-8" />,
    trl: 5,
    status: "Assembly Phase",
    timeline: "Q4 2024 Launch Target",
    href: "/projects/prithivisat",
    color: "cyan",
  },
  {
    id: "irai-q2",
    name: "IRAI-Q2",
    description: "AI-powered astronomy intelligence system for real-time celestial analysis, asteroid detection, and autonomous observation scheduling.",
    icon: <Brain className="h-8 w-8" />,
    trl: 4,
    status: "Algorithm Development",
    timeline: "Beta Release Q2 2024",
    href: "/projects/irai-q2",
    color: "teal",
  },
  {
    id: "ground-systems",
    name: "Ground Systems",
    description: "Advanced ground station infrastructure including custom telescope arrays, antenna systems, and mission control software.",
    icon: <Telescope className="h-8 w-8" />,
    trl: 6,
    status: "Operational",
    timeline: "Continuous Development",
    href: "/projects/astronomy-tools",
    color: "blue",
  },
]

function TRLBar({ level, color }: { level: number; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground">TRL {level}/9</span>
      <div className="flex gap-0.5">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 w-3 rounded-full transition-all",
              i < level 
                ? color === "cyan" 
                  ? "bg-cyan-500" 
                  : color === "teal" 
                    ? "bg-teal-500" 
                    : "bg-blue-500"
                : "bg-border"
            )}
          />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-700",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8",
        "hover:border-primary/50 hover:bg-card/80"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div 
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          project.color === "cyan" && "bg-gradient-to-br from-cyan-500/5 to-transparent",
          project.color === "teal" && "bg-gradient-to-br from-teal-500/5 to-transparent",
          project.color === "blue" && "bg-gradient-to-br from-blue-500/5 to-transparent"
        )}
      />

      <div className="relative z-10">
        {/* Icon and status */}
        <div className="mb-4 flex items-start justify-between">
          <div 
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-xl",
              project.color === "cyan" && "bg-cyan-500/10 text-cyan-400",
              project.color === "teal" && "bg-teal-500/10 text-teal-400",
              project.color === "blue" && "bg-blue-500/10 text-blue-400"
            )}
          >
            {project.icon}
          </div>
          <span 
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-medium",
              project.color === "cyan" && "bg-cyan-500/10 text-cyan-400",
              project.color === "teal" && "bg-teal-500/10 text-teal-400",
              project.color === "blue" && "bg-blue-500/10 text-blue-400"
            )}
          >
            {project.status}
          </span>
        </div>

        {/* Content */}
        <h3 className="mb-2 text-xl font-semibold text-foreground">{project.name}</h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* TRL Progress */}
        <div className="mb-4">
          <TRLBar level={project.trl} color={project.color} />
        </div>

        {/* Timeline */}
        <div className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {project.timeline}
        </div>

        {/* CTA */}
        <Button 
          variant="ghost" 
          className="group/btn w-full justify-between border border-border/50 bg-secondary/50 hover:bg-secondary"
          asChild
        >
          <Link href={project.href}>
            View Project Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedText>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
              Active Missions
            </div>
          </AnimatedText>

          <AnimatedText delay={100}>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Engineering the Future
            </h2>
          </AnimatedText>

          <AnimatedText delay={200}>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Our flagship projects represent the cutting edge of Indian space technology,
              from orbital missions to ground-breaking AI systems.
            </p>
          </AnimatedText>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <AnimatedText delay={600} className="mt-12 text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="group gap-2"
            asChild
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </AnimatedText>
      </div>
    </section>
  )
}
