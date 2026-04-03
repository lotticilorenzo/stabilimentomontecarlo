'use client'

import { useRef, useEffect } from 'react'
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

// Poster / fallback (stesso URL dell'immagine di riserva)
const FALLBACK_SRC =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=90&auto=format&fit=crop'

// ─── Component ────────────────────────────────────────────────────────────────

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Parallax: track scroll relative to the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Image/video container moves up at 0.3× the scroll speed
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  // ── Video play / pause management ────────────────────────────────────────
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Attempt play; catch DOMException on autoplay-blocked browsers
    const tryPlay = () => {
      video.play().catch(() => {
        // Autoplay blocked — add event listener to retry on first user gesture
        const retry = () => {
          video.play().catch(() => {})
          window.removeEventListener('pointerdown', retry)
          window.removeEventListener('keydown', retry)
        }
        window.addEventListener('pointerdown', retry, { once: true })
        window.addEventListener('keydown', retry, { once: true })
      })
    }

    // Pause when hero scrolls out of view (saves CPU/GPU on scroll-heavy pages)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay()
        else video.pause()
      },
      { threshold: 0.1 }
    )

    observer.observe(video)
    tryPlay() // attempt immediately on mount

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-dvh min-h-[600px] overflow-hidden"
    >

      {/* ── Background layer — parallax wrapper ───────────────────────── */}
      {/*
        Note: the parallax motion.div has NO scale animation.
        Animating scale on a video element is extremely expensive
        (forces GPU to re-composite the video texture every frame).
        The fallback image gets the Ken Burns treatment; the video plays as-is.
      */}
      <motion.div
        className="absolute -top-[10%] -bottom-[10%] left-0 right-0"
        style={{ y: parallaxY }}
        aria-hidden="true"
      >
        {/* Fallback image: Ken Burns scale only applies to this layer.
            Sits behind the video — visible when video is loading or unsupported. */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-dark"
          style={{ backgroundImage: `url('${FALLBACK_SRC}')` }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.06 }}
          transition={{
            duration: 14,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Video: fills the parallax container, NO extra scale transform.
            preload="auto" starts buffering as soon as the component mounts.
            poster shows the first frame instantly while the video loads. */}
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="auto"
          poster={FALLBACK_SRC}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ willChange: 'transform' }}
        >
          <source src="/videos/mare-loop.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* ── Gradient overlay ──────────────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(26,26,24,0.65) 0%, rgba(26,26,24,0.3) 40%, rgba(26,26,24,0.85) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Staggered text content ────────────────────────────────────── */}
      {/* pb-24 su mobile evita che i FAB (phone + WA, ~88px dal basso) coprano i CTA */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6 pb-24 md:pb-0"
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

        {/* 2 — H1 */}
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
