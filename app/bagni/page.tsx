import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import HeroParallaxImage from '@/components/ui/HeroParallaxImage'
import SectionNumber from '@/components/ui/SectionNumber'
import ImageReveal from '@/components/ui/ImageReveal'

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'La Spiaggia',
  description:
    "Spiaggia premium sulla riviera di Ravenna. Ombrelloni, lettini, ed eleganza all'ombra dei teli estivi. Bagno Montecarlo, la tua oasi sull'Adriatico.",
  keywords: ['bagno spiaggia ravenna', 'stabilimento balneare ravenna', 'spiaggia adriatico ravenna', 'lettini ombrelloni ravenna'],
  alternates: {
    canonical: '/bagni',
  },
  openGraph: {
    title: 'La Spiaggia | Bagno Montecarlo Ravenna',
    description: "Spiaggia premium sulla riviera di Ravenna. Ombrelloni, lettini e servizi esclusivi.",
    locale: 'it_IT',
    siteName: 'Bagno Montecarlo',
  },
}

// ─── Servizi ──────────────────────────────────────────────────────────────────

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {/* Ombrellone da spiaggia */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M12 3C7.5 3 3.9 6.3 3 10.7h18C20.1 6.3 16.5 3 12 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M12 10.7V21" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M9 21h6" />
      </svg>
    ),
    title: 'Ombrelloni & Lettini',
    description:
      'Ombrelloni ampi e lettini comodi, distanziati con cura. Lo spazio giusto per respirare e stare.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {/* Doccia */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M4 4h7a4 4 0 014 4v1H4V8a4 4 0 010 0V4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M4 9v3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M4 15l.5 1m1.5-1l.5 1m1.5-1l.5 1m1.5-1l.5 1m1.5-1l.5 1" />
      </svg>
    ),
    title: 'Docce & Spogliatoi',
    description:
      'Docce calde, cabine private e spogliatoi moderni. Puliti, curati, sempre pronti.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {/* Cocktail / bar */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M8 3h8l-4 7-4-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M12 10v8" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M8 18h8" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M14 6l2-3" />
      </svg>
    ),
    title: 'Bar in Spiaggia',
    description:
      'Colazione, aperitivi, bevande fresche e snack direttamente sulla spiaggia.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {/* Onde / sport acquatici */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M3 12c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M3 17c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M8 6.5a1 1 0 110-2 1 1 0 010 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M8 5.5l6 3" />
      </svg>
    ),
    title: 'Sport Acquatici',
    description:
      'Canoe, SUP, gonfiabili e molto altro. L\'Adriatico tutto da esplorare, a modo tuo.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {/* Beach volley — rete */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M3 11h18" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M3 9v10M21 9v10" />
        <circle cx="8" cy="7" r="2.5" strokeWidth={1.2} />
      </svg>
    ),
    title: 'Beach Volley',
    description:
      'Campo omologato, sabbia livellata, rete professionale. Attrezzatura disponibile su richiesta.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {/* Bambini / stella marina */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
      </svg>
    ),
    title: 'Area Bambini',
    description:
      'Spazio giochi sorvegliato, bordo acqua sicuro e animazione nelle ore più calde.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {/* Auto / parcheggio */}
        <rect x="2" y="9" width="20" height="10" rx="2" strokeWidth={1.2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M5 9l2.5-5h9L19 9" />
        <circle cx="7.5" cy="19" r="1.5" strokeWidth={1.2} />
        <circle cx="16.5" cy="19" r="1.5" strokeWidth={1.2} />
      </svg>
    ),
    title: 'Parcheggio',
    description:
      'Parcheggio convenzionato a pochi passi dall\'ingresso. Accesso comodo e riservato.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {/* Carrozzina / accessibilità */}
        <circle cx="12" cy="4" r="2" strokeWidth={1.2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M10 8l-3 5h5l1.5 5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M7 13H4l2 5" />
        <circle cx="8" cy="20" r="2" strokeWidth={1.2} />
      </svg>
    ),
    title: 'Accessibilità',
    description:
      'Percorso facilitato fino all\'acqua, carrozzine da mare disponibili gratuitamente.',
  },
]

// ─── Timeline stagione ────────────────────────────────────────────────────────

const stagione = [
  { date: 'Maggio', note: 'Apertura stagione' },
  { date: 'Giugno', note: 'Alta stagione' },
  { date: 'Luglio', note: 'Alta stagione' },
  { date: 'Agosto', note: 'Il cuore dell\'estate' },
  { date: 'Settembre', note: 'Fine stagione' },
]

// ─── Gallery images ───────────────────────────────────────────────────────────

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80',
    alt: 'Panoramica spiaggia Bagno Montecarlo Ravenna',
    span: 'lg:col-span-2 lg:row-span-2', // grande
  },
  {
    src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80',
    alt: 'Mare Adriatico al tramonto',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=900&q=80',
    alt: 'Acqua cristallina dell\'Adriatico',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=900&q=80',
    alt: 'Lettini e ombrelloni vista mare',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1530053969600-caed2596d242?w=900&q=80',
    alt: 'Spiaggia adriatica al mattino',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80',
    alt: 'Tramonto sull\'Adriatico estate romagnola',
    span: '',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BagniPage() {
  return (
    <>
      {/* ── Hero panoramico ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: '100dvh', minHeight: '600px' }}>
        <HeroParallaxImage
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="Spiaggia panoramica di Bagno Montecarlo — Ravenna, Adriatico"
          factor={0.35}
          priority
          dataCursor="sea"
        />

        {/* Gradient overlay — sea tones */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(26,26,24,0.75) 0%, rgba(27,79,107,0.15) 30%, rgba(27,79,107,0.05) 50%, rgba(26,26,24,0.72) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Scroll hint — vertical line */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          aria-hidden="true"
        >
          <div className="w-px h-12 bg-cream/25" />
          <span className="font-jost text-[9px] tracking-[0.3em] uppercase text-cream/80">Scopri</span>
        </div>

        {/* Hero content — centred */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="inline-flex items-center justify-center px-6 py-2.5 mb-6 border border-white/10 bg-black/30 backdrop-blur-md rounded-full">
            <span className="font-jost text-[10px] sm:text-[11px] tracking-[0.3em] font-light uppercase text-cream">
              Ravenna · Adriatico
            </span>
          </div>

          <h1
            className="font-cormorant font-light italic text-cream leading-none mb-6"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
          >
            La Spiaggia
          </h1>

          <p className="font-jost text-base font-light text-cream/60 max-w-sm leading-relaxed">
            Sabbia, mare e silenzio.&nbsp;Il lusso delle cose vere.
          </p>

          {/* Sea-toned rule */}
          <div
            className="mx-auto mt-8"
            style={{ width: '48px', height: '1px', backgroundColor: '#3A7FA0', opacity: 0.7 }}
            aria-hidden="true"
          />
        </div>
      </section>

      {/* ── La Nostra Spiaggia ─────────────────────────────────────────────── */}
      <section className="relative bg-sand py-16 md:py-16 md:py-16 md:py-20 lg:py-28">
        <SectionNumber number="01" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Text */}
            <ScrollReveal direction="left">
              <span className="font-cormorant-sc text-[10px] tracking-[0.4em] uppercase text-dark/80 block mb-6">
                La Nostra Spiaggia
              </span>
              <h2
                className="font-cormorant font-light italic text-dark leading-tight mb-8"
                style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
              >
                Un&apos;oasi a pochi<br />passi dalla città
              </h2>

              {/* Gold diamond ornament */}
              <div className="flex items-center gap-4 mb-8" aria-hidden="true">
                <div className="h-px w-10 bg-dark/12" />
                <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: '#1B4F6B', opacity: 0.4 }} />
                <div className="h-px w-10 bg-dark/12" />
              </div>

              <p className="font-baskerville text-[17px] italic font-normal leading-[1.95] text-dark/65 mb-5 max-w-lg">
                Bagno Montecarlo sorge sulla riviera di Ravenna, incastonato tra la pineta
                dell&apos;Adriatico e il mare. Una posizione privilegiata dove l&apos;acqua
                del mare è pulita, sorvegliata e sicura — Bandiera Blu dal 2019.
              </p>
              <p className="font-baskerville text-[17px] italic font-normal leading-[1.95] text-dark/80 max-w-lg">
                La spiaggia è curata ogni mattina prima dell&apos;apertura: sabbia setacciata,
                attrezzatura in perfetto stato, spazi rispettosi della tua privacy.
                Un luogo dove il tempo rallenta — autenticamente.
              </p>
            </ScrollReveal>

            {/* Image with angled clip + wipe reveal */}
            <ScrollReveal delay={0.2} direction="right">
              <ImageReveal direction="left" delay={0.1}>
                <div
                  className="relative overflow-hidden"
                  style={{
                    height: '480px',
                    clipPath: 'polygon(6% 0, 100% 0, 94% 100%, 0 100%)',
                  }}
                  data-cursor="sea"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80"
                    alt="Vista del mare dalla spiaggia di Bagno Montecarlo Ravenna"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </ImageReveal>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Servizi — 4 col desktop, 2 mobile — ZERO PREZZI ───────────────── */}
      <section
        className="relative py-16 md:py-16 md:py-16 md:py-20 lg:py-28"
        style={{ backgroundColor: '#EDE6D0' }}
      >
        <SectionNumber number="02" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Heading */}
          <ScrollReveal>
            <div className="text-center mb-16 lg:mb-20">
              <span className="font-cormorant-sc text-[10px] tracking-[0.4em] uppercase text-dark/80 block mb-5">
                Tutto il Necessario
              </span>
              <h2
                className="font-cormorant font-light italic text-dark"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
              >
                I Nostri Servizi
              </h2>
            </div>
          </ScrollReveal>

          {/* 4-col grid / Horizontal Carousel on mobile */}
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-4 gap-4 lg:gap-8 -mx-6 px-6 lg:mx-0 lg:px-0">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.07} className="shrink-0 w-[85%] sm:w-[45%] lg:w-full snap-center">
                <div className="group flex flex-col items-center text-center p-6 lg:p-8 transition-all duration-500 hover:bg-sand h-full border border-dark/[0.03] lg:border-none bg-sand/30 lg:bg-transparent">

                  {/* Icon container */}
                  <div
                    className="w-14 h-14 mb-5 flex items-center justify-center transition-colors duration-300"
                    style={{ color: 'rgba(27,79,107,0.7)' }}
                  >
                    {service.icon}
                  </div>

                  {/* Gold dot */}
                  <div
                    className="w-1 h-1 rounded-full mb-4 transition-all duration-300 group-hover:scale-150"
                    style={{ backgroundColor: '#C9A84C', opacity: 0.65 }}
                    aria-hidden="true"
                  />

                  <h3 className="font-cormorant text-xl font-light italic text-dark mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-jost text-[14px] font-light leading-relaxed text-dark/80">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── La Stagione — timeline orizzontale ────────────────────────────── */}
      <section
        className="relative py-16 md:py-16 md:py-16 md:py-20 lg:py-28 overflow-hidden"
        style={{ backgroundColor: '#1B4F6B' }}
      >
        <SectionNumber number="03" />
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="font-cormorant-sc text-[10px] tracking-[0.4em] uppercase text-cream/80 block mb-5">
                Apertura Stagionale
              </span>
              <h2
                className="font-cormorant font-light italic text-cream"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
              >
                La Stagione
              </h2>
            </div>
          </ScrollReveal>

          {/* ── Horizontal Timeline ── */}
          <ScrollReveal delay={0.15}>
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-0">

              {/* Connecting line — desktop only */}
              <div
                className="hidden sm:block absolute top-5 left-0 right-0 h-px"
                style={{ backgroundColor: 'rgba(250,250,248,0.15)' }}
                aria-hidden="true"
              />

              {stagione.map((s, i) => {
                const isFirst = i === 0
                const isLast = i === stagione.length - 1
                const isPeak = i === 3 // Agosto
                return (
                  <div
                    key={s.date}
                    className="relative flex flex-col items-center text-center flex-1"
                  >
                    {/* Dot */}
                    <div
                      className="w-2.5 h-2.5 rounded-full border-2 mb-4 z-10"
                      style={{
                        borderColor: isPeak ? '#C9A84C' : 'rgba(250,250,248,0.45)',
                        backgroundColor: isPeak ? '#C9A84C' : 'transparent',
                      }}
                      aria-hidden="true"
                    />

                    {/* Month */}
                    <span
                      className="font-cormorant text-[1.4rem] italic font-light leading-none mb-2"
                      style={{ color: isPeak ? '#C9A84C' : 'rgba(250,250,248,0.9)' }}
                    >
                      {s.date}
                    </span>

                    {/* Label */}
                    <span className="font-jost text-[11px] tracking-[0.15em] uppercase text-cream/65">
                      {s.note}
                    </span>

                    {/* Start / End badge */}
                    {(isFirst || isLast) && (
                      <span
                        className="mt-3 font-jost text-[9px] tracking-[0.2em] uppercase px-2 py-0.5"
                        style={{
                          color: 'rgba(250,250,248,0.5)',
                          border: '1px solid rgba(250,250,248,0.15)',
                        }}
                      >
                        {isFirst ? 'Apertura' : 'Chiusura'}
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          </ScrollReveal>

          {/* Orari */}
          <ScrollReveal delay={0.3}>
            <div
              className="mt-16 text-center pt-10 border-t"
              style={{ borderColor: 'rgba(250,250,248,0.1)' }}
            >
              <p className="font-jost text-[15px] font-light text-cream/80 tracking-wide">
                Ogni giorno dalle{' '}
                <span className="text-cream font-medium">8:30</span>
                {' '}alle{' '}
                <span className="text-cream font-medium">20:00</span>
                {' '}· Bar e ristorante aperti tutto il giorno
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Gallery — masonry 6 immagini con hover overlay ─────────────────── */}
      <section className="bg-dark" aria-label="Galleria fotografica spiaggia">
        {/*
          Masonry-style: CSS grid con righe di altezze diverse.
          Layout:
            [ GRANDE (2×2) ] [ piccola ] [ piccola ]
                             [ piccola ] [ piccola ]
        */}
        <div
          className="grid grid-cols-2 md:grid-cols-3"
          style={{
            gridTemplateRows: 'auto',
            gap: '3px',
          }}
        >
          {galleryImages.map((img, i) => {
            // Prima immagine grande 2×2 su desktop
            const isBig = i === 0
            return (
              <div
                key={img.src}
                className={`relative overflow-hidden group ${isBig ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}`}
                style={{
                  height: isBig ? 'clamp(300px, 50vh, 520px)' : 'clamp(150px, 25vh, 257px)',
                  touchAction: 'manipulation',
                }}
                data-cursor="sea"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(27,79,107,0.75) 0%, transparent 60%)',
                  }}
                  aria-hidden="true"
                >
                  <span className="font-jost text-[11px] tracking-[0.25em] uppercase text-cream/80">
                    {img.alt}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── CTA — Prenota il tuo posto ─────────────────────────────────────── */}
      <section className="bg-sand py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>

            {/* Ornament */}
            <div className="flex items-center justify-center gap-5 mb-10" aria-hidden="true">
              <div className="h-px flex-1 max-w-[80px] bg-dark/12" />
              <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: '#1B4F6B', opacity: 0.4 }} />
              <div className="h-px flex-1 max-w-[80px] bg-dark/12" />
            </div>

            <h2
              className="font-cormorant font-light italic text-dark mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
            >
              Prenota il tuo posto
            </h2>

            <p className="font-baskerville text-[17px] italic font-normal leading-[1.9] text-dark/80 mb-10 max-w-lg mx-auto">
              Contattaci per disponibilità e informazioni. Saremo felici di
              trovare il posto perfetto per te, sull&apos;Adriatico.
            </p>

            <Link
              href="/contatti"
              className="cta-magnetic inline-block font-jost text-[11px] tracking-[0.3em] uppercase px-14 py-5 transition-all duration-500 hover:opacity-85"
              style={{
                backgroundColor: '#1B4F6B',
                color: '#FAFAF8',
              }}
            >
              Contattaci
            </Link>

          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
