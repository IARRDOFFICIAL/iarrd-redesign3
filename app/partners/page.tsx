"use client"

import dynamic from "next/dynamic"
import { PageWrapper } from "@/components/immersive/page-wrapper"
import {
  AnimatedSection,
  StaggeredContainer
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

                Institutional Partnerships & Ecosystem Recognition

              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">

                IARRD collaborates with institutional partners and participates
                in national innovation ecosystem programs that support
                contributor-driven engineering research across space systems,
                defence technologies, marine platforms, and applied software
                development initiatives.

              </p>

            </div>

          </AnimatedSection>

        </div>

      </section>


      {/* PARTNERS */}

      <section className="pb-24">

        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>

            <h2 className="text-2xl font-bold mb-10">

              Institutional Partner

            </h2>

          </AnimatedSection>


          <StaggeredContainer className="grid md:grid-cols-2 gap-8">

            {/* NTLS GROUPS */}

            <div className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur">

              <h3 className="text-lg font-semibold mb-3">

                NTLS Groups

              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">

                NTLS Groups collaborates with IARRD in supporting organisational
                coordination, contributor ecosystem development, and engineering
                programme expansion aligned with ongoing research initiatives.

              </p>

            </div>

          </StaggeredContainer>

        </div>

      </section>


      {/* RECOGNITIONS */}

      <section className="pb-24">

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

                IARRD is registered under India’s Micro, Small and Medium
                Enterprises (MSME) framework supporting engineering innovation,
                research-oriented development activity, and institutional
                capability growth.

              </p>

            </div>


            {/* STARTUP INDIA */}

            <div className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur">

              <h3 className="text-lg font-semibold mb-3">

                Startup India Ecosystem Participation

              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">

                IARRD participates within the Startup India innovation ecosystem,
                enabling access to national startup support structures and
                contributing to India’s emerging deep-technology development
                landscape.

              </p>

            </div>

          </StaggeredContainer>

        </div>

      </section>


      {/* FUTURE PARTNERSHIPS */}

      <section className="pb-32">

        <div className="container mx-auto px-4 lg:px-8">

          <AnimatedSection>

            <div className="max-w-3xl">

              <h2 className="text-2xl font-bold mb-6">

                Future Collaboration Opportunities

              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">

                IARRD welcomes collaboration with academic institutions,
                engineering organizations, research laboratories, and technology
                ecosystem partners interested in contributing to long-term
                indigenous capability development across space systems,
                autonomy platforms, marine monitoring technologies, and applied
                engineering software initiatives.

              </p>

              <p className="text-xs text-muted-foreground/70">

                Institutional relationships listed represent active collaboration,
                ecosystem participation, or recognised innovation programme
                registrations supporting engineering research development.

              </p>

            </div>

          </AnimatedSection>

        </div>

      </section>

    </PageWrapper>

  )

}