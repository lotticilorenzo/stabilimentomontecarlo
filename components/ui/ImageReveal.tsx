'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ImageRevealProps {
  children: React.ReactNode
  delay?: number
  /** Direction of the wipe reveal */
  direction?: 'left' | 'right' | 'top' | 'bottom'
  className?: string
}

/**
 * ImageReveal
 * Wraps any image (or block) in a clip-path wipe animation.
 * The clip-path slides open from the specified direction on scroll into view.
 *
 * Usage:
 *   <ImageReveal>
 *     <Image src="..." ... />
 *   </ImageReveal>
 */
export default function ImageReveal({
  children,
  delay = 0,
  direction = 'left',
  className = '',
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  const clipHidden: Record<string, string> = {
    left:   'inset(0 100% 0 0)',
    right:  'inset(0 0 0 100%)',
    top:    'inset(100% 0 0 0)',
    bottom: 'inset(0 0 100% 0)',
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ clipPath: clipHidden[direction] }}
      animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
