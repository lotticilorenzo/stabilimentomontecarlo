'use client'

import { usePathname } from 'next/navigation'
import { useScroll, useSpring, motion } from 'framer-motion'

/**
 * ScrollProgressBar
 * Thin gold bar at the very top of the viewport showing page scroll progress.
 * Hidden on the homepage ("/").
 */
export default function ScrollProgressBar() {
  const pathname = usePathname()
  const { scrollYProgress } = useScroll()

  // Smooth spring so the bar doesn't jump
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  })

  // Only show on non-homepage routes
  if (pathname === '/') return null

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX,
        transformOrigin: 'left',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        backgroundColor: '#C9A84C',
        zIndex: 9999,
      }}
    />
  )
}
