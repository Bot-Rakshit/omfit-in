import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "OMFIT — Transform Your Health Naturally",
  description:
    "Science-backed nutrition & fitness programs for diabetes, hypertension, thyroid & more. 1-on-1 coaching, personalised plans, real results. Since 2018.",
  keywords: [
    "omfit",
    "nutrition program India",
    "online fitness coaching",
    "diabetes management",
    "hypertension fitness",
    "thyroid management",
    "personal training online",
    "health transformation",
  ],
  openGraph: {
    title: "OMFIT — Transform Your Health Naturally",
    description:
      "Science-backed nutrition & fitness. 1-on-1 coaching, personalised plans, real results.",
    url: "https://omfit.in",
    siteName: "OMFIT",
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
