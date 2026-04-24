import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Briefcase } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-secondary to-secondary/50 border border-border p-8 md:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
          
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready to Shape the Future of Space?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Whether you&apos;re looking to invest, partner, or collaborate, we&apos;d love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 w-4 h-4" />
                  Partner With Us
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact?type=investor">
                  <Briefcase className="mr-2 w-4 h-4" />
                  Investment Inquiries
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <a href="mailto:contact@iarrd.in" className="hover:text-foreground transition-colors">
                iarrd.official@gmail.com
              </a>
              <span className="hidden md:inline">|</span>
              <a href="mailto:investor@iarrd.in" className="hover:text-foreground transition-colors">
                investor.iarrd@gmail.com
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
