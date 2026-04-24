"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import {
  ArrowLeft,
  Newspaper,
  Calendar,
  ExternalLink,
  TrendingUp,
  Users,
  Rocket
} from "lucide-react"

import { PageWrapper } from "@/components/immersive/page-wrapper"
import {
  AnimatedSection,
  StaggeredContainer
} from "@/components/immersive/animated-section"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

const GlobeScene = dynamic(
  () =>
    import("@/components/3d/globe-scene").then(mod => ({
      default: mod.GlobeScene
    })),
  { ssr: false }
)

/* ===============================
   HONEST ORGANIZATION NEWS ITEMS
=============================== */

const newsItems = [
  {
    title: "IARRD Expands Multidisciplinary Research Domains",
    excerpt:
      "IARRD continues structured development across astronomy, defence, marine, rocketry, and satellite technology domains as part of its long-term indigenous engineering roadmap.",
    date: "April 2026",
    category: "Organization",
    icon: TrendingUp,
    featured: true
  },

  {
    title: "PrithiviSat Mission Architecture Under Development",
    excerpt:
      "Mission planning and subsystem definition activities continue for PrithiviSat, a proposed CubeSat platform supporting applied Earth observation and environmental monitoring research workflows.",
    date: "March 2026",
    category: "Satellite",
    icon: Rocket,
    featured: true
  },

  {
    title: "IRAI Q-2 Autonomous Drone Platform Research Progress",
    excerpt:
      "Internal research continues on the IRAI Q-2 reconnaissance drone platform supporting experimentation in autonomous sensing and navigation workflows.",
    date: "February 2026",
    category: "Defence",
    icon: Users
  },

  {
    title: "Rocket Propulsion Research Roadmap Initiated",
    excerpt:
      "Initial roadmap preparation has begun for future hybrid propulsion experimentation supporting long-term indigenous launch capability development.",
    date: "January 2026",
    category: "Rocketry",
    icon: TrendingUp
  },

  {
    title: "Marine Technology Research Direction Announced",
    excerpt:
      "Concept exploration continues for marine monitoring and autonomous sensing platforms supporting environmental awareness and maritime observation workflows.",
    date: "December 2025",
    category: "Marine",
    icon: Users
  },

  {
    title: "Astronomy Research Activities Expanded",
    excerpt:
      "Astronomy domain activities continue focusing on observational learning, simulation workflows, and AI-supported space science exploration initiatives.",
    date: "November 2025",
    category: "Astronomy",
    icon: TrendingUp
  }
]

/* ===============================
   CATEGORY COLOR SYSTEM
=============================== */

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Satellite":
      return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"

    case "Defence":
      return "bg-red-500/10 text-red-400 border-red-500/20"

    case "Rocketry":
      return "bg-orange-500/10 text-orange-400 border-orange-500/20"

    case "Marine":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20"

    case "Astronomy":
      return "bg-purple-500/10 text-purple-400 border-purple-500/20"

    case "Organization":
      return "bg-green-500/10 text-green-400 border-green-500/20"

    default:
      return "bg-gray-500/10 text-gray-400 border-gray-500/20"
  }
}

export default function NewsPage() {
  const featuredNews = newsItems.filter(item => item.featured)
  const regularNews = newsItems.filter(item => !item.featured)

  return (
    <PageWrapper scene={<GlobeScene />}>

      {/* HEADER */}

      <section className="pt-32 pb-24 relative">
        <div className="container mx-auto px-4 lg:px-8">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
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
                Stay informed about research progress, mission development milestones,
                and organizational updates across IARRD’s engineering and technology domains.
              </p>

              <div className="flex flex-wrap gap-4">

                <Button
                  size="lg"
                  className="gap-2"
                  onClick={() =>
                    document.getElementById("latest-updates")?.scrollIntoView({
                      behavior: "smooth"
                    })
                  }
                >
                  <Newspaper className="h-4 w-4" />
                  View Updates
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Press Kit (Coming Soon)
                </Button>

              </div>

            </div>

          </AnimatedSection>
        </div>
      </section>

      {/* FEATURED STORIES */}

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
                Key milestones from our ongoing research programs and mission development activities.
              </p>

            </div>

          </AnimatedSection>

          <StaggeredContainer
            className="grid md:grid-cols-2 gap-8"
            staggerDelay={150}
          >

            {featuredNews.map((item, index) => (

              <Card
                key={index}
                className="group hover:border-blue-500/50 transition-all"
              >

                <CardHeader>

                  <div className="flex justify-between items-center mb-3">

                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>

                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {item.date}
                    </div>

                  </div>

                  <CardTitle className="text-xl group-hover:text-blue-500 transition-colors leading-tight">
                    {item.title}
                  </CardTitle>

                </CardHeader>

                <CardContent>

                  <p className="text-muted-foreground leading-relaxed">
                    {item.excerpt}
                  </p>

                </CardContent>

              </Card>

            ))}

          </StaggeredContainer>

        </div>

      </section>

      {/* LATEST UPDATES */}

      <section
        id="latest-updates"
        className="py-24 relative bg-muted/30"
      >

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
                Recent updates from across IARRD’s active research and technology initiatives.
              </p>

            </div>

          </AnimatedSection>

          <StaggeredContainer
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={100}
          >

            {regularNews.map((item, index) => (

              <Card
                key={index}
                className="group hover:border-blue-500/30 transition-all"
              >

                <CardHeader>

                  <div className="flex justify-between items-center mb-2">

                    <Badge
                      className={`${getCategoryColor(item.category)} text-xs`}
                    >
                      {item.category}
                    </Badge>

                    <item.icon className="h-4 w-4 text-muted-foreground" />

                  </div>

                  <CardTitle className="text-lg group-hover:text-blue-500 transition-colors leading-tight">
                    {item.title}
                  </CardTitle>

                </CardHeader>

                <CardContent>

                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </div>

                </CardContent>

              </Card>

            ))}

          </StaggeredContainer>

        </div>

      </section>

    </PageWrapper>
  )
}