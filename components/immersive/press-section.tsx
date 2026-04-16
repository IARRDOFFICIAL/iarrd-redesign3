"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { AnimatedText } from "@/components/animated-text"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ExternalLink, Newspaper } from "lucide-react"
import Link from "next/link"

interface PressItem {
  title: string
  source: string
  date: string
  excerpt: string
  url: string
  type: 'article' | 'award' | 'partnership'
}

const pressItems: PressItem[] = [
  {
    title: "IARRD's PrithiviSat Selected for ISRO's CubeSat Program",
    source: "The Hindu BusinessLine",
    date: "March 2024",
    excerpt: "Indigenous CubeSat development company IARRD announces selection of PrithiviSat for ISRO's upcoming satellite constellation.",
    url: "#",
    type: 'article',
  },
  {
    title: "AI-Powered Astronomy: IARRD's IRAI-Q2 Platform",
    source: "Economic Times",
    date: "February 2024",
    excerpt: "Revolutionary AI system achieves 98% accuracy in celestial object detection, positioning India at forefront of space AI research.",
    url: "#",
    type: 'article',
  },
  {
    title: "IARRD Partners with DRDO for Defense Technology Development",
    source: "Defence News",
    date: "January 2024",
    excerpt: "Strategic partnership announced for joint development of advanced surveillance and reconnaissance systems.",
    url: "#",
    type: 'partnership',
  },
  {
    title: "Young Innovators Award 2023",
    source: "Ministry of New and Renewable Energy",
    date: "December 2023",
    excerpt: "IARRD recognized for outstanding contributions to indigenous space technology development.",
    url: "#",
    type: 'award',
  },
]

function PressCard({ item, index }: { item: PressItem; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article': return 'text-blue-500'
      case 'award': return 'text-yellow-500'
      case 'partnership': return 'text-green-500'
      default: return 'text-primary'
    }
  }

  return (
    <Card
      ref={ref}
      className={cn(
        "group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-700 hover:border-primary/50",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
              {item.title}
            </CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className={cn("font-medium", getTypeColor(item.type))}>
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </span>
              <span>•</span>
              <span>{item.source}</span>
              <span>•</span>
              <span>{item.date}</span>
            </div>
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {item.excerpt}
        </p>
        <Button
          variant="ghost"
          size="sm"
          className="p-0 h-auto text-primary hover:text-primary/80"
          asChild
        >
          <Link href={item.url}>
            Read More →
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export function PressSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedText>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-4">
              <Newspaper className="h-4 w-4" />
              In the News
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Updates &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                Recognition
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay informed about our latest achievements, partnerships, and contributions to India's space ecosystem.
            </p>
          </div>
        </AnimatedText>

        <div className="grid md:grid-cols-2 gap-6">
          {pressItems.map((item, index) => (
            <PressCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href="/news">
              View All News →
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}