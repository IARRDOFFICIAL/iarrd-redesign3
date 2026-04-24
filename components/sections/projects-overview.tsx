import Link from "next/link"
import { ArrowUpRight, Satellite, Brain, Telescope, Radar } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { TRLBadge } from "@/components/trl-badge"


const projects = [

  {
    id: "prithivisat",
    name: "PrithiviSat",
    description:
      "A 2U CubeSat engineering platform under subsystem design supporting environmental monitoring payload experiments and onboard AI-assisted mission workflows.",
    icon: Satellite,
    trl: 3,
    specs: [
      "2U CubeSat Platform",
      "Subsystem Architecture",
      "Environmental Payload Concepts"
    ],
    status: "Subsystem Design Phase",
    href: "/projects/prithivisat",
  },

  {
    id: "irai-q2",
    name: "IRAI-Q2 CubeSat Relay System",
    description:
      "Satellite-assisted beyond-line-of-sight UAV communication architecture being modeled through orbit simulation, link-budget estimation, and hybrid relay routing logic development.",
    icon: Brain,
    trl: 2,
    specs: [
      "LEO Visibility Modeling",
      "UHF / S-Band Links",
      "Store-and-Forward Relay Logic"
    ],
    status: "Architecture & Simulation Phase",
    href: "/projects/irai-q2",
  },

  {
    id: "astronomy-tools",
    name: "Astronomy Ground Systems",
    description:
      "Planning-stage telescope infrastructure and signal reception workflows supporting academic observation pipelines and future satellite mission readiness.",
    icon: Telescope,
    trl: 2,
    specs: [
      "Observation Pipelines",
      "Tracking Infrastructure Concepts",
      "Ground Segment Planning"
    ],
    status: "Infrastructure Planning",
    href: "/projects/astronomy-tools",
  },

  {
    id: "amaran-uav",
    name: "Amaran UAV Platform",
    description:
      "Concept-stage unmanned aerial sensing platform under exploration for environmental monitoring, disaster-response support, and distributed aerial observation missions.",
    icon: Radar,
    trl: 2,
    specs: [
      "UAV Mission Architecture",
      "Environmental Monitoring",
      "Distributed Sensing Concepts"
    ],
    status: "Concept Exploration",
    href: "/projects/amaran",
  }

]


export function ProjectsOverview() {

  return (

    <section className="py-24 bg-background">

      <div className="container mx-auto px-4 lg:px-8">

        {/* HEADER */}

        <div className="max-w-2xl mb-16">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">

            Engineering Projects in Development

          </h2>


          <p className="text-lg text-muted-foreground">

            IARRD’s current engineering programs span CubeSat platform
            development, satellite-assisted communication architectures,
            astronomy infrastructure planning, and aerial sensing research
            systems.

          </p>

        </div>



        {/* PROJECT GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {projects.map((project) => (

            <Link key={project.id} href={project.href}>

              <Card className="group h-full bg-card hover:bg-secondary/30 border-border hover:border-primary/30 transition-all duration-300">

                <CardHeader>

                  <div className="flex items-start justify-between mb-4">

                    <div className="p-3 bg-primary/10 rounded-lg">

                      <project.icon className="w-6 h-6 text-primary" />

                    </div>


                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />

                  </div>


                  <div className="flex items-center gap-3 mb-2">

                    <CardTitle className="text-xl">

                      {project.name}

                    </CardTitle>


                    <TRLBadge level={project.trl} />

                  </div>


                  <CardDescription className="text-muted-foreground">

                    {project.description}

                  </CardDescription>

                </CardHeader>



                <CardContent>

                  <div className="flex flex-wrap gap-2 mb-4">

                    {project.specs.map((spec) => (

                      <span
                        key={spec}
                        className="px-2 py-1 bg-secondary/50 text-xs text-muted-foreground rounded"
                      >

                        {spec}

                      </span>

                    ))}

                  </div>



                  <div className="flex items-center gap-2">

                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />

                    <span className="text-sm text-muted-foreground">

                      {project.status}

                    </span>

                  </div>

                </CardContent>

              </Card>

            </Link>

          ))}

        </div>

      </div>

    </section>

  )

}