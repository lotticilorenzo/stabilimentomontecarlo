import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bagno Montecarlo | Spiaggia e Ristorante a Ravenna Lido',
  description: 'Scopri il Bagno Montecarlo a Ravenna Lido: la tua spiaggia ideale sull\'Adriatico con ristorante di pesce fresco, pizza e servizi esclusivi dal 1960.',
  keywords: ['bagno montecarlo ravenna', 'spiaggia ravenna lido', 'ristorante pesce ravenna', 'stabilimento balneare adriatico'],
  openGraph: {
    title: 'Bagno Montecarlo | Spiaggia e Ristorante a Ravenna Lido',
    description: 'La tua oasi di relax sull\'Adriatico a Ravenna.',
  },
}

import HeroSection from '@/components/sections/HeroSection'
import IntroSection from '@/components/sections/IntroSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import KitchenPreview from '@/components/sections/KitchenPreview'
import BeachPreview from '@/components/sections/BeachPreview'
import ContactCTA from '@/components/sections/ContactCTA'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import InstagramFeed from '@/components/sections/InstagramFeed'


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesGrid />
      <KitchenPreview />
      <BeachPreview />
      <TestimonialsSection />
      <ContactCTA />
      <InstagramFeed />
    </>
  )
}
