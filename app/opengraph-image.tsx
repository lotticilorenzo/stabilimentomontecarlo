import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Bagno Montecarlo Ravenna'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1B4F6B', // sea color
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(250,250,248,0.2)', // cream with opacity
            width: '100%',
            height: '100%',
            padding: '60px',
          }}
        >
          <span
            style={{
              fontSize: 32,
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: 'rgba(250, 250, 248, 0.6)',
              marginBottom: 40,
            }}
          >
            Ravenna · Adriatico
          </span>
          <h1
            style={{
              fontSize: 100,
              color: '#FAFAF8',
              fontStyle: 'italic',
              margin: 0,
              padding: 0,
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            Bagno Montecarlo
          </h1>
          <span
            style={{
              marginTop: 60,
              fontSize: 24,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C9A84C', // gold
            }}
          >
            Spiaggia · Ristorante · Aperitivi
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
