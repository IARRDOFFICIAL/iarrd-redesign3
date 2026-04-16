"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowLeft, Telescope, Camera, Radio, HardDrive, Star, Moon, Sun } from "lucide-react"
import { PageWrapper } from "@/components/immersive/page-wrapper"
import { AnimatedSection, StaggeredContainer } from "@/components/immersive/animated-section"
import { TRLBadge } from "@/components/trl-badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const TelescopeScene = dynamic(
  () => import("@/components/3d/telescope-scene").then(mod => ({ default: mod.TelescopeScene })),
  { ssr: false }
)

const specs = [
  { label: "Primary Aperture", value: "400mm Cassegrain" },
  { label: "Sensor Resolution", value: "61 Megapixels" },
  { label: "Field of View", value: "2.5 x 1.7 degrees" },
  { label: "Tracking Accuracy", value: "< 1 arcsecond RMS" },
  { label: "Observation Range", value: "Visual to Near-IR" },
  { label: "Data Pipeline", value: "Real-time processing" },
  { label: "Storage Capacity", value: "100TB+ archive" },
  { label: "Remote Operation", value: "Full automation" },
]

const capabilities = [
  {
    icon: Camera,
    title: "High-Resolution Imaging",
    description: "Deep-sky imaging with multi-filter capabilities for scientific research and astrophotography.",
    features: ["Multi-band photometry", "Narrowband imaging", "Time-series observations"],
  },
  {
    icon: Radio,
    title: "Satellite Tracking",
    description: "Precision tracking of LEO and GEO satellites with automated scheduling and data collection.",
    features: ["TLE-based tracking", "Optical ranging", "Conjunction analysis"],
  },
  {
    icon: HardDrive,
    title: "Data Pipeline",
    description: "Automated image processing, calibration, and archival with cloud-based access.",
    features: ["Dark/flat calibration", "Astrometric solving", "Photometric reduction"],
  },
]

const observations = [
  { icon: Star, label: "Deep Sky Objects", count: "15,000+" },
  { icon: Moon, label: "Asteroid Observations", count: "8,500+" },
  { icon: Sun, label: "Solar System Targets", count: "2,000+" },
]

export default function AstronomyToolsPage() {
  return (
    <PageWrapper scene={<TelescopeScene />}>
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
                  <div className="p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl border border-emerald-500/30">
                    <Telescope className="w-10 h-10 text-emerald-400" />
                  </div>
                  <TRLBadge level={6} />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Ground Systems</h1>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Advanced telescope systems and ground-based observation infrastructure 
                  for astronomical research, satellite tracking, and space situational awareness.
                </p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur rounded-lg border border-emerald-500/30">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm text-emerald-400 font-medium">Operational</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <StaggeredContainer 
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              staggerDelay={100}
            >
              {[
                { value: "5,000+", label: "Observation Hours" },
                { value: "50,000+", label: "Objects Catalogued" },
                { value: "50TB", label: "Data Archived" },
                { value: "99.2%", label: "System Uptime" },
              ].map((stat) => (
                <div 
                  key={stat.label}
                  className="p-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-500/20 text-center"
                >
                  <div className="text-3xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </StaggeredContainer>
          </AnimatedSection>
        </div>
      </section>

      {/* Observation Categories */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="p-8 bg-card/50 backdrop-blur rounded-2xl border border-border">
              <h2 className="text-xl font-semibold mb-8 text-center">Observation Portfolio</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {observations.map((obs) => (
                  <div 
                    key={obs.label}
                    className="flex items-center gap-4 p-6 bg-background/50 rounded-xl border border-border"
                  >
                    <div className="p-3 bg-emerald-500/10 rounded-xl">
                      <obs.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-400">{obs.count}</div>
                      <div className="text-sm text-muted-foreground">{obs.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">System Capabilities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional-grade observation infrastructure for research and operations
              </p>
            </div>
          </AnimatedSection>
          
          <StaggeredContainer className="grid md:grid-cols-3 gap-6" staggerDelay={150}>
            {capabilities.map((cap) => (
              <Card 
                key={cap.title} 
                className="bg-card/50 backdrop-blur border-border hover:border-emerald-500/30 transition-all group"
              >
                <CardHeader>
                  <div className="p-3 bg-emerald-500/10 rounded-xl w-fit mb-4 group-hover:bg-emerald-500/20 transition-colors">
                    <cap.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <CardTitle className="text-lg">{cap.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{cap.description}</p>
                  <ul className="space-y-2">
                    {cap.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection animation="slide-right">
              <h2 className="text-2xl font-bold mb-8">Technical Specifications</h2>
              <div className="space-y-3">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between py-4 px-6 bg-card/50 backdrop-blur rounded-xl border border-border"
                  >
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-medium text-emerald-400">{spec.value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={200}>
              <h2 className="text-2xl font-bold mb-8">System Architecture</h2>
              <div className="p-8 bg-card/50 backdrop-blur rounded-2xl border border-border h-fit">
                <div className="space-y-4">
                  {[
                    { label: "Telescope Array", desc: "Primary + secondary systems", status: "active" },
                    { label: "Mount Control", desc: "Precision tracking & slewing", status: "active" },
                    { label: "Imaging System", desc: "CCD/CMOS cameras + filters", status: "active" },
                    { label: "Weather Station", desc: "Environmental monitoring", status: "active" },
                    { label: "Data Pipeline", desc: "Processing & archival", status: "active" },
                    { label: "Remote Access", desc: "Web-based control interface", status: "active" },
                  ].map((item) => (
                    <div 
                      key={item.label}
                      className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-border"
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <div className="flex-1">
                        <div className="font-medium">{item.label}</div>
                        <div className="text-sm text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Access Our Ground Systems</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Partner with us for observation time, data access, or collaborative 
              research projects using our ground-based infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Request Access</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageWrapper>
  )
}
