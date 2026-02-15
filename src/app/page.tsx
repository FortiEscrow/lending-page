import { HeroSection } from "@/components/sections/HeroSection"
import { ProblemSection } from "@/components/sections/ProblemSection"
import { SolutionSection } from "@/components/sections/SolutionSection"
import { ArchitectureSection } from "@/components/sections/ArchitectureSection"
import { SecuritySection } from "@/components/sections/SecuritySection"
import { UseCasesSection } from "@/components/sections/UseCasesSection"
import { RoadmapSection } from "@/components/sections/RoadmapSection"
import { CTASection } from "@/components/sections/CTASection"
import { FAQSection } from "@/components/sections/FAQSection"
import { NewsletterSection } from "@/components/sections/NewsletterSection"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ArchitectureSection />
      <SecuritySection />
      <UseCasesSection />
      <RoadmapSection />
      <CTASection />
      <FAQSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
