"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowRight, Target, Eye, Rocket, Shield, Award, Users, Lightbulb, Globe } from "lucide-react"
import { PageWrapper } from "@/components/immersive/page-wrapper"
import { AnimatedSection, StaggeredContainer } from "@/components/immersive/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const HeroScene = dynamic(
  () => import("@/components/3d/hero-scene").then(mod => ({ default: mod.HeroScene })),
  { ssr: false }
)

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Every project we undertake serves a clear purpose in advancing India's space capabilities and strategic autonomy.",
  },
  {
    icon: Eye,
    title: "Technical Excellence",
    description: "We maintain the highest standards in engineering, testing, and quality assurance across all our systems.",
  },
  {
    icon: Rocket,
    title: "Innovation First",
    description: "We push boundaries with AI integration, novel manufacturing techniques, and cutting-edge mission designs.",
  },
  {
    icon: Shield,
    title: "Indigenous Development",
    description: "Building critical space technology in-house to ensure self-reliance and strategic independence.",
  },
]

const milestones = [
  { year: "2022", title: "Founded", description: "IARRD established with a vision to democratize space technology" },
  { year: "2023", title: "First Prototype", description: "Successfully developed and tested initial CubeSat subsystems" },
  { year: "2024", title: "IRAI-Q2 Launch", description: "AI astronomy platform achieves 98%+ accuracy in trials" },
  { year: "2025", title: "Mission Ready", description: "PrithiviSat integration complete, targeting launch window" },
]

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
                Building India&apos;s{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                  Space Future
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                We are a deep-tech space startup building India&apos;s next-generation 
                space infrastructure through indigenous satellite development, 
                AI-powered intelligence platforms, and advanced observation systems.
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
            <StaggeredContainer 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              staggerDelay={100}
            >
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
            <AnimatedSection animation="slide-right">
              <div className="p-8 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl border border-primary/20">
                <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Our Mission</h2>
                <h3 className="text-3xl font-bold mb-6">Democratizing Space Technology</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  IARRD was founded with a singular vision: to make space technology 
                  accessible, affordable, and indigenous. We believe that India&apos;s 
                  future in space depends on building robust, homegrown capabilities 
                  that reduce dependency on foreign technology.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our approach combines cutting-edge AI with traditional aerospace 
                  engineering, creating systems that are not only innovative but also 
                  practical and deployable in real-world conditions.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20">
                <h2 className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-4">Our Vision</h2>
                <h3 className="text-3xl font-bold mb-6">India&apos;s Space Future</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We envision a future where Indian space technology leads globally 
                  in innovation, reliability, and cost-effectiveness. Our goal is to 
                  build an ecosystem of indigenous capabilities spanning satellites, 
                  ground systems, and intelligent analytics platforms.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By 2030, we aim to have operational constellations, established 
                  partnerships with government and industry, and a proven track 
                  record of successful space missions.
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
                The principles that guide everything we do at IARRD
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
                  <p className="text-muted-foreground text-sm">{value.description}</p>
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
                Key milestones in building India&apos;s space future
              </p>
            </div>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto">
            <StaggeredContainer className="space-y-0" staggerDelay={150}>
              {milestones.map((milestone, i) => (
                <div key={milestone.year} className="relative flex gap-8">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-primary rounded-full z-10" />
                    {i < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border absolute top-4" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="pb-12">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                      <span className="text-xl font-semibold">{milestone.title}</span>
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
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
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Whether you&apos;re looking to partner, invest, or join our team, 
                we&apos;d love to hear from you.
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
