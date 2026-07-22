import type { FormEvent } from 'react'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded'
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'

type BetaSectionProps = {
  eyebrow: string
  title: string
  description: string
  perks: string[]
  waitlistEmail: string
  onWaitlistEmailChange: (value: string) => void
  onWaitlistSubmit: (event: FormEvent<HTMLFormElement>) => void
  waitlistStatus: 'idle' | 'loading' | 'success' | 'error'
}

const lightText = '#f3f8ff'
const mutedText = 'rgba(230, 244, 255, 0.74)'
const accent = '#7fe3ff'
const inputSx = {
  '& .MuiOutlinedInput-root': {
    color: lightText,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    '& fieldset': { borderColor: 'rgba(230, 244, 255, 0.28)' },
    '&:hover fieldset': { borderColor: 'rgba(230, 244, 255, 0.45)' },
  },
  '& .MuiInputLabel-root': { color: mutedText },
}

export function BetaSection({
  eyebrow,
  title,
  description,
  perks,
  waitlistEmail,
  onWaitlistEmailChange,
  onWaitlistSubmit,
  waitlistStatus,
}: BetaSectionProps) {
  return (
    <Box
      id="beta"
      className="reveal"
      sx={{
        scrollMarginTop: 92,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 5,
        color: lightText,
        px: { xs: 2.5, md: 6 },
        py: { xs: 4, md: 6 },
        border: '1px solid rgba(85, 221, 255, 0.28)',
        boxShadow: '0 24px 60px rgba(8, 17, 35, 0.35)',
        background:
          'radial-gradient(circle at 85% 15%, rgba(85,221,255,0.22), transparent 50%), radial-gradient(circle at 10% 90%, rgba(255,84,145,0.18), transparent 48%), linear-gradient(150deg, #0b1c3b 0%, #081123 100%)',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gap: { xs: 3, md: 6 },
          alignItems: 'center',
          gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' },
        }}
      >
        <Stack className="scroll-reveal" spacing={1.8}>
          <Typography variant="overline" sx={{ color: accent, letterSpacing: '0.22em', fontWeight: 700 }}>
            {eyebrow}
          </Typography>
          <Typography variant="h2" sx={{ color: lightText, fontSize: { xs: '1.9rem', md: '2.6rem' } }}>
            {title}
          </Typography>
          <Typography sx={{ color: mutedText, maxWidth: 540 }}>{description}</Typography>

          <Stack spacing={0.9} sx={{ pt: 0.5 }}>
            {perks.map((perk) => (
              <Stack key={perk} direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <CheckCircleRoundedIcon sx={{ fontSize: 19, color: accent }} />
                <Typography variant="body2" sx={{ color: mutedText }}>
                  {perk}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Paper
          className="scroll-reveal scroll-reveal-delay-1"
          variant="outlined"
          sx={{
            p: { xs: 2.5, md: 3 },
            borderRadius: 4,
            backgroundColor: 'rgba(7, 15, 34, 0.6)',
            border: '1px solid rgba(230, 244, 255, 0.16)',
          }}
        >
          <Stack spacing={1.2} sx={{ mb: 2, alignItems: 'flex-start' }}>
            <Box
              sx={{
                width: 46,
                height: 46,
                borderRadius: 2.5,
                display: 'grid',
                placeItems: 'center',
                color: accent,
                background: 'linear-gradient(145deg, rgba(85,221,255,0.24), rgba(255,84,145,0.2))',
                border: '1px solid rgba(230, 244, 255, 0.16)',
              }}
            >
              <RocketLaunchRoundedIcon />
            </Box>
            <Typography variant="h6" sx={{ color: lightText }}>
              Get on the waiting list
            </Typography>
            <Typography variant="body2" sx={{ color: mutedText }}>
              Drop your email and we will reach out as beta spots open up.
            </Typography>
          </Stack>

          <Box component="form" onSubmit={onWaitlistSubmit} sx={{ display: 'grid', gap: 1.3 }}>
            <TextField
              label="Email"
              type="email"
              required
              value={waitlistEmail}
              onChange={(event) => onWaitlistEmailChange(event.target.value)}
              fullWidth
              sx={inputSx}
            />
            <Button type="submit" variant="contained" size="large" disabled={waitlistStatus === 'loading'}>
              {waitlistStatus === 'loading' ? 'Submitting...' : 'Join the beta'}
            </Button>
          </Box>

          {waitlistStatus === 'success' && (
            <Typography variant="body2" sx={{ mt: 1.4, color: '#7ef0c4' }}>
              You are on the list. We will keep you posted on early access.
            </Typography>
          )}
          {waitlistStatus === 'error' && (
            <Typography variant="body2" sx={{ mt: 1.4, color: '#ff9bb5' }}>
              Something went wrong. Please try again.
            </Typography>
          )}
        </Paper>
      </Box>
    </Box>
  )
}
