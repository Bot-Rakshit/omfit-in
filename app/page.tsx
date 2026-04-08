import { Navbar } from "./sections/navbar"
import { Hero } from "./sections/hero"
import { SocialProof } from "./sections/social-proof"
import { Testimonials } from "./sections/testimonials"
import { Programs } from "./sections/programs"
import { Conditions } from "./sections/conditions"
import { Founder } from "./sections/founder"
import { TestimonialsSecond } from "./sections/testimonials-second"
import { Academy } from "./sections/academy"
import { Pricing } from "./sections/pricing"
import { FinalCTA } from "./sections/final-cta"
import { Footer } from "./sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <Testimonials />
      <Programs />
      <Conditions />
      <Founder />
      <TestimonialsSecond />
      <Academy />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  )
}
