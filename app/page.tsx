"use client"

import { ImmersiveNavigation } from "@/components/immersive/navigation"
import { ImmersiveHero } from "@/components/immersive/hero"
import { NewsHighlight } from "@/components/immersive/news-highlight"

import {
  AstronomySection,
  DefenseSection,
  MarineSection,
  RocketrySection,
  SatelliteSection
} from "@/components/immersive/domain-section"

import { ProjectsSection } from "@/components/immersive/projects-section"
import { PartnersSection } from "@/components/immersive/partners-section"
import { ContactSection } from "@/components/immersive/contact-section"
import { ImmersiveFooter } from "@/components/immersive/footer"


export default function HomePage() {

  return (

    <main
      id="main-content"
      className="relative min-h-screen overflow-x-hidden"
    >

      {/* NAVIGATION */}

      <ImmersiveNavigation />


      {/* HERO */}

      <ImmersiveHero />

      <NewsHighlight />
      {/* DOMAINS ANCHOR */}

      <div id="domains" className="scroll-mt-20" />


      {/* DOMAIN SECTIONS */}

      <AstronomySection />

      <DefenseSection />

      <MarineSection />

      <RocketrySection />

      <SatelliteSection />


      {/* PROJECTS */}

      <ProjectsSection
        title="Active Research Programs"
        description="IARRD currently focuses on early-stage engineering development across satellite systems, autonomous platforms, marine monitoring concepts, and observational infrastructure supporting long-term indigenous capability growth."
      />


      {/* PARTNERS & RECOGNITIONS */}

      <PartnersSection />


      {/* CONTACT */}

      <ContactSection
        title="Collaborate With IARRD"
        description="Institutions, contributors, collaborators, and ecosystem organisations interested in working with IARRD across space systems, defence technologies, marine platforms, and applied engineering software initiatives are welcome to connect."
      />


      {/* FOOTER */}

      <ImmersiveFooter />

    </main>

  )

}