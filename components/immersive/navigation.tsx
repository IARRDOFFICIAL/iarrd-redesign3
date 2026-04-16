"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X, Rocket, ChevronDown } from "lucide-react"

const navigation = [
  { 
    name: "Domains", 
    href: "#domains",
    children: [
      { name: "Astronomy", href: "/domains/astronomy" },
      { name: "Defense", href: "/domains/defense" },
      { name: "Marine", href: "/domains/marine" },
      { name: "Rocketry", href: "/domains/rocketry" },
      { name: "Satellite", href: "/domains/satellite" },
    ]
  },
  { name: "Projects", href: "#projects" },
  { 
    name: "Research", 
    href: "/research",
    children: [
      { name: "Publications", href: "/research/publications" },
      { name: "Patents", href: "/research/patents" },
      { name: "White Papers", href: "/research/whitepapers" },
    ]
  },
  { name: "News", href: "/news" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "#contact" },
]

export function ImmersiveNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-background/80 border-b border-border/50 backdrop-blur-xl" 
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 backdrop-blur-sm">
                <Rocket className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg font-bold text-foreground">IARRD</span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {navigation.map((item) => (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                      "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    )}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && openDropdown === item.name && (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="min-w-[180px] rounded-xl border border-border/50 bg-card/95 p-2 shadow-xl backdrop-blur-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#contact">Partner With Us</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground lg:hidden hover:bg-secondary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex h-full flex-col px-6 pt-24 pb-8">
          <div className="flex-1 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-lg font-medium text-foreground hover:bg-secondary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="ml-4 space-y-1 border-l border-border/50 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <Button 
            asChild 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Link href="#contact">Partner With Us</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
