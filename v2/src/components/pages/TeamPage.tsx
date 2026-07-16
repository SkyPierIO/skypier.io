import { Box, Container } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { lightSectionTheme } from '../../theme'
import { PlanetHorizon } from '../brand/PlanetHorizon'
import { TeamSection } from '../sections/TeamSection'
import type { TeamMember } from '../landing.types'

type TeamPageProps = {
  teamMembers: TeamMember[]
}

export function TeamPage({ teamMembers }: TeamPageProps) {
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
          // Short page: fill the viewport so the footer stays pinned to the bottom
          // (the app root is a flex column).
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <PlanetHorizon />

        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 7 }, width: '100%' }}>
          <TeamSection teamMembers={teamMembers} />
        </Container>
      </Box>
    </ThemeProvider>
  )
}
