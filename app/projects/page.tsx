"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowRight, Satellite, Radio, Telescope } from "lucide-react"

import { PageWrapper } from "@/components/immersive/page-wrapper"
import {
  AnimatedSection,
  StaggeredContainer
} from "@/components/immersive/animated-section"

import { TRLBadge } from "@/components/trl-badge"
import { Button } from "@/components/ui/button"


/* ================= 3D BACKGROUND ================= */

const SatelliteScene = dynamic(
  () =>
    import("@/components/3d/satellite-scene").then(mod => ({
      default: mod.SatelliteScene
    })),
  { ssr: false }
)



/* ================= PROJECT DATA ================= */

const projects = [

  {
    id: "prithivisat",

    name: "PrithiviSat",

    description:

      "PrithiviSat is a 2U CubeSat architecture initiative focused on developing an affordable multidisciplinary satellite learning platform supporting environmental monitoring, disaster awareness concepts, and student-level satellite subsystem exposure.",

    icon: Satellite,

    trl: 2,

    status: "Architecture Definition & Subsystem Planning",

    color: "from-cyan-500/20 to-blue-500/20",

    borderColor: "border-cyan-500/30",

    href: "/projects/prithivisat",

    specs: [
      "2U CubeSat Configuration",
      "Subsystem Architecture Planning",
      "Environmental Monitoring Concepts"
    ]
  },


  {
    id: "irai-q2",

    name: "IRAI-Q2",

    description:

      "IRAI-Q2 is an ongoing research effort exploring CubeSat-assisted communication relay architectures for beyond-line-of-sight multi-UAV connectivity using hybrid communication logic and LEO visibility modelling.",

    icon: Radio,

    trl: 2,

    status: "Communication Architecture Simulation Phase",

    color: "from-purple-500/20 to-pink-500/20",

    borderColor: "border-purple-500/30",

    href: "/projects/irai-q2",

    specs: [
      "LEO Relay Simulation",
      "Hybrid UAV Communication Logic",
      "Link Budget Concept Modelling"
    ]
  },


  {
    id: "astronomy-tools",

    name: "Astronomy Ground Support Systems",

    description:

      "Astronomy ground-support activities focus on developing computational workflows for astronomical image processing, celestial object detection experimentation, and preparation for future telescope-assisted observation programs.",

    icon: Telescope,

    trl: 1,

    status: "Computational Workflow Development",

    color: "from-emerald-500/20 to-teal-500/20",

    borderColor: "border-emerald-500/30",

    href: "/projects/astronomy-tools",

    specs: [
      "Image Processing Experiments",
      "Celestial Detection Pipelines",
      "Observation Workflow Preparation"
    ]
  }

]



/* ================= PAGE ================= */

export default function ProjectsPage() {

  return (

    <PageWrapper scene={<SatelliteScene />}>

      {/* HERO */}

      <section className="pt-32 pb-24">

        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>

            <div className="max-w-3xl">

              <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
                Research Programs
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">

                Current Engineering
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                  {" "}Development Initiatives
                </span>

              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">

                IARRD’s ongoing projects represent early-stage engineering
                architecture development across satellite systems,
                communication infrastructure concepts, and computational
                astronomy workflows designed to build long-term indigenous
                technical capability through structured contributor participation.

              </p>

            </div>

          </AnimatedSection>

        </div>

      </section>



      {/* PROJECT GRID */}

      <section className="py-24">

        <div className="container mx-auto px-4 lg:px-8">

          <StaggeredContainer
            className="grid gap-8"
            staggerDelay={150}
          >

            {projects.map(project => (

              <Link
                key={project.id}
                href={project.href}
                className={`group block p-8 md:p-12 rounded-2xl border ${project.borderColor} bg-gradient-to-br ${project.color} backdrop-blur-sm hover:scale-[1.01] transition-all duration-300`}
              >

                <div className="flex flex-col md:flex-row gap-8">

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

                      {project.specs.map(spec => (

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



      {/* METRICS */}

      <section className="py-24">

        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>

            <div className="text-center mb-16">

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Development Snapshot
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">

                Current initiatives reflect structured early-stage engineering
                architecture development across multiple technical domains.

              </p>

            </div>

          </AnimatedSection>


          <StaggeredContainer
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            staggerDelay={100}
          >

            {[
              { value: "3", label: "Active Programs" },
              { value: "5+", label: "Engineering Domains" },
              { value: "40+", label: "Research Contributors" },
              { value: "2023", label: "Initiative Founded" }
            ].map(stat => (

              <div
                key={stat.label}
                className="text-center p-8 bg-card/50 backdrop-blur rounded-xl border border-border"
              >

                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">

                  {stat.value}

                </div>

                <div className="text-sm text-muted-foreground">

                  {stat.label}

                </div>

              </div>

            ))}

          </StaggeredContainer>

        </div>

      </section>



      {/* CTA */}

      <section className="py-24">

        <div className="container mx-auto px-4 lg:px-8 text-center">

          <AnimatedSection>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">

              Interested in Contributing or Collaborating?

            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">

              IARRD welcomes academic collaborators, student contributors,
              and engineering mentors interested in supporting long-term
              capability-building initiatives across space and multidisciplinary
              research domains.

            </p>


            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

              <Button size="lg" asChild>

                <Link href="/contact">

                  Contact Us

                  <ArrowRight className="ml-2 w-4 h-4" />

                </Link>

              </Button>


              <Button variant="outline" size="lg" asChild>

                <Link href="/careers">

                  Join as Contributor

                </Link>

              </Button>

            </div>

          </AnimatedSection>

        </div>

      </section>

    </PageWrapper>

  )

}