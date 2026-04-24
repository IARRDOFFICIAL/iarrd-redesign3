"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import {
  ArrowLeft,
  Satellite,
  Orbit,
  Radio,
  Cpu,
  Network,
  Zap
} from "lucide-react"

import { PageWrapper } from "@/components/immersive/page-wrapper"
import {
  AnimatedSection,
  StaggeredContainer
} from "@/components/immersive/animated-section"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


const SatelliteScene = dynamic(
  () =>
    import("@/components/3d/satellite-scene").then(
      mod => ({ default: mod.SatelliteScene })
    ),
  { ssr: false }
)


/* ===============================
CAPABILITIES
=============================== */

const capabilities = [

  {
    icon: Satellite,
    title: "CubeSat Platform Engineering",
    description:
      "Design and simulation of modular CubeSat architectures supporting environmental sensing payloads, onboard computing workflows, and academic-accessible mission experimentation.",
    tags: [
      "2U CubeSat Platform",
      "Subsystem Design",
      "Payload Integration"
    ]
  },

  {
    icon: Radio,
    title: "Satellite Communication Relay Systems",
    description:
      "Architecture development of CubeSat-assisted beyond-line-of-sight communication frameworks enabling UAV swarm coordination and distributed mission connectivity.",
    tags: [
      "BLOS Communication",
      "Relay Architecture",
      "Store-and-Forward Logic"
    ]
  },

  {
    icon: Orbit,
    title: "Orbit Simulation & Visibility Analysis",
    description:
      "LEO mission modeling workflows evaluating satellite visibility windows, link feasibility, and relay activation timing for distributed communication scenarios.",
    tags: [
      "LEO Simulation",
      "Visibility Windows",
      "Coverage Analysis"
    ]
  },

  {
    icon: Cpu,
    title: "Satellite Communication Modeling",
    description:
      "Concept-level communication link modeling using FSPL estimation, relay feasibility analysis, and hybrid ground–satellite routing logic exploration.",
    tags: [
      "Link Budget Modeling",
      "S-Band Studies",
      "UHF Analysis"
    ]
  }

]


/* ===============================
PROJECTS
=============================== */

const projects = [

  {
    name: "IRAI-Q2 CubeSat Relay Communication Layer",
    status: "Architecture & Simulation Phase",
    description:
      "Design and simulation of a CubeSat-assisted communication relay enabling beyond line-of-sight connectivity for multi-UAV swarm coordination using hybrid direct-link, relay-link, and store-and-forward transmission logic.",
    tags: [
      "LEO 500 km Modeling",
      "UHF / S-Band Links",
      "Relay Logic Design",
      "Swarm Communication"
    ]
  },

  {
    name: "PrithiviSat 2U CubeSat Platform",
    status: "Subsystem Design Phase",
    description:
      "Engineering development of a 2U CubeSat platform supporting environmental monitoring payload experimentation, onboard AI workflows, and accessible satellite mission capability building within academic-scale infrastructure.",
    tags: [
      "2U CubeSat",
      "Subsystem Architecture",
      "Environmental Payloads",
      "Onboard Processing"
    ]
  }

]


/* ===============================
FOCUS AREAS
=============================== */

const focusAreas = [

  "CubeSat Platform Engineering",
  "Satellite Communication Relay Systems",
  "Orbit Simulation & Visibility Analysis",
  "Hybrid UAV–Satellite Connectivity",
  "Academic Mission Architecture Development"

]


export default function SatellitePage() {

  return (

    <PageWrapper scene={<SatelliteScene />}>

      {/* HERO */}

      <section className="pt-32 pb-24">

        <div className="container mx-auto px-4 lg:px-8">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >

            <ArrowLeft className="h-4 w-4" />

            Back to Home

          </Link>


          <AnimatedSection>

            <div className="max-w-4xl">

              <div className="flex items-center gap-3 mb-4">

                <div className="p-3 bg-purple-500/10 rounded-xl">

                  <Satellite className="h-8 w-8 text-purple-500" />

                </div>

                <Badge variant="secondary">

                  Satellite Domain

                </Badge>

              </div>


              <h1 className="text-4xl md:text-6xl font-bold mb-6">

                Small Satellite Systems & Communication Architectures

              </h1>


              <p className="text-xl text-muted-foreground mb-8">

                Engineering CubeSat platforms and satellite-assisted communication
                architectures supporting distributed UAV coordination, environmental
                sensing workflows, and academic-scale mission experimentation aligned
                with emerging small-satellite capability development in India.

              </p>


              <div className="flex flex-wrap gap-4">

                <Button size="lg">

                  Explore Satellite Research

                </Button>

                <Button size="lg" variant="outline">

                  View Mission Architectures

                </Button>

              </div>

            </div>

          </AnimatedSection>

        </div>

      </section>


      {/* CAPABILITIES */}

      <section className="py-24">

        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>

            <div className="text-center max-w-3xl mx-auto mb-16">

              <h2 className="text-3xl md:text-4xl font-bold mb-4">

                Satellite Capabilities

              </h2>

              <p className="text-lg text-muted-foreground">

                Core engineering activities supporting CubeSat mission design,
                communication relay architecture development, and orbital simulation workflows.

              </p>

            </div>

          </AnimatedSection>


          <StaggeredContainer
            className="grid md:grid-cols-2 gap-8"
            staggerDelay={150}
          >

            {capabilities.map(capability => (

              <Card
                key={capability.title}
                className="hover:border-purple-500/40 transition-all"
              >

                <CardHeader>

                  <div className="flex items-center gap-3">

                    <div className="p-2 bg-purple-500/10 rounded-lg">

                      <capability.icon className="h-5 w-5 text-purple-500" />

                    </div>

                    <CardTitle>

                      {capability.title}

                    </CardTitle>

                  </div>

                </CardHeader>


                <CardContent>

                  <p className="text-muted-foreground mb-4">

                    {capability.description}

                  </p>


                  <div className="flex flex-wrap gap-2">

                    {capability.tags.map(tag => (

                      <Badge key={tag} variant="outline">

                        {tag}

                      </Badge>

                    ))}

                  </div>

                </CardContent>

              </Card>

            ))}

          </StaggeredContainer>

        </div>

      </section>


      {/* PROJECTS */}

      <section className="py-24 bg-muted/30">

        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>

            <div className="text-center max-w-3xl mx-auto mb-16">

              <h2 className="text-3xl md:text-4xl font-bold mb-4">

                Ongoing Satellite Engineering Projects

              </h2>

              <p className="text-lg text-muted-foreground">

                Simulation-driven mission architectures exploring CubeSat platforms
                and distributed communication relay systems.

              </p>

            </div>

          </AnimatedSection>


          <StaggeredContainer
            className="grid md:grid-cols-2 gap-8"
            staggerDelay={150}
          >

            {projects.map(project => (

              <Card
                key={project.name}
                className="hover:border-purple-500/40 transition-all"
              >

                <CardHeader>

                  <div className="flex justify-between">

                    <CardTitle>

                      {project.name}

                    </CardTitle>

                    <Badge variant="secondary">

                      {project.status}

                    </Badge>

                  </div>

                </CardHeader>


                <CardContent>

                  <p className="text-muted-foreground mb-4">

                    {project.description}

                  </p>


                  <div className="flex flex-wrap gap-2">

                    {project.tags.map(tag => (

                      <Badge key={tag} variant="outline">

                        {tag}

                      </Badge>

                    ))}

                  </div>

                </CardContent>

              </Card>

            ))}

          </StaggeredContainer>

        </div>

      </section>


      {/* FOCUS AREAS */}

      <section className="py-24">

        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>

            <div className="text-center max-w-3xl mx-auto mb-12">

              <h2 className="text-3xl md:text-4xl font-bold mb-4">

                Satellite Engineering Focus Areas

              </h2>

            </div>

          </AnimatedSection>


          <div className="grid md:grid-cols-2 gap-6">

            {focusAreas.map(area => (

              <div
                key={area}
                className="flex items-center gap-4 p-6 bg-card/50 rounded-xl border border-border/50 hover:border-purple-500/40 transition-all"
              >

                <div className="p-2 bg-purple-500/10 rounded-lg">

                  <Zap className="h-5 w-5 text-purple-500" />

                </div>

                <p className="text-muted-foreground">

                  {area}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </PageWrapper>

  )

}