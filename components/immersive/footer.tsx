"use client"

import Link from "next/link"
import { Rocket } from "lucide-react"

const navigation = {
  domains: [
    { name: "Astronomy", href: "#astronomy" },
    { name: "Defense", href: "#defense" },
    { name: "Marine", href: "#marine" },
    { name: "Rocketry", href: "#rocketry" },
    { name: "Satellite", href: "#satellite" },
  ],
  projects: [
    { name: "PrithiviSat", href: "/projects/prithivisat" },
    { name: "IRAI-Q2", href: "/projects/irai-q2" },
    { name: "Ground Systems", href: "/projects/astronomy-tools" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

export function ImmersiveFooter() {
  return (
    <footer className="relative border-t border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Rocket className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">IARRD</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Indian Astronomy Rocket Research & Development. Building India&apos;s 
              space independence through indigenous technology and innovation.
            </p>
            <p className="mt-4 text-xs text-muted-foreground/70">
              * Logos and partnerships displayed represent collaborations and affiliations, 
              and do not imply official endorsement.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Domains</h3>
            <ul className="mt-4 space-y-3">
              {navigation.domains.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Projects</h3>
            <ul className="mt-4 space-y-3">
              {navigation.projects.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-3 border-t border-border/50 pt-6">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-xs text-muted-foreground/70 transition-colors hover:text-muted-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} IARRD. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made in India with indigenous innovation.
          </p>
        </div>
      </div>
    </footer>
  )
}
