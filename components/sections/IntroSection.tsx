import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'

// ─── Animated link with growing underline ────────────────────────────────────
// Pure CSS via group + scaleX pseudo-element pattern using a child span.

function AnimatedLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 font-jost text-sm font-light tracking-[0.18em] uppercase text-sea"
    >
      <span className="relative">
        {children}
        {/* Underline bar: starts at scaleX(0), grows to scaleX(1) on hover */}
        <span
          className="absolute bottom-[-3px] left-0 block h-px w-full bg-sea origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-x-100"
          aria-hidden="true"
        />
      </span>
      {/* Arrow shifts right on hover */}
      <span className="inline-block translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:translate-x-2">
        →
      </span>
    </Link>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function IntroSection() {
  return (
    <section className="bg-sand overflow-hidden py-16 md:py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/*
          Asymmetric grid: 55% text | 45% image
          On mobile stacks to 1 column, image below.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] gap-16 lg:gap-20 items-center">

          {/* ── Left: text column (55%) ───────────────────────────────── */}
          <div>
            {/* Gold label */}
            <ScrollReveal delay={0.1}>
              <span
                className="font-cormorant-sc text-[11px] tracking-[0.4em] uppercase block mb-6"
                style={{ color: '#C9A84C' }}
              >
                Dal 1960
              </span>
            </ScrollReveal>

            {/* H2 */}
            <ScrollReveal delay={0.2}>
              <h2
                className="font-cormorant font-light italic text-dark leading-[1.1] mb-8"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Dove l&apos;Adriatico<br />diventa casa
              </h2>
            </ScrollReveal>

            {/* Decorative rule */}
            <ScrollReveal delay={0.3}>
              <div
                className="mb-8"
                style={{ width: '48px', height: '1px', backgroundColor: '#C9A84C', opacity: 0.6 }}
                aria-hidden="true"
              />
            </ScrollReveal>

            {/* Body copy */}
            <ScrollReveal delay={0.35}>
              <p className="font-jost text-base font-light leading-[1.9] text-dark/65 mb-5 max-w-[480px]">
                Bagno Montecarlo nasce sull&apos;Adriatico come atto d&apos;amore verso il mare e
                verso la Romagna. Per decenni abbiamo accolto famiglie, viaggiatori e sognatori
                con la stessa promessa: un luogo dove il tempo non corre, dove la sabbia è ancora
                dorata e il pesce arriva fresco ogni mattina.
              </p>
              <p className="font-jost text-base font-light leading-[1.9] text-dark/80 max-w-[480px]">
                Non uno stabilimento qualunque — una piccola oasi di eleganza discreta,
                incastonata tra la pineta e il mare, dove ogni stagione lascia il segno.
              </p>
            </ScrollReveal>

            {/* CTA link with growing underline */}
            <ScrollReveal delay={0.45}>
              <div className="mt-11">
                <AnimatedLink href="/chi-siamo">
                  Scopri la nostra storia
                </AnimatedLink>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right: image column (45%) ─────────────────────────────── */}
          <ScrollReveal delay={0.25} direction="right">
            {/*
              Irregular clip-path: cuts a diagonal from bottom-left corner
              and a small notch on the top-right — feel organic, not geometric.
            */}
            <div
              className="relative h-[320px] md:h-[480px] lg:h-[580px] overflow-hidden image-fallback"
              style={{
                clipPath: 'polygon(7% 0%, 100% 0%, 100% 88%, 93% 100%, 0% 100%, 0% 7%)',
              }}
            >
              {/* Image with subtle zoom on load via CSS animation */}
              <div className="absolute inset-0 animate-slow-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80"
                  alt="La spiaggia di Bagno Montecarlo al tramonto, Ravenna"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
