'use client'
// @ts-nocheck
/* eslint-disable */

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Navigation structure ────────────────────────────────────────────────────

type NavItem =
  | { href: string; label: string; dropdown?: never }
  | { href?: never; label: string; dropdown: { href: string; label: string }[] }

const NAV_ITEMS: NavItem[] = [
  { href: '/chi-siamo', label: 'Chi Siamo' },
  {
    label: 'Cucina',
    dropdown: [
      { href: '/ristorazione', label: 'Ristorante' },
      { href: '/aperitivi', label: 'Aperitivi' },
      { href: '/pizza', label: 'Pizza' },
    ],
  },
  { href: '/bagni', label: 'Bagni' },
  { href: '/contatti', label: 'Contatti' },
]



// ─── Icons ───────────────────────────────────────────────────────────────────

function ChevronDown({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 4.5l4 4 4-4" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}

function HamburgerIcon({ color }: { color: string }) {
  return (
    <span className="flex flex-col gap-[7px]" aria-hidden="true">
      <span className="block w-6 h-px transition-colors duration-500" style={{ backgroundColor: color }} />
      <span className="block w-4 h-px transition-colors duration-500 ml-auto" style={{ backgroundColor: color }} />
    </span>
  )
}

const IconIG = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
)
const IconFB = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
)

// ─── Desktop Dropdown ─────────────────────────────────────────────────────────

interface DropdownProps {
  items: { href: string; label: string }[]
  isScrolled: boolean
}

function DesktopDropdown({ items, isScrolled }: DropdownProps) {
  const [open, setOpen] = useState(false)

  return (
      <div
        className="relative h-full flex items-center"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Link
          href="/cucina"
          className="font-jost text-[11px] font-light tracking-[0.2em] uppercase flex items-center gap-1.5 transition-colors duration-[400ms] hover:text-sea"
          style={{ color: isScrolled ? '#1A1A18' : '#FAFAF8' }}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls="cucina-dropdown"
        >
          Cucina
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown />
          </motion.span>
        </Link>
  
        <AnimatePresence>
          {open && (
            <motion.ul
              id="cucina-dropdown"
              role="listbox"
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
              /* paddingTop creates an invisible hover bridge so mouse doesn't leave */
              className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 pb-1 min-w-[175px] bg-transparent"
            >
              <div className="bg-cream border border-sand-dark/40 shadow-[0_8px_32px_rgba(26,26,24,0.12)] overflow-hidden">
                {items.map((item, i) => (
                  <motion.li
                    key={item.href}
                    role="option"
                    aria-selected="false"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-6 py-3.5 font-jost text-xs font-light tracking-[0.12em] uppercase text-dark/70 hover:text-sea hover:bg-sand transition-colors duration-200"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    )
  }

// ─── Main Navbar Component ────────────────────────────────────────────────────

const vibrate = (ms: number = 10) => {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    navigator.vibrate(ms)
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [bannerVisible, setBannerVisible] = useState(false)

  const overlayRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  // ── Banner Listener ──────────────────────────────────────────────────────

  useEffect(() => {
    const handleBanner = (e: any) => setBannerVisible(e.detail.visible)
    window.addEventListener('seasonBannerState', handleBanner)
    return () => window.removeEventListener('seasonBannerState', handleBanner)
  }, [])

  // ── Scroll listener ──────────────────────────────────────────────────────

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Body scroll lock ─────────────────────────────────────────────────────

  useEffect(() => {
    if (mobileOpen) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // ── Navigation actions ───────────────────────────────────────────────────

  const openMenu = useCallback(() => {
    vibrate(10)
    setMobileOpen(true)
  }, [])

  const closeMenu = useCallback(() => {
    vibrate(8)
    setMobileOpen(false)
  }, [])

  const handleOverlayKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') closeMenu()
  }, [closeMenu])

  // ── Colours ──────────────────────────────────────────────────────────────

  const textColor = scrolled ? '#1A1A18' : '#FAFAF8'
  const navBg = scrolled ? 'rgba(245, 237, 216, 0.92)' : 'transparent'
  const navBackdrop = scrolled ? 'blur(16px)' : 'none'

  // ── Animation Variants ──────────────────────────────────────────────────

  const transitionExpo = { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  const transitionSmooth = { duration: 0.6, ease: [0.33, 1, 0.68, 1] }

  const menuVariants: any = {
    closed: { x: '100%', transition: transitionSmooth },
    open: { x: 0, transition: transitionExpo },
  }

  const linkContainerVariants: any = {
    open: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  }

  const linkItemVariants: any = {
    open: { opacity: 1, x: 0, transition: transitionExpo },
    closed: { opacity: 0, x: 40, transition: transitionSmooth },
  }

  return (
    <>
      {/* ── Main Navbar ───────────────────────────────────────────────────── */}
      <nav
        className={`${scrolled ? 'fixed' : 'absolute'} left-0 right-0 z-50 transition-all duration-500`}
        style={{ 
          top: scrolled ? '0px' : '0px',
          backgroundColor: navBg, 
          backdropFilter: navBackdrop, 
          height: scrolled ? '70px' : '90px'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
          <Link
            href="/"
            className="font-cormorant text-2xl font-light tracking-[0.25em] uppercase"
            style={{ color: textColor }}
            aria-label="Homepage"
          >
            <motion.span
              animate={{ scale: scrolled ? 0.85 : 1 }}
              transition={{ duration: 0.4 }}
              className="inline-block origin-left"
            >
              Montecarlo
            </motion.span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10 h-full">
            {NAV_ITEMS.map((item) => (
              item.dropdown ? (
                <DesktopDropdown key={item.label} items={item.dropdown} isScrolled={scrolled} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-jost text-[11px] font-light tracking-[0.2em] uppercase transition-colors duration-400 hover:text-sea"
                  style={{ color: textColor }}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            ref={hamburgerRef}
            className="lg:hidden p-2 group"
            onClick={openMenu}
            aria-label="Apri menu"
          >
            <HamburgerIcon color={textColor} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Overhaul Overlay ────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.4}
            onDragEnd={(_, info) => {
              if (info.offset.x > 120 || info.velocity.x > 400) {
                closeMenu()
              }
            }}
            onKeyDown={handleOverlayKeyDown}
            className="fixed inset-0 z-[101] flex flex-col pointer-events-auto touch-none"
            style={{ backgroundColor: '#1B4F6B' }}
          >
            {/* Grain Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.22] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            {/* Header */}
            <div className="relative z-10 flex items-center justify-between px-6 pt-6 pb-2">
              <Link
                href="/"
                onClick={closeMenu}
                className="font-cormorant text-2xl font-light tracking-[0.25em] uppercase text-cream/90"
              >
                Montecarlo
              </Link>
              <button
                ref={closeButtonRef}
                onClick={closeMenu}
                className="text-cream/80 p-2 hover:text-cream transition-colors"
                aria-label="Chiudi menu"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-10 relative z-10">
              <motion.nav
                variants={linkContainerVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex flex-col gap-6"
              >
                {NAV_ITEMS.map((item, i) => {
                  const num = String(i + 1).padStart(2, '0')
                  
                  if (item.dropdown) {
                    return (
                      <div key={item.label} className="flex flex-col">
                        <motion.div variants={linkItemVariants as any} className="flex items-baseline gap-4 mb-3">
                          <span className="font-cormorant-sc text-[10px] tracking-widest text-gold opacity-50">{num}</span>
                          <Link href="/cucina" onClick={closeMenu} className="font-cormorant text-4xl font-light italic text-cream/70 hover:text-gold transition-colors">
                            {item.label}
                          </Link>
                        </motion.div>
                        <div className="flex flex-col gap-3 pl-8">
                          {item.dropdown.map((sub) => (
                            <motion.div key={sub.href} variants={linkItemVariants as any}>
                              <Link
                                href={sub.href}
                                onClick={() => { vibrate(5); closeMenu() }}
                                className="font-jost text-2xl font-light tracking-wide text-cream/80 hover:text-gold transition-colors"
                              >
                                {sub.label}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )
                  }

                  return (
                    <motion.div key={item.href} variants={linkItemVariants as any}>
                      <Link
                        href={item.href}
                        onClick={() => { vibrate(5); closeMenu() }}
                        className="flex items-baseline gap-5 group"
                      >
                        <span className="font-cormorant-sc text-[11px] tracking-[0.3em] text-gold/60 group-hover:text-gold transition-colors">{num}</span>
                        <span className="font-cormorant text-5xl md:text-6xl font-light italic text-cream group-hover:text-gold transition-colors">
                          {item.label}
                        </span>
                      </Link>
                    </motion.div>
                  )
                })}
              </motion.nav>
            </div>

            {/* Footer / Socials */}
            <div className="relative z-10 px-10 py-10 border-t border-cream/5 flex flex-col gap-6">
              <div className="flex gap-6">
                <a href="https://instagram.com/bagnomontecarlo" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-cream/80 hover:text-gold transition-colors"><IconIG /></a>
                <a href="https://facebook.com/bagnomontecarlo" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-cream/80 hover:text-gold transition-colors"><IconFB /></a>
              </div>
              <p className="font-jost text-[10px] tracking-[0.25em] uppercase text-cream/80">
                Lido di Ravenna · Italia
              </p>
            </div>

            {/* Swipe to close indicator line */}
            <div className="absolute right-1 top-1/2 -translate-y-1/2 w-1 h-12 bg-cream/5 rounded-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
