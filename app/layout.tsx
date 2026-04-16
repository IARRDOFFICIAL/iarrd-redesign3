import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'IARRD - Indian Space Technology & CubeSat Development',
  description: 'Building India\'s next-generation space infrastructure. Indigenous CubeSat development, AI-powered astronomy intelligence, and cutting-edge space technology.',
  keywords: ['cubesat india', 'indian space technology', 'space startup india', 'satellite technology', 'aerospace', 'IARRD'],
  authors: [{ name: 'IARRD Team' }],
  creator: 'IARRD',
  publisher: 'IARRD',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://iarrd.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'IARRD - Indian Space Technology & CubeSat Development',
    description: 'Pioneering indigenous space, defense, and marine technology. From CubeSat missions to AI-powered astronomy systems.',
    url: 'https://iarrd.in',
    siteName: 'IARRD',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IARRD - Building India\'s Space Independence',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IARRD - Indian Space Technology & CubeSat Development',
    description: 'Pioneering indigenous space, defense, and marine technology.',
    images: ['/og-image.jpg'],
    creator: '@iarrd_in',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IARRD",
    "url": "https://iarrd.in",
    "logo": "https://iarrd.in/icon.svg",
    "description": "Building India's next-generation space infrastructure. Indigenous CubeSat development, AI-powered astronomy intelligence, and cutting-edge space technology.",
    "foundingDate": "2022",
    "sameAs": [
      "https://twitter.com/iarrd_in",
      "https://linkedin.com/company/iarrd"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "customer service",
      "email": "contact@iarrd.in"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Karnataka",
      "addressLocality": "Bangalore"
    }
  }

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
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
