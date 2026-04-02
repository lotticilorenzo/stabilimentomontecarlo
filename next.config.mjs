/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development'

// ── Content Security Policy ────────────────────────────────────────────────────
// font-src:    Google Fonts files (gstatic) + self
// style-src:   Google Fonts stylesheet + self + inline (needed by Framer Motion)
// connect-src: weather APIs + WS for dev hot-reload
// img-src:     Unsplash CDN + data URIs + blobs
// media-src:   local video files
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' blob: data: https://images.unsplash.com https://grainy-gradients.vercel.app;
  media-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  frame-src 'self' https://maps.google.com https://www.google.com;
  connect-src 'self'
    https://wttr.in
    https://api.open-meteo.com
    ${isDev ? 'ws://localhost:* wss://localhost:*' : ''};
  upgrade-insecure-requests;
`

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Increase cache TTL for remote images (default is 60s, set to 7 days)
    minimumCacheTTL: 60 * 60 * 24 * 7,
  },

  async headers() {
    return [
      // ── Static assets: aggressive caching ─────────────────────────────
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // ── Images: 7-day cache ───────────────────────────────────────────
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400',
          },
        ],
      },
      // ── Video: strong caching for the hero loop ───────────────────────
      {
        source: '/videos/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes', // enables video seeking
          },
        ],
      },
      // ── All pages: security headers ───────────────────────────────────
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\n/g, '').replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ]
  },
}

export default nextConfig
