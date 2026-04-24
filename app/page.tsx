import { ImmersiveNavigation } from "@/components/immersive/navigation"
import { ImmersiveHero } from "@/components/immersive/hero"
import { 
  AstronomySection, 
  DefenseSection, 
  MarineSection, 
  RocketrySection, 
  SatelliteSection 
} from "@/components/immersive/domain-section"
import { ProjectsSection } from "@/components/immersive/projects-section"
import { TestimonialsSection } from "@/components/immersive/testimonials-section"
import { PressSection } from "@/components/immersive/press-section"
import { NewsletterSection } from "@/components/immersive/newsletter-section"
import { ContactSection } from "@/components/immersive/contact-section"
import { ImmersiveFooter } from "@/components/immersive/footer"

export default function HomePage() {
  return (
    <main id="main-content" className="relative min-h-screen overflow-x-hidden">

      <ImmersiveNavigation />
      <ImmersiveHero />

      {/* Domains anchor */}
      <div id="domains" className="scroll-mt-20" />

      <AstronomySection />
      <DefenseSection />
      <MarineSection />
      <RocketrySection />
      <SatelliteSection />

      <ProjectsSection />
      <TestimonialsSection />
      <PressSection />
      <NewsletterSection />

      {/* Contact anchor FIX */}
      <div id="contact" className="scroll-mt-20" />

      <ContactSection />

      <ImmersiveFooter />

    </main>
  )
}