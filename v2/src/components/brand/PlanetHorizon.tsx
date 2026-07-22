import { useEffect, useState } from 'react'

export function PlanetHorizon() {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const onScroll = () => setOpacity(Math.min(window.scrollY / 120, 1))
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 'clamp(70px, 10vw, 130px)',
        transform: 'translateY(-100%)',
        display: 'block',
        pointerEvents: 'none',
        overflow: 'visible',
        opacity,
      }}
    >
      <defs>
        <filter id="planet-atm-wide" x="-5%" y="-600%" width="110%" height="1400%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
        <filter id="planet-atm-tight" x="-5%" y="-200%" width="110%" height="500%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* Wide halo */}
      <path
        d="M-80,88 C360,20 1080,20 1520,88"
        stroke="rgba(140,230,255,0.28)"
        strokeWidth="72"
        fill="none"
        filter="url(#planet-atm-wide)"
      />
      {/* Inner atmosphere */}
      <path
        d="M-80,88 C360,20 1080,20 1520,88"
        stroke="rgba(200,245,255,0.45)"
        strokeWidth="18"
        fill="none"
        filter="url(#planet-atm-tight)"
      />
      {/* Crisp horizon line */}
      <path
        d="M-80,88 C360,20 1080,20 1520,88"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="1.2"
        fill="none"
        filter="url(#planet-atm-tight)"
      />
      {/* Surface fill */}
      <path
        d="M-80,88 C360,20 1080,20 1520,88 L1520,120 L-80,120 Z"
        fill="#F5F7FA"
      />
    </svg>
  )
}
