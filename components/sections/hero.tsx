import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Satellite, Cpu, Telescope } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary/60 rounded-full animate-pulse delay-300" />
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-500" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-full mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Indigenous Space Technology</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            Building India&apos;s{" "}
            <span className="text-primary">Next-Generation</span>{" "}
            Space Infrastructure
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Pioneering CubeSat development, AI-powered astronomy intelligence, and dual-use 
            space technology for research, defense, and commercial applications.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" asChild>
              <Link href="/projects">
                Explore Our Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact?type=investor">Investment Inquiries</Link>
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <Satellite className="w-6 h-6 text-primary" />
              <span className="text-2xl md:text-3xl font-bold">3</span>
              <span className="text-sm text-muted-foreground">Active Projects</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Cpu className="w-6 h-6 text-primary" />
              <span className="text-2xl md:text-3xl font-bold">TRL 5</span>
              <span className="text-sm text-muted-foreground">Technology Readiness</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Telescope className="w-6 h-6 text-primary" />
              <span className="text-2xl md:text-3xl font-bold">AI</span>
              <span className="text-sm text-muted-foreground">Powered Systems</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
