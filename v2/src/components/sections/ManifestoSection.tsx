import HubRoundedIcon from '@mui/icons-material/HubRounded'
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded'
import PublicRoundedIcon from '@mui/icons-material/PublicRounded'
import RouterRoundedIcon from '@mui/icons-material/RouterRounded'
import FlightRoundedIcon from '@mui/icons-material/FlightRounded'
import KeyRoundedIcon from '@mui/icons-material/KeyRounded'
import type { ReactNode } from 'react'
import { Box, Paper, Stack, Typography } from '@mui/material'
import type { ManifestoPoint } from '../landing.types'

type ManifestoSectionProps = {
  eyebrow: string
  title: string
  intro: string
  points: ManifestoPoint[]
}

const pointIcons: ReactNode[] = [
  <HubRoundedIcon />,
  <ShieldRoundedIcon />,
  <PublicRoundedIcon />,
  <RouterRoundedIcon />,
  <FlightRoundedIcon />,
  <KeyRoundedIcon />,
]

export function ManifestoSection({ eyebrow, title, intro, points }: ManifestoSectionProps) {
  return (
    <Box
      id="manifesto"
      className="reveal"
      sx={{
        scrollMarginTop: 92,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 5,
        px: { xs: 2.5, md: 6 },
        py: { xs: 4, md: 7 },
        border: '1px solid rgba(10, 22, 48, 0.08)',
        background:
          'radial-gradient(circle at 12% 12%, rgba(255,84,145,0.08), transparent 42%), radial-gradient(circle at 88% 80%, rgba(0,153,187,0.08), transparent 46%), linear-gradient(160deg, #ffffff 0%, #eef3fb 100%)',
      }}
    >
      <Stack spacing={1.6} sx={{ mb: { xs: 3.5, md: 5 }, maxWidth: 820 }}>
        <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.22em', fontWeight: 700 }}>
          {eyebrow}
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.6rem' } }}>
          {title}
        </Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.08rem' } }}>{intro}</Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' },
        }}
      >
        {points.map((point, index) => (
          <Paper
            key={point.title}
            variant="outlined"
            sx={{
              p: 2.4,
              borderRadius: 4,
              height: '100%',
              backgroundColor: 'background.paper',
              border: '1px solid rgba(10, 22, 48, 0.10)',
            }}
          >
            <Stack spacing={1.2}>
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: 2.5,
                  display: 'grid',
                  placeItems: 'center',
                  color: 'primary.main',
                  background: 'linear-gradient(145deg, rgba(0,153,187,0.14), rgba(255,84,145,0.12))',
                  border: '1px solid rgba(10, 22, 48, 0.08)',
                }}
              >
                {pointIcons[index % pointIcons.length]}
              </Box>
              <Typography variant="h6" sx={{ fontSize: '1.08rem' }}>
                {point.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {point.body}
              </Typography>
            </Stack>
          </Paper>
        ))}
      </Box>
    </Box>
  )
}
