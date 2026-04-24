"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import {
  ArrowRight,
  Target,
  Eye,
  Rocket,
  Shield,
  Award,
  Users,
  Lightbulb,
  Globe,
} from "lucide-react"
import { PageWrapper } from "@/components/immersive/page-wrapper"
import { AnimatedSection, StaggeredContainer } from "@/components/immersive/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const HeroScene = dynamic(
  () => import("@/components/3d/hero-scene").then((mod) => ({ default: mod.HeroScene })),
  { ssr: false }
)

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We focus on problems with clear technical, scientific, and operational relevance to India’s long-term space and strategic capabilities.",
  },
  {
    icon: Eye,
    title: "Technical Excellence",
    description:
      "We prioritize engineering discipline, testing, system reliability, and continuous improvement across every stage of development.",
  },
  {
    icon: Rocket,
    title: "Innovation First",
    description:
      "We adopt new methods, AI integration, and emerging technologies when they improve practicality, performance, and mission outcomes.",
  },
  {
    icon: Shield,
    title: "Indigenous Development",
    description:
      "Wherever possible, we aim to build critical technology in-house to strengthen self-reliance and long-term domestic capability.",
  },
]

const milestones = [
  {
    year: "2023",
    title: "Vision Formation",
    description:
      "The initial concept for IARRD emerged with the goal of building an accessible student-led platform focused on space technology, defence systems, and interdisciplinary engineering exposure.",
  },
  {
    year: "2024",
    title: "Organizational Establishment",
    description:
      "IARRD was formally founded and began structuring its core domains including satellite systems, defence technology studies, astronomy research support, propulsion concepts.",
  },
  {
    year: "2025",
    title: "Official Launch & Early R&D",
    description:
      "Early-stage conceptual work progressed on flagship initiatives such as the PrithiviSat CubeSat architecture and the IRAI-Q2 unmanned systems framework, along with internal technical documentation and domain-level planning with 6 Researchers in hand.",
  },
  {
    year: "2025",
    title: "Academic Engagement, Technical Expansion & Investor Outreach",
    description:
      "Activities expanded toward structured documentation, curriculum-style technical learning resources in drone and defence technology, and outreach efforts for academic collaboration and student participation in aerospace-related learning initiatives and got MOU Signed with NTLS Groups for Edutech.",
  },
  {
    year: "2026",
    title: "Institutional Collaboration & Lab Initiatives",
    description:
      "IARRD progressed into early institutional engagement through lab-related initiatives, MoU discussions with academic institutions, and preparation of structured technical programs supporting student exposure to satellite and defence technology domains & Opened Their First Lab In Dhanalakshmi College of Engineering & Technology with 40+ Researchers in hand.",
  },
];

const stats = [
  { icon: Users, value: "25+", label: "Team Members" },
  { icon: Lightbulb, value: "5", label: "Patents Filed" },
  { icon: Award, value: "3", label: "Active Projects" },
  { icon: Globe, value: "10+", label: "Partners" },
]

export default function AboutPage() {
  return (
    <PageWrapper scene={<HeroScene />}>
      {/* Hero */}
      <section className="pt-32 pb-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl">
              <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
  About IARRD
</span>

<h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
  Building India's{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
    Next Generation of Space and Engineering Capability
  </span>
</h1>

<p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
  IARRD is a multidisciplinary engineering and research initiative advancing accessible innovation across space, defense, marine, and satellite technology domains. Our work focuses on indigenous capability development, applied learning, and collaborative experimentation supporting long-term participation in next-generation engineering systems..
</p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/team">
                    Meet Our Team
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>

                <Button variant="outline" size="lg" asChild>
                  <Link href="/projects">View Our Projects</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <StaggeredContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={100}>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-8 bg-card/50 backdrop-blur rounded-2xl border border-border text-center group hover:border-primary/30 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </StaggeredContainer>
          </AnimatedSection>
        </div>
      </section>

    {/* Mission & Vision */}
<section className="py-24 relative">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16">

      {/* Mission */}
      <AnimatedSection animation="slide-right">
        <div className="p-8 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl border border-primary/20 h-full">

          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Our Mission
          </h2>

          <h3 className="text-4xl font-bold mb-6">
            Building Practical Engineering Capability
          </h3>

          <p className="text-lg text-muted-foreground leading-relaxed">
            IARRD works to strengthen indigenous capability across space,
            marine, defense, and satellite technology domains through applied
            learning, collaborative research, and subsystem-level engineering
            development.
          </p>

        </div>
      </AnimatedSection>


      {/* Vision */}
      <AnimatedSection animation="slide-left" delay={200}>
        <div className="p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20 h-full">

          <h2 className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-4">
            Our Vision
          </h2>

          <h3 className="text-4xl font-bold mb-6">
            Enabling India's Next Generation of Engineering Innovation
          </h3>

          <p className="text-lg text-muted-foreground leading-relaxed">
            We aim to support the growth of future engineers and researchers by
            contributing to satellite systems, propulsion concepts, marine
            technologies, and intelligent sensing platforms through structured
            experimentation and long-term collaboration.
          </p>

        </div>
      </AnimatedSection>

    </div>
  </div>
</section>

      {/* Values */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that shape our work, our decisions, and the systems we build.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={100}>
            {values.map((value) => (
              <Card
                key={value.title}
                className="bg-card/50 backdrop-blur border-border hover:border-primary/30 transition-all group"
              >
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key stages in the growth of IARRD and its long-term development roadmap.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <StaggeredContainer className="space-y-0" staggerDelay={150}>
              {milestones.map((milestone, i) => (
                <div key={milestone.year} className="relative flex gap-8">
                  <div className="flex flex-col items-center relative">
                    <div className="w-4 h-4 bg-primary rounded-full z-10 mt-2" />
                    {i < milestones.length - 1 && (
                      <div className="absolute top-6 w-0.5 h-[calc(100%-8px)] bg-border" />
                    )}
                  </div>

                  <div className="pb-12">
                    <div className="flex flex-wrap items-center gap-4 mb-2">
                      <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                      <span className="text-xl font-semibold">{milestone.title}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </StaggeredContainer>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <div className="p-12 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-3xl border border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                If you are interested in collaboration, technical partnership, investment, or
                joining the team, we would be glad to connect and explore how we can build
                meaningful technology together.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/team">Meet the Team</Link>
                </Button>

                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageWrapper>
  )
}