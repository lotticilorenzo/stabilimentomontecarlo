import type { Metadata } from 'next'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import AperitiviMenu from '@/components/menu/AperitiviMenu'
import menuData from '@/data/menu-aperitivi.json'

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Aperitivi',
  description:
    "Aperitivi al tramonto sull'Adriatico. Signature cocktail, classici senza tempo e vini di Romagna al Bagno Montecarlo di Ravenna.",
  keywords: ['aperitivi tramonto ravenna', 'cocktail spiaggia ravenna', 'aperitivo adriatico', 'drink mare ravenna'],
  alternates: {
    canonical: '/aperitivi',
  },
  openGraph: {
    title: 'Aperitivi | Bagno Montecarlo Ravenna',
    description: "Cocktail, vino e tramonti indimenticabili sulla spiaggia di Ravenna.",
    locale: 'it_IT',
    siteName: 'Bagno Montecarlo',
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AperitiviPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: '100dvh', minHeight: '600px' }}>
        <Image
          src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1920&q=80"
          alt="Cocktail aperitivi al tramonto sull'Adriatico — Bagno Montecarlo Ravenna"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Warm gradient overlay — gold/terra tones */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(196,112,74,0.15) 0%, rgba(26,26,24,0.1) 40%, rgba(26,26,24,0.82) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Hero content — bottom anchored */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-16 md:pb-20">

          {/* Hours — the centrepiece label */}
          <div
            className="inline-flex items-center gap-3 px-5 py-2 mb-6 border"
            style={{
              borderColor: 'rgba(201,168,76,0.4)',
              backgroundColor: 'rgba(201,168,76,0.08)',
            }}
          >
            <span
              className="font-jost text-[10px] tracking-[0.28em] uppercase"
              style={{ color: '#C9A84C' }}
            >
              Ogni giorno dalle 18:00
            </span>
          </div>

          <div className="inline-flex items-center justify-center px-6 py-2.5 mb-4 border border-white/10 bg-black/30 backdrop-blur-md rounded-full">
            <span className="font-jost text-[10px] sm:text-[11px] tracking-[0.3em] font-light uppercase text-cream">
              Il Tramonto sull&apos;Adriatico
            </span>
          </div>

          <h1
            className="font-cormorant font-light italic text-cream leading-none mb-5"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            Aperitivi
          </h1>

          {/* Gold rule */}
          <div
            className="mx-auto"
            style={{ width: '48px', height: '1px', backgroundColor: '#C9A84C', opacity: 0.6 }}
            aria-hidden="true"
          />
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#FAFAF8' }} className="py-16 md:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">

          {/* Ornament */}
          <ScrollReveal>
            <div className="flex items-center justify-center gap-5 mb-10" aria-hidden="true">
              <div className="h-px flex-1 max-w-[80px] bg-dark/12" />
              <div
                className="w-1.5 h-1.5 rotate-45"
                style={{ backgroundColor: '#C9A84C', opacity: 0.55 }}
              />
              <div className="h-px flex-1 max-w-[80px] bg-dark/12" />
            </div>
          </ScrollReveal>

          {/* 2-col intro — warmer, more evocative tone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
            <ScrollReveal delay={0.1} direction="left">
              <p className="font-baskerville text-[17px] italic font-normal leading-[1.95] text-dark/65">
                Quando il sole scende sull&apos;Adriatico e l&apos;orizzonte si tinge d&apos;arancio,
                c&apos;è un momento che appartiene solo a questo luogo. I nostri barman lo
                aspettano tutto il giorno per costruirci intorno ogni singolo cocktail.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="right">
              <p className="font-baskerville text-[17px] italic font-normal leading-[1.95] text-dark/80">
                Ingredienti locali, distillati selezionati, erbe aromatiche dell&apos;orto.
                Ogni signature cocktail racconta la costa romagnola — il sale marino,
                la pineta, i profumi della sera. Un aperitivo che non si dimentica.
              </p>
            </ScrollReveal>
          </div>

          {/* Bottom rule */}
          <ScrollReveal delay={0.3}>
            <div
              className="mx-auto mt-14"
              style={{ width: '40px', height: '1px', backgroundColor: '#C9A84C', opacity: 0.4 }}
              aria-hidden="true"
            />
          </ScrollReveal>

        </div>
      </section>

      {/* ── Interactive menu ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#FAFAF8' }} className="pb-28 lg:pb-36">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <AperitiviMenu categories={menuData.categories} />
        </div>
      </section>
    </>
  )
}
