import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "OmFit Academy — Digital Health & Fitness Courses",
  description:
    "Self-paced digital courses on diabetes reversal, nutrition fundamentals, and strength training. Expert-led programs built on the same science used with 10,000+ OmFit members.",
  openGraph: {
    title: "OmFit Academy — Digital Health & Fitness Courses",
    description:
      "Self-paced digital courses on diabetes reversal, nutrition fundamentals, and strength training by OmFit.",
    url: "https://omfit.in/academy",
  },
}

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return children
}
