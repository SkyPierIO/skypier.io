import { keyframes } from '@emotion/react'
import { Box, Link, Stack, Typography } from '@mui/material'
import type { TechItem } from '../landing.types'

type TechStackSectionProps = {
  eyebrow: string
  title: string
  intro: string
  items: TechItem[]
}

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`

export function TechStackSection({ eyebrow, title, intro, items }: TechStackSectionProps) {
  // Duplicate the list so the marquee can loop seamlessly.
  const loop = [...items, ...items]

  return (
    <Box id="tech" className="reveal" sx={{ scrollMarginTop: 92 }}>
      <Stack spacing={1.2} sx={{ mb: { xs: 3, md: 4 }, alignItems: 'center', textAlign: 'center' }}>
        <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.22em', fontWeight: 700 }}>
          {eyebrow}
        </Typography>
        <Typography variant="h2">{title}</Typography>
        <Typography sx={{ color: 'text.secondary', maxWidth: 720 }}>{intro}</Typography>
      </Stack>

      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          py: 2,
          // Fade the logos out toward both edges.
          maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
          '&:hover .tech-track': { animationPlayState: 'paused' },
        }}
      >
        <Box
          className="tech-track"
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 'max-content',
            gap: { xs: 5, md: 9 },
            animation: `${scroll} 28s linear infinite`,
            '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
          }}
        >
          {loop.map((item, index) => (
            <Link
              key={`${item.name}-${index}`}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.name}
              sx={{ flex: 'none', display: 'grid', placeItems: 'center' }}
            >
              <Box
                component="img"
                src={item.logo}
                alt={item.name}
                loading="lazy"
                sx={{
                  height: { xs: 34, md: 46 },
                  width: 'auto',
                  objectFit: 'contain',
                  opacity: 0.65,
                  filter: 'grayscale(100%)',
                  transition: 'opacity 0.2s ease, filter 0.2s ease',
                  '&:hover': { opacity: 1, filter: 'none' },
                }}
              />
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
