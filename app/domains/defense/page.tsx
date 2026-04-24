"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowLeft, Shield, Radar, Target, Navigation, Cpu, Zap, Eye } from "lucide-react"
import { PageWrapper } from "@/components/immersive/page-wrapper"
import { AnimatedSection, StaggeredContainer } from "@/components/immersive/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const NetworkScene = dynamic(
  () => import("@/components/3d/network-scene").then(mod => ({ default: mod.NetworkScene })),
  { ssr: false }
)

/* ================================
   DEFENSE CAPABILITIES
================================ */

const capabilities = [
  {
    icon: Radar,
    title: "Situational Awareness Systems",
    description:
      "Concept-level development of integrated sensing frameworks combining terrestrial sensors, aerial platforms, and satellite-linked observation pipelines.",
    features: ["Sensor fusion concepts", "Tracking logic models", "Monitoring simulations"]
  },
  {
    icon: Target,
    title: "Autonomous Reconnaissance Concepts",
    description:
      "Exploration of lightweight autonomous sensing platforms supporting terrain understanding and environmental awareness workflows.",
    features: ["Computer vision pipelines", "Navigation logic", "Edge processing concepts"]
  },
  {
    icon: Navigation,
    title: "Secure Communication Architectures",
    description:
      "Study of resilient communication approaches for distributed mission-support systems operating in constrained environments.",
    features: ["Mesh networking concepts", "Signal integrity models", "Resilience approaches"]
  },
  {
    icon: Cpu,
    title: "Decision Support Software",
    description:
      "Development of AI-assisted tools supporting mission planning workflows, monitoring pipelines, and operational awareness visualization.",
    features: ["Simulation-assisted planning", "Data interpretation tools", "Mission workflow models"]
  }
]

/* ================================
   DEFENSE PROJECTS
================================ */

const projects = [
  {
    name: "IRAI Q-2 Autonomous Reconnaissance Drone",
    description:
      "IRAI Q-2 is an internally developed autonomous drone research platform focused on reconnaissance assistance, environmental awareness, and sensor-driven navigation workflows. The project supports experimentation in onboard perception, mission-support sensing, and compact aerial platform architecture.",
    status: "Design Development",
    technologies: [
      "Autonomous navigation concepts",
      "Computer vision pipelines",
      "Sensor integration",
      "Embedded AI experimentation"
    ]
  },
  {
    name: "Distributed Monitoring Architecture Study",
    description:
      "Research into multi-source monitoring frameworks combining ground-based sensors, aerial platforms, and satellite-linked observation pipelines.",
    status: "Concept Development",
    technologies: [
      "Sensor Fusion",
      "AI-assisted monitoring",
      "System architecture modeling"
    ]
  },
  {
    name: "Autonomous Reconnaissance Platform Concepts",
    description:
      "Early-stage exploration of compact autonomous sensing platforms supporting terrain interpretation and environmental awareness workflows.",
    status: "Research Phase",
    technologies: [
      "Computer Vision",
      "Navigation logic",
      "Embedded AI"
    ]
  }
]

/* ================================
   DEFENSE ACHIEVEMENTS
================================ */

const achievements = [
  "Formation of a dedicated multidisciplinary defense research initiative within IARRD",
  "Early-stage architecture studies for autonomous sensing and monitoring platforms",
  "Integration of AI-driven simulation approaches into mission-support modeling workflows",
  "Ongoing collaboration planning with academic and technical partners"
]

export default function DefensePage() {
  return (
    <PageWrapper scene={<NetworkScene />}>

      {/* HEADER */}

      <section className="pt-32 pb-24 relative">
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
                <div className="p-3 bg-red-500/10 rounded-xl">
                  <Shield className="h-8 w-8 text-red-500" />
                </div>

                <Badge variant="secondary" className="text-sm">
                  Defense Domain
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Applied{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Defense Research
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                The Defense domain at IARRD focuses on applied research supporting situational awareness,
                autonomous sensing concepts, mission-support software, and secure communication architectures.
                Our work emphasizes simulation-driven development and indigenous system design aligned with
                long-term national capability building.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
  size="lg"
  className="gap-2"
  onClick={() =>
    document.getElementById("capabilities")?.scrollIntoView({
      behavior: "smooth"
    })
  }
>
  View Research Areas
</Button>

<Button
  size="lg"
  variant="outline"
  className="gap-2"
  onClick={() =>
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth"
    })
  }
>
  Domain Overview
</Button>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CAPABILITIES */}

      <section id="capabilities"className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Defense{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Capabilities
                </span>
              </h2>

              <p className="text-lg text-muted-foreground">
                Focused research directions supporting long-term development of indigenous mission-support technologies.
              </p>

            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 gap-8" staggerDelay={150}>
            {capabilities.map((capability) => (

              <Card
                key={capability.title}
                className="group hover:border-red-500/50 transition-all"
              >

                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">

                    <div className="p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                      <capability.icon className="h-5 w-5 text-red-500" />
                    </div>

                    <CardTitle className="text-xl">
                      {capability.title}
                    </CardTitle>

                  </div>
                </CardHeader>

                <CardContent>

                  <p className="text-muted-foreground mb-4">
                    {capability.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {capability.features.map((feature) => (
                      <Badge
                        key={feature}
                        variant="outline"
                        className="text-xs"
                      >
                        {feature}
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

      <section id="projects" className="py-24 relative bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Defense{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Projects
                </span>
              </h2>

              <p className="text-lg text-muted-foreground">
                Applied research initiatives exploring sensing, autonomy, and mission-support system architectures.
              </p>

            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 gap-8" staggerDelay={150}>
            {projects.map((project) => (

              <Card
                key={project.name}
                className="group hover:border-red-500/50 transition-all"
              >

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">

                    <CardTitle className="text-xl">
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
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                </CardContent>

              </Card>

            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* ACHIEVEMENTS */}

      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Defense{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Progress
                </span>
              </h2>

              <p className="text-lg text-muted-foreground">
                Early milestones supporting development of internal defense-focused research capability.
              </p>

            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (

              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-card/50 rounded-xl border border-border/50 hover:border-red-500/50 transition-all"
              >

                <div className="p-2 bg-red-500/10 rounded-lg">
                  <Zap className="h-5 w-5 text-red-500" />
                </div>

                <p className="text-muted-foreground">
                  {achievement}
                </p>

              </div>

            ))}
          </div>

        </div>
      </section>

    </PageWrapper>
  )
}