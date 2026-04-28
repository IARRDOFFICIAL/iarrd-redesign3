"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Send } from "lucide-react"

import { PageWrapper } from "@/components/immersive/page-wrapper"
import { AnimatedSection } from "@/components/immersive/animated-section"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwiLq1KLJSy2_yjoiagwSvhc5b_xTmVzPu2Ong7ExBdl_9TmCBleI1m5-kcpPFRPC2Juw/exec"

const roles = [
  "Astronomy Research Team Member",
  "Defence Research Team Member",
  "Marine Research Team Member",
  "Rocket Research Team Member",
  "Satellite Research Team Member",
  "R&D Innovation Team Member",
  "Software Development Team Member",
  "Social Media & Outreach Team Member",
  "Fundraising & Partnerships Team Member",
]

type ApplyFormProps = {
  roleFromURL: string
}

type ScriptResponse = {
  status?: string
  message?: string
  referenceId?: string
}

export default function ApplyForm({ roleFromURL }: ApplyFormProps) {
  const [selectedRole, setSelectedRole] = useState<string>(roleFromURL || "")
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [successMessage, setSuccessMessage] = useState<string>("")

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [location, setLocation] = useState<string>("")
  const [experience, setExperience] = useState<string>("")
  const [motivation, setMotivation] = useState<string>("")
  const [availability, setAvailability] = useState<string>("")
  const [portfolio, setPortfolio] = useState<string>("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setErrorMessage("")
    setSuccessMessage("")

    if (!selectedRole) {
      setErrorMessage("Please select the applying role.")
      return
    }

    if (!experience) {
      setErrorMessage("Please select your experience level.")
      return
    }

    const payload = {
      applications: "Contributor",
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      location: location.trim(),
      role: selectedRole.trim(),
      experience: experience.trim(),
      motivation: motivation.trim(),
      availability: availability.trim(),
      portfolio: portfolio.trim(),
      newsletter: false,
    }

    try {
      setSubmitting(true)

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      })

      const rawText = await response.text()

      let result: ScriptResponse = {}
      try {
        result = JSON.parse(rawText) as ScriptResponse
      } catch {
        throw new Error("Server returned invalid JSON response.")
      }

      if (!response.ok) {
        throw new Error(result.message || `Request failed with status ${response.status}`)
      }

      if (result.status !== "success" && result.status !== "partial") {
        throw new Error(result.message || "Submission failed.")
      }

      setSubmitted(true)
      setSuccessMessage(
        result.message || "Your application has been recorded successfully."
      )

      setName("")
      setEmail("")
      setPhone("")
      setLocation("")
      setExperience("")
      setMotivation("")
      setAvailability("")
      setPortfolio("")
      setSelectedRole(roleFromURL || "")
    } catch (error: unknown) {
      console.error("Submission error:", error)

      const message =
        error instanceof Error
          ? error.message
          : "Submission failed. Please retry."

      setErrorMessage(message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <PageWrapper>
      <section className="pt-32 pb-24">
        <div className="container mx-auto max-w-3xl px-4 lg:px-8">
          <Link
            href="/careers"
            className="mb-6 inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Careers
          </Link>

          <AnimatedSection>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">
                  Contributor Application
                </CardTitle>

                <p className="text-muted-foreground">
                  IARRD selects contributors based on curiosity, consistency,
                  and technical growth mindset — not CGPA or academic background.
                </p>
              </CardHeader>

              <CardContent>
                {submitted ? (
                  <div className="py-12 text-center">
                    <h3 className="mb-4 text-2xl font-semibold">
                      Application Submitted Successfully
                    </h3>

                    <p className="text-muted-foreground">
                      {successMessage ||
                        "Your application has been recorded. The team will review and respond if aligned with active initiatives."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errorMessage ? (
                      <div className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                        {errorMessage}
                      </div>
                    ) : null}

                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Applying Role</Label>
                      <Select value={selectedRole} onValueChange={setSelectedRole}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>

                        <SelectContent>
                          {roles.map((role) => (
                            <SelectItem key={role} value={role}>
                              {role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Experience Level</Label>
                      <Select value={experience} onValueChange={setExperience}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value="Beginner">Beginner</SelectItem>
                          <SelectItem value="Intermediate">Intermediate</SelectItem>
                          <SelectItem value="Advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="motivation">Motivation</Label>
                      <Textarea
                        id="motivation"
                        required
                        rows={5}
                        value={motivation}
                        onChange={(e) => setMotivation(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="availability">Weekly Availability</Label>
                      <Input
                        id="availability"
                        value={availability}
                        onChange={(e) => setAvailability(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="portfolio">Portfolio (optional)</Label>
                      <Input
                        id="portfolio"
                        value={portfolio}
                        onChange={(e) => setPortfolio(e.target.value)}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full gap-2"
                      disabled={submitting}
                    >
                      <Send className="h-4 w-4" />
                      {submitting
                        ? "Submitting..."
                        : "Submit Contributor Application"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </PageWrapper>
  )
}