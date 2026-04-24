"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import {
  Mail,
  MapPin,
  Phone,
  Building2,
  Briefcase,
  Users,
  Send,
  CheckCircle,
} from "lucide-react"

import { PageWrapper } from "@/components/immersive/page-wrapper"
import {
  AnimatedSection,
  StaggeredContainer,
} from "@/components/immersive/animated-section"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const GlobeScene = dynamic(
  () =>
    import("@/components/3d/globe-scene").then((mod) => ({
      default: mod.GlobeScene,
    })),
  { ssr: false }
)

/* CONTACT TYPES */

const contactTypes = [
  {
    id: "general",
    icon: Mail,
    title: "General Inquiry",
    description: "Questions about IARRD",
    email: "iarrd.official@gmail.com",
  },
  {
    id: "investor",
    icon: Briefcase,
    title: "Investment Inquiries",
    description: "Funding & collaboration discussions",
    email: "investor.iarrd@gmail.com",
  },
  {
    id: "partner",
    icon: Users,
    title: "Partnership",
    description: "Institutional & technical collaboration",
    email: "iarrd.official@gmail.com",
  },
]

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState("general")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const selectedContact = contactTypes.find(
    (t) => t.id === selectedType
  )

  /* FORM SUBMIT HANDLER */

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    formData.append("type", selectedType)

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwiLq1KLJSy2_yjoiagwSvhc5b_xTmVzPu2Ong7ExBdl_9TmCBleI1m5-kcpPFRPC2Juw/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      )

      setIsSubmitted(true)
    } catch (error) {
      alert("Error sending message.")
    }

    setIsSubmitting(false)
  }

  return (
    <PageWrapper scene={<GlobeScene />}>
      {/* HERO */}

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
                Contact Us
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Let’s Build the Future Together
              </h1>

              <p className="text-xl text-muted-foreground">
                Connect with IARRD for collaborations,
                partnerships, investment opportunities, or
                general inquiries.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT TYPE SELECTOR */}

      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <StaggeredContainer className="grid md:grid-cols-3 gap-6">
              {contactTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() =>
                    setSelectedType(type.id)
                  }
                  className={`p-6 rounded-2xl border transition-all text-left ${
                    selectedType === type.id
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  <type.icon className="w-6 h-6 mb-4 text-primary" />

                  <h3 className="font-semibold mb-1">
                    {type.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {type.description}
                  </p>
                </button>
              ))}
            </StaggeredContainer>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT FORM */}

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection animation="slide-right">
              <h2 className="text-2xl font-bold mb-8">
                Send a Message
              </h2>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl border border-green-500/30 bg-green-500/10">
                  <CheckCircle className="w-8 h-8 text-green-400 mb-4" />

                  <h3 className="text-xl font-semibold text-green-400">
                    Message Sent Successfully
                  </h3>

                  <p className="text-muted-foreground">
                    Thank you for contacting IARRD. Our
                    team will respond shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <Label>Name</Label>

                    <Input
                      name="name"
                      required
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <Label>Email</Label>

                    <Input
                      name="email"
                      required
                      type="email"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label>Organization</Label>

                    <Input
                      name="organization"
                      placeholder="Institution / Company"
                    />
                  </div>

                  <div>
                    <Label>Subject</Label>

                    <Input
                      name="subject"
                      required
                      placeholder="Inquiry topic"
                    />
                  </div>

                  <div>
                    <Label>Message</Label>

                    <Textarea
                      name="message"
                      required
                      rows={6}
                      placeholder="Write your message here..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Sending..."
                      : "Send Message"}

                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              )}
            </AnimatedSection>

            {/* CONTACT INFO PANEL */}

            <AnimatedSection animation="slide-left">
              <h2 className="text-2xl font-bold mb-8">
                Contact Information
              </h2>

              <Card>
                <CardHeader>
                  <Building2 className="w-6 h-6 text-primary mb-2" />

                  <CardTitle>Head Office</CardTitle>

                  <CardDescription>
                    Anaicut Road
                    <br />
                    Ranipet – 632513
                    <br />
                    India
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <Mail className="w-6 h-6 text-primary mb-2" />

                  <CardTitle>Email</CardTitle>

                  <CardDescription>
                    iarrd.official@gmail.com
                    <br />
                    investor.iarrd@gmail.com
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <Phone className="w-6 h-6 text-primary mb-2" />

                  <CardTitle>Phone</CardTitle>

                  <CardDescription>
                    +91 8903272879
                    <br />
                    Mon–Fri, 9:00 AM – 6:00 PM IST
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}