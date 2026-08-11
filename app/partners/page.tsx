"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { PageWrapper } from "@/components/immersive/page-wrapper"
import {
  AnimatedSection,
  StaggeredContainer,
} from "@/components/immersive/animated-section"

const NetworkScene = dynamic(
  () =>
    import("@/components/3d/network-scene").then(
      (mod) => mod.NetworkScene
    ),
  { ssr: false }
)

export default function PartnersPage() {
  return (
    <PageWrapper scene={<NetworkScene />}>

      {/* HERO */}

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">

              <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
                Partners
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Institutional Partnerships & Technology Collaboration Network
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                IARRD collaborates with research organisations, innovation
                ecosystem partners, academic and publishing organisations,
                and emerging aerospace technology companies supporting
                contributor-driven engineering development across satellite
                systems, propulsion research, marine platforms, defence
                technologies, materials research, and applied computational
                infrastructure.
              </p>

            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* TECHNOLOGY COLLABORATION PARTNERS */}

      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-10">
              Technology Collaboration Partners
            </h2>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 gap-8">

            {/* SPACEMURAK */}

            <div className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur">

              <Image
                src="/partners/spacemurak.png"
                alt="SpaceMurak Logo"
                width={160}
                height={80}
                className="mb-4 opacity-90"
              />

              <h3 className="text-lg font-semibold mb-3">
                SpaceMurak Aerospace
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                SpaceMurak collaborates with IARRD on propulsion-oriented
                research exploration supporting emerging green propulsion
                technology concepts aligned with sustainable aerospace
                engineering initiatives.
              </p>

            </div>

          </StaggeredContainer>
        </div>
      </section>


      {/* INSTITUTIONAL PARTNERS */}

      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-10">
              Institutional Coordination Partners
            </h2>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 gap-8">

            {/* NTLS */}

            <div className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur">

              <Image
                src="/partners/ntls.png"
                alt="NTLS Groups Logo"
                width={160}
                height={80}
                className="mb-4 opacity-90"
              />

              <h3 className="text-lg font-semibold mb-3">
                NTLS Groups
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                NTLS Groups collaborates with IARRD through a formal MoU
                supporting contributor ecosystem development, engineering
                education programs, and institutional research engagement
                initiatives aligned with long-term capability building.
              </p>

            </div>

          </StaggeredContainer>
        </div>
      </section>


      {/* RESEARCH & ACADEMIC PUBLISHING PARTNERS */}

      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>
            <div className="max-w-3xl mb-10">

              <h2 className="text-2xl font-bold mb-3">
                Research & Academic Publishing Partners
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Academic and publishing collaborations supporting research
                communication, scholarly publishing, researcher development,
                and knowledge exchange.
              </p>

            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 gap-8">

            {/* ARASHI SCIENTIFIC PUBLISHERS */}

            <div className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur">

              <Image
                src="/partners/aarshi.png"
                alt="Arashi Scientific Publishers Logo"
                width={200}
                height={90}
                className="mb-5 opacity-90 object-contain"
              />

              <h3 className="text-lg font-semibold mb-3">
                Arashi Scientific Publishers
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Arashi Scientific Publishers collaborates with IARRD to
                support scholarly publishing, researcher development,
                academic workshops, research engagement, and knowledge
                exchange initiatives. The collaboration also provides a
                framework for future academic events and research-focused
                activities between both organisations.
              </p>

            </div>

          </StaggeredContainer>
        </div>
      </section>


      {/* RECOGNITIONS */}

      <section className="pb-32">
        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-10">
              Recognition & Registrations
            </h2>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 gap-8">

            {/* MSME */}

            <div className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur">

              <h3 className="text-lg font-semibold mb-3">
                MSME Registration
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                IARRD operates under India’s MSME innovation framework
                supporting early-stage engineering research capability
                development.
              </p>

            </div>


            {/* STARTUP INDIA */}

            <div className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur">

              <h3 className="text-lg font-semibold mb-3">
                Startup India Ecosystem Participation
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Participation within the Startup India ecosystem supports
                access to national innovation infrastructure and emerging
                deep-technology collaboration opportunities.
              </p>

            </div>

          </StaggeredContainer>

        </div>
      </section>

    </PageWrapper>
  )
}