import { useEffect, useRef, useState } from 'react'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded'
import { Box, Button, Stack, Typography } from '@mui/material'
import { AnimatedKnotLogo } from '../brand/AnimatedKnotLogo'
import { SpeedBackground } from '../brand/SpeedBackground'
import { animate, stagger } from 'animejs'

const HEADLINE_LINES = [
  ['Stay', 'private.'],
  ['Be', 'you.'],
]

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let rafId = 0
    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => setScrollY(window.scrollY))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('scroll', onScroll) }
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

  // Content shrinks as the planet rises — scale 1→0.65, opacity 1→0 over first 70% of hero height
  const shrink = Math.min(scrollY / (window.innerHeight * 0.7), 1)
  const contentScale = 1 - shrink * 0.35
  const contentOpacity = Math.max(0, 1 - shrink * 1.4)

  const handleDiscover = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <Box
      id="hero"
      ref={heroRef}
      sx={{
        position: 'sticky',
        top: { xs: 68, md: 76 },
        zIndex: 0,
        height: { xs: 'calc(100svh - 68px)', md: 'calc(100svh - 76px)' },
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
      }}
    >
      {/* Particles */}
      <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <SpeedBackground />
      </Box>

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
          transform: `scale(${contentScale})`,
          opacity: contentOpacity,
          transformOrigin: 'center center',
          willChange: 'transform, opacity',
        }}
      >
        {/* Logo mark */}
        <Box
          sx={{
            width: { xs: 86, md: 128, lg: 160 },
            filter: 'drop-shadow(0 0 32px rgba(85,221,255,0.5)) drop-shadow(0 0 64px rgba(85,221,255,0.2))',
          }}
        >
          <AnimatedKnotLogo className="hero-knot-logo" />
        </Box>

        {/* Headline — word by word, guaranteed line break between lines */}
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontSize: { xs: '3.2rem', sm: '4.8rem', md: '6.5rem' }, lineHeight: 1.02, letterSpacing: '-0.04em', fontWeight: 300 }}
        >
          {HEADLINE_LINES.map((line, li) => (
            <Box key={li} component="span" sx={{ display: 'block' }}>
              {line.map((word, wi) => (
                <Box
                  key={wi}
                  component="span"
                  className="hero-word"
                  sx={{ display: 'inline-block', opacity: 0, mr: '0.22em' }}
                >
                  {word}
                </Box>
              ))}
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
