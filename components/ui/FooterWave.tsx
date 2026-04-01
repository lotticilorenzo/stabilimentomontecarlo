/**
 * FooterWave
 * Decorative SVG wave transition placed between the last content section
 * and the footer. Matches the last section color at top and `dark` (#1A1A18)
 * at the bottom.
 *
 * Usage:
 *   <FooterWave fromColor="#F5EDD8" />
 *   <Footer />
 */
interface FooterWaveProps {
  /** Background color of the section ABOVE the wave. Default: sand (#F5EDD8) */
  fromColor?: string
}

export default function FooterWave({ fromColor = '#F5EDD8' }: FooterWaveProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        backgroundColor: fromColor,
        lineHeight: 0,
        display: 'block',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
      }}
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '80px' }}
      >
        <path
          d="M0 0 C240 80 480 0 720 40 C960 80 1200 0 1440 20 L1440 80 L0 80 Z"
          fill="#1A1A18"
        />
      </svg>
    </div>
  )
}
