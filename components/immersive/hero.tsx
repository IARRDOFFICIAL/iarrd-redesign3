"use client"

import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/animated-text"
import { AnimatedCounter } from "@/components/animated-counter"
import { ChevronDown, Rocket, Compass } from "lucide-react"
import Link from "next/link"

const HeroScene = dynamic(
  () => import("@/components/3d/hero-scene").then((mod) => ({ default: mod.HeroScene })),
  { ssr: false }
)

export function ImmersiveHero() {
  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden">

      {/* 3D scene */}
      <HeroScene />

      {/* Readability overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-[540px]">

            {/* Badge */}
            <AnimatedText delay={0}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-primary uppercase">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                Indigenous R&amp;D Initiative · Tamilnadu, India
              </div>
            </AnimatedText>

            {/* Headline — fixed to 2 clean lines */}
            <AnimatedText delay={80}>
              <h1 className="text-[clamp(2rem,4.2vw,3.25rem)] font-bold tracking-tight leading-[1.1] text-foreground">
                Building India&apos;s{" "}
                <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                  Space and Engineering
                </span>{" "}
                Capability
              </h1>
            </AnimatedText>

            {/* Description */}
            <AnimatedText delay={180}>
              <p className="mt-5 text-[0.925rem] leading-[1.8] text-muted-foreground">
                IARRD is a contributor-driven engineering research initiative working
                across satellite systems, defence technologies, marine monitoring
                platforms, astronomy infrastructure, and applied software — building
                long-term indigenous technical capability in India.
              </p>
            </AnimatedText>

            {/* Buttons */}
            <AnimatedText delay={260}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  size="lg"
                  className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                  asChild
                >
                  <Link href="#projects">
                    <Rocket className="h-4 w-4" />
                    View Projects
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-border/50 bg-background/40 backdrop-blur-sm hover:bg-secondary/60"
                  asChild
                >
                  <Link href="#domains">
                    <Compass className="h-4 w-4" />
                    Explore Domains
                  </Link>
                </Button>
              </div>
            </AnimatedText>

            {/* Stats */}
            <AnimatedText delay={360}>
              <div className="mt-12 flex items-start gap-8 border-t border-border/20 pt-6">
                <div>
                  <div className="text-2xl font-bold tabular-nums text-foreground">
                    <AnimatedCounter value={3} />
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground">Active Projects</div>
                </div>

                <div className="w-px self-stretch bg-border/20" />

                <div>
                  <div className="text-2xl font-bold tabular-nums text-foreground">
                    <AnimatedCounter value={5} />
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground">Engineering Domains</div>
                </div>

                <div className="w-px self-stretch bg-border/20" />

                <div>
                  <div className="text-2xl font-bold tabular-nums text-foreground">
                    <AnimatedCounter value={40} suffix="+" />
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground">Team Contributors</div>
                </div>

                <div className="w-px self-stretch bg-border/20" />

                <div>
                  <div className="text-2xl font-bold tabular-nums text-foreground">
                    <AnimatedCounter value={9} />
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground">Technical Teams</div>
                </div>
              </div>
            </AnimatedText>

          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <div className="flex flex-col items-center gap-1.5 text-muted-foreground/50">
          <span className="text-[10px] uppercase tracking-[0.18em]">Scroll to explore</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>

    </section>
  )
} 