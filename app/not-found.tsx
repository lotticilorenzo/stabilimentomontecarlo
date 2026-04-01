'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function NotFound() {
  return (
    <main className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden bg-dark">
      {/* ── Background: Faded Sea Image ─────────────────────────────────── */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="Mare calmo al tramonto"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/80" />
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="flex flex-col items-center"
        >
          <h1 className="font-cormorant font-light italic text-[120px] md:text-[180px] text-gold/80 leading-none mb-4">
            404
          </h1>
          
          <h2 className="font-cormorant-sc text-xl md:text-2xl tracking-[0.3em] uppercase text-cream mb-6">
            Questa pagina non esiste
          </h2>
          
          <p className="font-jost text-base md:text-lg font-light text-cream/60 max-w-md mb-12 italic tracking-wide">
            "Forse le onde l&apos;hanno portata via..."
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/"
              className="font-jost text-[11px] tracking-[0.25em] uppercase border border-gold text-gold px-10 py-4 hover:bg-gold hover:text-dark transition-all duration-500"
            >
              Torna alla Home
            </Link>
            <Link
              href="/contatti"
              className="font-jost text-[11px] tracking-[0.25em] uppercase border border-cream/30 text-cream/70 px-10 py-4 hover:border-cream hover:text-cream transition-all duration-500"
            >
              Contattaci
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Custom floating bubbles/floaties for extra atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cream/5"
            initial={{ 
              width: Math.random() * 100 + 50, 
              height: Math.random() * 100 + 50,
              x: Math.random() * 100 + '%', 
              y: '110%' 
            }}
            animate={{ 
              y: '-20%',
              x: (Math.random() * 100) + (Math.sin(i) * 10) + '%'
            }}
            transition={{ 
              duration: Math.random() * 10 + 15, 
              repeat: Infinity, 
              delay: i * 2,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </main>
  )
}
