'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function BeachPreview() {
  const sectionRef = useRef<HTMLElement>(null)

  // Subtle parallax: image drifts upward at 0.25× scroll speed
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: '#1B4F6B', minHeight: '600px' }}
    >
      {/* ── Parallax background image ──────────────────────────────────── */}
      <motion.div
        className="absolute -top-[10%] -bottom-[10%] left-0 right-0"
        style={{ y: parallaxY }}
        aria-hidden="true"
        data-cursor="sea"
      >
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="Panoramica della spiaggia di Bagno Montecarlo a Ravenna"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* ── Overlay — sea color tint + vignette ───────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            'linear-gradient(to bottom,',
            '  rgba(27,79,107,0.72) 0%,',
            '  rgba(27,79,107,0.48) 40%,',
            '  rgba(27,79,107,0.65) 100%)',
          ].join(''),
        }}
        aria-hidden="true"
      />

      {/* ── Centred text content ───────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 md:py-32 lg:py-44">

        <ScrollReveal delay={0.1}>
          <span className="font-cormorant-sc text-[11px] tracking-[0.45em] uppercase text-cream/80 block mb-7">
            Ravenna · Adriatico
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2
            className="font-cormorant font-light italic text-cream leading-[0.95] mb-8"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          >
            La Spiaggia
          </h2>
        </ScrollReveal>

        {/* Diamond divider */}
        <ScrollReveal delay={0.28}>
          <div className="flex items-center gap-4 mb-8" aria-hidden="true">
            <div className="h-px w-12 bg-cream/25" />
            <div className="w-1 h-1 rotate-45 bg-cream/35" />
            <div className="h-px w-12 bg-cream/25" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <p className="font-jost text-base md:text-lg font-light leading-[1.85] text-cream/70 max-w-md mb-12">
            Sabbia dorata, acqua limpida, silenzio.<br />
            Un angolo di Adriatico dove fermarsi davvero,
            lontani dalla confusione, vicini all&apos;essenziale.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.43}>
          <Link
            href="/bagni"
            className={[
              'font-jost text-[11px] tracking-[0.25em] uppercase',
              'border border-cream/50 text-cream',
              'px-10 py-4 inline-block',
              'transition-[background-color,color,border-color] duration-300',
              'hover:bg-cream hover:text-sea hover:border-cream',
            ].join(' ')}
          >
            Scopri i Servizi
          </Link>
        </ScrollReveal>

      </div>
    </section>
  )
}
