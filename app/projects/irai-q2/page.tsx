"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowLeft, ArrowRight, Brain, Cpu, Zap, Database, BarChart3, Search } from "lucide-react"
import { PageWrapper } from "@/components/immersive/page-wrapper"
import { AnimatedSection, StaggeredContainer } from "@/components/immersive/animated-section"
import { TRLBadge } from "@/components/trl-badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const NeuralScene = dynamic(
  () => import("@/components/3d/neural-scene").then(mod => ({ default: mod.NeuralScene })),
  { ssr: false }
)

const specs = [
  { label: "Architecture", value: "Transformer-based Neural Network" },
  { label: "Dataset Size", value: "50M+ astronomical objects" },
  { label: "Processing Speed", value: "10,000+ objects/second" },
  { label: "Accuracy", value: "98.5% classification accuracy" },
  { label: "Input Types", value: "Multi-band imagery, spectra" },
  { label: "Output Format", value: "Real-time JSON API" },
  { label: "Training Data", value: "SDSS, Gaia, 2MASS catalogs" },
  { label: "Deployment", value: "Cloud-native, edge-compatible" },
]

const capabilities = [
  {
    icon: Search,
    title: "Object Detection",
    description: "Automatically identify and classify celestial objects including stars, galaxies, quasars, and transients.",
    metric: "1M+ detections",
  },
  {
    icon: BarChart3,
    title: "Spectral Analysis",
    description: "Deep learning-powered spectroscopic analysis for chemical composition and redshift estimation.",
    metric: "±0.001 precision",
  },
  {
    icon: Zap,
    title: "Anomaly Detection",
    description: "Real-time identification of unusual astronomical events including supernovae and variable stars.",
    metric: "< 1s latency",
  },
  {
    icon: Database,
    title: "Data Pipeline",
    description: "Automated ingestion and processing of telescope data streams for continuous monitoring.",
    metric: "24/7 operation",
  },
]

const useCases = [
  "Near-Earth Object (NEO) tracking and orbit prediction",
  "Exoplanet candidate identification from transit data",
  "Galaxy morphology classification at scale",
  "Gravitational lens detection in survey imagery",
  "Variable star period determination",
  "Asteroid family identification",
]

export default function IRAIQ2Page() {
  return (
    <PageWrapper scene={<NeuralScene />}>
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
                  <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30">
                    <Brain className="w-10 h-10 text-purple-400" />
                  </div>
                  <TRLBadge level={4} />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">IRAI-Q2</h1>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  AI-powered astronomy intelligence platform for real-time celestial 
                  analysis, object tracking, and anomaly detection at scale.
                </p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur rounded-lg border border-border">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Active Development</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <StaggeredContainer 
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              staggerDelay={100}
            >
              {[
                { value: "50M+", label: "Objects Trained" },
                { value: "98.5%", label: "Accuracy" },
                { value: "10K/s", label: "Processing Speed" },
                { value: "< 1s", label: "Response Time" },
              ].map((stat) => (
                <div 
                  key={stat.label}
                  className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 text-center"
                >
                  <div className="text-3xl font-bold text-purple-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </StaggeredContainer>
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Capabilities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Advanced AI capabilities designed for astronomical research
              </p>
            </div>
          </AnimatedSection>
          
          <StaggeredContainer className="grid md:grid-cols-2 gap-6" staggerDelay={150}>
            {capabilities.map((cap) => (
              <Card 
                key={cap.title} 
                className="bg-card/50 backdrop-blur border-border hover:border-purple-500/30 transition-all group"
              >
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors">
                    <cap.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{cap.title}</CardTitle>
                      <span className="text-sm font-medium text-purple-400">{cap.metric}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{cap.description}</p>
                </CardContent>
              </Card>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Specifications & Use Cases */}
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
                    <span className="font-medium text-purple-400">{spec.value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={200}>
              <h2 className="text-2xl font-bold mb-8">Use Cases</h2>
              <div className="p-8 bg-card/50 backdrop-blur rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <Cpu className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="font-medium">Research Applications</span>
                </div>
                <ul className="space-y-4">
                  {useCases.map((useCase, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2" />
                      <span className="text-muted-foreground">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Architecture Visualization */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">System Architecture</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                End-to-end pipeline from data ingestion to actionable insights
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {[
                { step: "01", label: "Data Ingestion", desc: "Telescope streams" },
                { step: "02", label: "Preprocessing", desc: "Calibration & cleaning" },
                { step: "03", label: "AI Analysis", desc: "Neural network inference" },
                { step: "04", label: "Classification", desc: "Object categorization" },
                { step: "05", label: "Output", desc: "API & alerts" },
              ].map((item, i) => (
                <div key={item.step} className="flex items-center gap-4">
                  <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 text-center min-w-[140px]">
                    <div className="text-xs text-purple-400 mb-1">{item.step}</div>
                    <div className="font-semibold mb-1">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                  {i < 4 && (
                    <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore IRAI-Q2</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Interested in leveraging AI for your astronomical research? 
              Let&apos;s discuss integration possibilities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Request Demo</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects/astronomy-tools">
                  View Ground Systems
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
