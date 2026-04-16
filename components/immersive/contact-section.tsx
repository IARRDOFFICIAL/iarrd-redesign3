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
  Twitter,
  ArrowRight
} from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@iarrd.in",
    href: "mailto:contact@iarrd.in",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 80 1234 5678",
    href: "tel:+918012345678",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, Karnataka, India",
    href: "#",
  },
]

const inquiryTypes = [
  { id: "general", label: "General Inquiry" },
  { id: "investor", label: "Investment" },
  { id: "partnership", label: "Partnership" },
  { id: "research", label: "Research Collaboration" },
]

export function ContactSection() {
  const [selectedType, setSelectedType] = useState("general")
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedText>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
              Get In Touch
            </div>
          </AnimatedText>

          <AnimatedText delay={100}>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Partner with IARRD
            </h2>
          </AnimatedText>

          <AnimatedText delay={200}>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Whether you&apos;re an investor, research institution, or industry partner,
              we&apos;d love to explore collaboration opportunities.
            </p>
          </AnimatedText>
        </div>

        <div 
          ref={ref}
          className={cn(
            "mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16",
            "transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Contact form */}
          <div className="order-2 lg:order-1">
            <form className="space-y-6">
              {/* Inquiry type */}
              <div>
                <Label className="text-sm font-medium text-foreground">Inquiry Type</Label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {inquiryTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type.id)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm transition-all",
                        selectedType === type.id
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
                      )}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="mt-1.5 border-border bg-card"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className="mt-1.5 border-border bg-card"
                  />
                </div>
              </div>

              {/* Organization */}
              <div>
                <Label htmlFor="organization" className="text-sm font-medium text-foreground">
                  Organization
                </Label>
                <Input
                  id="organization"
                  placeholder="Your company or institution"
                  className="mt-1.5 border-border bg-card"
                />
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your interest in IARRD..."
                  rows={5}
                  className="mt-1.5 border-border bg-card resize-none"
                />
              </div>

              {/* Submit */}
              <Button 
                type="submit" 
                size="lg" 
                className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-lg font-semibold text-foreground">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-start gap-4 transition-colors hover:text-primary"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-medium text-foreground">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 border-t border-border pt-8">
                <h4 className="mb-4 text-sm font-medium text-foreground">
                  Dedicated Contacts
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Investors</span>
                    <a href="mailto:investors@iarrd.in" className="text-primary hover:underline">
                      investors@iarrd.in
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Partnerships</span>
                    <a href="mailto:partners@iarrd.in" className="text-primary hover:underline">
                      partners@iarrd.in
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Research</span>
                    <a href="mailto:research@iarrd.in" className="text-primary hover:underline">
                      research@iarrd.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-8">
                <h4 className="mb-4 text-sm font-medium text-foreground">
                  Follow Us
                </h4>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6 rounded-2xl border border-border/50 bg-gradient-to-br from-primary/5 to-transparent p-6">
              <h3 className="mb-2 font-semibold text-foreground">Stay Updated</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Subscribe for mission updates and announcements.
              </p>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 border-border bg-card"
                />
                <Button type="submit" size="icon" className="shrink-0">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
