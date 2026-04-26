import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"


/* ===============================
FONTS
=============================== */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
})


/* ===============================
VIEWPORT (App Router safe method)
=============================== */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
}


/* ===============================
METADATA
=============================== */

export const metadata: Metadata = {

  title:
    "IARRD – Indian Astronomy Rocket Research and Development",

  description:
    "IARRD is a multidisciplinary engineering research initiative working on CubeSat platforms, defence systems, marine monitoring technologies, astronomy infrastructure, and applied engineering software.",

  metadataBase: new URL("https://iarrd.in"),

  alternates: {
    canonical: "/"
  },

  openGraph: {

    title:
      "IARRD – Indian Astronomy Rocket Research and Development",

    description:
      "Contributor-driven engineering research across satellite systems, defence technologies, marine monitoring platforms, and astronomy infrastructure.",

    url: "https://iarrd.in",

    siteName: "IARRD",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630
      }
    ],

    locale: "en_US",
    type: "website"
  },

  twitter: {

    card: "summary_large_image",

    title:
      "IARRD – Indian Astronomy Rocket Research and Development",

    description:
      "Engineering research initiative developing CubeSat platforms, defence UAV systems, marine monitoring concepts and astronomy infrastructure.",

    images: ["/og-image.jpg"],

    creator: "@iarrd_in"
  },

  robots: {

    index: true,
    follow: true
  },

  icons: {

    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)"
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml"
      }
    ],

    apple: "/apple-icon.png"
  }
}


/* ===============================
ROOT LAYOUT
=============================== */

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  const jsonLd = {

    "@context": "https://schema.org",

    "@type": "Organization",

    name: "IARRD",

    alternateName:
      "Indian Astronomy Rocket Research and Development",

    url: "https://iarrd.in",

    logo: "https://iarrd.in/icon.svg",

    foundingDate: "2023-05-27",

    email: "iarrd.official@gmail.com",

    address: {

      "@type": "PostalAddress",

      addressLocality: "Ranipet",

      addressRegion: "Tamil Nadu",

      addressCountry: "IN"
    },

    sameAs: [
      "https://instagram.com/iarrd.official",
      "https://linkedin.com/company/iarrd"
    ]
  }


  return (

    <html
      lang="en"
      className="dark scroll-smooth"
      suppressHydrationWarning
    >

      <body
        className={`
          ${inter.variable}
          ${spaceGrotesk.variable}
          font-sans
          antialiased
          overflow-x-hidden
          bg-background
          text-foreground
        `}
      >

        {/* ACCESSIBILITY SKIP LINK */}

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>


        {/* STRUCTURED DATA */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd)
          }}
        />


        <main id="main-content">

          {children}

        </main>


        <Analytics />

      </body>

    </html>
  )
}