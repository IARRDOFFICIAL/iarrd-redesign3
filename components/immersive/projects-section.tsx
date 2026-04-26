"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { AnimatedText } from "@/components/animated-text"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight, Satellite, Radio, Telescope } from "lucide-react"
import Link from "next/link"


/* ===============================
PROJECT TYPE
=============================== */

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


/* ===============================
PROJECT DATA
=============================== */

const projects: Project[] = [

  {
    id: "prithivisat",

    name: "PrithiviSat",

    description:

      "PrithiviSat is a 2U CubeSat mission architecture initiative focused on developing an affordable satellite learning platform supporting environmental monitoring concepts and contributor-level subsystem engineering exposure.",

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

      "IRAI-Q2 explores CubeSat-assisted communication relay architectures enabling beyond-line-of-sight connectivity for multi-UAV systems through link-budget modelling, LEO visibility simulation, and hybrid communication workflow design.",

    icon: <Radio className="h-8 w-8" />,

    stage: "Communication Architecture Simulation",

    focus: "Satellite-Assisted UAV Connectivity",

    href: "/projects/irai-q2",

    color: "teal",
  },


  {
    id: "astronomy-ground",

    name: "Astronomy Ground Support Systems",

    description:

      "Astronomy ground-support activities focus on developing computational workflows for astronomical image processing, celestial object detection experimentation, and preparation for future observation infrastructure programs.",

    icon: <Telescope className="h-8 w-8" />,

    stage: "Observation Workflow Development",

    focus: "Computational Astronomy Systems",

    href: "/projects/astronomy-tools",

    color: "blue",
  },

]



/* ===============================
CARD COMPONENT
=============================== */

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


        {/* ICON + STAGE */}

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


        {/* TITLE */}

        <h3 className="mb-2 text-xl font-semibold text-foreground">

          {project.name}

        </h3>


        {/* DESCRIPTION */}

        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">

          {project.description}

        </p>


        {/* FOCUS AREA */}

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



/* ===============================
SECTION
=============================== */

export function ProjectsSection({

  title = "Active Research Programs",

  description =

    "IARRD currently focuses on early-stage engineering architecture development across satellite systems, communication infrastructure concepts, and computational astronomy workflows supporting long-term indigenous capability building.",

}) {

  return (

    <section id="projects" className="relative py-24 lg:py-32">


      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />


      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">


        {/* HEADER */}

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

              These initiatives represent IARRD’s ongoing contributor-driven engineering research across satellite mission architecture, UAV communication relay concepts, and astronomy observation support systems.

            </p>

          </AnimatedText>

        </div>


        {/* GRID */}

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