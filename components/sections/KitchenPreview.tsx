'use client'

import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'

// ─── Pill chip component ──────────────────────────────────────────────────────

function Pill({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className={[
        'inline-block font-jost text-[11px] tracking-[0.22em] uppercase',
        'border border-cream/50 text-cream/90 px-6 py-3',
        'transition-[border-color,color,background-color] duration-[400ms]',
        'hover:border-gold hover:text-gold hover:bg-gold/5',
      ].join(' ')}
    >
      {label}
    </Link>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function KitchenPreview() {
  return (
    <section
      className="py-16 md:py-24 lg:py-36 overflow-hidden"
      style={{ backgroundColor: '#1A1A18' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── Left: text (comes from left) ───────────────────────────── */}
          <div>
            {/* Gold label */}
            <ScrollReveal direction="left" delay={0.1}>
              <span
                className="font-cormorant-sc text-[11px] tracking-[0.4em] uppercase block mb-6"
                style={{ color: '#C9A84C' }}
              >
                Cucina &amp; Ristorante
              </span>
            </ScrollReveal>

            {/* H2 */}
            <ScrollReveal direction="left" delay={0.2}>
              <h2
                className="font-cormorant font-light italic text-cream leading-[1.1] mb-8"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Il sapore<br />dell&apos;Adriatico
              </h2>
            </ScrollReveal>

            {/* Rule */}
            <ScrollReveal direction="left" delay={0.25}>
              <div
                className="mb-8"
                style={{ width: '48px', height: '1px', backgroundColor: '#C9A84C', opacity: 0.5 }}
                aria-hidden="true"
              />
            </ScrollReveal>

            {/* Philosophy text */}
            <ScrollReveal direction="left" delay={0.3}>
              <p className="font-jost text-base font-light leading-[1.9] text-cream/60 mb-5 max-w-[440px]">
                Il pesce arriva ogni mattina direttamente dai pescatori dell&apos;Adriatico.
                Fresco, vero, autentico — come vuole la tradizione romagnola di queste coste.
              </p>
              <p className="font-jost text-base font-light leading-[1.9] text-cream/80 max-w-[440px]">
                Ogni piatto porta con sé un racconto: di stagioni, di mare, di mani che lavorano
                con rispetto e passione. Una cucina che non insegue mode, ma radici.
              </p>
            </ScrollReveal>

            {/* Pills */}
            <ScrollReveal direction="left" delay={0.4}>
              <div className="flex flex-wrap gap-3 mt-10">
                <Pill href="/ristorazione" label="Ristorante" />
                <Pill href="/aperitivi"    label="Aperitivi" />
                <Pill href="/pizza"        label="Pizza" />
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right: 2 images, offset / overlapping ──────────────────── */}
          {/*
            Desktop: absolute-positioned container 520px tall.
            Image A: top-right, 72% wide, 280px tall (upper half).
            Image B: bottom-left, 62% wide, 240px tall (lower half).
            The two images overlap vertically in the middle, creating depth.
            Both have deep box-shadow and a 3px border matching the background.
          */}
          <div className="relative hidden lg:flex h-[520px]">

            {/* Image A — upper-right (restaurant) */}
            <ScrollReveal delay={0.2} direction="right">
              <div
                className="absolute top-0 right-0 overflow-hidden"
                style={{
                  width: '72%',
                  height: '300px',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.55)',
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80"
                  alt="Cucina di pesce — Bagno Montecarlo"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
                  sizes="40vw"
                />
              </div>
            </ScrollReveal>

            {/* Image B — lower-left (pizza), bordered with bg color to give separation */}
            <ScrollReveal delay={0.38} direction="left">
              <div
                className="absolute bottom-0 left-0 overflow-hidden"
                style={{
                  width: '62%',
                  height: '260px',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
                  outline: '4px solid #1A1A18',  /* matches bg — "floating" separation */
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80"
                  alt="Pizza artigianale — Bagno Montecarlo"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
                  sizes="35vw"
                />
              </div>
            </ScrollReveal>

          </div>

          {/* Mobile: single image shown below text */}
          <div className="lg:hidden relative h-[320px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80"
              alt="Cucina di pesce — Bagno Montecarlo"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
