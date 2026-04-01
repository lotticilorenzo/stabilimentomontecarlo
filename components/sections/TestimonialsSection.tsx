'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'

// ─── Dati testimonianze ────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    quote:
      'Un posto fuori dal tempo. La spiaggia è curata nei minimi dettagli, il pesce al ristorante è freschissimo. Ci siamo tornati per il terzo anno di fila — e non sarà l\'ultimo.',
    author: 'Giulia M.',
    origin: 'Bologna',
    rating: 5,
  },
  {
    quote:
      'L\'aperitivo al tramonto è un\'esperienza che consiglio a chiunque. Cocktail perfetti, vista sul mare, musica discreta. Elegante senza essere snob.',
    author: 'Luca & Sara',
    origin: 'Milano',
    rating: 5,
  },
  {
    quote:
      'Finalmente uno stabilimento balneare che cura anche l\'estetica. Ombrelloni distanziati, sabbia pulita ogni mattina, staff gentilissimo. La pizza serale era eccellente.',
    author: 'Marco R.',
    origin: 'Firenze',
    rating: 5,
  },
  {
    quote:
      'Siamo venuti con i bambini e ci siamo sentiti subito a casa. Area dedicata ai piccoli, personale attento, e il cibo era genuino e ottimo. Torneremo sicuramente.',
    author: 'Federica & famiglia',
    origin: 'Ferrara',
    rating: 5,
  },
  {
    quote:
      'La migliore frittura di paranza che abbia mai mangiato. Il ristorante ha una qualità rara per uno stabilimento balneare. Struttura impeccabile e atmosfera unica.',
    author: 'Alessandro T.',
    origin: 'Modena',
    rating: 5,
  },
]

// ─── Stelle ────────────────────────────────────────────────────────────────────

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-5" aria-label={`${count} stelle su 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: '#C9A84C' }} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  )
}

// ─── Card singola ──────────────────────────────────────────────────────────────

function TestimonialCard({
  quote,
  author,
  origin,
  rating,
}: (typeof TESTIMONIALS)[number]) {
  return (
    <article
      className="flex flex-col h-full p-8 md:p-10"
      style={{
        backgroundColor: 'rgba(250,250,248,0.04)',
        border: '1px solid rgba(250,250,248,0.08)',
      }}
    >
      {/* Virgolette decorative */}
      <span
        className="font-cormorant text-6xl font-light leading-none mb-4 select-none"
        style={{ color: 'rgba(201,168,76,0.25)' }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <Stars count={rating} />

      <blockquote className="font-baskerville text-[16px] italic font-normal leading-[1.85] text-cream/70 flex-1 mb-8">
        {quote}
      </blockquote>

      {/* Autore */}
      <div style={{ borderTop: '1px solid rgba(250,250,248,0.08)' }} className="pt-6">
        <p className="font-cormorant text-[17px] italic text-cream/85 leading-none mb-1">
          {author}
        </p>
        <p className="font-jost text-[11px] tracking-[0.18em] uppercase" style={{ color: 'rgba(250,250,248,0.35)' }}>
          {origin}
        </p>
      </div>
    </article>
  )
}

// ─── Sezione ──────────────────────────────────────────────────────────────────

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-16 md:py-16 md:py-16 md:py-20 lg:py-28"
      style={{ backgroundColor: '#1A1A18' }}
      aria-label="Recensioni ospiti Bagno Montecarlo"
    >
      {/* Subtle radial light */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] opacity-[0.06]"
          style={{
            background: 'radial-gradient(ellipse at center, #3A7FA0 0%, transparent 70%)',
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <span className="font-cormorant-sc text-[10px] tracking-[0.45em] uppercase text-cream/80 block mb-5">
              Ospiti
            </span>
            <h2
              className="font-cormorant font-light italic text-cream"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
            >
              Quello che dicono di noi
            </h2>

            {/* Rating aggregato */}
            <div className="flex items-center justify-center gap-2 mt-5">
              <div className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: '#C9A84C', fontSize: '14px' }}>★</span>
                ))}
              </div>
              <span className="font-jost text-[12px] tracking-[0.12em] text-cream/80">
                4.9 su 5 · Google Reviews
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Grid a 5 colonne su desktop / scroll mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <TestimonialCard {...t} />
            </ScrollReveal>
          ))}
        </div>

        {/* Seconda riga — 2 card centrate */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 mt-4 lg:mt-5 lg:max-w-[66%] lg:mx-auto">
          {TESTIMONIALS.slice(3).map((t, i) => (
            <ScrollReveal key={i} delay={(i + 3) * 0.1}>
              <TestimonialCard {...t} />
            </ScrollReveal>
          ))}
        </div>

        {/* Link a Google Reviews */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-14">
            <a
              href="https://maps.google.com/?q=Bagno+Montecarlo+Ravenna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-jost text-[11px] tracking-[0.22em] uppercase transition-colors duration-300"
              style={{ color: 'rgba(250,250,248,0.35)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(250,250,248,0.35)' }}
            >
              <span>Leggi tutte le recensioni su Google</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
