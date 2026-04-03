import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionDivider from '@/components/ui/SectionDivider'

export const metadata: Metadata = {
  title: 'Chi Siamo',
  description: "La storia di Bagno Montecarlo a Ravenna. Tradizione balneare, ospitalità romagnola e amore per il mare Adriatico in un ambiente curato nei dettagli.",
  keywords: ['storia bagno montecarlo', 'tradizione balneare ravenna', 'chi siamo lido adriano ravenna', 'famiglia bagno ravenna'],
  alternates: {
    canonical: '/chi-siamo',
  },
  openGraph: { 
    title: 'Chi Siamo | Bagno Montecarlo Ravenna',
    description: "Scopri la nostra storia, la filosofia e l'ospitalità autentica di Bagno Montecarlo a Ravenna.",
    locale: 'it_IT',
    siteName: 'Bagno Montecarlo' 
  },
}

const values = [
  {
    title: 'Mare',
    description: 'L\'Adriatico è la nostra casa. Lo rispettiamo, lo preserviamo, lo celebriamo ogni giorno. Ogni scelta — dal cibo ai materiali — riflette il rispetto per questo mare.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12h18M3 6s2 3 9 3 9-3 9-3M3 18s2-3 9-3 9 3 9 3" />
      </svg>
    ),
  },
  {
    title: 'Cucina',
    description: 'Il pesce fresco di ogni mattina, le verdure di Romagna, l\'impasto della pizza lavorato con cura. La cucina è atto d\'amore prima che arte.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Accoglienza',
    description: 'Non siamo un hotel. Non siamo un ristorante. Siamo un luogo dove si torna. L\'ospitalità romagnola autentica: calorosa, generosa, mai invadente.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', alt: 'Mare Adriatico' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', alt: 'Cucina' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', alt: 'Spiaggia' },
  { src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80', alt: 'Aperitivi' },
  { src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80', alt: 'Tramonto Adriatico' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80', alt: 'Pizza' },
]

export default function ChiSiamoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[600px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920&q=80"
          alt="Tramonto sull'Adriatico a Ravenna"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sea/30 to-dark/70" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <span className="font-cormorant-sc text-xs tracking-[0.4em] uppercase text-cream/80 block mb-5">
            La Nostra Storia
          </span>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light italic text-cream">
            Chi Siamo
          </h1>
        </div>
      </section>

      {/* Storia */}
      <section className="bg-sand py-16 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <ScrollReveal>
              <span className="font-cormorant-sc text-xs tracking-[0.3em] uppercase text-dark/80 block mb-6">
                Ravenna, Adriatico
              </span>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light italic text-dark leading-tight mb-8">
                Un luogo nato<br />dall&apos;amore per il mare
              </h2>
              <SectionDivider variant="simple" color="dark" className="mb-8 w-16" />
              <p className="font-jost text-base font-light leading-loose text-dark/65 mb-6">
                Bagno Montecarlo è uno stabilimento balneare con radici profonde nella
                tradizione balneare romagnola. Ogni stagione, riapriamo le porte con
                la stessa passione: offrire un rifugio autentico sul mare Adriatico.
              </p>
              <p className="font-jost text-base font-light leading-loose text-dark/60 mb-6">
                Nel corso degli anni abbiamo costruito qualcosa di raro: un luogo dove
                tornare. Non per l&apos;animazione, non per il rumore, ma per il silenzio
                del mare al mattino, per il pesce fresco del pranzo, per il tramonto
                che colora il cielo di arancio e rosa ogni sera.
              </p>
              <p className="font-jost text-base font-light leading-loose text-dark/80">
                Siamo una famiglia. I nostri clienti lo sono diventati nel tempo.
                L&apos;ospitalità romagnola non si impara: si eredita.
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal delay={0.2} direction="right">
                <div className="relative h-72 overflow-hidden img-zoom-container">
                  <Image
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80"
                    alt="Il mare di Bagno Montecarlo"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.35} direction="right">
                <div className="relative h-52 overflow-hidden img-zoom-container">
                  <Image
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80"
                    alt="Il ristorante di Bagno Montecarlo"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="py-16 md:py-20 lg:py-28" style={{ backgroundColor: '#1A1A18' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="font-cormorant-sc text-xs tracking-[0.3em] uppercase text-cream/80 block mb-4">
                Ciò in cui crediamo
              </span>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light italic text-cream">
                I Nostri Valori
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.15}>
                <div className="text-center">
                  <div className="flex justify-center mb-6 text-gold">
                    {value.icon}
                  </div>
                  <h3 className="font-cormorant text-2xl font-light italic text-cream mb-5">
                    {value.title}
                  </h3>
                  <SectionDivider variant="diamond" color="light" className="mb-6 max-w-[100px] mx-auto" />
                  <p className="font-jost text-sm font-light leading-relaxed text-cream/80">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery masonry */}
      <section className="bg-sand-dark py-4">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={img.src} delay={i * 0.08}>
              <div className={`relative overflow-hidden img-zoom-container ${i % 3 === 1 ? 'h-80' : 'h-56'}`}>
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sand py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-cormorant text-4xl font-light italic text-dark mb-6">
              Vieni a vivere Montecarlo
            </h2>
            <p className="font-jost text-base font-light text-dark/80 mb-10">
              Ti aspettiamo ogni estate sulla riviera di Ravenna.
            </p>
            <Link
              href="/contatti"
              className="inline-block font-jost text-xs tracking-[0.25em] uppercase bg-sea text-cream px-12 py-5 hover:bg-sea-light transition-colors duration-500"
            >
              Contattaci
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
