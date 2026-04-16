"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowLeft, Newspaper, Calendar, ExternalLink, TrendingUp, Award, Users, Rocket } from "lucide-react"
import { PageWrapper } from "@/components/immersive/page-wrapper"
import { AnimatedSection, StaggeredContainer } from "@/components/immersive/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const GlobeScene = dynamic(
  () => import("@/components/3d/globe-scene").then(mod => ({ default: mod.GlobeScene })),
  { ssr: false }
)

const newsItems = [
  {
    title: "IARRD's PrithiviSat Selected for ISRO's CubeSat Program",
    excerpt: "Indigenous CubeSat development company IARRD announces selection of PrithiviSat for ISRO's upcoming satellite constellation program.",
    date: "March 15, 2024",
    category: "Mission",
    icon: Rocket,
    type: "achievement",
    featured: true
  },
  {
    title: "AI-Powered Astronomy: IARRD's IRAI-Q2 Platform Achieves 98% Accuracy",
    excerpt: "Revolutionary AI system for astronomical analysis demonstrates unprecedented accuracy in celestial object detection and classification.",
    date: "February 28, 2024",
    category: "Technology",
    icon: TrendingUp,
    type: "achievement",
    featured: true
  },
  {
    title: "IARRD Partners with DRDO for Advanced Defense Technology Development",
    excerpt: "Strategic partnership announced for joint development of surveillance and reconnaissance systems for national security.",
    date: "February 10, 2024",
    category: "Partnership",
    icon: Users,
    type: "partnership"
  },
  {
    title: "Young Innovators Award 2023 Presented to IARRD",
    excerpt: "Ministry of New and Renewable Energy recognizes IARRD's contributions to indigenous space technology development.",
    date: "January 25, 2024",
    category: "Award",
    icon: Award,
    type: "award"
  },
  {
    title: "IARRD's Ground Station Network Goes Live",
    excerpt: "Advanced telescope arrays and ground infrastructure now operational for continuous astronomical monitoring.",
    date: "January 15, 2024",
    category: "Infrastructure",
    icon: TrendingUp,
    type: "achievement"
  },
  {
    title: "International Collaboration Announced for Ocean Research",
    excerpt: "IARRD joins global consortium for sustainable ocean exploration and marine technology development.",
    date: "December 20, 2023",
    category: "Research",
    icon: Users,
    type: "partnership"
  }
]

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Mission": return "bg-blue-500/10 text-blue-600 border-blue-500/20"
    case "Technology": return "bg-green-500/10 text-green-600 border-green-500/20"
    case "Partnership": return "bg-purple-500/10 text-purple-600 border-purple-500/20"
    case "Award": return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
    case "Infrastructure": return "bg-cyan-500/10 text-cyan-600 border-cyan-500/20"
    case "Research": return "bg-pink-500/10 text-pink-600 border-pink-500/20"
    default: return "bg-gray-500/10 text-gray-600 border-gray-500/20"
  }
}

export default function NewsPage() {
  const featuredNews = newsItems.filter(item => item.featured)
  const regularNews = newsItems.filter(item => !item.featured)

  return (
    <PageWrapper scene={<GlobeScene />}>
      {/* Header */}
      <section className="pt-32 pb-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <AnimatedSection>
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <Newspaper className="h-8 w-8 text-blue-500" />
                </div>
                <Badge variant="secondary" className="text-sm">
                  Latest Updates
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                News &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Updates
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Stay informed about our latest achievements, technological breakthroughs,
                partnerships, and contributions to India&apos;s space and defense ecosystem.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Newspaper className="h-4 w-4" />
                  All News
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Press Kit
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Stories
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Our most significant achievements and milestones in advancing India's technological sovereignty.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 gap-8" staggerDelay={150}>
            {featuredNews.map((item, index) => (
              <Card key={index} className="group hover:border-blue-500/50 transition-all overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {item.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                    Read Full Story →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Regular News */}
      <section className="py-24 relative bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Latest{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Updates
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Recent developments, partnerships, and achievements from across our domains.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={100}>
            {regularNews.map((item, index) => (
              <Card key={index} className="group hover:border-blue-500/30 transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={`${getCategoryColor(item.category)} text-xs`}>
                      {item.category}
                    </Badge>
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {item.date}
                    </div>
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <Card className="max-w-4xl mx-auto border-blue-500/20 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Stay Updated with IARRD
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get the latest news, research updates, and mission announcements delivered to your inbox.
                  Join our community of space technology enthusiasts.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="gap-2">
                    <Newspaper className="h-4 w-4" />
                    Subscribe to Newsletter
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Follow on LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </PageWrapper>
  )
}