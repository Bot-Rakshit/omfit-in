import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Corporate Wellness Programs",
  description:
    "Science-backed corporate wellness seminars and employee health programs by OmFit. Trusted by LTIMindtree, Infosys, Tech Mahindra. 10,000+ employees impacted.",
  openGraph: {
    title: "Corporate Wellness Programs | OmFit",
    description:
      "Science-backed corporate wellness seminars and employee health programs by OmFit. Trusted by India's leading IT companies.",
    url: "https://omfit.in/corporate",
  },
}

export default function CorporateLayout({ children }: { children: React.ReactNode }) {
  return children
}
