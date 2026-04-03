'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Icons ────────────────────────────────────────────────────────────────────

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
    <path d="M3 8h10M8 3l5 5-5 5" />
  </svg>
)

// ─── Quick options ────────────────────────────────────────────────────────────

const PHONE = '390544000000'

const OPTIONS = [
  {
    label: 'Prenota un tavolo',
    sub: 'Ristorante · Pranzo & Cena',
    text: 'Salve! Vorrei prenotare un tavolo al ristorante per...',
  },
  {
    label: 'Prenota in spiaggia',
    sub: 'Ombrelloni · Lettini',
    text: 'Salve! Vorrei informazioni per prenotare in spiaggia per il periodo...',
  },
  {
    label: 'Informazioni generali',
    sub: 'Orari · Servizi · Altro',
    text: "Salve! Vi contatto per avere alcune informazioni su...",
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Chiudi cliccando fuori
  useEffect(() => {
    if (!isOpen) return
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [isOpen])

  // Stacked sopra al PhoneFAB:
  // PhoneFAB:   bottom = safe-area + 24px, height = 52px
  // WhatsApp:   bottom = safe-area + 24px + 52px + 12px = safe-area + 88px
  const bottomStyle = 'calc(env(safe-area-inset-bottom, 0px) + 88px)'

  return (
    <div
      ref={containerRef}
      className="fixed z-[91]"
      style={{ right: '24px', bottom: bottomStyle }}
    >
      {/* ── Popup panel ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="absolute bottom-[calc(100%+12px)] right-0 w-72 overflow-hidden"
            style={{
              borderRadius: '16px',
              backgroundColor: '#FAFAF8',
              border: '1px solid rgba(26,26,24,0.08)',
              boxShadow: '0 8px 40px rgba(26,26,24,0.14)',
            }}
            role="dialog"
            aria-label="Contattaci su WhatsApp"
          >
            {/* Header */}
            <div
              className="px-5 py-4 flex items-center justify-between"
              style={{ borderBottom: '1px solid rgba(26,26,24,0.07)' }}
            >
              <div className="flex items-center gap-2.5">
                <span style={{ color: '#25D366' }}>
                  <WhatsAppIcon />
                </span>
                <div>
                  <p className="font-jost text-[12px] font-medium tracking-[0.06em] text-dark leading-none mb-0.5">
                    Bagno Montecarlo
                  </p>
                  <p className="font-jost text-[10px] font-light text-dark/45 tracking-wide">
                    Di solito risponde in pochi minuti
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-dark/30 hover:text-dark/60 transition-colors p-1"
                aria-label="Chiudi"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Options */}
            <div className="p-2">
              {OPTIONS.map((opt) => {
                const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(opt.text)}`
                return (
                  <a
                    key={opt.label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl transition-colors duration-200 hover:bg-dark/[0.04]"
                  >
                    <div className="min-w-0">
                      <p className="font-jost text-[13px] font-light text-dark leading-snug">
                        {opt.label}
                      </p>
                      <p className="font-jost text-[10px] font-light text-dark/40 mt-0.5 tracking-wide">
                        {opt.sub}
                      </p>
                    </div>
                    <span className="text-dark/25 group-hover:text-dark/50 transition-colors shrink-0 translate-x-0 group-hover:translate-x-0.5 duration-200">
                      <ArrowIcon />
                    </span>
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FAB button — stesso stile del PhoneFAB ───────────────────── */}
      <motion.button
        onClick={() => setIsOpen((p) => !p)}
        aria-label="Apri WhatsApp"
        aria-expanded={isOpen}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.15, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="flex items-center justify-center text-white focus:outline-none"
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <CloseIcon />
            </motion.span>
          ) : (
            <motion.span
              key="wa"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <WhatsAppIcon />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
