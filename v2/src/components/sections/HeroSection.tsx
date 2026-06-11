import { useEffect, useRef, useState } from 'react'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded'
import { Box, Button, Stack, Typography } from '@mui/material'
import { AnimatedKnotLogo } from '../brand/AnimatedKnotLogo'
import { SpeedBackground } from '../brand/SpeedBackground'
import { animate, stagger } from 'animejs'

const HEADLINE_WORDS = ['Stay', 'private.', 'Be', 'you.']

// Transition: hero goes pure black → light section bg (#F5F7FA) over 480 px starting at 120 px scroll
const TRANS_START = 120
const TRANS_RANGE = 480
const LIGHT_BG = [245, 247, 250] as const

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rafId = 0
    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => setScrollY(window.scrollY))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const el = heroRef.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.querySelectorAll<HTMLElement>('.hero-word, .hero-after').forEach(n => { n.style.opacity = '1' })
      return
    }

    const wordEls = Array.from(el.querySelectorAll<HTMLElement>('.hero-word'))
    const afterEls = Array.from(el.querySelectorAll<HTMLElement>('.hero-after'))

    const wordsAnim = animate(wordEls, {
      opacity: [0, 1],
      translateY: ['1.4rem', '0rem'],
      duration: 700,
      delay: stagger(95, { start: 420 }),
      ease: 'outExpo',
    })

    // subtitle + CTA start after the last word's animation peaks
    const afterStart = 420 + 95 * (wordEls.length - 1) + 480
    const afterAnim = animate(afterEls, {
      opacity: [0, 1],
      translateY: ['1rem', '0rem'],
      duration: 640,
      delay: stagger(160, { start: afterStart }),
      ease: 'outExpo',
    })

    return () => { wordsAnim.pause(); afterAnim.pause() }
  }, [])

  const progress = Math.max(0, Math.min((scrollY - TRANS_START) / TRANS_RANGE, 1))
  const [r, g, b] = LIGHT_BG
  const heroBg = `rgb(${Math.round(progress * r)},${Math.round(progress * g)},${Math.round(progress * b)})`
  const particlesOpacity = Math.max(0, 1 - progress * 2.2)
  // Fill fades in on first scroll then stays. Ft progress=1 both sides are #F5F7FA so the boundary vanishes naturally
  const fillOpacity = Math.min(scrollY / 80, 1)
  // Atmosphere glow fades in then fades out as the hero brightens
  const glowOpacity = fillOpacity * Math.max(0, 1 - progress)

  const handleDiscover = () => {
    const heroEl = document.getElementById('hero')
    window.scrollTo({ top: (heroEl?.offsetHeight ?? window.innerHeight), behavior: 'smooth' })
  }

  return (
    <Box
      id="hero"
      ref={heroRef}
      sx={{
        scrollMarginTop: 92,
        minHeight: { xs: 'calc(100svh - 68px)', md: 'calc(100svh - 76px)' },
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: heroBg,
      }}
    >
      {/* Particles */}
      <Box sx={{ position: 'absolute', inset: 0, opacity: particlesOpacity, pointerEvents: 'none', zIndex: 0 }}>
        <SpeedBackground />
      </Box>

      {/* Planet horizon. Fnvisible at top, fades in on scroll, atmospheric blur */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 'clamp(56px, 9vw, 108px)',
          zIndex: 2,
          pointerEvents: 'none',
          display: 'block',
          overflow: 'visible',
        }}
      >
        <defs>
          <filter id="atm-wide" x="-5%" y="-600%" width="110%" height="1400%">
            <feGaussianBlur stdDeviation="16" />
          </filter>
          <filter id="atm-tight" x="-5%" y="-200%" width="110%" height="500%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        {/* Wide halo. Foft cyan atmosphere well above the surface */}
        <path
          d="M-80,92 C360,38 1080,38 1520,92"
          stroke="rgba(140,230,255,0.28)"
          strokeWidth="72"
          fill="none"
          filter="url(#atm-wide)"
          opacity={glowOpacity}
        />

        {/* Tighter inner glow. Frighter, closer to surface */}
        <path
          d="M-80,92 C360,38 1080,38 1520,92"
          stroke="rgba(200,245,255,0.45)"
          strokeWidth="18"
          fill="none"
          filter="url(#atm-tight)"
          opacity={glowOpacity}
        />

        {/* Crisp horizon line */}
        <path
          d="M-80,92 C360,38 1080,38 1520,92"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.2"
          fill="none"
          filter="url(#atm-tight)"
          opacity={glowOpacity}
        />

        {/* Surface fill. Ftays opaque once visible so no hard rectangular seam shows */}
        <path
          d="M-80,92 C360,38 1080,38 1520,92 L1520,120 L-80,120 Z"
          fill="#F5F7FA"
          opacity={fillOpacity}
        />
      </svg>

      {/* Centered content */}
      <Stack
        spacing={{ xs: 3, md: 4 }}
        sx={{
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          px: { xs: 3, md: 8 },
          maxWidth: 860,
          width: '100%',
        }}
      >
        {/* Logo mark */}
        <Box
          sx={{
            width: { xs: 86, md: 112 },
            filter: 'drop-shadow(0 0 32px rgba(85,221,255,0.5)) drop-shadow(0 0 64px rgba(85,221,255,0.2))',
          }}
        >
          <AnimatedKnotLogo className="hero-knot-logo" />
        </Box>

        {/* Headline. Ford by word */}
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontSize: { xs: '3.2rem', sm: '4.8rem', md: '6.5rem' }, lineHeight: 1.02, letterSpacing: '-0.04em', fontWeight: 300 }}
        >
          {HEADLINE_WORDS.map((word, i) => (
            <Box
              key={i}
              component="span"
              className="hero-word"
              sx={{ display: 'inline-block', opacity: 0, mr: '0.22em' }}
            >
              {word}
            </Box>
          ))}
        </Typography>

        {/* Subtitle */}
        <Typography
          className="hero-after"
          color="text.secondary"
          sx={{
            opacity: 0,
            maxWidth: 480,
            fontSize: { xs: '1.05rem', md: '1.2rem' },
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          Decentralized VPN and messaging, simple and secure. For everyone.
        </Typography>

        {/* CTA */}
        <Box className="hero-after" sx={{ opacity: 0 }}>
          <Button
            variant="outlined"
            size="large"
            endIcon={<ArrowDownwardRoundedIcon />}
            onClick={handleDiscover}
            sx={{
              borderColor: 'rgba(255,255,255,0.30)',
              color: 'rgba(255,255,255,0.88)',
              px: 4,
              py: 1.4,
              borderRadius: 999,
              fontSize: '1rem',
              '&:hover': {
                borderColor: 'rgba(255,255,255,0.65)',
                backgroundColor: 'rgba(255,255,255,0.06)',
              },
            }}
          >
            Discover more
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}
