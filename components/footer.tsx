import Link from "next/link"

const footerLinks = {
  projects: [
    { label: "PrithiviSat", href: "/projects/prithivisat" },
    { label: "IRAI-Q2", href: "/projects/irai-q2" },
    { label: "Ground Systems", href: "/projects/astronomy-tools" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Careers", href: "/careers" },
  ],
  resources: [
    { label: "Contact", href: "/contact" },
    { label: "Press Kit", href: "/press" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">I</span>
              </div>
              <span className="font-mono text-lg font-semibold tracking-tight">IARRD</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Building India&apos;s next-generation space infrastructure.
            </p>
            <p className="text-xs text-muted-foreground">
              Hyderabad, India
            </p>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-semibold mb-4">Projects</h4>
            <ul className="space-y-2">
              {footerLinks.projects.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} IARRD. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            CIN: XXXXXXXXXXXXXXX | GSTIN: XXXXXXXXXXXXXXX
          </p>
        </div>
      </div>
    </footer>
  )
}
