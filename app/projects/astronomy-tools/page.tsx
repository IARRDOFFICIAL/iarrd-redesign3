"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import {
  ArrowLeft,
  Telescope,
  Star,
  Orbit,
  Radar,
  Database
} from "lucide-react"

import { PageWrapper } from "@/components/immersive/page-wrapper"
import {
  AnimatedSection,
  StaggeredContainer
} from "@/components/immersive/animated-section"

import { TRLBadge } from "@/components/trl-badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

const TelescopeScene = dynamic(
  () =>
    import("@/components/3d/telescope-scene").then(mod => ({
      default: mod.TelescopeScene
    })),
  { ssr: false }
)

/* ===============================
CAPABILITIES (REALISTIC)
=============================== */

const capabilities = [
  {
    icon: Telescope,
    title: "Ground Observation Development",
    description:
      "IARRD is working toward building small-scale ground observation capability to support astronomy education, sky monitoring workflows, and observational experimentation."
  },

  {
    icon: Star,
    title: "Constellation Pattern Studies",
    description:
      "The astronomy team explores constellation tracking methods and sky-mapping workflows for educational and research-oriented observational understanding."
  },

  {
    icon: Orbit,
    title: "Satellite Observation Learning Pipeline",
    description:
      "Future plans include developing observation workflows supporting awareness of satellite motion, orbital tracking basics, and space environment monitoring concepts."
  },

  {
    icon: Database,
    title: "Astronomy Data Handling Concepts",
    description:
      "The project includes early-stage work toward structured observation logging and basic astronomy data cataloging workflows for student-led research environments."
  }
]

/* ===============================
ARCHITECTURE STATUS
=============================== */

const architecture = [
  {
    label: "Observation Platform",
    desc: "Small telescope infrastructure planning",
    status: "development"
  },
  {
    label: "Tracking Workflows",
    desc: "Satellite motion awareness experiments",
    status: "development"
  },
  {
    label: "Sky Mapping Pipeline",
    desc: "Constellation mapping studies",
    status: "development"
  },
  {
    label: "Observation Database",
    desc: "Basic cataloging structure",
    status: "concept"
  },
  {
    label: "Remote Observation Access",
    desc: "Future capability planning",
    status: "concept"
  }
]

/* ===============================
APPLICATION AREAS
=============================== */

const applications = [
  "Student-led observational astronomy learning",
  "Constellation tracking workflows",
  "Satellite motion awareness experiments",
  "Ground-support experience for CubeSat missions",
  "Future optical observation infrastructure development"
]

export default function AstronomyToolsPage() {

  return (
    <PageWrapper scene={<TelescopeScene />}>

      {/* HERO */}

      <section className="pt-32 pb-16 relative">

        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

          </AnimatedSection>

          <AnimatedSection delay={100}>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">

              <div>

                <div className="flex items-center gap-4 mb-4">

                  <div className="p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl border border-emerald-500/30">
                    <Telescope className="w-10 h-10 text-emerald-400" />
                  </div>

                  <TRLBadge level={2} />

                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Astronomy Ground Systems
                </h1>

                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  The IARRD astronomy programme focuses on developing foundational
                  ground-based observation capability supporting constellation tracking,
                  satellite awareness studies, and student-led observational astronomy workflows.
                </p>

              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur rounded-lg border border-emerald-500/30">

                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />

                <span className="text-sm text-emerald-400 font-medium">
                  Early Infrastructure Development
                </span>

              </div>

            </div>

          </AnimatedSection>

        </div>

      </section>


      {/* CAPABILITIES */}

      <section className="py-24 relative">

        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>

            <div className="text-center mb-16">

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Programme Capabilities
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Early-stage astronomy infrastructure supporting observational learning
                and mission-support experimentation.
              </p>

            </div>

          </AnimatedSection>

          <StaggeredContainer
            className="grid md:grid-cols-2 gap-6"
            staggerDelay={150}
          >

            {capabilities.map(cap => (

              <Card
                key={cap.title}
                className="bg-card/50 backdrop-blur border-border hover:border-emerald-500/30 transition-all"
              >

                <CardHeader className="flex flex-row items-start gap-4">

                  <div className="p-3 bg-emerald-500/10 rounded-xl">
                    <cap.icon className="w-6 h-6 text-emerald-400" />
                  </div>

                  <CardTitle className="text-lg">
                    {cap.title}
                  </CardTitle>

                </CardHeader>

                <CardContent>

                  <p className="text-muted-foreground">
                    {cap.description}
                  </p>

                </CardContent>

              </Card>

            ))}

          </StaggeredContainer>

        </div>

      </section>


      {/* ARCHITECTURE */}

      <section className="py-24 relative">

        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection animation="slide-right">

            <h2 className="text-2xl font-bold mb-8">
              Development Architecture
            </h2>

            <div className="space-y-3">

              {architecture.map(item => (

                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur rounded-xl border border-border"
                >

                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />

                  <div>

                    <div className="font-medium">
                      {item.label}
                    </div>

                    <div className="text-sm text-muted-foreground">
                      {item.desc}
                    </div>

                  </div>

                </div>

              ))}

            </div>

          </AnimatedSection>

        </div>

      </section>


      {/* APPLICATIONS */}

      <section className="py-24 relative">

        <div className="container mx-auto px-4 lg:px-8 text-center">

          <AnimatedSection>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Programme Applications
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Supporting long-term development of observational capability aligned with
              future satellite and space mission infrastructure.
            </p>

            <ul className="space-y-4 max-w-xl mx-auto">

              {applications.map((item, i) => (

                <li key={i} className="text-muted-foreground">
                  • {item}
                </li>

              ))}

            </ul>

          </AnimatedSection>

        </div>

      </section>


      {/* CTA */}

      <section className="py-24 relative">

        <div className="container mx-auto px-4 lg:px-8 text-center">

          <AnimatedSection>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Collaborate With the Astronomy Team
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Students and collaborators interested in observational astronomy and
              ground-system development are welcome to contribute to the programme.
            </p>

            <Button size="lg" asChild>

              <Link href="/contact">

                Join the Team

              </Link>

            </Button>

          </AnimatedSection>

        </div>

      </section>

    </PageWrapper>
  )
}