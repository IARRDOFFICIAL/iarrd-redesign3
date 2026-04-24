import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
})


/* ===============================
SITE METADATA
=============================== */

export const metadata: Metadata = {

  title:
    "IARRD – Indian Astronomy Rocket Research and Development",

  description:
    "IARRD is a multidisciplinary engineering research initiative working on CubeSat platforms, autonomous defence systems, marine monitoring technologies, astronomy ground infrastructure, and applied engineering software through contributor-driven development.",

  keywords: [
    "IARRD",
    "CubeSat India",
    "Indian satellite research",
    "student space research India",
    "defence drone research India",
    "marine monitoring research",
    "astronomy research India",
    "indigenous engineering India"
  ],

  authors: [{ name: "IARRD Team" }],

  creator: "IARRD",

  publisher: "IARRD",

  metadataBase: new URL("https://iarrd.in"),

  alternates: {
    canonical: "/"
  },


  /* ===============================
OPEN GRAPH
=============================== */

  openGraph: {

    title:
      "IARRD – Indian Astronomy Rocket Research and Development",

    description:
      "Contributor-driven engineering research across satellite systems, defence technologies, marine monitoring platforms, and astronomy ground infrastructure.",

    url: "https://iarrd.in",

    siteName: "IARRD",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt:
          "IARRD – Indigenous Engineering Research Across Space, Defence, Marine and Autonomous Systems"
      }
    ],

    locale: "en_US",

    type: "website"
  },


  /* ===============================
TWITTER
=============================== */

  twitter: {

    card: "summary_large_image",

    title:
      "IARRD – Indian Astronomy Rocket Research and Development",

    description:
      "Engineering research initiative developing CubeSat platforms, defence UAV systems, marine monitoring concepts and astronomy infrastructure.",

    images: ["/og-image.jpg"],

    creator: "@iarrd_in"
  },


  /* ===============================
ROBOTS
=============================== */

  robots: {

    index: true,

    follow: true,

    googleBot: {

      index: true,

      follow: true,

      "max-video-preview": -1,

      "max-image-preview": "large",

      "max-snippet": -1
    }
  },


  /* ===============================
ICONS
=============================== */

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


  /* ===============================
STRUCTURED ORG DATA (SEO)
=============================== */

  const jsonLd = {

    "@context": "https://schema.org",

    "@type": "Organization",

    name: "IARRD",

    alternateName:
      "Indian Astronomy Rocket Research and Development",

    url: "https://iarrd.in",

    logo: "https://iarrd.in/icon.svg",

    foundingDate: "2023-05-27",

    description:
      "Multidisciplinary engineering research initiative working on CubeSat systems, defence UAV platforms, marine monitoring technologies, astronomy ground infrastructure and engineering software development.",

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

    <html lang="en" className="dark">

      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd)
          }}
        />

      </head>


      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >

        {/* ACCESSIBILITY */}

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>


        {children}


        <Analytics />

      </body>

    </html>
  )
}