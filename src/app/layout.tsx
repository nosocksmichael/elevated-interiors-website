import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Elevated Interiors | Space Upscale Experts | GTA',
  description: 'Designer-grade rooms in 1 week. No renovation required. Using The Loveable Spaces Framework(TM), we transform GTA homes without the chaos, timeline, or cost of traditional renovation.',
  keywords: 'interior design, space upscale, room transformation, GTA, Toronto, designer-grade, no renovation, Loveable Spaces Framework',
  authors: [{ name: 'Elevated Interiors' }],
  openGraph: {
    title: 'Elevated Interiors | Space Upscale Experts',
    description: 'Designer-grade rooms in 1 week. No renovation required.',
    type: 'website',
    locale: 'en_CA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Elevated Interiors',
    description: 'Space Upscale Experts providing designer-grade room transformations in 1 week without renovation',
    url: 'https://www.elevatedinteriors.ca',
    telephone: '+1-123-456-7890',
    email: 'hello@elevatedinteriors.ca',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toronto',
      addressRegion: 'ON',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '43.6532',
      longitude: '-79.3832',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '43.6532',
        longitude: '-79.3832',
      },
      geoRadius: '50000',
    },
    priceRange: '$$$',
    image: 'https://www.elevatedinteriors.ca/og-image.jpg',
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
