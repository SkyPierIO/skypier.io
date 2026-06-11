import { Avatar, Box, Button, Paper, Stack, Typography } from '@mui/material'
import type { TeamMember } from '../landing.types'

type TeamSectionProps = {
  teamMembers: TeamMember[]
}

export function TeamSection({ teamMembers }: TeamSectionProps) {
  return (
    <Box id="team" className="reveal reveal-delay-2" sx={{ scrollMarginTop: 92 }}>
      <Stack spacing={1.5} sx={{ mb: 3 }}>
        <Typography variant="h2">Team</Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 760 }}>
          Founders and key contributors with backgrounds across product, security engineering, and growth operations.
        </Typography>
      </Stack>

      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' } }}>
        {teamMembers.map((member) => (
          <Paper key={member.name} variant="outlined" sx={{ p: 2.2, borderRadius: 4, backgroundColor: 'rgba(12, 24, 49, 0.76)' }}>
            <Stack direction="row" spacing={1.7} sx={{ alignItems: 'flex-start' }}>
              <Avatar src={member.image} alt={member.name} sx={{ width: 72, height: 72, border: '2px solid rgba(85, 221, 255, 0.45)' }} />
              <Stack spacing={0.5} sx={{ minWidth: 0 }}>
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="subtitle2" color="primary.light">
                  {member.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.bio}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ pt: 0.3 }}>
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
