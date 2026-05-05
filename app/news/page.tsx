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
UPDATED NEWS ITEMS (REAL + HONEST)
=============================== */

const newsItems = [

  {
    title:
      "IARRD Conducts Inaugural Masterclass 'Vinveliyil Oru Payanam'",

    excerpt:
      "IARRD successfully conducted its first Tamil-based space science masterclass, attracting over 150+ registrations and achieving a 4.8/5 participant rating, marking a key milestone in accessible engineering education.",

    date: "May 2026",

    category: "Outreach",

    icon: Users,

    featured: true
  },

  {
    title:
      "PrithiviSat Mission Architecture Under Development",

    excerpt:
      "Mission planning and subsystem definition activities continue for PrithiviSat, a proposed CubeSat platform supporting environmental monitoring and applied Earth observation workflows.",

    date: "March 2026",

    category: "Satellite",

    icon: Rocket,

    featured: true
  },

  {
    title:
      "IARRD Expands Multidisciplinary Research Domains",

    excerpt:
      "IARRD continues structured development across astronomy, defence, marine, rocketry, and satellite domains as part of its long-term indigenous engineering roadmap.",

    date: "April 2026",

    category: "Organization",

    icon: TrendingUp,

    featured: true
  },

  {
    title:
      "IRAI Q-2 Communication Architecture Research Progress",

    excerpt:
      "Simulation work continues on satellite-assisted communication models supporting beyond-line-of-sight UAV connectivity and relay-based architectures.",

    date: "February 2026",

    category: "Defence",

    icon: Users
  },

  {
    title:
      "Rocket Propulsion Research Roadmap Initiated",

    excerpt:
      "Initial roadmap development has begun for hybrid propulsion experimentation supporting long-term indigenous launch capability research.",

    date: "January 2026",

    category: "Rocketry",

    icon: TrendingUp
  },

  {
    title:
      "Marine Technology Research Direction Announced",

    excerpt:
      "Concept exploration continues for marine monitoring and autonomous sensing platforms supporting environmental awareness and maritime observation workflows.",

    date: "December 2025",

    category: "Marine",

    icon: Users
  }

]

/* ===============================
CATEGORY COLORS
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

    case "Outreach":
      return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"

    default:
      return "bg-gray-500/10 text-gray-400 border-gray-500/20"
  }

}



export default function NewsPage() {

  const featuredNews =
    newsItems.filter(item => item.featured)

  const regularNews =
    newsItems.filter(item => !item.featured)


  return (

    <PageWrapper scene={<GlobeScene />}>

      {/* HEADER */}

      <section className="pt-32 pb-24 relative">

        <div className="container mx-auto px-4 lg:px-8">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8"
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

                <Badge variant="secondary">
                  Latest Updates
                </Badge>

              </div>


              <h1 className="text-4xl md:text-6xl font-bold mb-6">

                News &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Updates
                </span>

              </h1>


              <p className="text-xl text-muted-foreground">

                Updates from IARRD’s research programs, outreach activities,
                and engineering development initiatives.

              </p>

            </div>

          </AnimatedSection>

        </div>

      </section>



      {/* FEATURED */}

      <section className="py-24">

        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>

            <h2 className="text-3xl font-bold mb-12 text-center">
              Featured Updates
            </h2>

          </AnimatedSection>


          <StaggeredContainer
            className="grid md:grid-cols-2 gap-8"
          >

            {featuredNews.map((item, index) => (

              <Card key={index}>

                <CardHeader>

                  <div className="flex justify-between mb-2">

                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>

                    <span className="text-sm text-muted-foreground">
                      {item.date}
                    </span>

                  </div>

                  <CardTitle>
                    {item.title}
                  </CardTitle>

                </CardHeader>

                <CardContent>

                  <p className="text-muted-foreground">
                    {item.excerpt}
                  </p>

                </CardContent>

              </Card>

            ))}

          </StaggeredContainer>

        </div>

      </section>



      {/* LATEST */}

      <section className="py-24 bg-muted/30">

        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>

            <h2 className="text-3xl font-bold mb-12 text-center">
              Latest Updates
            </h2>

          </AnimatedSection>


          <StaggeredContainer
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >

            {regularNews.map((item, index) => (

              <Card key={index}>

                <CardHeader>

                  <Badge className={getCategoryColor(item.category)}>
                    {item.category}
                  </Badge>

                  <CardTitle className="text-lg">
                    {item.title}
                  </CardTitle>

                </CardHeader>

                <CardContent>

                  <p className="text-sm text-muted-foreground mb-2">
                    {item.excerpt}
                  </p>

                  <div className="text-xs text-muted-foreground flex items-center gap-1">
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