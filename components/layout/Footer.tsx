import Link from 'next/link'
import FooterWave from '@/components/ui/FooterWave'
import WeatherWidget from '@/components/ui/WeatherWidget'

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { href: '/chi-siamo',    label: 'Chi Siamo' },
  { href: '/cucina',       label: 'La Cucina' },
  { href: '/ristorazione', label: 'Ristorante' },
  { href: '/aperitivi',    label: 'Aperitivi' },
  { href: '/pizza',        label: 'Pizza' },
  { href: '/bagni',        label: 'La Spiaggia' },
  { href: '/contatti',     label: 'Contatti' },
]

// ─── SVG icons (inline, no external deps) ────────────────────────────────────

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <FooterWave fromColor="#F5EDD8" />
      <footer
        className="relative"
        style={{ backgroundColor: '#1A1A18' }}
      >
      {/* Gold top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ backgroundColor: '#C9A84C', opacity: 0.4 }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">

        {/* ── 3-column grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 lg:gap-16 pb-16 border-b border-cream/[0.07]">

          {/* Col 1 — Logo + filosofia + social */}
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="font-cormorant text-3xl font-light tracking-[0.22em] uppercase text-cream hover:text-gold transition-colors duration-[400ms] self-start"
            >
              Montecarlo
            </Link>

            <p className="font-jost text-sm font-light leading-[1.8] text-cream/80 max-w-[260px]">
              Un luogo dove il tempo rallenta.<br />
              Sull&apos;Adriatico, a Ravenna — dal mare.
            </p>

            {/* Weather Widget */}
            <div className="pt-2">
              <WeatherWidget />
            </div>

            {/* Social */}
            <div className="flex items-center gap-5 pt-1">
              <a
                href="https://instagram.com/bagnomontecarlo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguici su Instagram"
                className="text-cream/80 hover:text-gold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com/bagnomontecarlo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguici su Facebook"
                className="text-cream/80 hover:text-gold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Col 2 — Navigazione */}
          <div>
            <h2 className="font-cormorant-sc text-[11px] tracking-[0.3em] uppercase text-cream/80 mb-7">
              Esplora
            </h2>
            <nav aria-label="Link footer">
              <ul className="space-y-3.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 font-jost text-sm font-light text-cream/80 hover:text-cream transition-colors duration-300"
                    >
                      {/* Animated dash on hover */}
                      <span
                        className="block h-px bg-gold transition-all duration-300 origin-left"
                        style={{ width: '0px' }}
                        aria-hidden="true"
                      />
                      <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 3 — Contatti */}
          <div>
            <h2 className="font-cormorant-sc text-[11px] tracking-[0.3em] uppercase text-cream/80 mb-7">
              Dove Siamo
            </h2>
            <address className="not-italic space-y-5">
              <div className="font-jost text-sm font-light leading-[1.8] text-cream/80">
                Viale della Pace, 421<br />
                48122 Ravenna (RA)
              </div>

              <div className="space-y-2">
                <a
                  href="tel:+390544000000"
                  className="block font-jost text-sm font-light text-cream/80 hover:text-cream transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                >
                  +39 0544 000000
                </a>
                <a
                  href="mailto:info@bagnomontecarlo.it"
                  className="block font-jost text-sm font-light text-cream/80 hover:text-cream transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                >
                  info@bagnomontecarlo.it
                </a>
              </div>

              <div className="pt-1">
                <span className="font-cormorant-sc text-[10px] tracking-[0.25em] uppercase text-cream/80 block mb-1">
                  Stagione
                </span>
                <p className="font-jost text-sm font-light text-cream/80">
                  Maggio — Settembre<br />
                  Ogni giorno 8:30 – 20:00
                </p>
              </div>
            </address>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────────────────── */}
        <div className="pt-8 flex flex-col items-center gap-2 text-center">
          <p className="font-jost text-[11px] font-light tracking-[0.2em] text-cream/80 uppercase">
            © {year} Bagno Montecarlo · Ravenna · P.IVA 00000000000
          </p>
          <p className="font-cormorant text-sm italic text-cream/15">
            Adriatico Eterno
          </p>
        </div>

      </div>
    </footer>
    </>
  )
}
