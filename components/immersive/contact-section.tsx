"use client"

import React, { useState } from "react"
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
  ArrowRight
} from "lucide-react"



/* ===============================
CONFIG
=============================== */

const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbwiLq1KLJSy2_yjoiagwSvhc5b_xTmVzPu2Ong7ExBdl_9TmCBleI1m5-kcpPFRPC2Juw/exec"



/* ===============================
CONTACT INFO
=============================== */

const contactInfo = [
{
icon: Mail,
label: "Email",
value: "iarrd.official@gmail.com",
href: "mailto:iarrd.official@gmail.com"
},
{
icon: Phone,
label: "Phone",
value: "+91 8903272879",
href: "tel:+918903272879"
},
{
icon: MapPin,
label: "Location",
value: "Ranipet, Tamil Nadu, India",
href: "#"
}
]



/* ===============================
INQUIRY TYPES
=============================== */

const inquiryTypes = [
{ id: "general", label: "General Inquiry" },
{ id: "collaboration", label: "Research Collaboration" },
{ id: "partnership", label: "Institutional Partnership" },
{ id: "contribute", label: "Join as Contributor" }
]



/* ===============================
COMPONENT
=============================== */

export function ContactSection() {

const [selectedType, setSelectedType] =
useState<string>("general")

const [submitted, setSubmitted] =
useState<boolean>(false)

const [newsletterEmail, setNewsletterEmail] =
useState<string>("")

const { ref, isVisible } =
useScrollAnimation({ threshold: 0.1 })



/* ===============================
CONTACT FORM SUBMIT
=============================== */

async function handleContactSubmit(
e: React.FormEvent<HTMLFormElement>
) {

e.preventDefault()

const form = e.currentTarget

const formData = {

formType: "contact",

type: selectedType,

name:
(form.elements.namedItem("name") as HTMLInputElement)?.value ?? "",

email:
(form.elements.namedItem("email") as HTMLInputElement)?.value ?? "",

organization:
(form.elements.namedItem("organization") as HTMLInputElement)?.value ?? "",

message:
(form.elements.namedItem("message") as HTMLTextAreaElement)?.value ?? ""

}


try {

await fetch(SCRIPT_URL, {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify(formData)

})

setSubmitted(true)

} catch (error) {

console.error(error)

alert("Submission failed. Please retry.")

}

}



/* ===============================
NEWSLETTER SUBMIT
=============================== */

async function handleNewsletterSubmit(
e: React.FormEvent<HTMLFormElement>
) {

e.preventDefault()

if (!newsletterEmail) return


try {

await fetch(SCRIPT_URL, {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify({

formType: "newsletter",

email: newsletterEmail

})

})

setNewsletterEmail("")

alert("Subscribed successfully ✅")

} catch (error) {

console.error(error)

alert("Subscription failed")

}

}



/* ===============================
UI
=============================== */

return (

<section
id="contact"
className="relative py-24 lg:py-28"
>

<div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

<div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">


{/* HEADER */}

<div className="mx-auto max-w-2xl text-center mb-16">

<AnimatedText>

<div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">

Contact IARRD

</div>

</AnimatedText>


<AnimatedText delay={100}>

<h2 className="text-4xl font-bold">

Collaborate With Us

</h2>

</AnimatedText>


<AnimatedText delay={200}>

<p className="mt-4 text-lg text-muted-foreground">

IARRD works with students, engineers,
institutions, and collaborators interested
in advancing indigenous engineering capability.

</p>

</AnimatedText>

</div>



{/* GRID */}

<div
ref={ref}
className={cn(
"grid gap-12 lg:grid-cols-2 transition-all duration-700",
isVisible
? "opacity-100 translate-y-0"
: "opacity-0 translate-y-8"
)}
>



{/* CONTACT FORM */}

{submitted ? (

<div className="rounded-xl border p-10">

<h3 className="text-xl font-semibold mb-2">

Message Sent Successfully

</h3>

<p className="text-muted-foreground">

Thank you for contacting IARRD.
Our team will respond shortly.

</p>

</div>

) : (

<form
onSubmit={handleContactSubmit}
className="space-y-6"
>

<div>

<Label>Inquiry Type</Label>

<div className="mt-2 flex flex-wrap gap-3">

{inquiryTypes.map(type => (

<button
key={type.id}
type="button"
onClick={() =>
setSelectedType(type.id)
}
className={cn(
"rounded-full border px-4 py-2 text-sm transition",
selectedType === type.id
? "border-primary bg-primary/10 text-primary"
: "border-border bg-card text-muted-foreground"
)}
>

{type.label}

</button>

))}

</div>

</div>



<div className="grid gap-4 sm:grid-cols-2">

<div>

<Label>Name</Label>

<Input name="name" required />

</div>


<div>

<Label>Email</Label>

<Input
name="email"
type="email"
required
/>

</div>

</div>



<div>

<Label>Organization</Label>

<Input name="organization" />

</div>



<div>

<Label>Message</Label>

<Textarea
name="message"
rows={5}
required
/>

</div>



<Button
type="submit"
size="lg"
className="w-full gap-2"
>

<Send className="h-4 w-4" />

Send Message

</Button>

</form>

)}



{/* RIGHT PANEL */}

<div className="rounded-2xl border border-border/50 bg-card/50 p-10">

<h3 className="mb-6 font-semibold">

Contact Information

</h3>



{contactInfo.map(item => (

<a
key={item.label}
href={item.href}
className="flex gap-4 mb-4"
>

<item.icon className="h-5 w-5 text-primary" />

<div>

<div className="text-sm text-muted-foreground">

{item.label}

</div>

<div className="font-medium">

{item.value}

</div>

</div>

</a>

))}



{/* NEWSLETTER */}

<div className="mt-8 border-t pt-8">

<h3 className="mb-2 font-semibold">

Stay Updated

</h3>

<p className="mb-4 text-sm text-muted-foreground">

Subscribe for mission updates and announcements.

</p>


<form
onSubmit={handleNewsletterSubmit}
className="flex gap-2"
>

<Input
type="email"
placeholder="Enter your email"
value={newsletterEmail}
onChange={(e) =>
setNewsletterEmail(e.target.value)
}
required
/>

<Button type="submit">

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