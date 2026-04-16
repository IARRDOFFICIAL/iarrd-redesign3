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
  Cpu,
  Target,
  Radio,
  Radar,
  Navigation,
  type LucideIcon
} from "lucide-react"

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
      {/* Animated rings */}
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
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Center icon */}
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

      {/* Floating feature badges */}
      {features.slice(0, 4).map((feature, i) => {
        const positions = [
          "top-4 left-1/4",
          "top-1/4 right-4",
          "bottom-1/4 left-4",
          "bottom-4 right-1/4",
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

export function DomainSection({
  id,
  title,
  subtitle,
  description,
  features,
  icon,
  accentColor,
  backgroundClass,
  reverse = false,
}: DomainSectionProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "relative min-h-screen py-24 lg:py-32",
        backgroundClass
      )}
    >
      {/* Background effects */}
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
        <div className={cn(
          "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
          reverse && "lg:[direction:rtl]"
        )}>
          {/* Content */}
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
              <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {title}
              </h2>
            </AnimatedText>

            <AnimatedText delay={200}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>
            </AnimatedText>

            <AnimatedText delay={300}>
              <ul className="mt-8 space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
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
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </AnimatedText>
          </div>

          {/* Visual */}
          <div className={reverse ? "lg:[direction:ltr]" : ""}>
            <DomainVisual icon={icon} accentColor={accentColor} features={features} />
          </div>
        </div>
      </div>
    </section>
  )
}

// Pre-configured domain sections
export function AstronomySection() {
  return (
    <DomainSection
      id="astronomy"
      title="AI-Powered Astronomy Intelligence"
      subtitle="Astronomy Division"
      description="Our astronomy division develops advanced AI systems for celestial observation and data processing. From autonomous telescope control to real-time asteroid tracking, we're building the tools that will define India's astronomical research capabilities."
      features={[
        "AI-driven celestial object detection",
        "Real-time spectral analysis systems",
        "Autonomous telescope orchestration",
        "Deep sky imaging pipelines",
        "Asteroid & NEO tracking algorithms",
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
      title="Strategic Defense Systems"
      subtitle="Defense Division"
      description="Developing autonomous surveillance and reconnaissance systems for national security. Our defense technologies integrate AI-powered threat detection, secure communications, and unmanned systems designed for India's strategic requirements."
      features={[
        "Autonomous surveillance drones",
        "AI-powered threat detection",
        "Secure mesh communication networks",
        "Radar and sensor fusion systems",
        "Counter-drone technologies",
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
      title="Marine & Underwater Systems"
      subtitle="Marine Division"
      description="Engineering autonomous underwater vehicles and coastal security systems. Our marine division focuses on sonar-based imaging, underwater robotics, and maritime domain awareness solutions for India's vast coastline."
      features={[
        "Autonomous underwater vehicles (AUVs)",
        "Advanced sonar imaging systems",
        "Coastal surveillance networks",
        "Marine environmental monitoring",
        "Underwater communication systems",
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
      title="Propulsion & Launch Systems"
      subtitle="Rocketry Division"
      description="Pioneering hybrid propulsion systems and low-cost launch vehicles. Our rocketry research focuses on making space access affordable and sustainable through indigenous propellant technologies and reusable rocket components."
      features={[
        "Hybrid propulsion development",
        "Low-cost launch vehicle design",
        "Solid & liquid fuel research",
        "Thrust vectoring systems",
        "Recovery and reusability R&D",
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
      title="CubeSat & Earth Observation"
      subtitle="Satellite Division"
      description="Building India's next generation of small satellites. From CubeSat design to Earth observation payloads, we're creating affordable, capable spacecraft for scientific research, communications, and strategic applications."
      features={[
        "CubeSat bus development (1U-6U)",
        "Earth observation payloads",
        "Space-grade communication systems",
        "On-orbit data processing",
        "Orbital mechanics & mission design",
      ]}
      icon={Satellite}
      accentColor="teal"
      backgroundClass="bg-background"
    />
  )
}
