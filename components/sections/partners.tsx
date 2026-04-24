const partnerCategories = [

  {
    label: "Space Ecosystem Engagement",
    partners: [
      "IN-SPACe (Ecosystem Alignment)",
      "Indian National Space Promotion & Authorization Center"
    ],
  },

  {
    label: "Innovation Ecosystem Participation",
    partners: [
      "Startup India",
      "StartupTN",
      "NTLS Innovation Network"
    ],
  },

  {
    label: "Government Registration Frameworks",
    partners: [
      "MSME Registration",
      "India Innovation Support Programs"
    ],
  },

  {
    label: "Academic & Research Outreach",
    partners: [
      "IIST (Planned Academic Engagement)",
      "IIT Madras (Proposed Collaboration Outreach)",
      "Anna University (Regional Academic Engagement)"
    ],
  },

]


export function PartnersSection() {

  return (

    <section className="py-24 bg-secondary/10 border-y border-border">

      <div className="container mx-auto px-4 lg:px-8">


        {/* HEADER */}

        <div className="max-w-2xl mb-16">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">

            Research & Innovation Ecosystem Alignment

          </h2>


          <p className="text-lg text-muted-foreground">

            IARRD engages with national space ecosystem programs,
            innovation networks, and academic institutions supporting
            early-stage engineering research and technology development.

          </p>

        </div>



        {/* GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {partnerCategories.map((category) => (

            <div key={category.label} className="space-y-4">

              <h3 className="text-sm font-medium text-primary uppercase tracking-wider">

                {category.label}

              </h3>


              <ul className="space-y-3">

                {category.partners.map((partner) => (

                  <li
                    key={partner}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >

                    {partner}

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>



        {/* DISCLAIMER */}

        <p className="text-center text-xs text-muted-foreground/60 mt-12 max-w-3xl mx-auto">

          Listings represent registrations, ecosystem participation,
          outreach engagement, or proposed collaboration pathways within
          India's space and innovation infrastructure. They do not imply
          institutional endorsement or formal partnership unless explicitly stated.

        </p>


      </div>

    </section>

  )

}