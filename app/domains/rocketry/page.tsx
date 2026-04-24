"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import {
  ArrowLeft,
  Rocket,
  Cpu,
  Zap,
  Target,
  Flame,
  Gauge,
  Wind
} from "lucide-react"

import { PageWrapper } from "@/components/immersive/page-wrapper"
import {
  AnimatedSection,
  StaggeredContainer
} from "@/components/immersive/animated-section"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

const NeuralScene = dynamic(
  () =>
    import("@/components/3d/neural-scene").then(mod => ({
      default: mod.NeuralScene
    })),
  { ssr: false }
)

/* ================================
   FUTURE ROCKET RESEARCH DIRECTIONS
================================ */

const capabilities = [
  {
    icon: Cpu,
    title: "Flight Control Architecture Studies",
    description:
      "Early-stage exploration of avionics logic, trajectory modeling concepts, and simulation-driven flight control architectures for small launch platforms.",
    features: [
      "Trajectory simulation",
      "Guidance logic modeling",
      "Control system concepts"
    ]
  },

  {
    icon: Flame,
    title: "Hybrid Propulsion Research Roadmap",
    description:
      "Long-term investigation plans for hybrid propulsion technologies emphasizing safety, manufacturability, and cost-effective small launch vehicle development.",
    features: [
      "Hybrid propulsion fundamentals",
      "Fuel architecture concepts",
      "Engine simulation studies"
    ]
  },

  {
    icon: Target,
    title: "Guidance & Navigation Concepts",
    description:
      "Conceptual studies supporting navigation workflows for sounding rockets and small orbital launch vehicle architectures.",
    features: [
      "Navigation modeling",
      "Guidance logic research",
      "Mission trajectory planning"
    ]
  },

  {
    icon: Gauge,
    title: "Telemetry Framework Design",
    description:
      "Exploration of telemetry pipelines supporting real-time monitoring of propulsion behavior and vehicle performance during experimental launch workflows.",
    features: [
      "Telemetry architecture concepts",
      "Data acquisition workflows",
      "Mission monitoring pipelines"
    ]
  }
]

/* ================================
   FUTURE PROGRAMME INITIATIVES
================================ */

const projects = [
  {
    name: "Hybrid Rocket Engine Research Initiative",
    description:
      "Planned research direction focused on safe and modular hybrid propulsion experimentation suitable for educational-scale launch vehicle platforms.",
    status: "Planned",
    technologies: [
      "Hybrid propulsion concepts",
      "Fuel grain modeling",
      "Combustion simulation"
    ]
  },

  {
    name: "Small Launch Vehicle Architecture Study",
    description:
      "Early conceptual exploration of scalable small launch vehicle configurations supporting future indigenous satellite deployment capability.",
    status: "Concept Phase",
    technologies: [
      "Launch vehicle architecture",
      "Avionics modeling",
      "Mission simulation"
    ]
  }
]

/* ================================
   CURRENT DOMAIN STATUS
================================ */

const achievements = [
  "Rocket research domain established as part of IARRD long-term propulsion roadmap",
  "Initial hybrid propulsion study directions identified",
  "Simulation-first development strategy planned for early-stage experimentation",
  "Future collaboration pathways being explored with academic partners"
]

export default function RocketryPage() {
  return (
    <PageWrapper scene={<NeuralScene />}>

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
                <div className="p-3 bg-orange-500/10 rounded-xl">
                  <Rocket className="h-8 w-8 text-orange-500" />
                </div>

                <Badge variant="secondary" className="text-sm">
                  Rocket Research Domain
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Future Indigenous{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Launch Capability Research
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                The Rocket domain at IARRD focuses on long-term research directions in hybrid propulsion,
                small launch vehicle architecture, and simulation-driven avionics development.
                Current efforts are centered on conceptual studies and roadmap preparation for future
                experimental propulsion platforms and indigenous launch capability development.
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
  <Flame className="h-4 w-4" />
  Propulsion Roadmap
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
  <Rocket className="h-4 w-4" />
  Launch Architecture Studies
</Button>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CAPABILITIES */}

      <section id="capabilities" className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Rocket Research{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Directions
                </span>
              </h2>

              <p className="text-lg text-muted-foreground">
                Early-stage propulsion and launch system studies supporting long-term indigenous capability development.
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
                className="group hover:border-orange-500/50 transition-all"
              >

                <CardHeader>

                  <div className="flex items-center gap-3 mb-2">

                    <div className="p-2 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                      <capability.icon className="h-5 w-5 text-orange-500" />
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
                    {capability.features.map(feature => (
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

      {/* PROGRESS */}

      <section id="projects" className="py-24 relative bg-muted/30">

        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>

            <div className="text-center max-w-3xl mx-auto mb-16">

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Domain{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Progress
                </span>
              </h2>

              <p className="text-lg text-muted-foreground">
                Initial roadmap milestones supporting the future development of propulsion experimentation capability.
              </p>

            </div>

          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">

            {achievements.map((achievement, index) => (

              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-card/50 rounded-xl border border-border/50 hover:border-orange-500/50 transition-all"
              >

                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Zap className="h-5 w-5 text-orange-500" />
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