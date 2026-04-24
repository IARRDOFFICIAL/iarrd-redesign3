import { Cpu, Shield, Zap } from "lucide-react"


const differentiators = [

  {
    icon: Cpu,
    title: "AI-Enabled Engineering Workflows",
    description:
      "Development of AI-assisted modelling pipelines supporting astronomy analysis, environmental sensing concepts, and mission-planning experimentation across satellite and marine research programs.",
  },

  {
    icon: Shield,
    title: "Indigenous System Architecture Development",
    description:
      "Exploration of modular subsystem architectures designed to support accessible CubeSat platforms, UAV sensing systems, and research-grade observation infrastructure aligned with India’s emerging small-satellite ecosystem.",
  },

  {
    icon: Zap,
    title: "Multi-Domain Engineering Integration",
    description:
      "Interdisciplinary research spanning satellite systems, astronomy infrastructure, marine sensing platforms, and UAV-supported communication architectures enabling cross-domain mission capability development.",
  },

]


export function TechnologySection() {

  return (

    <section className="py-24 bg-secondary/10 border-y border-border">

      <div className="container mx-auto px-4 lg:px-8">


        {/* HEADER */}

        <div className="max-w-2xl mb-16">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">

            Engineering Capabilities

          </h2>


          <p className="text-lg text-muted-foreground">

            Core technical directions supporting IARRD’s research across
            satellite platforms, AI-assisted observation workflows,
            marine sensing architectures, and distributed mission systems.

          </p>

        </div>



        {/* GRID */}

        <div className="grid md:grid-cols-3 gap-8">

          {differentiators.map((item) => (

            <div
              key={item.title}
              className="group"
            >

              <div className="flex items-start gap-4">

                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">

                  <item.icon className="w-6 h-6 text-primary" />

                </div>


                <div>

                  <h3 className="text-lg font-semibold mb-2">

                    {item.title}

                  </h3>


                  <p className="text-muted-foreground leading-relaxed">

                    {item.description}

                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* FOOTNOTE */}

        <p className="text-center text-xs text-muted-foreground/60 mt-12 max-w-3xl mx-auto">

          These engineering capabilities represent ongoing research and subsystem-level
          development efforts supporting long-term indigenous mission architecture
          exploration across multiple advanced technology domains.

        </p>


      </div>

    </section>

  )

}