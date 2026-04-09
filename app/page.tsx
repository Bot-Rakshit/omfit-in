import { Navbar } from "./sections/navbar"
import { TopBanner } from "./sections/top-banner"
import { Hero } from "./sections/hero"
import { MemberFaces } from "./sections/member-faces"
import { Programs } from "./sections/programs"
import { Conditions } from "./sections/conditions"
import { Testimonials } from "./sections/testimonials"
import { HowItWorks } from "./sections/how-it-works"
import { Founder } from "./sections/founder"
import { InnerCircle } from "./sections/inner-circle"
import { FinalCTA } from "./sections/final-cta"
import { Footer } from "./sections/footer"
import { FloatingWhatsApp } from "./sections/floating-whatsapp"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <TopBanner />
      <Navbar />
      <Hero />
      <MemberFaces />
      <Programs />
      <Conditions />
      <Testimonials />
      <HowItWorks />
      <Founder />
      <InnerCircle />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
