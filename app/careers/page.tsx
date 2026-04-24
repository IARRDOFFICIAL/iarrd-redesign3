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

/* ================= TEAM OPPORTUNITIES ================= */

const openPositions = [

{
title: "Astronomy Research Team Member",
department: "Astronomy",
location: "Remote / India",
type: "Research Contributor",
description:
"Participate in astronomy learning activities, observational discussions, and space science exploration supporting research-driven understanding.",
requirements: [
"Interest in astronomy or astrophysics",
"Basic space science curiosity",
"Commitment to consistent participation"
]
},

{
title: "Defence Research Team Member",
department: "Defence Technology",
location: "Remote / India",
type: "Research Contributor",
description:
"Support conceptual exploration related to sensing systems, surveillance technologies, and strategic engineering domains.",
requirements: [
"Interest in defence technologies",
"Electronics or communication basics helpful",
"Motivation to learn structured concepts"
]
},

{
title: "Marine Research Team Member",
department: "Marine Technology",
location: "Remote / India",
type: "Research Contributor",
description:
"Assist early-stage exploration of maritime sensing platforms, underwater monitoring ideas, and marine engineering studies.",
requirements: [
"Interest in marine systems",
"Engineering curiosity",
"Documentation participation mindset"
]
},

{
title: "Rocket Research Team Member",
department: "Rocket Engineering",
location: "Remote / India",
type: "Research Contributor",
description:
"Contribute to propulsion research discussions, hybrid engine concepts, and launch vehicle subsystem learning activities.",
requirements: [
"Mechanical or aerospace interest preferred",
"Curiosity toward propulsion systems",
"Structured learning approach"
]
},

{
title: "Satellite Research Team Member",
department: "Satellite Systems",
location: "Remote / India",
type: "Research Contributor",
description:
"Support CubeSat subsystem understanding, payload concepts, and documentation activities connected to the PrithiviSat initiative.",
requirements: [
"Interest in satellite engineering",
"Basic electronics exposure helpful",
"Collaborative mindset"
]
},

{
title: "R&D Innovation Team Member",
department: "Innovation Lab",
location: "Remote / India",
type: "Research Contributor",
description:
"Explore multidisciplinary experimental engineering ideas including sensing platforms, automation concepts, and emerging technologies.",
requirements: [
"Creative technical thinking",
"Interest in experimentation",
"Problem-solving attitude"
]
},

{
title: "Software Development Team Member",
department: "Software Engineering",
location: "Remote / India",
type: "Technical Contributor",
description:
"Support development of internal tools, mission-support utilities, simulations, and engineering software platforms used across IARRD projects.",
requirements: [
"Basic programming knowledge",
"Interest in technical software systems",
"Team collaboration readiness"
]
},

{
title: "Social Media & Outreach Team Member",
department: "Communications",
location: "Remote / India",
type: "Contributor",
description:
"Help communicate IARRD research progress, educational initiatives, and technical activities through digital outreach platforms.",
requirements: [
"Interest in science communication",
"Content or design skills helpful",
"Consistency and responsibility"
]
},

{
title: "Fundraising & Partnerships Team Member",
department: "Strategy & Funding",
location: "Remote / India",
type: "Contributor",
description:
"Support institutional outreach, sponsorship coordination, and partnership-building efforts that strengthen long-term project sustainability.",
requirements: [
"Communication confidence",
"Organizational skills",
"Interest in strategy and partnerships"
]
}

]

/* ================= BENEFITS ================= */

const benefits = [

{
icon: GraduationCap,
title: "Real Technical Exposure",
description:
"Participate in multidisciplinary engineering discussions across space, marine, defence, and satellite technology domains."
},

{
icon: Users,
title: "Collaborative Learning Environment",
description:
"Work with motivated contributors building structured technical understanding together."
},

{
icon: Rocket,
title: "Mission-Oriented Experience",
description:
"Contribute to early-stage initiatives including CubeSat and propulsion research programs."
},

{
icon: Globe,
title: "Portfolio Development",
description:
"Build meaningful research and engineering experience supporting future academic and deep-tech career pathways."
}

]

/* ================= PAGE ================= */

export default function CareersPage() {

return (


<PageWrapper scene={<NetworkScene />}>

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

            <div className="p-3 bg-green-500/10 rounded-xl">
              <Users className="h-8 w-8 text-green-500" />
            </div>

            <Badge variant="secondary" className="text-sm">
              Careers & Contributors
            </Badge>

          </div>


          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">

            Contribute to India's{" "}

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Next Generation Engineering Systems
            </span>

          </h1>


          <p className="text-xl text-muted-foreground leading-relaxed mb-8">

            IARRD welcomes students, engineers, researchers, and motivated contributors who are passionate about space, defence, marine, satellite, software, and emerging technology systems. Participation is based on curiosity, consistency, and willingness to learn together through structured engineering collaboration.

          </p>


          <div className="flex flex-wrap gap-4">

            <Button size="lg" className="gap-2">
              <Briefcase className="h-4 w-4" />
              View Opportunities
            </Button>

            <Button size="lg" variant="outline" className="gap-2">
              <Users className="h-4 w-4" />
              Join as Contributor
            </Button>

          </div>

        </div>

      </AnimatedSection>

    </div>

  </section>


  {/* OPPORTUNITIES GRID */}

  <section className="py-24 relative">

    <div className="container mx-auto px-4 lg:px-8">

      <AnimatedSection>

        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contribution Opportunities
          </h2>

          <p className="text-lg text-muted-foreground">
            Join one of our multidisciplinary teams and grow through real engineering exposure, structured learning, and collaborative research participation.
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

                <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                  {position.title}
                </CardTitle>

                <Badge variant="secondary">
                  {position.type}
                </Badge>

              </div>


              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">

                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {position.location}
                </span>

              </div>

            </CardHeader>


            <CardContent>

              <p className="text-muted-foreground mb-4">
                {position.description}
              </p>


              <div className="mb-4">

                <h4 className="font-semibold mb-2">
                  Requirements
                </h4>

                <ul className="text-sm text-muted-foreground space-y-1">

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

              </div>


              <Button className="w-full" variant="outline">
                Express Interest
              </Button>

            </CardContent>

          </Card>

        ))}

      </StaggeredContainer>

    </div>

  </section>


  {/* BENEFITS */}

  <section className="py-24 relative bg-muted/30">

    <div className="container mx-auto px-4 lg:px-8">

      <AnimatedSection>

        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Join IARRD?
          </h2>

          <p className="text-lg text-muted-foreground">
            Build meaningful technical exposure while contributing to early-stage engineering initiatives across multiple advanced technology domains.
          </p>

        </div>

      </AnimatedSection>


      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {benefits.map((benefit, index) => (

          <Card
            key={index}
            className="text-center group hover:border-green-500/50 transition-all"
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
