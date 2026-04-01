'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Types ────────────────────────────────────────────────────────────────────

interface MenuItem {
  name: string
  description: string
  price: string
}

interface Category {
  id: string
  label: string
  items: MenuItem[]
}

interface Props {
  categories: Category[]
}

// ─── Items hardcoded as "Consigliato" — 1-2 per categoria ────────────────────

const CONSIGLIATO = new Set([
  // Antipasti
  'Polpo alla Brace',
  'Gamberi Rossi Crudi',
  // Primi
  "Tagliolini all'Astice",
  'Risotto ai Frutti di Mare',
  // Secondi
  'Branzino al Sale di Cervia',
  'Grigliata Mista di Pesce',
  // Contorni
  'Fagiolini con Mandorle e Limone',
  // Dolci
  "Tiramisù della Casa",
  'Semifreddo al Limone e Pistacchio',
])

// ─── Single menu row ──────────────────────────────────────────────────────────

function MenuRow({ item, isLast }: { item: MenuItem; isLast: boolean }) {
  const consigliato = CONSIGLIATO.has(item.name)

  return (
    <div
      className={`group py-5 ${!isLast ? 'border-b border-dark/[0.07]' : ''}`}
    >
      <div className="flex items-baseline justify-between gap-6">
        {/* Left: name + optional badge */}
        <div className="flex items-baseline gap-3 flex-1 min-w-0">
          <span className="font-cormorant text-[1.2rem] italic font-light text-dark group-hover:text-sea transition-colors duration-300 leading-snug">
            {item.name}
          </span>
          {consigliato && (
            <span
              className="shrink-0 font-jost text-[9px] tracking-[0.18em] uppercase px-2 py-0.5 border"
              style={{
                color: '#C9A84C',
                borderColor: 'rgba(201,168,76,0.45)',
                backgroundColor: 'rgba(201,168,76,0.06)',
              }}
            >
              Consigliato
            </span>
          )}
        </div>

        {/* Right: price */}
        <span className="shrink-0 font-jost text-sm font-medium text-dark/80 tabular-nums">
          € {item.price}
        </span>
      </div>

      {/* Description */}
      {item.description && (
        <p className="font-jost text-[14px] font-light leading-relaxed text-dark/75 mt-1.5 max-w-xl">
          {item.description}
        </p>
      )}
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function RistorazioneMenu({ categories }: Props) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? '')

  const activeCategory = categories.find((c) => c.id === activeId)

  return (
    <div>
      {/* ── Tab bar ──────────────────────────────────────────────────── */}
      <div className="relative mb-10">
        <div
          className="flex border-b border-dark/[0.09] overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          role="tablist"
          aria-label="Categorie del menu"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
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
                className="relative shrink-0 px-6 py-4 font-jost text-[14px] tracking-[0.12em] uppercase transition-colors duration-300 focus-visible:outline-none snap-start"
                style={{ color: isActive ? '#1A1A18' : 'rgba(26,26,24,0.65)' }}
              >
                {cat.label}

                {/*
                  Gold underline indicator
                */}
                {isActive && (
                  <motion.div
                    layoutId="ristorante-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px]"
                    style={{ backgroundColor: '#C9A84C' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                  />
                )}
              </button>
            )
          })}
        </div>
        
        {/* Mobile Scroll Indicator (Dashes/Dots) */}
        <div className="flex justify-center items-center gap-2 mt-4 lg:hidden">
          {categories.map((cat) => (
            <motion.div 
              key={cat.id} 
              className={`h-[1px] rounded-full transition-colors duration-500 ${activeId === cat.id ? 'bg-gold' : 'bg-dark/15'}`}
              animate={{ 
                width: activeId === cat.id ? 20 : 6,
                opacity: activeId === cat.id ? 1 : 0.4
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          ))}
        </div>
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
              <MenuRow
                key={item.name}
                item={item}
                isLast={i === activeCategory.items.length - 1}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Allergeni ────────────────────────────────────────────────── */}
      <div className="mt-14 pt-8 border-t border-dark/[0.15]">
        <p className="font-jost text-sm font-light leading-[1.85] text-dark/70 max-w-2xl">
          <span className="font-medium tracking-[0.12em] uppercase text-dark">Allergeni — </span>
          Il nostro menu può contenere o essere entrato in contatto con sostanze allergeniche.
          Se hai allergie o intolleranze alimentari, informa il personale di sala prima di ordinare.
          Lista completa degli allergeni disponibile su richiesta.{' '}
          <a
            href="#"
            className="underline underline-offset-2 hover:text-sea transition-colors duration-200"
            onClick={(e) => e.preventDefault()}
          >
            Consulta la scheda allergeni
          </a>
          . Menu soggetto a variazioni stagionali secondo disponibilità del pescato.
        </p>
      </div>
    </div>
  )
}
