import Link from "next/link"
import { ArrowRight, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"


const teamMembers = [

  {
    name: "Harish Ragavendra Srinivasan",
    role: "Founder & CEO / Acting Defence Team Lead",
    credentials:
      "Founder of IARRD leading multidisciplinary research programs across space systems, defense technologies, marine monitoring platforms, and indigenous engineering initiatives.",
    linkedin: "#",
  },

  {
    name: "Tamizh Amuthan",
    role: "Chief Science Officer & Astronomy Team Lead",
    credentials:
      "Leads astronomy research activities including observational workflows, constellation tracking concepts, and ground-support infrastructure development for future space missions.",
    linkedin: "#",
  },

  {
    name: "Keerthi Sai A S",
    role: "Chief Technology Officer & R&D Team Lead",
    credentials:
      "Coordinates engineering development across AI-enabled systems, mission architecture planning, and interdisciplinary innovation programs.",
    linkedin: "#",
  },

  {
    name: "Goutham GV",
    role: "Chief Financial Officer & Fundraising Lead",
    credentials:
      "Oversees financial strategy, funding coordination, and long-term sustainability planning supporting IARRD research initiatives.",
    linkedin: "#",
  },

]


export function TeamSnapshot() {

  return (

    <section className="py-24 bg-background">

      <div className="container mx-auto px-4 lg:px-8">


        {/* HEADER */}

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">

          <div className="max-w-2xl">

            <h2 className="text-3xl md:text-4xl font-bold mb-4">

              Leadership

            </h2>

            <p className="text-lg text-muted-foreground">

              IARRD is led by a multidisciplinary leadership team working across
              satellite engineering, astronomy infrastructure, AI-enabled research
              platforms, marine technologies, and defense-oriented mission concepts.

            </p>

          </div>


          <Button variant="outline" asChild>

            <Link href="/team">

              View Full Team

              <ArrowRight className="ml-2 w-4 h-4" />

            </Link>

          </Button>

        </div>



        {/* TEAM GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {teamMembers.map((member) => (

            <div
              key={member.name}
              className="group p-6 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
            >

              {/* initials avatar */}

              <div className="w-16 h-16 bg-secondary rounded-full mb-6 flex items-center justify-center">

                <span className="text-2xl font-bold text-muted-foreground">

                  {member.name
                    .split(" ")
                    .map(n => n[0])
                    .slice(0, 2)
                    .join("")}

                </span>

              </div>


              {/* name */}

              <h3 className="text-lg font-semibold mb-1">

                {member.name}

              </h3>


              {/* role */}

              <p className="text-primary text-sm mb-3">

                {member.role}

              </p>


              {/* credentials */}

              <p className="text-sm text-muted-foreground mb-4">

                {member.credentials}

              </p>


              {/* linkedin */}

              <a
                href={member.linkedin}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >

                <Linkedin className="w-4 h-4" />

                LinkedIn

              </a>

            </div>

          ))}

        </div>



        {/* FOOTNOTE */}

        <p className="text-center text-xs text-muted-foreground/60 mt-12 max-w-3xl mx-auto">

          IARRD operates through an interdisciplinary engineering structure with
          dedicated domain leads across satellite systems, marine technologies,
          astronomy research infrastructure, software platforms, and outreach initiatives.

        </p>


      </div>

    </section>

  )

}