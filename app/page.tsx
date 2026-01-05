import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { EfficiencyGapSection } from "@/components/efficiency-gap-section"
import { WhyFormaxSection } from "@/components/why-formax-section"
import { ProjectsCarousel } from "@/components/projects-carousel"
import { ContactSection } from "@/components/contact-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <EfficiencyGapSection />
        <StatsSection />
        <WhyFormaxSection />
        <ProjectsCarousel />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
