import Link from "next/link"
import { ArrowRight, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "Dr. Arun Kumar",
    role: "Founder & CEO",
    credentials: "Ex-ISRO | IIT Madras | 15+ years in Aerospace",
    linkedin: "#",
  },
  {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    credentials: "Ex-DRDO | IISc Bangalore | AI/ML Specialist",
    linkedin: "#",
  },
  {
    name: "Vikram Reddy",
    role: "Head of Satellite Systems",
    credentials: "Ex-HAL | BITS Pilani | CubeSat Expert",
    linkedin: "#",
  },
]

export function TeamSnapshot() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Experienced professionals from ISRO, DRDO, and leading academic institutions.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/team">
              View Full Team
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group p-6 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
            >
              <div className="w-16 h-16 bg-secondary rounded-full mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-muted-foreground">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-primary text-sm mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.credentials}</p>
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
      </div>
    </section>
  )
}
