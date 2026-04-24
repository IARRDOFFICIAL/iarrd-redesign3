"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { AnimatedText } from "@/components/animated-text"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

import {
  Send,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Instagram,
  Youtube,
  MessageCircle,
  ArrowRight
} from "lucide-react"


const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "iarrd.official@gmail.com",
    href: "mailto:iarrd.official@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8903272879",
    href: "tel:+918903272879",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ranipet, Tamil Nadu, India",
    href: "#",
  },
]


const inquiryTypes = [
  { id: "general", label: "General Inquiry" },
  { id: "collaboration", label: "Research Collaboration" },
  { id: "partnership", label: "Institutional Partnership" },
  { id: "contribute", label: "Join as Contributor" },
]


export function ContactSection() {

  const [selectedType, setSelectedType] = useState("general")

  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })


  return (

    <section id="contact" className="relative py-24 lg:py-28">

      {/* background glow */}

      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />


      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* header */}

        <div className="mx-auto max-w-2xl text-center mb-16">

          <AnimatedText>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
              Contact IARRD
            </div>
          </AnimatedText>

          <AnimatedText delay={100}>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Collaborate With Us
            </h2>
          </AnimatedText>

          <AnimatedText delay={200}>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              IARRD works with students, engineers, institutions, and collaborators
              interested in advancing indigenous capability across space,
              defence, marine, and applied engineering systems.
            </p>
          </AnimatedText>

        </div>


        {/* grid layout */}

        <div
          ref={ref}
          className={cn(
            "grid items-start gap-12 lg:grid-cols-2 lg:gap-20",
            "transition-all duration-1000",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >


          {/* LEFT — FORM */}

          <div>

            <form
              action="https://script.google.com/macros/s/AKfycbwiLq1KLJSy2_yjoiagwSvhc5b_xTmVzPu2Ong7ExBdl_9TmCBleI1m5-kcpPFRPC2Juw/exec"
              method="POST"
              className="space-y-6"
            >

              {/* inquiry type */}

              <div>

                <Label>Inquiry Type</Label>

                <div className="mt-2 flex flex-wrap gap-3">

                  {inquiryTypes.map(type => (

                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type.id)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm transition-all",
                        selectedType === type.id
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-card text-muted-foreground hover:border-primary/50"
                      )}
                    >
                      {type.label}
                    </button>

                  ))}

                </div>

              </div>


              {/* name + email */}

              <div className="grid gap-4 sm:grid-cols-2">

                <div>
                  <Label>Name</Label>
                  <Input name="name" required />
                </div>

                <div>
                  <Label>Email</Label>
                  <Input name="email" type="email" required />
                </div>

              </div>


              {/* org */}

              <div>
                <Label>Organization</Label>
                <Input name="organization" />
              </div>


              {/* message */}

              <div>
                <Label>Message</Label>
                <Textarea name="message" rows={5} required />
              </div>


              {/* submit */}

              <Button type="submit" size="lg" className="w-full gap-2">

                <Send className="h-4 w-4" />

                Send Message

              </Button>

            </form>

          </div>


          {/* RIGHT — CONTACT CARD */}

          <div>

            <div className="rounded-2xl border border-border/50 bg-card/50 p-10 backdrop-blur-sm">

              <h3 className="mb-6 text-lg font-semibold text-foreground">
                Contact Information
              </h3>


              <div className="space-y-6">

                {contactInfo.map(item => (

                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-start gap-4 hover:text-primary"
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">

                      <item.icon className="h-5 w-5" />

                    </div>

                    <div>

                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>

                      <div className="font-medium text-foreground">
                        {item.value}
                      </div>

                    </div>

                  </a>

                ))}

              </div>


              {/* social */}

              <div className="mt-8 border-t border-border pt-8">

                <h4 className="mb-4 text-sm font-medium text-foreground">
                  Follow IARRD
                </h4>

                <div className="flex flex-wrap gap-3">

                  <SocialIcon href="https://www.linkedin.com/company/iarrd" icon={Linkedin} />
                  <SocialIcon href="https://www.instagram.com/iarrd.official" icon={Instagram} />
                  <SocialIcon href="https://www.youtube.com/@IARRDOFFICIAL" icon={Youtube} />
                  <SocialIcon href="https://whatsapp.com/channel/0029Vb6vO4hK0IBm9k4eI01L" icon={MessageCircle} />

                </div>

              </div>


              {/* newsletter */}

              <div className="mt-6 rounded-2xl border border-border/50 bg-gradient-to-br from-primary/5 to-transparent p-6">

                <h3 className="mb-2 font-semibold text-foreground">
                  Stay Updated
                </h3>

                <p className="mb-4 text-sm text-muted-foreground">
                  Subscribe to receive updates on missions, collaborations, and announcements.
                </p>

                <form className="flex gap-2">

                  <Input type="email" placeholder="Enter your email" />

                  <Button type="submit" size="icon">
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                </form>

              </div>

            </div>

          </div>


        </div>

      </div>

    </section>

  )

}


function SocialIcon({ href, icon: Icon }) {

  return (

    <a
      href={href}
      target="_blank"
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:bg-primary hover:text-primary-foreground transition"
    >

      <Icon className="h-5 w-5" />

    </a>

  )

}