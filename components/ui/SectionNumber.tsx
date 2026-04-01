'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionNumberProps {
  /** Section number as string, e.g. "01", "02" */
  number: string
  /** Position relative to the section (default: left side, vertically centred) */
  side?: 'left' | 'right'
}

/**
 * SectionNumber
 * Large decorative section number displayed absolutely on the left (or right) side
 * of its containing section. Visible only on desktop (hidden on mobile).
 *
 * Usage: place inside a section that has `position: relative` (or add `relative` class).
 *
 * <div className="relative">
 *   <SectionNumber number="01" />
 *   ...section content...
 * </div>
 */
export default function SectionNumber({ number, side = 'left' }: SectionNumberProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      initial={{ opacity: 0, x: side === 'left' ? -24 : 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="hidden xl:block absolute top-1/2 -translate-y-1/2 pointer-events-none select-none"
      style={{
        [side]: 'clamp(12px, 2vw, 40px)',
        zIndex: 0,
      }}
    >
      <span
        className="font-cormorant-sc font-light"
        style={{
          fontSize: 'clamp(6rem, 9vw, 10rem)',
          color: '#E8D5B0',          // sand-dark
          lineHeight: 1,
          letterSpacing: '-0.02em',
          opacity: 0.6,
        }}
      >
        {number}
      </span>
    </motion.div>
  )
}
