'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxHeroProps {
  children: React.ReactNode
  /** 0 = no movement, 1 = full scroll speed. Default 0.4 */
  factor?: number
  className?: string
  style?: React.CSSProperties
}

/**
 * ParallaxHero
 * Wraps a hero section so its content moves at `factor` × scroll speed.
 * Only active on non-touch devices.
 */
export default function ParallaxHero({
  children,
  factor = 0.4,
  className = '',
  style,
}: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Move child content downward (slower than scroll = parallax effect)
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${factor * 100}%`])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={style}>
      <motion.div style={{ y }} className="will-change-transform h-full w-full">
        {children}
      </motion.div>
    </div>
  )
}
