'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // In produzione si potrebbe loggare su Sentry o simili
    console.error(error)
  }, [error])

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center bg-sand px-6 text-center">
      <span
        className="font-cormorant-sc text-[11px] tracking-[0.4em] uppercase text-dark/50 block mb-6"
      >
        Qualcosa non va
      </span>
      <h1
        className="font-cormorant font-light italic text-dark mb-6"
        style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
      >
        Si è verificato un errore
      </h1>
      <p className="font-jost text-base font-light text-dark/60 max-w-sm mb-10">
        Ci scusiamo per l&apos;inconveniente. Prova a ricaricare la pagina o torna alla home.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={reset}
          className="font-jost text-[11px] tracking-[0.25em] uppercase bg-dark text-cream px-10 py-4 transition-opacity duration-300 hover:opacity-80"
        >
          Riprova
        </button>
        <Link
          href="/"
          className="font-jost text-[11px] tracking-[0.25em] uppercase border border-dark/40 text-dark px-10 py-4 transition-colors duration-300 hover:bg-dark/5"
        >
          Torna alla Home
        </Link>
      </div>
    </div>
  )
}
