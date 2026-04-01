import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import GrainOverlay from '@/components/ui/GrainOverlay'
import PageTransition from '@/components/ui/PageTransition'
import ScrollToTop from '@/components/ui/ScrollToTop'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'
import ScrollToTopButton from '@/components/ui/ScrollToTopButton'
import SmoothScroll from '@/components/ui/SmoothScroll'
import SeasonBanner from '@/components/layout/SeasonBanner'
import StickyCallButton from '@/components/ui/StickyCallButton'
import WhatsAppWidget from '@/components/ui/WhatsAppWidget'

import LocalBusinessJsonLd from '@/components/seo/LocalBusinessJsonLd'
import RestaurantJsonLd from '@/components/seo/RestaurantJsonLd'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bagnomontecarlo.it'),
  title: {
    default: 'Bagno Montecarlo | Stabilimento Balneare a Ravenna Lido',
    template: '%s | Bagno Montecarlo Ravenna',
  },
  description: "Bagno Montecarlo a Ravenna Lido: spiaggia premium Bandiera Blu, ristorante di pesce fresco dell'Adriatico, aperitivi al tramonto. Dal 1960.",
  keywords: [
    'bagno montecarlo ravenna',
    'stabilimento balneare ravenna',
    'spiaggia ravenna lido',
    'ristorante pesce ravenna adriatico',
    'aperitivi tramonto ravenna',
    'ombrelloni lettini ravenna',
    'vacanze mare ravenna romagna',
    'beach club ravenna',
  ],
  alternates: {
    canonical: '/',
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
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'Bagno Montecarlo Ravenna',
    title: 'Bagno Montecarlo | Spiaggia & Ristorante · Ravenna',
    description: "Bagno Montecarlo a Ravenna: spiaggia Bandiera Blu, ristorante di pesce fresco, aperitivi al tramonto sull'Adriatico. Dal 1960.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bagno Montecarlo | Ravenna',
    description: "Spiaggia premium e ristorante di pesce fresco a Ravenna sull'Adriatico. Dal 1960.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <head>
        {/* ─── Font preconnect ─────────────────────────────────────────── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* ─── Structured Data ──────────────────────────────────────────── */}
        <LocalBusinessJsonLd />
        <RestaurantJsonLd />
      </head>
      <body>
        <SmoothScroll />
        <GrainOverlay />
        <CustomCursor />
        <ScrollProgressBar />
        <ScrollToTop />
        <SeasonBanner />
        {/* Anchor point che si posiziona sempre esattamente sotto al SeasonBanner.
            Avendo h-0, non spinge il resto del contenuto giù, ma fa da 'relative' per la Navbar 'absolute'. */}
        <div className="relative w-full z-50" style={{ height: 0 }}>
          <Navbar />
        </div>
        <main>
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <ScrollToTopButton />
        <StickyCallButton />
        <WhatsAppWidget />
        <Footer />
      </body>
    </html>
  )
}
