import { Award, Newspaper, Globe } from "lucide-react"

const recognitionItems = [

  {
    type: "ecosystem",
    icon: Globe,
    title: "Registered within IN-SPACe Space Ecosystem Framework",
    source: "IN-SPACe",
    date: "2024",
  },

  {
    type: "startup",
    icon: Award,
    title: "Recognized under Startup India Initiative",
    source: "Government of India",
    date: "2024",
  },

  {
    type: "state",
    icon: Newspaper,
    title: "Participant in Tamil Nadu Innovation Ecosystem Programs",
    source: "StartupTN",
    date: "2024",
  },

]


export function PressSection() {

  return (

    <section className="py-24 bg-secondary/10 border-y border-border">

      <div className="container mx-auto px-4 lg:px-8">


        {/* HEADER */}

        <div className="max-w-2xl mb-16">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">

            Recognition & Ecosystem Engagement

          </h2>

          <p className="text-lg text-muted-foreground">

            Registrations and participation within India's national innovation,
            startup, and space-technology support ecosystem.

          </p>

        </div>



        {/* GRID */}

        <div className="grid md:grid-cols-3 gap-6">

          {recognitionItems.map((item) => (

            <div
              key={item.title}
              className="p-6 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
            >

              <div className="flex items-start gap-4">

                <div className="p-2 bg-primary/10 rounded-lg">

                  <item.icon className="w-5 h-5 text-primary" />

                </div>


                <div>

                  <p className="text-xs text-muted-foreground mb-2">

                    {item.date}

                  </p>


                  <h3 className="font-semibold mb-2">

                    {item.title}

                  </h3>


                  <p className="text-sm text-muted-foreground">

                    {item.source}

                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>



        {/* DISCLAIMER */}

        <p className="text-center text-xs text-muted-foreground/60 mt-12 max-w-3xl mx-auto">

          Listings represent registrations and participation within national innovation
          and space-technology ecosystem frameworks and do not imply institutional funding,
          authorization approvals, or formal partnerships unless explicitly stated.

        </p>


      </div>

    </section>

  )

}