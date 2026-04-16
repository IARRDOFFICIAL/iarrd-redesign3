"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Mail, MapPin, Phone, Building2, Briefcase, Users, Send, CheckCircle } from "lucide-react"
import { PageWrapper } from "@/components/immersive/page-wrapper"
import { AnimatedSection, StaggeredContainer } from "@/components/immersive/animated-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const GlobeScene = dynamic(
  () => import("@/components/3d/globe-scene").then(mod => ({ default: mod.GlobeScene })),
  { ssr: false }
)

const contactTypes = [
  {
    id: "general",
    icon: Mail,
    title: "General Inquiry",
    description: "Questions about IARRD",
    email: "contact@iarrd.in",
    color: "from-primary/20 to-cyan-500/20",
    borderColor: "border-primary/30",
  },
  {
    id: "investor",
    icon: Briefcase,
    title: "Investment Inquiries",
    description: "Funding & investment opportunities",
    email: "investor@iarrd.in",
    color: "from-emerald-500/20 to-green-500/20",
    borderColor: "border-emerald-500/30",
  },
  {
    id: "partner",
    icon: Users,
    title: "Partnership",
    description: "Business & research collaborations",
    email: "partners@iarrd.in",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
  },
]

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState("general")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const selectedContact = contactTypes.find(t => t.id === selectedType)

  return (
    <PageWrapper scene={<GlobeScene />}>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Let&apos;s Build the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                  Future Together
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether you&apos;re an investor, potential partner, or just curious about 
                our work, we&apos;d love to hear from you.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Types */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <StaggeredContainer className="grid md:grid-cols-3 gap-6" staggerDelay={100}>
              {contactTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`p-6 rounded-2xl border text-left transition-all group ${
                    selectedType === type.id
                      ? `bg-gradient-to-br ${type.color} ${type.borderColor} scale-[1.02]`
                      : "bg-card/50 backdrop-blur border-border hover:border-primary/30"
                  }`}
                >
                  <div className={`p-3 rounded-xl w-fit mb-4 ${
                    selectedType === type.id 
                      ? "bg-background/50" 
                      : "bg-secondary/50 group-hover:bg-secondary"
                  } transition-colors`}>
                    <type.icon className={`w-6 h-6 ${
                      selectedType === type.id ? "text-primary" : "text-muted-foreground"
                    }`} />
                  </div>
                  <h3 className="font-semibold mb-1">{type.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{type.description}</p>
                  <p className={`text-sm font-medium ${
                    selectedType === type.id ? "text-primary" : "text-primary/70"
                  }`}>{type.email}</p>
                </button>
              ))}
            </StaggeredContainer>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <AnimatedSection animation="slide-right">
              <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
              
              {isSubmitted ? (
                <div className="p-8 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl border border-emerald-500/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-emerald-500/20 rounded-full">
                      <CheckCircle className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-400">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We&apos;ll get back to you within 2-3 business days.
                      </p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="p-4 bg-card/50 backdrop-blur rounded-xl border border-border mb-6">
                    <p className="text-sm text-muted-foreground">
                      Sending to: <span className="text-primary font-medium">{selectedContact?.email}</span>
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-card/50 backdrop-blur border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="bg-card/50 backdrop-blur border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      name="organization"
                      placeholder="Your company or institution"
                      className="bg-card/50 backdrop-blur border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      required
                      className="bg-card/50 backdrop-blur border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                      className="bg-card/50 backdrop-blur border-border resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection animation="slide-left" delay={200}>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              
              <StaggeredContainer className="space-y-6" staggerDelay={100}>
                <Card className="bg-card/50 backdrop-blur border-border">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base mb-2">Headquarters</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        IARRD Space Technologies Pvt. Ltd.<br />
                        T-Hub, Raidurg<br />
                        Hyderabad, Telangana 500081<br />
                        India
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-border">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base mb-2">Email</CardTitle>
                      <CardDescription className="text-sm space-y-1">
                        <p>General: <span className="text-foreground">contact@iarrd.in</span></p>
                        <p>Investors: <span className="text-foreground">investor@iarrd.in</span></p>
                        <p>Partners: <span className="text-foreground">partners@iarrd.in</span></p>
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-border">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base mb-2">Phone</CardTitle>
                      <CardDescription className="text-sm">
                        +91 40 XXXX XXXX<br />
                        Mon-Fri, 9:00 AM - 6:00 PM IST
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-border">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base mb-2">Research Facility</CardTitle>
                      <CardDescription className="text-sm">
                        Ground Station & Lab<br />
                        [Location details available upon request]
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </StaggeredContainer>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
