import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'

// ─── Card data ────────────────────────────────────────────────────────────────

const CARDS = [
  {
    title: 'Cucina',
    label: 'Ristorante · Pizza · Aperitivi',
    href: '/cucina',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    imageAlt: 'Cucina di pesce fresco — Bagno Montecarlo Ravenna',
  },
  {
    title: 'La Spiaggia',
    label: 'Ombrelloni · Servizi · Sport',
    href: '/bagni',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    imageAlt: 'Spiaggia con ombrelloni — Bagno Montecarlo Ravenna',
  },
  {
    title: 'Aperitivi',
    label: 'Cocktail · Tramonto · Sfizi',
    href: '/aperitivi',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1200&q=80',
    imageAlt: 'Aperitivi al tramonto — Bagno Montecarlo Ravenna',
  },
] as const

// ─── Single card ──────────────────────────────────────────────────────────────

interface CardProps {
  title: string
  label: string
  href: string
  image: string
  imageAlt: string
  delay: number
}

function ServiceCard({ title, label, href, image, imageAlt, delay }: CardProps) {
  return (
    <ScrollReveal delay={delay}>
      <Link href={href} className="group block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold">
        <article className="relative h-[350px] sm:h-[450px] md:h-[500px] overflow-hidden">

          {/* Full-bleed image — zooms 1.05× on hover, 500ms */}
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.05]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          {/*
            Base gradient — always visible.
            Gets lighter so the hover overlay can darken without a flash.
          */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(to top, rgba(26,26,24,0.85) 0%, rgba(26,26,24,0.3) 55%, transparent 100%)',
            }}
            aria-hidden="true"
          />

          {/*
            Hover overlay — fades in on group-hover, making the card visibly darker.
            Sits above base gradient, below content.
          */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ backgroundColor: 'rgba(26,26,24,0.28)' }}
            aria-hidden="true"
          />

          {/* Card content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
            {/* Sub-label */}
            <p className="font-cormorant-sc text-[10px] tracking-[0.3em] uppercase text-cream/80 mb-3">
              {label}
            </p>

            {/* Main title — large white */}
            <h3 className="font-cormorant font-light italic text-cream leading-none mb-6"
              style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}
            >
              {title}
            </h3>

            {/* Arrow link row */}
            <div className="flex items-center gap-3">
              {/* Short gold bar that grows on hover */}
              <span
                className="block h-px bg-gold transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:w-8"
                style={{ width: '20px' }}
                aria-hidden="true"
              />
              <span className="font-jost text-[11px] tracking-[0.22em] uppercase text-cream/60 group-hover:text-cream transition-colors duration-300">
                Esplora
              </span>
              <span
                className="text-cream/80 group-hover:text-cream group-hover:translate-x-1 transition-all duration-300 inline-block"
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

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ServicesGrid() {
  return (
    <section style={{ backgroundColor: '#FAFAF8' }} className="py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Centered header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-cormorant-sc text-[11px] tracking-[0.45em] uppercase text-dark/60 block mb-4">
              Esplora
            </span>
            <h2 className="font-cormorant font-light italic text-dark"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Il Mondo di Montecarlo
            </h2>
          </div>
        </ScrollReveal>

        {/* 3-card grid — stacks to 1 col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
          {CARDS.map((card, i) => (
            <ServiceCard key={card.href} {...card} delay={i * 0.12} />
          ))}
        </div>

      </div>
    </section>
  )
}
