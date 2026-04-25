"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import {
  ArrowLeft,
  Telescope,
  Brain,
  Database,
  Cpu,
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


const TelescopeScene = dynamic(
  () =>
    import("@/components/3d/telescope-scene").then(
      mod => ({ default: mod.TelescopeScene })
    ),
  { ssr: false }
)


/* ===============================
CAPABILITIES
=============================== */

const capabilities = [

  {
    icon: Telescope,
    title: "Astronomical Image Processing Systems",
    description:
      "Advanced computational enhancement workflows improving telescope imagery through noise reduction, distortion correction, and resolution reconstruction.",
    tags: [
      "Image Enhancement",
      "Noise Reduction",
      "Super-Resolution"
    ]
  },

  {
    icon: Brain,
    title: "AI-Based Celestial Object Detection",
    description:
      "Deep-learning-assisted detection and classification pipelines supporting identification of stars, galaxies, and other celestial bodies from observational datasets.",
    tags: [
      "CNN Models",
      "Object Detection",
      "Astrophysical Classification"
    ]
  },

  {
    icon: Database,
    title: "Space Data Intelligence & Analytics",
    description:
      "Large-scale astronomical dataset processing supporting anomaly discovery, celestial pattern analysis, and predictive modeling workflows.",
    tags: [
      "Data Analytics",
      "Predictive Modeling",
      "Space Intelligence"
    ]
  },

  {
    icon: Cpu,
    title: "Computational Astrophysics Systems",
    description:
      "Scientific computing pipelines supporting simulation-driven interpretation of cosmic phenomena and large-scale observational datasets.",
    tags: [
      "Simulation Systems",
      "Scientific Computing",
      "Astrophysics Models"
    ]
  }

]


/* ===============================
PROJECTS
=============================== */

const projects = [

  {
    name:
      "AI-Powered Astronomical Image Enhancement & Object Detection System",

    status: "Development",

    description:
      "Computational image-processing framework designed to enhance astronomical imagery affected by atmospheric turbulence, sensor noise, and optical distortions using filtering pipelines and CNN-based feature extraction workflows.",

    tags: [
      "Image Processing",
      "CNN Models",
      "Celestial Detection",
      "Space Imaging"
    ]
  },

  {
    name:
      "Intelligent Celestial Data Analysis Platform",

    status: "Development",

    description:
      "AI-assisted astronomy analytics platform integrating multi-source observational datasets to support celestial pattern recognition, object classification, and predictive astrophysical modeling workflows.",

    tags: [
      "Astro Data Modeling",
      "AI Analytics",
      "Pattern Recognition",
      "Space Intelligence"
    ]
  }

]


/* ===============================
FOCUS AREAS
=============================== */

const focusAreas = [

  "Astronomical Image Enhancement (Gaussian Filtering & Deblurring)",
  "Celestial Object Detection using CNN Models",
  "Feature Extraction (Brightness, Shape & Spectral Patterns)",
  "Space Data Analytics & Predictive Modeling",
  "Automated Astronomical Observation Workflows"

]


export default function AstronomyPage() {

  return (

    <PageWrapper scene={<TelescopeScene />}>

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

                <div className="p-3 bg-cyan-500/10 rounded-xl">

                  <Telescope className="h-8 w-8 text-cyan-500" />

                </div>

                <Badge variant="secondary">

                  Space Division

                </Badge>

              </div>


              <h1 className="text-4xl md:text-6xl font-bold mb-6">

                Astronomic Telemetric System

              </h1>


              <p className="text-xl text-muted-foreground mb-8">

                AI-driven solutions for astronomical imaging, celestial analysis,
                and space data intelligence supporting computational observation
                pipelines aligned with modern astrophysics and deep-space research initiatives.

              </p>


              <div className="flex flex-wrap gap-4">

                <Button size="lg">

                  Explore Space Research

                </Button>

                <Button size="lg" variant="outline">

                  View Ongoing Projects

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

                Astronomy Capabilities

              </h2>

              <p className="text-lg text-muted-foreground">

                Core technologies supporting intelligent space observation,
                image denoising pipelines, and astronomical data analytics workflows.

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
                className="hover:border-cyan-500/40 transition-all"
              >

                <CardHeader>

                  <div className="flex items-center gap-3">

                    <div className="p-2 bg-cyan-500/10 rounded-lg">

                      <capability.icon className="h-5 w-5 text-cyan-500" />

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

                Ongoing Research & Projects

              </h2>

              <p className="text-lg text-muted-foreground">

                AI-assisted solutions addressing challenges in astronomical
                imaging and computational space observation workflows.

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
                className="hover:border-cyan-500/40 transition-all"
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



      {/* DIVISION SUMMARY */}

      <section className="py-24">

        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>

            <div className="text-center max-w-3xl mx-auto mb-12">

              <h2 className="text-3xl md:text-4xl font-bold mb-4">

                Astronomy & Space Systems Division

              </h2>

            </div>

          </AnimatedSection>


          <div className="grid md:grid-cols-2 gap-6">

            {focusAreas.map(area => (

              <div
                key={area}
                className="flex items-center gap-4 p-6 bg-card/50 rounded-xl border border-border/50 hover:border-cyan-500/40 transition-all"
              >

                <div className="p-2 bg-cyan-500/10 rounded-lg">

                  <Zap className="h-5 w-5 text-cyan-500" />

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