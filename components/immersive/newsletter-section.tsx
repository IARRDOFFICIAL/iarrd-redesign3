"use client"

import { useState } from "react"
import { AnimatedText } from "@/components/animated-text"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, CheckCircle } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate subscription
    setIsSubscribed(true)
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <Card className="max-w-2xl mx-auto border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="text-center">
            <AnimatedText>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-4 mx-auto">
                <Mail className="h-4 w-4" />
                Stay Updated
              </div>
            </AnimatedText>
            <AnimatedText delay={100}>
              <CardTitle className="text-2xl md:text-3xl font-bold mb-2">
                Join Our Mission Updates
              </CardTitle>
            </AnimatedText>
            <AnimatedText delay={200}>
              <p className="text-muted-foreground">
                Get exclusive insights into our latest developments, mission updates, and breakthroughs in indigenous space technology.
              </p>
            </AnimatedText>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button 
                type="submit" 
                disabled={isSubscribed}
                className="gap-2"
              >
                {isSubscribed ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                  </>
                )}
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}