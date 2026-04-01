import type { Metadata } from 'next'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import RistorazioneMenu from '@/components/menu/RistorazioneMenu'
import menuData from '@/data/menu-ristorante.json'

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Ristorante',
  description:
    "Menu ristorante di pesce fresco dell'Adriatico. Antipasti, primi, secondi e dolci della tradizione romagnola a Ravenna, a un passo dal mare.",
  keywords: ['ristorante pesce ravenna', 'menu pesce adriatico', 'ristorante spiaggia ravenna', 'mangiare bene ravenna mare'],
  alternates: {
    canonical: '/ristorazione',
  },
  openGraph: {
    title: 'Ristorante | Bagno Montecarlo Ravenna',
    description: "Il sapore puro dell'Adriatico. Ristorante di pesce fresco a Ravenna.",
    locale: 'it_IT',
    siteName: 'Bagno Montecarlo',
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RistorazionePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: '100dvh', minHeight: '600px' }}>
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt="Il ristorante di pesce di Bagno Montecarlo a Ravenna"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(26,26,24,0.25) 0%, rgba(26,26,24,0.15) 40%, rgba(26,26,24,0.75) 100%)',
          }}
          aria-hidden="true"
        />

          {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-16 md:pb-20">
          <div className="inline-flex items-center justify-center px-6 py-2.5 mb-6 border border-white/10 bg-black/30 backdrop-blur-md rounded-full">
            <span className="font-jost text-[10px] sm:text-[11px] tracking-[0.3em] font-light uppercase text-cream">
              Dal Mare alla Tavola · Ravenna
            </span>
          </div>

          <h1
            className="font-cormorant font-light italic text-cream leading-none mb-5"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            Ristorante
          </h1>

          {/* Gold rule */}
          <div
            className="mx-auto"
            style={{ width: '48px', height: '1px', backgroundColor: '#C9A84C', opacity: 0.65 }}
            aria-hidden="true"
          />
        </div>
      </section>

      {/* ── Philosophy intro ──────────────────────────────────────────────── */}
      <section className="bg-sand py-16 md:py-20 lg:py-28">
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

          {/* 2-col philosophy text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
            <ScrollReveal delay={0.1} direction="left">
              <p className="font-baskerville text-[17px] italic font-normal leading-[1.95] text-dark/65">
                Il pesce arriva ogni mattina dai pescatori dell&apos;Adriatico — vongole veraci,
                scampi, rombo, branzino. Niente che non sia al suo momento giusto. In cucina
                rispettiamo quello che il mare ci offre, con ricette che affondano le radici
                nella tradizione romagnola più autentica.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="right">
              <p className="font-baskerville text-[17px] italic font-normal leading-[1.95] text-dark/80">
                Stagionalità e semplicità come principi guida. Nessun ingrediente superfluo,
                nessuna tecnica fine a se stessa. Solo materia prima eccellente trattata con
                la cura che merita. Il menu cambia con le stagioni e con ciò che il mare
                porta ogni giorno.
              </p>
            </ScrollReveal>
          </div>

          {/* Bottom gold rule */}
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
      <section className="bg-sand pb-28 lg:pb-36">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <RistorazioneMenu categories={menuData.categories} />
        </div>
      </section>
    </>
  )
}
