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
  stage: string
  focus: string
  href: string
  color: string

}


const projects: Project[] = [

  {
    id: "prithivisat",
    name: "PrithiviSat",

    description:

      "PrithiviSat is a conceptual CubeSat mission architecture exploring environmental monitoring workflows and AI-assisted onboard processing approaches using affordable small-satellite platforms.",

    icon: <Satellite className="h-8 w-8" />,

    stage: "Mission Architecture Development",

    focus: "CubeSat Systems Engineering",

    href: "/projects/prithivisat",

    color: "cyan",
  },


  {
    id: "irai-q2",
    name: "IRAI-Q2",

    description:

      "IRAI-Q2 explores algorithmic approaches for astronomy intelligence workflows including celestial object tracking experimentation, observational scheduling logic, and AI-assisted analysis pipelines.",

    icon: <Brain className="h-8 w-8" />,

    stage: "Algorithm Research Phase",

    focus: "Astronomy Intelligence Software",

    href: "/projects/irai-q2",

    color: "teal",
  },


  {
    id: "astronomy-ground",
    name: "Astronomy Ground Systems",

    description:

      "Ground systems research investigates telescope workflow integration, observational coordination tools, and satellite awareness experimentation supporting future astronomy infrastructure capability development.",

    icon: <Telescope className="h-8 w-8" />,

    stage: "Infrastructure Concept Exploration",

    focus: "Observation Support Systems",

    href: "/projects/astronomy-tools",

    color: "blue",
  },

]


function ProjectCard({

  project,
  index,

}: {

  project: Project
  index: number

}) {

  const { ref, isVisible } = useScrollAnimation({

    threshold: 0.2,

  })


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

      {/* Hover gradient */}

      <div

        className={cn(

          "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",

          project.color === "cyan" && "bg-gradient-to-br from-cyan-500/5 to-transparent",

          project.color === "teal" && "bg-gradient-to-br from-teal-500/5 to-transparent",

          project.color === "blue" && "bg-gradient-to-br from-blue-500/5 to-transparent"

        )}

      />


      <div className="relative z-10">


        {/* Icon + Stage */}

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

            {project.stage}

          </span>

        </div>


        {/* Title */}

        <h3 className="mb-2 text-xl font-semibold text-foreground">

          {project.name}

        </h3>


        {/* Description */}

        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">

          {project.description}

        </p>


        {/* Focus Area */}

        <div className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">

          <svg

            className="h-3.5 w-3.5"

            fill="none"

            viewBox="0 0 24 24"

            stroke="currentColor"

          >

            <path

              strokeLinecap="round"

              strokeLinejoin="round"

              strokeWidth={2}

              d="M13 10V3L4 14h7v7l9-11h-7z"

            />

          </svg>

          {project.focus}

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


export function ProjectsSection({

  title = "Active Research Programs",

  description =

    "IARRD currently focuses on early-stage mission architecture development across satellite systems, autonomous observation workflows, and astronomy infrastructure supporting long-term indigenous engineering capability growth.",

}) {

  return (

    <section id="projects" className="relative py-24 lg:py-32">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />


      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">


        {/* Header */}

        <div className="mx-auto max-w-2xl text-center">


          <AnimatedText>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">

              Active Engineering Workstreams

            </div>

          </AnimatedText>


          <AnimatedText delay={100}>

            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">

              Current Development Programs

            </h2>

          </AnimatedText>


          <AnimatedText delay={200}>

            <p className="mt-4 text-pretty text-lg text-muted-foreground">

              These initiatives represent IARRD’s ongoing contributor-driven engineering research

              across satellite systems, astronomy intelligence workflows, and observational infrastructure development.

            </p>

          </AnimatedText>


        </div>


        {/* Cards */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (

            <ProjectCard

              key={project.id}

              project={project}

              index={index}

            />

          ))}

        </div>


        {/* CTA */}

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