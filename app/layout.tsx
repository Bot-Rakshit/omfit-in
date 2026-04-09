import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "OmFit \u2014 Personalised Nutrition Coaching for Diabetes, Thyroid, PCOS & Weight Management",
  description:
    "Transform your health naturally with OmFit\u2019s 3-month nutrition coaching program. Personalised Indian meal plans, weekly 1-on-1 coaching, 10,000+ lifestyles transformed since 2018.",
  keywords: [
    "nutrition coaching india",
    "diabetes management",
    "thyroid nutrition",
    "PCOS diet plan",
    "online nutritionist india",
    "omfit",
    "hypertension fitness",
    "weight management",
    "health transformation",
  ],
  openGraph: {
    title: "OmFit \u2014 Personalised Nutrition Coaching for Diabetes, Thyroid, PCOS & Weight Management",
    description:
      "Transform your health naturally with OmFit\u2019s 3-month nutrition coaching program. Personalised Indian meal plans, weekly 1-on-1 coaching, 10,000+ lifestyles transformed since 2018.",
    url: "https://omfit.in",
    siteName: "OmFit",
    locale: "en_IN",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,200..900;1,9..144,200..900&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
