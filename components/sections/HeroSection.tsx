'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import ScrollIndicator from '@/components/ui/ScrollIndicator'

// ─── Stagger variants ─────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Parallax: track scroll relative to the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Image moves up at 0.5× the scroll speed — creates depth
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section
      ref={sectionRef}
      className="relative h-dvh min-h-[600px] overflow-hidden"
    >

      {/* ── Background fallback / Video placeholder ────────────────────── */}
      {/*
        Rimossa immagine statica per inserire un <video> loop, come richiesto.
        Basta aggiornare il `src` con l'indirizzo del video finale.
      */}
      <motion.div
        className="absolute -top-[10%] -bottom-[10%] left-0 right-0 bg-dark"
        style={{ y: parallaxY }}
        aria-hidden="true"
        data-cursor="sea"
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 10,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          {/* Static fallback image underneath the video just in case */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=90&auto=format&fit=crop')" }} 
          />

          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.95)' }}
          >
            <source src="/videos/mare-loop.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </motion.div>

      {/* ── Gradient overlay potenziato per una perfetta leggibilità ── */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(26,26,24,0.65) 0%, rgba(26,26,24,0.3) 40%, rgba(26,26,24,0.85) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Staggered text content ────────────────────────────────────── */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 1 — Label */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center justify-center px-6 py-2.5 mb-7 border border-white/10 bg-black/30 backdrop-blur-md rounded-full"
        >
          <span className="font-jost text-[10px] sm:text-[11px] tracking-[0.3em] font-light uppercase text-cream">
            Ravenna · Adriatico
          </span>
        </motion.div>

        {/* 2 — H1 with fluid clamp size */}
        <motion.h1
          variants={itemVariants}
          className="font-cormorant font-light italic leading-[0.9] mb-7 text-cream"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 9rem)' }}
        >
          Bagno Montecarlo
        </motion.h1>

        {/* 3 — Tagline */}
        <motion.p
          variants={itemVariants}
          className="font-jost text-base md:text-lg font-light tracking-[0.22em] text-cream/80 max-w-sm mb-12"
        >
          Dal 1960 — il tuo angolo di Adriatico, a Ravenna
        </motion.p>

        {/* 4 — CTA buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/contatti"
            className={[
              'font-jost text-[11px] tracking-[0.25em] uppercase',
              'bg-cream text-dark',
              'px-10 py-4 inline-block',
              'transition-[background-color,color,opacity] duration-300',
              'hover:opacity-90',
            ].join(' ')}
          >
            Prenota la stagione 2025
          </Link>
          <Link
            href="/cucina"
            className={[
              'font-jost text-[11px] tracking-[0.25em] uppercase',
              'border border-cream/50 text-cream',
              'px-10 py-4 inline-block',
              'transition-[background-color,color,border-color] duration-300',
              'hover:bg-cream/10 hover:border-cream',
            ].join(' ')}
          >
            La Cucina
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ──────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ScrollIndicator color="light" />
      </div>

    </section>
  )
}
