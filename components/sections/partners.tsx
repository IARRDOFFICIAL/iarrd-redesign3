const partnerCategories = [
  {
    label: "Supported by",
    partners: ["IN-SPACe", "Department of Science & Technology", "State Aerospace Council"],
  },
  {
    label: "Research Partners",
    partners: ["Indian Institute of Technology", "Indian Institute of Science", "National Research Institutions"],
  },
  {
    label: "Technology Partners",
    partners: ["Component Suppliers", "Testing Facilities", "Manufacturing Partners"],
  },
  {
    label: "Incubated at",
    partners: ["T-Hub", "Startup Incubators", "Innovation Centers"],
  },
]

export function PartnersSection() {
  return (
    <section className="py-24 bg-secondary/10 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partners & Collaborators</h2>
          <p className="text-lg text-muted-foreground">
            Our ecosystem of government agencies, academic institutions, and industry partners.
          </p>
        </div>

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

        <p className="text-center text-xs text-muted-foreground/60 mt-12">
          Partner listings represent collaborations, partnerships, or affiliations and do not imply endorsement.
        </p>
      </div>
    </section>
  )
}
