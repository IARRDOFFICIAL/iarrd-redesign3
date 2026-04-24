"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { AnimatedText } from "@/components/animated-text"
import { cn } from "@/lib/utils"

import {
  Telescope,
  Shield,
  Waves,
  Rocket,
  Satellite,
  type LucideIcon
} from "lucide-react"


/* ===============================
   DOMAIN VISUAL COMPONENT
================================ */

interface DomainSectionProps {
  id: string
  title: string
  subtitle: string
  description: string
  features: string[]
  icon: LucideIcon
  accentColor: string
  backgroundClass: string
  reverse?: boolean
}


function DomainVisual({
  icon: Icon,
  accentColor,
  features
}: {
  icon: LucideIcon
  accentColor: string
  features: string[]
}) {

  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (

    <div
      ref={ref}
      className={cn(
        "relative flex h-[400px] items-center justify-center transition-all duration-1000",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}
    >

      {/* animated rings */}

      <div className="absolute inset-0 flex items-center justify-center">

        {[...Array(3)].map((_, i) => (

          <div
            key={i}
            className={cn(
              "absolute rounded-full border opacity-20",
              accentColor === "cyan" && "border-cyan-500",
              accentColor === "red" && "border-red-500",
              accentColor === "blue" && "border-blue-500",
              accentColor === "orange" && "border-orange-500",
              accentColor === "teal" && "border-teal-500"
            )}
            style={{
              width: `${180 + i * 80}px`,
              height: `${180 + i * 80}px`,
              animation: `pulse ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />

        ))}

      </div>


      {/* center icon */}

      <div
        className={cn(
          "relative z-10 flex h-32 w-32 items-center justify-center rounded-full",
          accentColor === "cyan" && "bg-cyan-500/20 text-cyan-400",
          accentColor === "red" && "bg-red-500/20 text-red-400",
          accentColor === "blue" && "bg-blue-500/20 text-blue-400",
          accentColor === "orange" && "bg-orange-500/20 text-orange-400",
          accentColor === "teal" && "bg-teal-500/20 text-teal-400"
        )}
      >
        <Icon className="h-16 w-16" />
      </div>


      {/* floating feature badges */}

      {features.slice(0, 4).map((feature, i) => {

        const positions = [
          "top-4 left-1/4",
          "top-1/4 right-4",
          "bottom-1/4 left-4",
          "bottom-4 right-1/4"
        ]

        return (

          <div
            key={feature}
            className={cn(
              "absolute rounded-full border border-border/50 bg-card/80 px-3 py-1.5 text-xs backdrop-blur-sm transition-all duration-700",
              positions[i],
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: `${300 + i * 100}ms` }}
          >
            {feature}
          </div>

        )

      })}

    </div>

  )

}


/* ===============================
   GENERIC DOMAIN SECTION
================================ */

export function DomainSection({

  id,
  title,
  subtitle,
  description,
  features,
  icon,
  accentColor,
  backgroundClass,
  reverse = false

}: DomainSectionProps) {

  return (

    <section
      id={id}
      className={cn(
        "relative min-h-screen py-24 lg:py-32",
        backgroundClass
      )}
    >

      {/* glow background */}

      <div className="absolute inset-0 overflow-hidden">

        <div
          className={cn(
            "absolute h-[600px] w-[600px] rounded-full blur-[120px] opacity-20",
            accentColor === "cyan" && "bg-cyan-500",
            accentColor === "red" && "bg-red-500",
            accentColor === "blue" && "bg-blue-500",
            accentColor === "orange" && "bg-orange-500",
            accentColor === "teal" && "bg-teal-500",
            reverse ? "right-0 top-1/4" : "left-0 top-1/4"
          )}
        />

      </div>


      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        <div
          className={cn(
            "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
            reverse && "lg:[direction:rtl]"
          )}
        >

          {/* content */}

          <div className={reverse ? "lg:[direction:ltr]" : ""}>

            <AnimatedText>

              <div
                className={cn(
                  "mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium",
                  accentColor === "cyan" && "bg-cyan-500/10 text-cyan-400",
                  accentColor === "red" && "bg-red-500/10 text-red-400",
                  accentColor === "blue" && "bg-blue-500/10 text-blue-400",
                  accentColor === "orange" && "bg-orange-500/10 text-orange-400",
                  accentColor === "teal" && "bg-teal-500/10 text-teal-400"
                )}
              >
                {subtitle}
              </div>

            </AnimatedText>


            <AnimatedText delay={100}>

              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {title}
              </h2>

            </AnimatedText>


            <AnimatedText delay={200}>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>

            </AnimatedText>


            <AnimatedText delay={300}>

              <ul className="mt-8 space-y-3">

                {features.map((feature, i) => (

                  <li
                    key={i}
                    className="flex items-center gap-3"
                  >

                    <div
                      className={cn(
                        "flex h-6 w-6 items-center justify-center rounded-full",
                        accentColor === "cyan" && "bg-cyan-500/20 text-cyan-400",
                        accentColor === "red" && "bg-red-500/20 text-red-400",
                        accentColor === "blue" && "bg-blue-500/20 text-blue-400",
                        accentColor === "orange" && "bg-orange-500/20 text-orange-400",
                        accentColor === "teal" && "bg-teal-500/20 text-teal-400"
                      )}
                    >
                      ✓
                    </div>

                    {feature}

                  </li>

                ))}

              </ul>

            </AnimatedText>

          </div>


          {/* visual */}

          <div className={reverse ? "lg:[direction:ltr]" : ""}>

            <DomainVisual
              icon={icon}
              accentColor={accentColor}
              features={features}
            />

          </div>

        </div>

      </div>

    </section>

  )

}


/* ===============================
   DOMAIN DEFINITIONS (UPDATED)
================================ */


export function AstronomySection() {

  return (

    <DomainSection

      id="astronomy"
      title="Astronomy Data & Observation Systems"
      subtitle="Astronomy Division"

      description="The astronomy division focuses on building accessible observation infrastructure, sky-monitoring pipelines, and AI-assisted event detection workflows. These systems support educational astronomy, observational experimentation, and future space-weather awareness initiatives."

      features={[
        "AI-assisted celestial observation pipelines",
        "Sky-event monitoring workflows",
        "Small observatory automation concepts",
        "Space-weather awareness tools",
        "Educational astronomy infrastructure support"
      ]}

      icon={Telescope}
      accentColor="cyan"
      backgroundClass="bg-background"

    />

  )

}



export function DefenseSection() {

  return (

    <DomainSection

      id="defense"
      title="Autonomous Defence Support Systems"
      subtitle="Defence Division"

      description="The defence division develops autonomous sensing platform concepts and mission-support software architectures. Current work includes the IRAI-Q2 reconnaissance drone initiative and simulation-driven exploration of distributed situational-awareness systems."

      features={[
        "IRAI-Q2 reconnaissance drone architecture",
        "Autonomous sensing platform concepts",
        "Mission-support software frameworks",
        "Distributed situational-awareness systems",
        "Simulation-driven defence research workflows"
      ]}

      icon={Shield}
      accentColor="red"
      backgroundClass="bg-secondary/30"
      reverse

    />

  )

}



export function MarineSection() {

  return (

    <DomainSection

      id="marine"
      title="Marine Monitoring & Coastal Systems"
      subtitle="Marine Division"

      description="The marine division investigates distributed sensing architectures for coastal awareness, environmental observation, and marine data accessibility. Current efforts explore scalable monitoring frameworks supporting resilient maritime observation systems."

      features={[
        "Coastal monitoring architecture concepts",
        "Distributed marine sensing frameworks",
        "Environmental observation support systems",
        "Low-cost monitoring network design",
        "Marine data accessibility initiatives"
      ]}

      icon={Waves}
      accentColor="blue"
      backgroundClass="bg-background"

    />

  )

}



export function RocketrySection() {

  return (

    <DomainSection

      id="rocketry"
      title="Propulsion & Launch Technology Roadmaps"
      subtitle="Rocketry Division"

      description="The rocketry division focuses on early-stage propulsion study tracks and reusable launch architecture concepts. This long-term capability program supports future indigenous launch system experimentation aligned with affordable access-to-space objectives."

      features={[
        "Hybrid propulsion study pathways",
        "Reusable launch architecture concepts",
        "Low-cost propulsion research direction",
        "Simulation-based propulsion analysis",
        "Future launch vehicle capability planning"
      ]}

      icon={Rocket}
      accentColor="orange"
      backgroundClass="bg-secondary/30"
      reverse

    />

  )

}



export function SatelliteSection() {

  return (

    <DomainSection

      id="satellite"
      title="Small Satellite & CubeSat Systems"
      subtitle="Satellite Division"

      description="The satellite division leads small-satellite architecture development supporting environmental monitoring, disaster-awareness applications, and educational mission capability. The PrithiviSat CubeSat mission represents an early milestone in building indigenous satellite engineering experience within IARRD."

      features={[
        "PrithiviSat CubeSat mission architecture",
        "Affordable small-satellite platform design",
        "Environmental monitoring payload direction",
        "Mission simulation and subsystem planning",
        "Educational satellite engineering support"
      ]}

      icon={Satellite}
      accentColor="teal"
      backgroundClass="bg-background"

    />

  )

}