"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import {
  ArrowLeft,
  ArrowRight,
  Drone,
  Cpu,
  Radar,
  Eye,
  Navigation
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

const NeuralScene = dynamic(
  () =>
    import("@/components/3d/neural-scene").then(mod => ({
      default: mod.NeuralScene
    })),
  { ssr: false }
)

/* ===============================
PROJECT CAPABILITIES
=============================== */

const capabilities = [
  {
    icon: Eye,
    title: "Reconnaissance Support Platform",
    description:
      "IRAI-Q2 is being developed as a compact reconnaissance drone research platform supporting environmental awareness and mission-support sensing workflows."
  },

  {
    icon: Cpu,
    title: "Embedded Autonomy Experiments",
    description:
      "The platform supports experimentation with onboard autonomy concepts including perception pipelines and navigation assistance logic."
  },

  {
    icon: Radar,
    title: "Sensor Integration Architecture",
    description:
      "IRAI-Q2 enables testing of modular sensor configurations supporting aerial observation and data collection workflows."
  },

  {
    icon: Navigation,
    title: "Mission Workflow Simulation",
    description:
      "Supports simulation-driven mission planning experiments for future autonomous reconnaissance platform development."
  }
]

/* ===============================
CURRENT DEVELOPMENT STATUS
=============================== */

const specifications = [
  { label: "Platform Type", value: "Autonomous Reconnaissance Drone Research Platform" },
  { label: "Development Stage", value: "Prototype Architecture Exploration" },
  { label: "Primary Focus", value: "Sensor Integration & Navigation Workflows" },
  { label: "Autonomy Level", value: "Experimental Assistance Logic" },
  { label: "Mission Role", value: "Reconnaissance Research Support" },
  { label: "Deployment Status", value: "Internal Development" }
]

/* ===============================
APPLICATION AREAS
=============================== */

const useCases = [
  "Autonomous sensing workflow experimentation",
  "Environmental awareness data collection research",
  "Compact reconnaissance platform architecture studies",
  "Embedded navigation logic experimentation",
  "Future multi-domain mission support platform development"
]

export default function IRAIQ2Page() {
  return (
    <PageWrapper scene={<NeuralScene />}>

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

                  <div className="p-4 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl border border-red-500/30">
                    <Drone className="w-10 h-10 text-red-400" />
                  </div>

                  <TRLBadge level={3} />

                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  IRAI-Q2
                </h1>

                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  IRAI-Q2 is an internally developed reconnaissance drone research platform
                  supporting experimentation in autonomous sensing, navigation workflows,
                  and compact mission-support aerial system architecture.
                </p>

              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur rounded-lg border border-border">

                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />

                <span className="text-sm text-muted-foreground">
                  Prototype Development
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
                Core Capabilities
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Research capabilities supporting autonomous aerial sensing platform development
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
                className="bg-card/50 backdrop-blur border-border hover:border-red-500/30 transition-all"
              >

                <CardHeader className="flex flex-row items-start gap-4">

                  <div className="p-3 bg-red-500/10 rounded-xl">
                    <cap.icon className="w-6 h-6 text-red-400" />
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
              Development Overview
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

                  <span className="font-medium text-red-400">
                    {spec.value}
                  </span>

                </div>

              ))}

            </div>

          </AnimatedSection>

        </div>

      </section>

      {/* USE CASES */}

      <section className="py-24 relative">

        <div className="container mx-auto px-4 lg:px-8 text-center">

          <AnimatedSection>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Research Applications
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              IRAI-Q2 supports experimentation workflows contributing to future
              autonomous reconnaissance system development.
            </p>

            <ul className="space-y-4 max-w-xl mx-auto">

              {useCases.map((item, i) => (

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
              Explore Collaboration Opportunities
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Interested in contributing to autonomous sensing and reconnaissance platform research?
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