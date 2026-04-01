import type { Metadata } from 'next'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import PizzaMenu from '@/components/menu/PizzaMenu'
import menuData from '@/data/menu-pizza.json'

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Pizza',
  description:
    "Pizza artigianale a lenta lievitazione 48 ore, farina tipo 1 macinata a pietra e forno a legna di quercia. Il menu pizza al Bagno Montecarlo di Ravenna.",
  keywords: ['pizza artigianale ravenna', 'pizza gourmet spiaggia ravenna', 'forno legna ravenna', 'pizzeria mare ravenna'],
  alternates: {
    canonical: '/pizza',
  },
  openGraph: {
    title: 'Pizza | Bagno Montecarlo Ravenna',
    description: "L'arte bianca incontra il mare: pizza a lenta lievitazione e forno a legna a Ravenna.",
    locale: 'it_IT',
    siteName: 'Bagno Montecarlo',
  },
}

// ─── Impasto pill — 3 key facts ──────────────────────────────────────────────

const IMPASTO_PILLOLE = [
  { label: 'Lievitazione', value: '48 ore' },
  { label: 'Farina', value: 'Tipo 1 · Macinata a Pietra' },
  { label: 'Cottura', value: 'Forno a Legna di Quercia' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PizzaPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: '100dvh', minHeight: '600px' }}>
        <Image
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1920&q=80"
          alt="Pizza artigianale gourmet — Bagno Montecarlo Ravenna"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Warm dark gradient — terra accents */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(26,26,24,0.75) 0%, rgba(26,26,24,0.2) 25%, rgba(26,26,24,0.08) 45%, rgba(26,26,24,0.82) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Hero content — bottom anchored */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-16 md:pb-20">
          <div className="inline-flex items-center justify-center px-6 py-2.5 mb-6 border border-white/10 bg-black/30 backdrop-blur-md rounded-full">
            <span className="font-jost text-[10px] sm:text-[11px] tracking-[0.3em] font-light uppercase text-cream">
              Arte Bianca · Forno a Legna
            </span>
          </div>

          <h1
            className="font-cormorant font-light italic text-cream leading-none mb-5"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            Pizza
          </h1>

          {/* Terra rule */}
          <div
            className="mx-auto"
            style={{ width: '48px', height: '1px', backgroundColor: '#C4704A', opacity: 0.65 }}
            aria-hidden="true"
          />
        </div>
      </section>

      {/* ── Philosophy + Impasto pillole ─────────────────────────────────── */}
      <section className="bg-sand py-16 md:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">

          {/* Ornament */}
          <ScrollReveal>
            <div className="flex items-center justify-center gap-5 mb-10" aria-hidden="true">
              <div className="h-px flex-1 max-w-[80px] bg-dark/12" />
              <div
                className="w-1.5 h-1.5 rotate-45"
                style={{ backgroundColor: '#C4704A', opacity: 0.5 }}
              />
              <div className="h-px flex-1 max-w-[80px] bg-dark/12" />
            </div>
          </ScrollReveal>

          {/* Philosophy text — single column, centred, from JSON intro */}
          <ScrollReveal delay={0.1}>
            <p className="font-baskerville text-[17px] italic font-normal leading-[1.95] text-dark/65 text-center max-w-2xl mx-auto mb-14">
              {menuData.intro}
            </p>
          </ScrollReveal>

          {/* 3 impasto pillole */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-0">
              {IMPASTO_PILLOLE.map((p, i) => (
                <div key={p.label} className="flex items-center">
                  <div className="text-center px-8 py-4">
                    <span className="font-jost text-[9px] tracking-[0.28em] uppercase block mb-1.5 text-dark/80">
                      {p.label}
                    </span>
                    <span
                      className="font-cormorant text-[1.05rem] italic font-light"
                      style={{ color: '#1A1A18' }}
                    >
                      {p.value}
                    </span>
                  </div>
                  {/* Divider between pillole — hidden after last */}
                  {i < IMPASTO_PILLOLE.length - 1 && (
                    <div
                      className="hidden sm:block h-8 w-px"
                      style={{ backgroundColor: 'rgba(26,26,24,0.12)' }}
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Bottom rule */}
          <ScrollReveal delay={0.3}>
            <div
              className="mx-auto mt-12"
              style={{ width: '40px', height: '1px', backgroundColor: '#C4704A', opacity: 0.35 }}
              aria-hidden="true"
            />
          </ScrollReveal>

        </div>
      </section>

      {/* ── Interactive menu ──────────────────────────────────────────────── */}
      <section className="bg-sand pb-28 lg:pb-36">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <PizzaMenu categories={menuData.categories} />
        </div>
      </section>
    </>
  )
}
