"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { AnimatedText } from "@/components/animated-text"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Quote } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    name: "Dr. A. S. Kiran Kumar",
    role: "Former Chairman",
    company: "ISRO",
    content: "IARRD's indigenous CubeSat development represents a significant step forward for India's space program. Their commitment to technological self-reliance is commendable.",
  },
  {
    name: "Prof. R. Chidambaram",
    role: "Principal Scientific Adviser",
    company: "Government of India",
    content: "The integration of AI in astronomy systems by IARRD opens new frontiers in space research. Their work on IRAI-Q2 is particularly promising.",
  },
  {
    name: "Col. Ajay Lele",
    role: "Senior Fellow",
    company: "Manohar Parrikar Institute for Defence Studies and Analyses",
    content: "IARRD's defense technology initiatives align perfectly with India's strategic requirements. Their marine surveillance systems show great potential.",
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <Card
      ref={ref}
      className={cn(
        "relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-700",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <CardContent className="p-6">
        <Quote className="h-8 w-8 text-primary/30 mb-4" />
        <blockquote className="text-muted-foreground mb-6 leading-relaxed">
          "{testimonial.content}"
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-full flex items-center justify-center border border-primary/30">
            <span className="text-sm font-bold text-primary">
              {testimonial.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <div className="font-semibold text-foreground">{testimonial.name}</div>
            <div className="text-sm text-muted-foreground">
              {testimonial.role}, {testimonial.company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedText>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                Industry Leaders
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from experts and organizations who recognize our commitment to advancing India's space capabilities.
            </p>
          </div>
        </AnimatedText>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}