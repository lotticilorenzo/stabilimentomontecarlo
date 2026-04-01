'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Types ────────────────────────────────────────────────────────────────────

interface MenuItem {
  name: string
  description: string
  price: string
  badge?: string
}

interface Category {
  id: string
  label: string
  items: MenuItem[]
}

interface Props {
  categories: Category[]
}

// ─── Single pizza row with optional badge ─────────────────────────────────────

function PizzaRow({ item, isLast }: { item: MenuItem; isLast: boolean }) {
  return (
    <div
      className={`group py-5 ${!isLast ? 'border-b border-dark/[0.07]' : ''}`}
    >
      <div className="flex items-baseline justify-between gap-6">
        {/* Left: name + badge */}
        <div className="flex items-baseline gap-3 flex-1 min-w-0">
          <span className="font-cormorant text-[1.2rem] italic font-light text-dark group-hover:text-terra transition-colors duration-300 leading-snug">
            {item.name}
          </span>

          {item.badge === 'signature' && (
            <span
              className="shrink-0 font-jost text-[9px] tracking-[0.18em] uppercase px-2 py-0.5 border"
              style={{
                color: '#C9A84C',
                borderColor: 'rgba(201,168,76,0.45)',
                backgroundColor: 'rgba(201,168,76,0.06)',
              }}
            >
              Signature
            </span>
          )}

          {item.badge === 'del giorno' && (
            <span
              className="shrink-0 font-jost text-[9px] tracking-[0.18em] uppercase px-2 py-0.5 border"
              style={{
                color: '#C4704A',
                borderColor: 'rgba(196,112,74,0.45)',
                backgroundColor: 'rgba(196,112,74,0.06)',
              }}
            >
              Del Giorno
            </span>
          )}
        </div>

        {/* Right: price */}
        <span className="shrink-0 font-jost text-sm font-medium text-dark/80 tabular-nums">
          € {item.price}
        </span>
      </div>

      {item.description && (
        <p className="font-jost text-[14px] font-light leading-relaxed text-dark/75 mt-1.5 max-w-xl">
          {item.description}
        </p>
      )}
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function PizzaMenu({ categories }: Props) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? '')

  const activeCategory = categories.find((c) => c.id === activeId)

  return (
    <div>
      {/* ── Pizza del Giorno placeholder callout ─────────────────────── */}
      <div
        className="mb-10 px-6 py-5 border-l-2"
        style={{
          borderColor: '#C4704A',
          backgroundColor: 'rgba(196,112,74,0.04)',
        }}
      >
        <span
          className="font-jost text-[9px] tracking-[0.3em] uppercase block mb-1.5"
          style={{ color: '#C4704A' }}
        >
          Ogni Sera
        </span>
        <p
          className="font-cormorant text-[1.3rem] italic font-light leading-snug mb-1.5"
          style={{ color: 'rgba(26,26,24,0.72)' }}
        >
          La Pizza del Giorno — chiedi al cameriere
        </p>
        <p className="font-jost text-[13px] font-light text-dark/80">
          Ogni sera una creazione speciale con gli ingredienti del mercato mattutino.
        </p>
      </div>

      {/* ── Tab bar ──────────────────────────────────────────────────── */}
      <div
        className="flex border-b border-dark/[0.09] mb-10 overflow-x-auto"
        role="tablist"
        aria-label="Categorie del menu pizza"
        style={{ scrollbarWidth: 'none' }}
      >
        {categories.map((cat) => {
          const isActive = cat.id === activeId
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${cat.id}`}
              id={`tab-${cat.id}`}
              onClick={() => setActiveId(cat.id)}
              className="relative shrink-0 px-5 py-4 font-jost text-[15px] tracking-[0.1em] uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-terra"
              style={{ color: isActive ? '#1A1A18' : 'rgba(26,26,24,0.65)' }}
            >
              {cat.label}

              {isActive && (
                <motion.div
                  layoutId="pizza-tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px]"
                  style={{ backgroundColor: '#C4704A' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* ── Category panel with AnimatePresence ─────────────────────── */}
      <AnimatePresence mode="wait">
        {activeCategory && (
          <motion.div
            key={activeId}
            id={`tabpanel-${activeId}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeId}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {activeCategory.items.map((item, i) => (
              <PizzaRow
                key={item.name}
                item={item}
                isLast={i === activeCategory.items.length - 1}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Note allergeni ───────────────────────────────────────────── */}
      <div className="mt-14 pt-8 border-t border-dark/[0.15]">
        <p className="font-jost text-sm font-light leading-[1.85] text-dark/70 max-w-2xl">
          <span className="font-medium tracking-[0.12em] uppercase text-dark">Allergeni — </span>
          Il nostro impasto contiene glutine. Alcune pizze contengono latticini, uova
          o frutta a guscio. Informa il personale di sala in caso di allergie o
          intolleranze prima di ordinare.{' '}
          <a
            href="#"
            className="underline underline-offset-2 hover:text-terra transition-colors duration-200"
            onClick={(e) => e.preventDefault()}
          >
            Consulta la scheda allergeni
          </a>
          . Menu soggetto a variazioni stagionali.
        </p>
      </div>
    </div>
  )
}
