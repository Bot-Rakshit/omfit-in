import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

const TITLE =
  "OmFit — Personalised Nutrition Coaching for Diabetes, Thyroid, PCOS & Weight Management"
const DESCRIPTION =
  "Transform your health naturally with OmFit's 3-month nutrition coaching program. Personalised Indian meal plans, weekly 1-on-1 coaching, 10,000+ lifestyles transformed since 2018."
const SITE_URL = "https://omfit.in"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | OmFit",
  },
  description: DESCRIPTION,
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
    "personalised diet plan india",
    "online dietitian",
  ],
  authors: [{ name: "OmFit", url: SITE_URL }],
  creator: "OmFit",
  publisher: "OmFit",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "OmFit",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OmFit — Personalised Nutrition & Fitness Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
  other: {
    "theme-color": "#3d6b4f",
    "msapplication-TileColor": "#3d6b4f",
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
