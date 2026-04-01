import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'La Cucina',
  description:
    "Scopri la cucina di Bagno Montecarlo a Ravenna. Ristorante di pesce fresco dell'Adriatico, aperitivi al tramonto e pizza artigianale in un'atmosfera premium.",
  keywords: ['ristorante pesce ravenna', 'aperitivi cucina ravenna', 'pizza artigianale ravenna', 'mangiare pesce ravenna'],
  alternates: {
    canonical: '/cucina',
  },
  openGraph: {
    title: 'La Cucina | Bagno Montecarlo Ravenna',
    description: "Dal mare alla tavola: ristorante di pesce, aperitivi sulla spiaggia e pizza gourmet a Ravenna.",
    locale: 'it_IT',
    siteName: 'Bagno Montecarlo',
  },
}

// ─── Card data ────────────────────────────────────────────────────────────────

const CARDS = [
  {
    href: '/ristorazione',
    title: 'Ristorante',
    hours: 'Pranzo & Cena',
    description:
      'Pesce fresco dell\'Adriatico ogni giorno, ricette della tradizione romagnola, ingredienti che sanno ancora di terra e di sale.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80',
    imageAlt: 'Cucina di pesce fresco del ristorante Bagno Montecarlo, Ravenna',
  },
  {
    href: '/aperitivi',
    title: 'Aperitivi',
    hours: 'Dalle 17:00',
    description:
      'Signature cocktail, classici senza tempo, vini di Romagna. Il tramonto sull\'Adriatico è lo sfondo che non si dimentica.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1400&q=80',
    imageAlt: 'Cocktail aperitivi al tramonto — Bagno Montecarlo Ravenna',
  },
  {
    href: '/pizza',
    title: 'Pizza',
    hours: 'Serata',
    description:
      'Impasto maturato lentamente per 48 ore, forno a legna di quercia, ingredienti selezionati tra terra e mare.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1400&q=80',
    imageAlt: 'Pizza artigianale gourmet — Bagno Montecarlo Ravenna',
  },
] as const

// ─── Cuisine card ─────────────────────────────────────────────────────────────

interface CardProps {
  href: string
  title: string
  hours: string
  description: string
  image: string
  imageAlt: string
  delay: number
}

function CucinaCard({ href, title, hours, description, image, imageAlt, delay }: CardProps) {
  return (
    <ScrollReveal delay={delay}>
      <Link
        href={href}
        className="group block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
      >
        <article className="relative overflow-hidden" style={{ height: 'clamp(380px, 60vh, 520px)' }}>

          {/* Full-bleed image — slow-zoom on hover */}
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover object-center transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.06]"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />

          {/* Gradient overlay — bottom-heavy; deepens on hover */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background:
                'linear-gradient(to top, rgba(26,26,24,0.88) 0%, rgba(26,26,24,0.35) 50%, rgba(26,26,24,0.08) 100%)',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ backgroundColor: 'rgba(26,26,24,0.22)' }}
            aria-hidden="true"
          />

          {/* Card text */}
          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
            {/* Hours label */}
            <span className="font-cormorant-sc text-[10px] tracking-[0.35em] uppercase text-cream/80 block mb-3">
              {hours}
            </span>

            {/* Title */}
            <h2
              className="font-cormorant font-light italic text-cream leading-none mb-4"
              style={{ fontSize: 'clamp(2.25rem, 3.5vw, 3rem)' }}
            >
              {title}
            </h2>

            {/* Description — slides up slightly on hover */}
            <p className="font-jost text-sm font-light leading-[1.75] text-cream/65 mb-6 max-w-xs transition-transform duration-500 translate-y-1 group-hover:translate-y-0">
              {description}
            </p>

            {/* CTA row */}
            <div className="flex items-center gap-3">
              <span
                className="block h-px bg-gold transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                style={{ width: '20px' }}
                aria-hidden="true"
              />
              <span className="font-jost text-[11px] tracking-[0.22em] uppercase text-cream/80 group-hover:text-gold transition-colors duration-300">
                Scopri il Menù
              </span>
              <span
                className="text-cream/80 group-hover:text-gold group-hover:translate-x-1.5 transition-all duration-300 inline-block"
                aria-hidden="true"
              >
                →
              </span>
            </div>
          </div>

        </article>
      </Link>
    </ScrollReveal>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CucinaPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#1A1A18', height: '100dvh', minHeight: '600px' }}
      >
        {/* Dim background image — adds texture without distracting */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt=""
            fill
            className="object-cover object-center opacity-20"
            priority
          />
          {/* Extra vignette so edges stay very dark */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/40 to-dark/80" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 py-28">
          <div className="inline-flex items-center justify-center px-6 py-2.5 mb-7 border border-white/10 bg-black/30 backdrop-blur-md rounded-full">
            <span className="font-jost text-[10px] sm:text-[11px] tracking-[0.3em] font-light uppercase text-cream">
              Sapori Autentici · Ravenna
            </span>
          </div>

          <h1
            className="font-cormorant font-light italic text-cream leading-[0.9] mb-8"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
          >
            La Cucina
          </h1>

          <p className="font-jost text-base md:text-lg font-light tracking-[0.1em] text-cream/80 max-w-sm mx-auto">
            Dal mare alla tavola, con rispetto per la tradizione
          </p>
        </div>
      </section>

      {/* ── Intro — 2-column philosophy text ─────────────────────────────── */}
      <section className="bg-sand py-16 md:py-16 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Centred eyebrow + ornament */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-5 mb-6" aria-hidden="true">
                <div className="h-px w-12 bg-dark/15" />
                <div
                  className="w-1 h-1 rotate-45"
                  style={{ backgroundColor: '#C9A84C', opacity: 0.7 }}
                />
                <div className="h-px w-12 bg-dark/15" />
              </div>
              <span className="font-cormorant-sc text-[11px] tracking-[0.4em] uppercase text-dark/80">
                La Nostra Filosofia
              </span>
            </div>
          </ScrollReveal>

          {/* 2-column text block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
            <ScrollReveal delay={0.1} direction="left">
              <p className="font-baskerville text-base md:text-[17px] italic font-normal leading-[1.95] text-dark/65">
                Il pesce arriva ogni mattina dai pescatori dell&apos;Adriatico — vongole veraci,
                scampi, rombo, branzino. Niente che abbia viaggiato troppo, niente che non sia
                al suo momento giusto. In cucina rispettiamo quello che il mare ci offre, con
                ricette che affondano le radici nella tradizione romagnola più autentica.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="right">
              <p className="font-baskerville text-base md:text-[17px] italic font-normal leading-[1.95] text-dark/80">
                Le verdure vengono dagli orti della pianura ravennate. La farina della pizza
                è macinata a pietra, il prefermento lavora quarantotto ore prima di diventare
                impasto. Ogni ingrediente porta con sé un luogo, una stagione, una storia.
                Cucinare bene significa, prima di tutto, scegliere con cura e sapere aspettare.
              </p>
            </ScrollReveal>
          </div>

          {/* Bottom gold rule */}
          <ScrollReveal delay={0.3}>
            <div
              className="mx-auto mt-14"
              style={{ width: '40px', height: '1px', backgroundColor: '#C9A84C', opacity: 0.45 }}
              aria-hidden="true"
            />
          </ScrollReveal>

        </div>
      </section>

      {/* ── 3 cards grid ──────────────────────────────────────────────────── */}
      <section className="bg-sand pb-28 lg:pb-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4">
            {CARDS.map((card, i) => (
              <CucinaCard key={card.href} {...card} delay={i * 0.13} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
