'use client'

import { useEffect } from 'react'

/**
 * ChunkErrorRecovery
 * Rileva automaticamente ChunkLoadError (chunk JS stale in cache dopo restart
 * del dev server o nuovo deploy) e fa reload silenzioso della pagina.
 * Senza questo, l'utente vede una pagina bianca e deve refreshare manualmente.
 */
export default function ChunkErrorRecovery() {
  useEffect(() => {
    const handle = (event: ErrorEvent) => {
      const msg = event.message ?? ''
      const isChunkError =
        msg.includes('Loading chunk') ||
        msg.includes('ChunkLoadError') ||
        msg.includes('Failed to fetch dynamically imported module') ||
        msg.includes('Importing a module script failed')

      if (isChunkError) {
        // Invalida la cache del browser e ricarica
        if ('caches' in window) {
          caches.keys().then((names) => Promise.all(names.map((n) => caches.delete(n))))
        }
        window.location.reload()
      }
    }

    window.addEventListener('error', handle)
    return () => window.removeEventListener('error', handle)
  }, [])

  return null
}
