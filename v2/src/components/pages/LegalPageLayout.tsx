import type { ReactNode } from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { lightSectionTheme } from '../../theme'
import { PlanetHorizon } from '../brand/PlanetHorizon'

type LegalPageLayoutProps = {
  title: string
  effectiveDate: string
  children: ReactNode
}

export function LegalPageLayout({ title, effectiveDate, children }: LegalPageLayoutProps) {
  return (
    <ThemeProvider theme={lightSectionTheme}>
      <Box
        component="main"
        sx={{
          position: 'relative',
          zIndex: 1,
          backgroundColor: 'background.default',
          color: 'text.primary',
          overflow: 'visible',
        }}
      >
        <PlanetHorizon />

        <Container maxWidth="md" sx={{ py: { xs: 4, md: 7 } }}>
          <Stack spacing={1.2} className="reveal" sx={{ mb: { xs: 4, md: 5 } }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.22em', fontWeight: 700 }}>
              Legal
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', sm: '2.4rem', md: '2.8rem' } }}>
              {title}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Effective as of {effectiveDate}.</Typography>
          </Stack>

          <Stack spacing={2} className="reveal reveal-delay-1">
            {children}
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export function LegalHeading({ children }: { children: ReactNode }) {
  return (
    <Typography variant="h4" component="h2" sx={{ mt: 2.5, fontSize: { xs: '1.3rem', md: '1.5rem' } }}>
      {children}
    </Typography>
  )
}

export function LegalText({ children }: { children: ReactNode }) {
  return <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{children}</Typography>
}

export function LegalList({ children }: { children: ReactNode }) {
  return (
    <Box component="ul" sx={{ m: 0, pl: 3, display: 'grid', gap: 1 }}>
      {children}
    </Box>
  )
}

export function LegalListItem({ children }: { children: ReactNode }) {
  return (
    <Typography component="li" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
      {children}
    </Typography>
  )
}
