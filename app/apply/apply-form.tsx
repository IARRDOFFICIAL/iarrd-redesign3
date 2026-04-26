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

import {
Card,
CardContent,
CardHeader,
CardTitle,
} from "@/components/ui/card"



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
"Fundraising & Partnerships Team Member"
]



export default function ApplyForm({
roleFromURL,
}: {
roleFromURL: string
}) {

const [selectedRole, setSelectedRole] =
useState(roleFromURL || "")

const [submitted, setSubmitted] =
useState(false)


const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [phone, setPhone] = useState("")
const [location, setLocation] = useState("")
const [experience, setExperience] = useState("")
const [motivation, setMotivation] = useState("")
const [availability, setAvailability] = useState("")
const [portfolio, setPortfolio] = useState("")



async function handleSubmit(e: React.FormEvent) {

e.preventDefault()

const formData = new FormData()

formData.append("name", name)
formData.append("email", email)
formData.append("phone", phone)
formData.append("location", location)
formData.append("role", selectedRole)
formData.append("experience", experience)
formData.append("motivation", motivation)
formData.append("availability", availability)
formData.append("portfolio", portfolio)


try {

await fetch(SCRIPT_URL, {
method: "POST",
body: formData,
mode: "no-cors",
})

setSubmitted(true)

} catch (error) {

console.error(error)
alert("Submission failed. Please retry.")

}

}



return (

<PageWrapper>

<section className="pt-32 pb-24">

<div className="container mx-auto px-4 lg:px-8 max-w-3xl">

<Link
href="/careers"
className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6"
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
IARRD selects contributors based on curiosity,
consistency, and technical growth mindset —
not CGPA or academic background.
</p>

</CardHeader>


<CardContent>

{submitted ? (

<div className="text-center py-12">

<h3 className="text-2xl font-semibold mb-4">
Application Submitted Successfully
</h3>

<p className="text-muted-foreground">
Your application has been recorded.
The team will review and respond if aligned
with active initiatives.
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
required
value={name}
onChange={(e)=>setName(e.target.value)}
/>

</div>


<div>

<Label>Email</Label>

<Input
required
type="email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

</div>


<div>

<Label>Phone</Label>

<Input
required
value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>

</div>


<div>

<Label>Location</Label>

<Input
required
value={location}
onChange={(e)=>setLocation(e.target.value)}
/>

</div>


<div>

<Label>Applying Role</Label>

<Select
value={selectedRole}
onValueChange={setSelectedRole}
>

<SelectTrigger>
<SelectValue placeholder="Select role" />
</SelectTrigger>

<SelectContent>

{roles.map(role=>(
<SelectItem key={role} value={role}>
{role}
</SelectItem>
))}

</SelectContent>

</Select>

</div>


<div>

<Label>Experience Level</Label>

<Select onValueChange={setExperience}>

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


<div>

<Label>Motivation</Label>

<Textarea
required
rows={5}
value={motivation}
onChange={(e)=>setMotivation(e.target.value)}
/>

</div>


<div>

<Label>Weekly Availability</Label>

<Input
value={availability}
onChange={(e)=>setAvailability(e.target.value)}
/>

</div>


<div>

<Label>Portfolio (optional)</Label>

<Input
value={portfolio}
onChange={(e)=>setPortfolio(e.target.value)}
/>

</div>


<Button type="submit" className="w-full gap-2">

<Send className="h-4 w-4" />

Submit Contributor Application

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