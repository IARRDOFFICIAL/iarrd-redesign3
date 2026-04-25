"use client"

import Link from "next/link"
import {
  Rocket,
  Linkedin,
  Instagram,
  Youtube,
  MessageCircle
} from "lucide-react"


/* ================= FOOTER NAVIGATION ================= */

const navigation = {

  domains: [

    {
      name: "Astronomy Systems",
      href: "/domains/astronomy"
    },

    {
      name: "Defence Platforms",
      href: "/domains/defense"
    },

    {
      name: "Marine Monitoring",
      href: "/domains/marine"
    },

    {
      name: "Rocketry Roadmaps",
      href: "/domains/rocketry"
    },

    {
      name: "Satellite Systems",
      href: "/domains/satellite"
    }

  ],


  projects: [

    {
      name: "PrithiviSat",
      href: "/projects/prithivisat"
    },

    {
      name: "IRAI-Q2",
      href: "/projects/irai-q2"
    }

  ],


  company: [

    {
      name: "About",
      href: "/about"
    },

    {
      name: "Team",
      href: "/team"
    },

    {
      name: "Careers",
      href: "/careers"
    },

    {
      name: "Contact",
      href: "/contact"
    }

  ],


  legal: [

    {
      name: "Privacy Policy",
      href: "/privacy"
    },

    {
      name: "Terms of Service",
      href: "/terms"
    }

  ]

}



/* ================= COMPONENT ================= */

export function ImmersiveFooter() {

  return (

    <footer className="relative border-t border-border/50 bg-card/30">

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">

        <div className="grid gap-10 lg:grid-cols-5">


          {/* BRAND BLOCK */}

          <div className="lg:col-span-2">

            <Link
              href="/"
              className="inline-flex items-center gap-2"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">

                <Rocket className="h-5 w-5 text-primary" />

              </div>

              <span className="text-xl font-bold">

                IARRD

              </span>

            </Link>


            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">

              Indian Astronomy Rocket Research & Development is a contributor-driven
              engineering initiative advancing indigenous capability across satellite
              systems, defence technologies, marine monitoring platforms, astronomy
              infrastructure, and applied space software systems.

            </p>


            <p className="mt-4 text-xs text-muted-foreground/70">

              Logos and references shown across this website represent collaborations,
              research direction alignment, or outreach engagement and do not imply
              institutional endorsement unless explicitly stated.

            </p>


            {/* SOCIAL LINKS */}

            <div className="mt-6 flex gap-4">

              <a
                href="https://www.linkedin.com/company/iarrd"
                target="_blank"
                rel="noopener noreferrer"
              >

                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />

              </a>


              <a
                href="https://www.instagram.com/iarrd.official"
                target="_blank"
                rel="noopener noreferrer"
              >

                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />

              </a>


              <a
                href="https://www.youtube.com/@IARRDOFFICIAL"
                target="_blank"
                rel="noopener noreferrer"
              >

                <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />

              </a>


              <a
                href="https://whatsapp.com/channel/0029Vb6vO4hK0IBm9k4eI01L"
                target="_blank"
                rel="noopener noreferrer"
              >

                <MessageCircle className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />

              </a>

            </div>

          </div>



          {/* DOMAINS */}

          <div>

            <h3 className="text-sm font-semibold">

              Domains

            </h3>


            <ul className="mt-4 space-y-3">

              {navigation.domains.map((item) => (

                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >

                    {item.name}

                  </Link>

                </li>

              ))}

            </ul>

          </div>



          {/* PROJECTS */}

          <div>

            <h3 className="text-sm font-semibold">

              Projects

            </h3>


            <ul className="mt-4 space-y-3">

              {navigation.projects.map((item) => (

                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >

                    {item.name}

                  </Link>

                </li>

              ))}

            </ul>

          </div>



          {/* COMPANY */}

          <div>

            <h3 className="text-sm font-semibold">

              Company

            </h3>


            <ul className="mt-4 space-y-3">

              {navigation.company.map((item) => (

                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
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
                    className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors"
                  >

                    {item.name}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

        </div>



        {/* BOTTOM STRIP */}

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">

          <p className="text-xs text-muted-foreground">

            © {new Date().getFullYear()} IARRD. All rights reserved.

          </p>


          <p className="text-xs text-muted-foreground">

            Designed and developed as an indigenous engineering initiative in India.

          </p>

        </div>

      </div>

    </footer>

  )

}