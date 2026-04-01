import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contatti | Bagno Montecarlo Ravenna',
  description: 'Contatta Bagno Montecarlo a Ravenna. Indirizzo, telefono, email e orari. Siamo sulla riviera Adriatica.',
  openGraph: { locale: 'it_IT', siteName: 'Bagno Montecarlo' },
}

export default function ContattiLayout({ children }: { children: React.ReactNode }) {
  return children
}
