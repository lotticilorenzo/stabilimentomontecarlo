'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

interface HeroParallaxImageProps {
  src: string
  alt: string
  /** Scale of parallax movement, 0–1. Default 0.35 */
  factor?: number
  priority?: boolean
  dataCursor?: string
}

/**
 * HeroParallaxImage
 * Full-cover image that scrolls at `factor` relative speed (parallax).
 * Must be placed inside a container with `position: relative` and explicit height.
 */
export default function HeroParallaxImage({
  src,
  alt,
  factor = 0.35,
  priority = false,
  dataCursor,
}: HeroParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Image overshoots its container so we have room to translate
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${factor * 100}%`])

  return (
    <div
      ref={ref}
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
      data-cursor={dataCursor}
    >
      <motion.div
        className="absolute inset-0"
        style={{ y, scale: 1 + factor * 0.15, transformOrigin: 'center top' }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          priority={priority}
          sizes="100vw"
        />
      </motion.div>
    </div>
  )
}
