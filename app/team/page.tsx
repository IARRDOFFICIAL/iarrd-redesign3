"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowRight } from "lucide-react"

import { PageWrapper } from "@/components/immersive/page-wrapper"
import {
  AnimatedSection,
  StaggeredContainer
} from "@/components/immersive/animated-section"

import { Button } from "@/components/ui/button"

const NetworkScene = dynamic(
  () =>
    import("@/components/3d/network-scene").then(mod => ({
      default: mod.NetworkScene
    })),
  { ssr: false }
)


/* ===============================
LEADERSHIP
=============================== */

const leadership = [

  {
    name: "Harish Ragavendra Srinivasan",
    role: "Founder & CEO / Acting Defence Team Lead",
    image: "/team/harish.jpg",
    bio:
      "Founder of IARRD leading multidisciplinary research programs across space systems, defense technologies, marine monitoring platforms, and indigenous engineering initiatives."
  },

  {
    name: "Tamizh Amuthan",
    role: "Chief Strategic Officer & Astronomy Team Lead",
    image: "/team/tamizh.jpg",
    bio:
      "Leads astronomy research activities including observational workflows, constellation tracking concepts, and development of ground-support infrastructure for future space missions."
  },

  {
    name: "Keerthi Sai A S",
    role: "Chief Technology Officer & R&D Team Lead",
    image: "/team/keerthi.jpg",
    bio:
      "Coordinates technical development across engineering teams supporting AI-enabled systems, mission architecture planning, and interdisciplinary innovation programs."
  },

  {
    name: "Goutham GV",
    role: "Chief Financial Officer & Fundraising Lead",
    image: "/team/goutham.jpg",
    bio:
      "Oversees financial strategy, funding coordination, and long-term sustainability planning supporting IARRD’s research initiatives."
  }

]


/* ===============================
DOMAIN TEAM LEADS
=============================== */

const teamLeads = [

  {
    name: "Shravanthi Shyamsundar",
    role: "Satellite Research Team Lead",
    image: "/team/shravanthi.jpg",
    bio:
      "Leads CubeSat architecture planning and subsystem development activities supporting the PrithiviSat mission platform."
  },

  {
    name: "Santhosh Kumar B",
    role: "Marine Research Team Lead",
    image: "/team/santhosh.jpg",
    bio:
      "Coordinates marine technology research initiatives supporting coastal monitoring concepts and maritime awareness platforms."
  },

  {
    name: "Mohammed Ayaz",
    role: "Software Development Team Lead",
    image: "/team/ayaz.jpg",
    bio:
      "Leads development of edutech platforms, simulation tools, and internal engineering software supporting IARRD programs."
  },

  {
    name: "Gnanesh AS",
    role: "Social Media Management Team Lead",
    image: "/team/gnanesh.jpg",
    bio:
      "Leads outreach strategy, technical awareness initiatives, and community engagement supporting IARRD visibility and growth."
  }

]


/* ===============================
PAGE COMPONENT
=============================== */

export default function TeamPage() {

  return (

    <PageWrapper scene={<NetworkScene />}>

      {/* HERO */}

      <section className="pt-32 pb-24 relative">

        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>

            <div className="max-w-3xl">

              <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
                Our Team
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">

                The People Behind IARRD

              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">

                IARRD is a multidisciplinary engineering and research initiative built by domain leads, contributors, and student researchers working together to develop indigenous capability across space, defense, marine, and advanced technology systems.

              </p>

            </div>

          </AnimatedSection>

        </div>

      </section>



      {/* LEADERSHIP */}

      <section className="py-24 relative">

        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>

            <h2 className="text-2xl font-bold mb-12">

              Leadership

            </h2>

          </AnimatedSection>

          <StaggeredContainer
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            staggerDelay={150}
          >

            {leadership.map(member => (

              <div
                key={member.name}
                className="p-8 bg-card/50 backdrop-blur rounded-2xl border border-border hover:border-primary/30 transition-all text-center"
              >

                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border border-primary/30">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />

                </div>

                <h3 className="text-lg font-semibold mb-1">
                  {member.name}
                </h3>

                <p className="text-primary mb-4 text-sm">
                  {member.role}
                </p>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>

              </div>

            ))}

          </StaggeredContainer>

        </div>

      </section>



      {/* DOMAIN LEADS */}

      <section className="py-24 relative">

        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>

            <h2 className="text-2xl font-bold mb-12">

              Domain Team Leads

            </h2>

          </AnimatedSection>

          <StaggeredContainer
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={120}
          >

            {teamLeads.map(member => (

              <div
                key={member.name}
                className="p-6 bg-card/50 backdrop-blur rounded-xl border border-border hover:border-primary/30 transition-all text-center"
              >

                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border border-primary/30">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />

                </div>

                <h3 className="font-semibold mb-1">
                  {member.name}
                </h3>

                <p className="text-primary text-sm mb-2">
                  {member.role}
                </p>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>

              </div>

            ))}

          </StaggeredContainer>

        </div>

      </section>



      {/* JOIN CTA */}

      <section className="py-24 relative">

        <div className="container mx-auto px-4 lg:px-8 text-center">

          <AnimatedSection>

            <div className="p-12 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-3xl border border-primary/20">

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join IARRD
              </h2>

              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">

                IARRD welcomes contributors interested in space systems, defense technologies, marine monitoring platforms, AI engineering, and mission-support software development.

              </p>

              <Button size="lg" asChild>

                <Link href="/careers">

                  Explore Opportunities

                  <ArrowRight className="ml-2 w-4 h-4" />

                </Link>

              </Button>

            </div>

          </AnimatedSection>

        </div>

      </section>

    </PageWrapper>

  )

}