"use client"

import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/animated-text"
import { AnimatedCounter } from "@/components/animated-counter"
import { ChevronDown, Rocket, Compass } from "lucide-react"
import Link from "next/link"

const HeroScene = dynamic(
  () => import("@/components/3d/hero-scene").then(mod => ({ default: mod.HeroScene })),
  { ssr: false }
)

export function ImmersiveHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <HeroScene />
      
      {/* Content overlay */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <AnimatedText delay={0}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Indigenous Space Technology
              </div>
            </AnimatedText>

            <AnimatedText delay={100}>
              <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Building India&apos;s{" "}
                <span className="bg-gradient-to-r from-primary via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Space Independence
                </span>
              </h1>
            </AnimatedText>

            <AnimatedText delay={200}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Pioneering indigenous space, defense, and marine technology. 
                From CubeSat missions to AI-powered astronomy systems, 
                we&apos;re engineering India&apos;s strategic technological sovereignty.
              </p>
            </AnimatedText>

            <AnimatedText delay={300}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button 
                  size="lg" 
                  className="group gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <Link href="#projects">
                    <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
                    View Missions
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="group gap-2 border-border/50 bg-background/50 backdrop-blur-sm hover:bg-secondary"
                  asChild
                >
                  <Link href="#domains">
                    <Compass className="h-4 w-4 transition-transform group-hover:rotate-45" />
                    Explore Domains
                  </Link>
                </Button>
              </div>
            </AnimatedText>

            <AnimatedText delay={400}>
              <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border/30 pt-8">
                <div>
                  <div className="text-3xl font-bold text-foreground">
                    <AnimatedCounter value={3} suffix="+" />
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">Active Missions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">
                    <AnimatedCounter value={5} />
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">Tech Domains</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">
                    <AnimatedCounter value={100} suffix="%" />
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">Indigenous</div>
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <div className="flex animate-bounce flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <ChevronDown className="h-5 w-5" />
        </div>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
