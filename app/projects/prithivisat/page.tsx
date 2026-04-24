"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import {
  ArrowLeft,
  ArrowRight,
  Satellite,
  Cpu,
  Cloud,
  Radar
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

const GlobeScene = dynamic(
  () =>
    import("@/components/3d/globe-scene").then(mod => ({
      default: mod.GlobeScene
    })),
  { ssr: false }
)

/* ===============================
MISSION CAPABILITIES
=============================== */

const capabilities = [
  {
    icon: Cloud,
    title: "Environmental Monitoring",
    description:
      "PrithiviSat is designed as a compact CubeSat platform supporting environmental observation workflows including atmospheric monitoring and land-surface awareness studies."
  },

  {
    icon: Radar,
    title: "Disaster Awareness Support Concepts",
    description:
      "Mission architecture includes planned sensing workflows supporting early-stage experimentation in disaster awareness assistance and rapid observation response concepts."
  },

  {
    icon: Cpu,
    title: "AI-Assisted Onboard Processing",
    description:
      "PrithiviSat explores the integration of lightweight onboard decision-support algorithms for improving data prioritization and mission workflow efficiency."
  },

  {
    icon: Satellite,
    title: "Modular CubeSat Architecture",
    description:
      "The platform is being structured as a scalable CubeSat architecture supporting future payload flexibility and mission adaptability."
  }
]

/* ===============================
MISSION SPECIFICATIONS
=============================== */

const specifications = [
  { label: "Satellite Class", value: "2U CubeSat (Proposed)" },
  { label: "Mission Type", value: "Environmental Observation Research Platform" },
  { label: "Development Stage", value: "Mission Architecture Definition" },
  { label: "Primary Objective", value: "Applied Earth Observation Workflows" },
  { label: "Processing Concept", value: "AI-Assisted Data Prioritization (Concept Stage)" },
  { label: "Launch Status", value: "Future Launch Opportunity Exploration" }
]

/* ===============================
APPLICATION AREAS
=============================== */

const applications = [
  "Environmental monitoring research support",
  "Disaster awareness observation workflows",
  "Compact CubeSat subsystem development experience",
  "AI-assisted onboard data handling experimentation",
  "Future indigenous small-satellite platform capability development"
]

export default function PrithiviSatPage() {
  return (
    <PageWrapper scene={<GlobeScene />}>

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

                  <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30">
                    <Satellite className="w-10 h-10 text-cyan-400" />
                  </div>

                  <TRLBadge level={3} />

                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  PrithiviSat
                </h1>

                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  PrithiviSat is an indigenous CubeSat mission under development at IARRD
                  focused on environmental observation workflows, disaster awareness
                  support concepts, and experimentation with AI-assisted onboard
                  processing for compact satellite platforms.
                </p>

              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur rounded-lg border border-border">

                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />

                <span className="text-sm text-muted-foreground">
                  Mission Architecture Development
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
                Mission Capabilities
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Planned sensing and processing workflows supporting applied CubeSat mission experimentation.
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
                className="bg-card/50 backdrop-blur border-border hover:border-cyan-500/30 transition-all"
              >

                <CardHeader className="flex flex-row items-start gap-4">

                  <div className="p-3 bg-cyan-500/10 rounded-xl">
                    <cap.icon className="w-6 h-6 text-cyan-400" />
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


      {/* SPECIFICATIONS */}

      <section className="py-24 relative">

        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection animation="slide-right">

            <h2 className="text-2xl font-bold mb-8">
              Mission Overview
            </h2>

            <div className="space-y-3">

              {specifications.map(spec => (

                <div
                  key={spec.label}
                  className="flex items-center justify-between py-4 px-6 bg-card/50 backdrop-blur rounded-xl border border-border"
                >

                  <span className="text-muted-foreground">
                    {spec.label}
                  </span>

                  <span className="font-medium text-cyan-400">
                    {spec.value}
                  </span>

                </div>

              ))}

            </div>

          </AnimatedSection>

        </div>

      </section>


      {/* APPLICATION AREAS */}

      <section className="py-24 relative">

        <div className="container mx-auto px-4 lg:px-8 text-center">

          <AnimatedSection>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mission Applications
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              PrithiviSat supports experimentation toward future indigenous
              environmental monitoring satellite capability.
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
              Collaborate on PrithiviSat
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Institutions and contributors interested in CubeSat subsystem development
              and applied Earth observation workflows are welcome to connect with IARRD.
            </p>

            <Button size="lg" asChild>

              <Link href="/contact">

                Contact IARRD

                <ArrowRight className="ml-2 w-4 h-4" />

              </Link>

            </Button>

          </AnimatedSection>

        </div>

      </section>

    </PageWrapper>
  )
}