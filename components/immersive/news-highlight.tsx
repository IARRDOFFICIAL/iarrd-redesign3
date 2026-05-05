"use client"

import Link from "next/link"
import { ArrowRight, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function NewsHighlight() {

  return (

    <section className="py-16 bg-secondary/20 border-y border-border">

      <div className="container mx-auto px-4 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}

          <div>

            <span className="text-sm text-primary font-medium uppercase tracking-wide">
              Latest Update
            </span>

            <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-4">
              IARRD Conducts First Space Masterclass in Tamil
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The inaugural session “Vinveliyil Oru Payanam” brought together
              over 150+ participants across Tamil Nadu, achieving a 4.8/5 rating
              and marking a key milestone in accessible space education.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">

              <span className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                150+ Participants
              </span>

              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                May 2026
              </span>

            </div>

            <Button asChild>

              <Link href="/news/workshop-1">
                Read Full Update
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

            </Button>

          </div>


 {/* RIGHT IMAGE */}

<div className="rounded-xl overflow-hidden border border-border">

  <Image
    src="/workshop.png"
    alt="IARRD Workshop Session"
    width={600}
    height={350}
    className="w-full h-full object-cover"
  />

</div>

        </div>

      </div>

    </section>

  )

}