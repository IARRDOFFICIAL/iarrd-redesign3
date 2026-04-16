export function CredibilityBar() {
  const affiliations = [
    { name: "IN-SPACe", category: "Supported by" },
    { name: "ISRO", category: "Supported by" },
    { name: "DST", category: "Supported by" },
    { name: "IIT", category: "Research Partner" },
    { name: "T-Hub", category: "Incubated at" },
  ]

  return (
    <section className="py-12 border-y border-border bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted By & Collaborating With
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {affiliations.map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
              <div className="h-10 flex items-center justify-center">
                <span className="text-lg font-semibold tracking-wider text-foreground/80">{item.name}</span>
              </div>
              <span className="text-xs text-muted-foreground">{item.category}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground/60 mt-8">
          Logos represent collaborations, partnerships, or affiliations and do not imply endorsement.
        </p>
      </div>
    </section>
  )
}
