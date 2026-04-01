import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sand:           '#F5EDD8',
        'sand-dark':    '#E8D5B0',
        sea:            '#1B4F6B',
        'sea-light':    '#3A7FA0',
        'sea-pale':     '#B8D9E8',
        cream:          '#FAFAF8',
        dark:           '#1A1A18',
        gold:           '#C9A84C',
        terra:          '#C4704A',
      },
      fontFamily: {
        cormorant:       ['"Cormorant Garamond"', 'serif'],
        'cormorant-sc':  ['"Cormorant SC"', 'serif'],
        baskerville:     ['"Libre Baskerville"', 'serif'],
        jost:            ['Jost', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.8s ease forwards',
        'fade-in':    'fadeIn 1s ease forwards',
        'slow-zoom':  'slowZoom 8s ease-in-out infinite alternate',
        'bounce-slow':'bounceSlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%':   { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
