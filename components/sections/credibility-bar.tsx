export function CredibilityBar() {

  const affiliations = [

    {
      name: "IN-SPACe",
      category: "Space Ecosystem Engagement"
    },

    {
      name: "Startup India",
      category: "Registered Initiative"
    },

    {
      name: "StartupTN",
      category: "State Innovation Ecosystem"
    },

    {
      name: "MSME",
      category: "Government Registration"
    },

    {
      name: "NTLS",
      category: "Innovation Network Participation"
    }

  ]


  return (

    <section className="py-12 border-y border-border bg-secondary/20">

      <div className="container mx-auto px-4 lg:px-8">

        <p className="text-center text-sm text-muted-foreground mb-8">

          Engaged Within India's Innovation & Space Technology Ecosystem

        </p>


        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">

          {affiliations.map((item) => (

            <div
              key={item.name}
              className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity"
            >

              <div className="h-10 flex items-center justify-center">

                <span className="text-lg font-semibold tracking-wider text-foreground/80">

                  {item.name}

                </span>

              </div>


              <span className="text-xs text-muted-foreground text-center">

                {item.category}

              </span>

            </div>

          ))}

        </div>


        <p className="text-center text-xs text-muted-foreground/60 mt-8 max-w-2xl mx-auto">

          Listings indicate registrations, ecosystem participation, or engagement within national
          innovation and space technology support frameworks. They do not imply institutional
          endorsement or formal partnership unless explicitly stated.

        </p>

      </div>

    </section>

  )

}