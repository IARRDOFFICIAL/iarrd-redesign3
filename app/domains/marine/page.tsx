"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import {
  ArrowLeft,
  Waves,
  Cpu,
  Radio,
  Database,
  BatteryCharging,
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


const GlobeScene = dynamic(
  () =>
    import("@/components/3d/globe-scene").then(
      mod => ({ default: mod.GlobeScene })
    ),
  { ssr: false }
)


/* ===============================
CAPABILITIES
=============================== */

const capabilities = [

  {
    icon: Cpu,
    title: "Autonomous Underwater Systems",
    description:
      "AI-supported AUV and ROV architectures under exploration for deep-sea observation, inspection workflows, and long-endurance marine missions.",
    tags: [
      "AUV Technology",
      "ROV Systems",
      "Mission Planning"
    ]
  },

  {
    icon: Radio,
    title: "Underwater Communication Systems",
    description:
      "Research into subsea communication techniques using acoustic, optical, and hybrid transmission approaches for reliable marine data exchange.",
    tags: [
      "Acoustic Communication",
      "Optical Systems",
      "Data Transmission"
    ]
  },

  {
    icon: Database,
    title: "Ocean Intelligence & Data Analytics",
    description:
      "AI-assisted ocean data modelling pipelines for environmental monitoring, ecosystem analysis, and operational marine intelligence workflows.",
    tags: [
      "Data Modeling",
      "Predictive Systems",
      "Environmental Analysis"
    ]
  },

  {
    icon: BatteryCharging,
    title: "Underwater Energy & Power Systems",
    description:
      "Exploration of subsea-compatible energy architectures enabling longer-duration autonomous marine sensing and monitoring operations.",
    tags: [
      "Subsea Charging",
      "Energy Systems",
      "Power Optimization"
    ]
  }

]



/* ===============================
PROJECTS
=============================== */

const projects = [

  {
    name: "AI-Powered eDNA Biodiversity Intelligence Platform",
    status: "Development",
    description:
      "A predictive and analytical platform processing marine environmental DNA samples to identify known species, cluster unknown genetic signals, and support biodiversity intelligence generation using AI-assisted pattern recognition.",
    tags: [
      "eDNA Analysis",
      "Biodiversity Detection",
      "AI Modeling",
      "Marine Genomics"
    ]
  },

  {
    name: "AI-Integrated Marine Ecosystem Intelligence Platform",
    status: "Development",
    description:
      "A unified marine intelligence architecture integrating oceanographic, biological, fisheries, and genetic datasets to support ecosystem interaction modelling and environmental forecasting workflows.",
    tags: [
      "Ecosystem Modeling",
      "Predictive Analytics",
      "Ocean Data Integration",
      "AI Systems"
    ]
  }

]



/* ===============================
ACHIEVEMENTS / DIVISION SUMMARY
=============================== */

const focusAreas = [

  "Autonomous Underwater Vehicles (AUV / ROV)",
  "Underwater Communication Systems",
  "Ocean Intelligence & Data Analytics",
  "Underwater Energy & Power Systems",
  "Marine Environmental Monitoring"

]



export default function MarinePage() {

  return (

    <PageWrapper scene={<GlobeScene />}>

      {/* ===============================
      HERO
      =============================== */}

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

                <div className="p-3 bg-blue-500/10 rounded-xl">

                  <Waves className="h-8 w-8 text-blue-500" />

                </div>

                <Badge variant="secondary">

                  Marine Domain

                </Badge>

              </div>


              <h1 className="text-4xl md:text-6xl font-bold mb-6">

                Advanced Maritime & Ocean Engineering

              </h1>


              <p className="text-xl text-muted-foreground mb-8">

                Research-driven solutions in underwater systems,
                communication architectures, and ocean intelligence
                technologies supporting long-duration marine sensing
                and exploration aligned with India’s emerging deep-ocean
                capability initiatives.

              </p>


              <div className="flex flex-wrap gap-4">

                <Button size="lg">

                  Explore Marine Research

                </Button>

                <Button size="lg" variant="outline">

                  View Ongoing Projects

                </Button>

              </div>

            </div>

          </AnimatedSection>

        </div>

      </section>



      {/* ===============================
CAPABILITIES
=============================== */}

      <section className="py-24">

        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>

            <div className="text-center max-w-3xl mx-auto mb-16">

              <h2 className="text-3xl md:text-4xl font-bold mb-4">

                Marine Capabilities

              </h2>

              <p className="text-lg text-muted-foreground">

                Core technologies and research areas driving underwater
                innovation and ocean engineering exploration.

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
                className="group hover:border-blue-500/40 transition-all"
              >

                <CardHeader>

                  <div className="flex items-center gap-3 mb-2">

                    <div className="p-2 bg-blue-500/10 rounded-lg">

                      <capability.icon className="h-5 w-5 text-blue-500" />

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



      {/* ===============================
PROJECTS
=============================== */}

      <section className="py-24 bg-muted/30">

        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>

            <div className="text-center max-w-3xl mx-auto mb-16">

              <h2 className="text-3xl md:text-4xl font-bold mb-4">

                Ongoing Research & Projects

              </h2>

              <p className="text-lg text-muted-foreground">

                AI-assisted and engineering-driven solutions addressing
                real-world marine ecosystem intelligence challenges.

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
                className="hover:border-blue-500/40 transition-all"
              >

                <CardHeader>

                  <div className="flex justify-between items-start">

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



      {/* ===============================
DIVISION SUMMARY
=============================== */}

      <section className="py-24">

        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>

            <div className="max-w-3xl mx-auto text-center mb-12">

              <h2 className="text-3xl md:text-4xl font-bold mb-4">

                Marine & Underwater Systems Division

              </h2>

              <p className="text-muted-foreground">

                Engineering intelligent marine technologies supporting
                ocean monitoring, environmental analysis, and long-endurance
                autonomous underwater mission capability development.

              </p>

            </div>

          </AnimatedSection>



          <div className="grid md:grid-cols-2 gap-6">

            {focusAreas.map(area => (

              <div
                key={area}
                className="flex items-center gap-4 p-6 bg-card/50 rounded-xl border border-border/50 hover:border-blue-500/40 transition-all"
              >

                <div className="p-2 bg-blue-500/10 rounded-lg">

                  <Zap className="h-5 w-5 text-blue-500" />

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