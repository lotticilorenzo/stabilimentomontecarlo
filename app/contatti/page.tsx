import type { Metadata } from 'next'
import ContactClient from '@/components/contact/ContactClient'

export const metadata: Metadata = {
  title: 'Contatti',
  description: "Contatta Bagno Montecarlo a Ravenna per prenotare il tuo tavolo o ombrellone. Informazioni, orari di apertura e indicazioni per raggiungerci sull'Adriatico.",
  keywords: ['contatti bagno montecarlo ravenna', 'prenotazioni ristorante ravenna', 'info stabilimento ravenna', 'dove siamo bagno montecarlo'],
  alternates: {
    canonical: '/contatti',
  },
  openGraph: {
    title: 'Contatti | Bagno Montecarlo Ravenna',
    description: "Contatta Bagno Montecarlo a Ravenna per prenotare il tuo tavolo o ombrellone.",
  },
}

export default function ContattiPage() {
  return <ContactClient />
}
