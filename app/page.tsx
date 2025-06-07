import { HeroSection } from "@/components/hero-section"
import { NewsSection } from "@/components/news-section"
import { SymptomsSection } from "@/components/symptoms-section"
import { StrengthsSection } from "@/components/strengths-section"
import { TreatmentSection } from "@/components/treatment-section"
import { ProcessSection } from "@/components/process-section"
import { StoreInfoSection } from "@/components/store-info-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewsSection />
      <SymptomsSection />
      <StrengthsSection />
      <TreatmentSection />
      <ProcessSection />
      <StoreInfoSection />
      <FaqSection />
      <ContactSection />
    </>
  )
}
