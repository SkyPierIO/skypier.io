import { Avatar, Box, Button, Paper, Stack, Typography } from '@mui/material'
import type { TeamMember } from '../landing.types'

type TeamSectionProps = {
  teamMembers: TeamMember[]
}

export function TeamSection({ teamMembers }: TeamSectionProps) {
  return (
    <Box id="team" className="reveal reveal-delay-2" sx={{ scrollMarginTop: 92 }}>
      <Stack spacing={1.4} sx={{ mb: { xs: 3, md: 4 }, alignItems: 'center', textAlign: 'center' }}>
        <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.22em', fontWeight: 700 }}>
          The people behind it
        </Typography>
        <Typography variant="h2">Built by a small, focused team</Typography>
        <Typography sx={{ color: 'text.secondary', maxWidth: 640 }}>
          Founders and contributors with backgrounds across product, security engineering, and decentralized infrastructure.
        </Typography>
      </Stack>

      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' } }}>
        {teamMembers.map((member) => (
          <Paper
            key={member.name}
            variant="outlined"
            sx={{
              p: 2.6,
              borderRadius: 4,
              backgroundColor: 'background.paper',
              border: '1px solid rgba(10, 22, 48, 0.10)',
            }}
          >
            <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
              <Avatar src={member.image} alt={member.name} sx={{ width: 76, height: 76, border: '2px solid rgba(0, 153, 187, 0.4)' }} />
              <Stack spacing={0.5} sx={{ minWidth: 0 }}>
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>
                  {member.role}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {member.bio}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ pt: 0.4 }}>
                  {member.links.map((teamLink) => (
                    <Button key={teamLink.label} component="a" href={teamLink.href} target="_blank" rel="noreferrer" size="small" variant="text" startIcon={teamLink.icon}>
                      {teamLink.label}
                    </Button>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Paper>
        ))}
      </Box>
    </Box>
  )
}
