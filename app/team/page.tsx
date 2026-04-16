"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { Linkedin, Mail, ArrowRight } from "lucide-react"
import { PageWrapper } from "@/components/immersive/page-wrapper"
import { AnimatedSection, StaggeredContainer } from "@/components/immersive/animated-section"
import { Button } from "@/components/ui/button"

const NetworkScene = dynamic(
  () => import("@/components/3d/network-scene").then(mod => ({ default: mod.NetworkScene })),
  { ssr: false }
)

const leadership = [
  {
    name: "Dr. Arun Kumar",
    role: "Founder & CEO",
    bio: "Former ISRO scientist with 15+ years in satellite systems. PhD from IIT Madras in Aerospace Engineering. Led multiple successful satellite missions before founding IARRD.",
    credentials: ["Ex-ISRO", "IIT Madras", "15+ years"],
    linkedin: "#",
    email: "arun@iarrd.in",
    initials: "AK",
  },
  {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    bio: "AI/ML specialist from IISc Bangalore with experience at DRDO. Expertise in computer vision and autonomous systems. Leads IRAI-Q2 development.",
    credentials: ["Ex-DRDO", "IISc Bangalore", "AI/ML Specialist"],
    linkedin: "#",
    email: "priya@iarrd.in",
    initials: "PS",
  },
  {
    name: "Vikram Reddy",
    role: "Head of Satellite Systems",
    bio: "CubeSat expert with background at HAL. BITS Pilani alumnus. Leads PrithiviSat development and satellite integration efforts.",
    credentials: ["Ex-HAL", "BITS Pilani", "CubeSat Expert"],
    linkedin: "#",
    email: "vikram@iarrd.in",
    initials: "VR",
  },
]

const team = [
  { name: "Dr. Meera Patel", role: "Head of Ground Systems", credentials: "Ex-PRL | MSc Astrophysics", initials: "MP" },
  { name: "Rajesh Nair", role: "Lead Systems Engineer", credentials: "Ex-ISRO | IIT Bombay", initials: "RN" },
  { name: "Ananya Rao", role: "AI Research Lead", credentials: "Stanford ML | Ex-Google", initials: "AR" },
  { name: "Suresh Kumar", role: "Hardware Design Lead", credentials: "Ex-DRDO | NIT Trichy", initials: "SK" },
  { name: "Kavitha Menon", role: "Mission Operations", credentials: "Ex-ISRO | IISc", initials: "KM" },
  { name: "Arjun Sharma", role: "Software Engineering Lead", credentials: "Ex-Microsoft | IIT Delhi", initials: "AS" },
]

const advisors = [
  { name: "Dr. K. Radhakrishnan", role: "Strategic Advisor", credentials: "Former Chairman, ISRO", initials: "KR" },
  { name: "Prof. S. Somanath", role: "Technical Advisor", credentials: "Aerospace Expert", initials: "SS" },
  { name: "Dr. Ritu Karidhal", role: "Mission Advisor", credentials: "Mars Mission Lead", initials: "RK" },
]

export default function TeamPage() {
  return (
    <PageWrapper scene={<NetworkScene />}>
      {/* Hero */}
      <section className="pt-32 pb-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
                Our Team
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                The Minds Behind{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                  IARRD
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experienced professionals from ISRO, DRDO, and leading academic 
                institutions, united by a mission to build India&apos;s space future.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-12">Leadership</h2>
          </AnimatedSection>
          
          <StaggeredContainer className="grid lg:grid-cols-3 gap-8" staggerDelay={150}>
            {leadership.map((member) => (
              <div
                key={member.name}
                className="p-8 bg-card/50 backdrop-blur rounded-2xl border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-full mb-6 flex items-center justify-center border border-primary/30 group-hover:border-primary/50 transition-colors">
                  <span className="text-3xl font-bold text-primary">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="px-3 py-1 bg-secondary/50 text-xs text-muted-foreground rounded-full"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={member.linkedin}
                    className="p-2 bg-secondary/50 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 bg-secondary/50 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-12">Core Team</h2>
          </AnimatedSection>
          
          <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={100}>
            {team.map((member) => (
              <div
                key={member.name}
                className="p-6 bg-card/50 backdrop-blur rounded-xl border border-border hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-full flex items-center justify-center border border-border group-hover:border-primary/30 transition-colors">
                    <span className="text-lg font-bold text-primary">
                      {member.initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-primary text-sm">{member.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">{member.credentials}</p>
                  </div>
                </div>
              </div>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-12">Advisory Board</h2>
          </AnimatedSection>
          
          <StaggeredContainer className="grid md:grid-cols-3 gap-6" staggerDelay={100}>
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="p-8 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl border border-amber-500/20 text-center hover:border-amber-500/40 transition-colors"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full mb-4 flex items-center justify-center mx-auto border border-amber-500/30">
                  <span className="text-2xl font-bold text-amber-400">
                    {advisor.initials}
                  </span>
                </div>
                <h3 className="font-semibold mb-1">{advisor.name}</h3>
                <p className="text-amber-400 text-sm mb-2">{advisor.role}</p>
                <p className="text-xs text-muted-foreground">{advisor.credentials}</p>
              </div>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <div className="p-12 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-3xl border border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                We&apos;re always looking for talented engineers, researchers, and 
                innovators to join our mission.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/careers">
                    View Open Positions
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageWrapper>
  )
}
