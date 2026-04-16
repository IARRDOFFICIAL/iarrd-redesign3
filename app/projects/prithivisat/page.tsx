"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowLeft, ArrowRight, Satellite, Radio, Clock, Target, Check, Loader2 } from "lucide-react"
import { PageWrapper } from "@/components/immersive/page-wrapper"
import { AnimatedSection, StaggeredContainer } from "@/components/immersive/animated-section"
import { TRLBadge } from "@/components/trl-badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const SatelliteScene = dynamic(
  () => import("@/components/3d/satellite-scene").then(mod => ({ default: mod.SatelliteScene })),
  { ssr: false }
)

const subsystems = [
  { name: "Power", status: "complete" },
  { name: "Communications", status: "complete" },
  { name: "Payload", status: "in-progress" },
  { name: "Structure", status: "complete" },
  { name: "ADCS", status: "in-progress" },
  { name: "OBC", status: "complete" },
  { name: "Thermal", status: "complete" },
  { name: "Integration", status: "pending" },
]

const specs = [
  { label: "Form Factor", value: "2U CubeSat (10x10x22.7 cm)" },
  { label: "Mass", value: "< 2.66 kg" },
  { label: "Orbit Type", value: "Low Earth Orbit (LEO)" },
  { label: "Altitude", value: "400-600 km" },
  { label: "Inclination", value: "51.6° (ISS-compatible)" },
  { label: "Communication", value: "UHF/VHF, S-band" },
  { label: "Mission Duration", value: "12-18 months" },
  { label: "Data Output", value: "Multi-spectral imagery" },
]

const objectives = [
  {
    icon: Target,
    title: "Primary Payload",
    description: "Multi-spectral imaging system for Earth observation, vegetation monitoring, and atmospheric analysis.",
  },
  {
    icon: Radio,
    title: "Communication Experiment",
    description: "Testing indigenous communication protocols and ground station integration capabilities.",
  },
  {
    icon: Clock,
    title: "Technology Demonstration",
    description: "Validating in-house developed subsystems for future larger satellite missions.",
  },
]

export default function PrithiviSatPage() {
  const completedCount = subsystems.filter(s => s.status === "complete").length
  const progress = (completedCount / subsystems.length) * 100

  return (
    <PageWrapper scene={<SatelliteScene />}>
      {/* Hero */}
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
                    <Satellite className="w-10 h-10 text-primary" />
                  </div>
                  <TRLBadge level={5} />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">PrithiviSat</h1>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Indigenous 2U CubeSat mission for Earth observation and atmospheric 
                  research, designed for Low Earth Orbit deployment.
                </p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur rounded-lg border border-border">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Integration Phase</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="p-8 bg-card/50 backdrop-blur rounded-2xl border border-border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Overall Progress</h2>
                <span className="text-3xl font-bold text-primary">{Math.round(progress)}%</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden mb-6">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full transition-all duration-1000"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {subsystems.map((system) => (
                  <div 
                    key={system.name}
                    className={`p-4 rounded-xl text-center border transition-colors ${
                      system.status === "complete" 
                        ? "bg-emerald-500/10 border-emerald-500/30" 
                        : system.status === "in-progress"
                        ? "bg-amber-500/10 border-amber-500/30"
                        : "bg-secondary/50 border-border"
                    }`}
                  >
                    <div className="flex justify-center mb-2">
                      {system.status === "complete" ? (
                        <Check className="w-5 h-5 text-emerald-400" />
                      ) : system.status === "in-progress" ? (
                        <Loader2 className="w-5 h-5 text-amber-400 animate-spin" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground" />
                      )}
                    </div>
                    <span className="text-xs font-medium">{system.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection animation="slide-right">
              <h2 className="text-2xl font-bold mb-8">Technical Specifications</h2>
              <div className="space-y-4">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between py-4 px-6 bg-card/50 backdrop-blur rounded-xl border border-border"
                  >
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-medium text-primary">{spec.value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={200}>
              <h2 className="text-2xl font-bold mb-8">Mission Objectives</h2>
              <StaggeredContainer className="space-y-6" staggerDelay={150}>
                {objectives.map((obj) => (
                  <Card key={obj.title} className="bg-card/50 backdrop-blur border-border hover:border-primary/30 transition-colors">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <obj.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{obj.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{obj.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </StaggeredContainer>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in PrithiviSat?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you&apos;re a potential partner, researcher, or investor, 
              we&apos;d love to discuss collaboration opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects/irai-q2">
                  View Next Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageWrapper>
  )
}
