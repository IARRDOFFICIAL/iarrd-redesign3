"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import {
  ArrowLeft,
  Users,
  MapPin,
  Briefcase,
  GraduationCap,
  Rocket,
  Globe
} from "lucide-react"

import { PageWrapper } from "@/components/immersive/page-wrapper"
import {
  AnimatedSection,
  StaggeredContainer
} from "@/components/immersive/animated-section"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const NetworkScene = dynamic(
  () =>
    import("@/components/3d/network-scene").then((mod) => ({
      default: mod.NetworkScene
    })),
  { ssr: false }
)



/* ================= CONTRIBUTOR OPPORTUNITIES ================= */

const openPositions = [

  {
    title: "Astronomy Research Team Member",
    type: "Research Contributor",
    location: "Remote / India",
    description:
      "Participate in computational astronomy learning tracks, observational data interpretation workflows, and structured astrophysics research exposure.",
    requirements: [
      "Interest in astronomy or astrophysics",
      "Consistency in technical learning",
      "Participation in documentation activities"
    ]
  },

  {
    title: "Defence Research Team Member",
    type: "Research Contributor",
    location: "Remote / India",
    description:
      "Support conceptual exploration of sensing technologies, surveillance architectures, and defence-oriented engineering systems.",
    requirements: [
      "Interest in defence technologies",
      "Electronics or communication basics helpful",
      "Structured research mindset"
    ]
  },

  {
    title: "Marine Research Team Member",
    type: "Research Contributor",
    location: "Remote / India",
    description:
      "Contribute to underwater sensing concepts, marine monitoring platforms, and ocean intelligence research initiatives.",
    requirements: [
      "Interest in marine systems",
      "Engineering curiosity",
      "Documentation participation readiness"
    ]
  },

  {
    title: "Rocket Research Team Member",
    type: "Research Contributor",
    location: "Remote / India",
    description:
      "Support propulsion-learning programs including hybrid engine concepts and launch vehicle subsystem exposure.",
    requirements: [
      "Interest in propulsion systems",
      "Mechanical or aerospace curiosity",
      "Structured technical learning attitude"
    ]
  },

  {
    title: "Satellite Research Team Member",
    type: "Research Contributor",
    location: "Remote / India",
    description:
      "Participate in CubeSat subsystem learning workflows supporting architecture understanding and payload concept exploration.",
    requirements: [
      "Interest in satellite engineering",
      "Electronics basics helpful",
      "Collaborative mindset"
    ]
  },

  {
    title: "R&D Innovation Team Member",
    type: "Research Contributor",
    location: "Remote / India",
    description:
      "Explore experimental sensing platforms, automation frameworks, and emerging engineering technology concepts.",
    requirements: [
      "Creative technical thinking",
      "Problem-solving mindset",
      "Interest in experimentation"
    ]
  },

  {
    title: "Software Development Team Member",
    type: "Technical Contributor",
    location: "Remote / India",
    description:
      "Support development of simulation utilities, internal engineering tools, and mission-support computational platforms.",
    requirements: [
      "Basic programming knowledge",
      "Interest in technical software systems",
      "Collaborative workflow readiness"
    ]
  },

  {
    title: "Social Media & Outreach Team Member",
    type: "Contributor",
    location: "Remote / India",
    description:
      "Assist science communication initiatives supporting research visibility and contributor ecosystem engagement.",
    requirements: [
      "Interest in science communication",
      "Content or design skills helpful",
      "Consistency and responsibility"
    ]
  },

  {
    title: "Fundraising & Partnerships Team Member",
    type: "Contributor",
    location: "Remote / India",
    description:
      "Support institutional outreach, collaboration development, and sponsorship coordination strengthening long-term project sustainability.",
    requirements: [
      "Communication confidence",
      "Organizational ability",
      "Interest in partnerships and strategy"
    ]
  }

]



/* ================= BENEFITS ================= */

const benefits = [

  {
    icon: GraduationCap,
    title: "Real Technical Exposure",
    description:
      "Participate in interdisciplinary engineering learning programs spanning satellite systems, defence technologies, marine platforms, and astronomy infrastructure."
  },

  {
    icon: Users,
    title: "Collaborative Research Environment",
    description:
      "Work with motivated contributors building structured engineering understanding together."
  },

  {
    icon: Rocket,
    title: "Mission-Oriented Learning Tracks",
    description:
      "Contribute to early-stage initiatives including CubeSat platform architecture and propulsion-learning programs."
  },

  {
    icon: Globe,
    title: "Engineering Portfolio Development",
    description:
      "Build meaningful experience supporting future deep-tech academic and engineering pathways."
  }

]



/* ================= PAGE ================= */

export default function CareersPage() {

  return (

    <PageWrapper scene={<NetworkScene />}>

      {/* HEADER */}

      <section className="pt-32 pb-24">

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

                <div className="p-3 bg-green-500/10 rounded-xl">
                  <Users className="h-8 w-8 text-green-500" />
                </div>

                <Badge variant="secondary">
                  Careers & Contributors
                </Badge>

              </div>


              <h1 className="text-4xl md:text-6xl font-bold mb-6">

                Join IARRD's{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Engineering Contributor Network
                </span>

              </h1>


              <p className="text-xl text-muted-foreground leading-relaxed mb-8">

                IARRD welcomes students, engineers, researchers, and motivated
                learners interested in contributing to India's emerging space,
                defence, marine, satellite, and computational engineering
                capability ecosystem.

                Selection is based on interest, commitment, and consistency —
                not CGPA or academic background.

              </p>


              <div className="flex flex-wrap gap-4">

                <Button asChild size="lg">

                  <a href="#opportunities">

                    <Briefcase className="h-4 w-4 mr-2" />

                    View Opportunities

                  </a>

                </Button>


                <Button asChild size="lg" variant="outline">

                  <Link href="/apply">

                    <Users className="h-4 w-4 mr-2" />

                    Apply as Contributor

                  </Link>

                </Button>

              </div>

            </div>

          </AnimatedSection>

        </div>

      </section>



      {/* OPPORTUNITIES */}

      <section id="opportunities" className="py-24">

        <div className="container mx-auto px-4 lg:px-8">


          <AnimatedSection>

            <div className="text-center max-w-3xl mx-auto mb-16">

              <h2 className="text-3xl md:text-4xl font-bold mb-4">

                Contribution Opportunities

              </h2>


              <p className="text-lg text-muted-foreground">

                Choose a domain aligned with your interest and participate in
                structured engineering learning workflows supporting ongoing
                research initiatives.

              </p>

            </div>

          </AnimatedSection>


          <StaggeredContainer
            className="grid md:grid-cols-2 gap-8"
            staggerDelay={150}
          >

            {openPositions.map((position, index) => (

              <Card
                key={index}
                className="group hover:border-green-500/50 transition-all"
              >

                <CardHeader>

                  <div className="flex justify-between items-start mb-2">

                    <CardTitle className="text-xl group-hover:text-green-500">

                      {position.title}

                    </CardTitle>

                    <Badge variant="secondary">

                      {position.type}

                    </Badge>

                  </div>


                  <div className="flex items-center gap-2 text-sm text-muted-foreground">

                    <MapPin className="h-3 w-3" />

                    {position.location}

                  </div>

                </CardHeader>


                <CardContent>

                  <p className="text-muted-foreground mb-4">

                    {position.description}

                  </p>


                  <ul className="text-sm text-muted-foreground space-y-1 mb-6">

                    {position.requirements.map((req, i) => (

                      <li
                        key={i}
                        className="flex items-center gap-2"
                      >

                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />

                        {req}

                      </li>

                    ))}

                  </ul>


                  <Button
                    asChild
                    className="w-full"
                    variant="outline"
                  >

                    <Link
                      href={`/apply?role=${encodeURIComponent(position.title)}`}
                    >

                      Submit Contributor Application

                    </Link>

                  </Button>

                </CardContent>

              </Card>

            ))}

          </StaggeredContainer>

        </div>

      </section>



      {/* BENEFITS */}

      <section className="py-24 bg-muted/30">

        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>

            <div className="text-center max-w-3xl mx-auto mb-16">

              <h2 className="text-3xl md:text-4xl font-bold mb-4">

                Why Join IARRD?

              </h2>


              <p className="text-lg text-muted-foreground">

                Gain structured engineering exposure while contributing to
                early-stage deep-technology capability development initiatives.

              </p>

            </div>

          </AnimatedSection>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {benefits.map((benefit, index) => (

              <Card
                key={index}
                className="text-center hover:border-green-500/50 transition-all"
              >

                <CardHeader>

                  <div className="mx-auto p-3 bg-green-500/10 rounded-xl w-fit mb-4">

                    <benefit.icon className="h-6 w-6 text-green-500" />

                  </div>


                  <CardTitle className="text-lg">

                    {benefit.title}

                  </CardTitle>

                </CardHeader>


                <CardContent>

                  <p className="text-muted-foreground text-sm">

                    {benefit.description}

                  </p>

                </CardContent>

              </Card>

            ))}

          </div>

        </div>

      </section>

    </PageWrapper>

  )

}