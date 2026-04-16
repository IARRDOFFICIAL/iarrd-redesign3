"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowLeft, Users, MapPin, Clock, DollarSign, Briefcase, GraduationCap, Award } from "lucide-react"
import { PageWrapper } from "@/components/immersive/page-wrapper"
import { AnimatedSection, StaggeredContainer } from "@/components/immersive/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const NetworkScene = dynamic(
  () => import("@/components/3d/network-scene").then(mod => ({ default: mod.NetworkScene })),
  { ssr: false }
)

const openPositions = [
  {
    title: "Senior Aerospace Engineer",
    department: "Satellite Systems",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "5+ years",
    salary: "₹15-25 LPA",
    description: "Lead development of indigenous satellite subsystems and CubeSat missions.",
    requirements: ["Aerospace Engineering degree", "Satellite design experience", "Systems engineering"]
  },
  {
    title: "AI/ML Research Engineer",
    department: "Astronomy Intelligence",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "3+ years",
    salary: "₹12-20 LPA",
    description: "Develop AI algorithms for astronomical data analysis and autonomous telescope operations.",
    requirements: ["Computer Science/Machine Learning", "Python expertise", "Research experience"]
  },
  {
    title: "Defense Systems Engineer",
    department: "Defense Technology",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "4+ years",
    salary: "₹14-22 LPA",
    description: "Design and develop advanced defense surveillance and communication systems.",
    requirements: ["Electronics/Communications", "Defense experience", "Security clearance"]
  },
  {
    title: "Rocket Propulsion Engineer",
    department: "Rocketry",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "3+ years",
    salary: "₹13-21 LPA",
    description: "Work on next-generation rocket propulsion systems and hybrid engine development.",
    requirements: ["Mechanical/Aerospace", "Propulsion systems", "Testing experience"]
  }
]

const benefits = [
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Continuous learning programs, conferences, and advanced training opportunities."
  },
  {
    icon: Award,
    title: "Innovation Culture",
    description: "Work on cutting-edge technology with freedom to experiment and innovate."
  },
  {
    icon: Users,
    title: "Collaborative Environment",
    description: "Work with experts from ISRO, DRDO, and leading academic institutions."
  },
  {
    icon: Briefcase,
    title: "Work-Life Balance",
    description: "Flexible working hours and comprehensive health benefits."
  }
]

export default function CareersPage() {
  return (
    <PageWrapper scene={<NetworkScene />}>
      {/* Header */}
      <section className="pt-32 pb-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <AnimatedSection>
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-500/10 rounded-xl">
                  <Users className="h-8 w-8 text-green-500" />
                </div>
                <Badge variant="secondary" className="text-sm">
                  Join Our Team
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Shape India&apos;s{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Space Future
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Join a team of passionate engineers, scientists, and innovators working on
                groundbreaking space technology. At IARRD, you&apos;ll contribute to projects
                that advance India&apos;s strategic technological sovereignty.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Briefcase className="h-4 w-4" />
                  View Open Positions
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Users className="h-4 w-4" />
                  Our Culture
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Open{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Positions
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Join our mission to build indigenous space technology. We&apos;re looking for talented individuals ready to make an impact.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 gap-8" staggerDelay={150}>
            {openPositions.map((position, index) => (
              <Card key={index} className="group hover:border-green-500/50 transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                      {position.title}
                    </CardTitle>
                    <Badge variant="secondary">{position.type}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {position.experience}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3" />
                      {position.salary}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {position.requirements.map((req, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full" variant="outline">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 relative bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Join IARRD?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Work on meaningful projects with world-class benefits and opportunities for growth.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center group hover:border-green-500/50 transition-all">
                <CardHeader>
                  <div className="mx-auto p-3 bg-green-500/10 rounded-xl w-fit mb-4 group-hover:bg-green-500/20 transition-colors">
                    <benefit.icon className="h-6 w-6 text-green-500" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <Card className="max-w-4xl mx-auto border-green-500/20 bg-gradient-to-r from-green-500/5 to-blue-500/5">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Launch Your Career?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Don&apos;t see a position that matches your skills? We&apos;re always looking for talented individuals.
                  Send us your resume and let&apos;s discuss opportunities.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="gap-2">
                    <Briefcase className="h-4 w-4" />
                    Apply for Any Position
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    <Users className="h-4 w-4" />
                    Meet Our Team
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </PageWrapper>
  )
}