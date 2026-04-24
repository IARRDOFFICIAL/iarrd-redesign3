import { CheckCircle2, Circle, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"


const milestones = [

  {
    phase: "Vision Formation",
    title: "Concept Origin",
    description:
      "The initial concept for IARRD emerged as a student-led platform focused on space technology, defence systems, and interdisciplinary engineering exposure.",
    status: "completed",
    year: "2023",
  },

  {
    phase: "Organizational Establishment",
    title: "Formal Structuring of Domains",
    description:
      "IARRD was formally established with structured research domains including satellite systems, defence technology studies, astronomy research support, and propulsion concept exploration.",
    status: "completed",
    year: "2024",
  },

  {
    phase: "Early R&D Initiatives",
    title: "Flagship Concept Development",
    description:
      "Early-stage architecture work began on the PrithiviSat CubeSat platform and the IRAI-Q2 communication framework, alongside internal technical documentation and domain-level planning with an initial research team of six members.",
    status: "completed",
    year: "2025",
  },

  {
    phase: "Academic Engagement & Expansion",
    title: "Curriculum Development & NTLS MoU",
    description:
      "Technical learning resources in drone and defence technologies were initiated alongside academic outreach activities. A formal MoU was signed with NTLS Groups supporting edutech collaboration initiatives.",
    status: "completed",
    year: "2025",
  },

  {
    phase: "Institutional Collaboration Phase",
    title: "First Academic Lab Initiative",
    description:
      "Progression into institutional collaboration through lab-oriented initiatives including the establishment of IARRD’s first lab at Dhanalakshmi College of Engineering & Technology and expansion of the research team to 40+ contributors.",
    status: "current",
    year: "2026",
  },

]


export function TimelineSection() {

  return (

    <section className="py-24 bg-background">

      <div className="container mx-auto px-4 lg:px-8">

        <div className="max-w-2xl mb-16">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">

            Our Journey

          </h2>


          <p className="text-lg text-muted-foreground">

            Key stages in the growth of IARRD and its long-term development roadmap
            across interdisciplinary engineering research programs.

          </p>

        </div>



        <div className="relative">

          {/* Timeline vertical line */}

          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />


          <div className="space-y-12">

            {milestones.map((milestone, index) => (

              <div
                key={milestone.title}
                className={cn(
                  "relative flex flex-col md:flex-row gap-8 md:gap-16",
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                )}
              >


                {/* TEXT BLOCK */}

                <div
                  className={cn(
                    "flex-1 pl-12 md:pl-0",
                    index % 2 === 0
                      ? "md:text-right md:pr-16"
                      : "md:text-left md:pl-16"
                  )}
                >

                  <div
                    className={cn(
                      "inline-block px-3 py-1 rounded-full text-xs font-medium mb-3",
                      milestone.status === "completed" &&
                        "bg-emerald-500/20 text-emerald-400",
                      milestone.status === "current" &&
                        "bg-primary/20 text-primary"
                    )}
                  >

                    {milestone.year} — {milestone.phase}

                  </div>


                  <h3 className="text-xl font-semibold mb-2">

                    {milestone.title}

                  </h3>


                  <p className="text-muted-foreground">

                    {milestone.description}

                  </p>

                </div>



                {/* ICON NODE */}

                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">

                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center",
                      milestone.status === "completed" &&
                        "bg-emerald-500/20",
                      milestone.status === "current" &&
                        "bg-primary/20"
                    )}
                  >

                    {milestone.status === "completed" && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    )}

                    {milestone.status === "current" && (
                      <Rocket className="w-5 h-5 text-primary" />
                    )}

                  </div>

                </div>



                {/* spacer column */}

                <div className="hidden md:block flex-1" />

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  )

}