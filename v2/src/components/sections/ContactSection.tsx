import type { FormEvent } from 'react'
import { Box, Button, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material'
import type { ContactFormState, SocialLink } from '../landing.types'

type ContactSectionProps = {
  contactPurposes: string[]
  contactForm: ContactFormState
  onContactChange: (field: keyof ContactFormState, value: string) => void
  onContactSubmit: (event: FormEvent<HTMLFormElement>) => void
  contactStatus: 'idle' | 'loading' | 'success' | 'error'
  socialLinks: SocialLink[]
}

const cardSx = {
  borderRadius: 4,
  backgroundColor: 'background.paper',
  border: '1px solid rgba(10, 22, 48, 0.10)',
}

export function ContactSection({
  contactPurposes,
  contactForm,
  onContactChange,
  onContactSubmit,
  contactStatus,
  socialLinks,
}: ContactSectionProps) {
  return (
    <Box id="contact" className="reveal reveal-delay-3" sx={{ scrollMarginTop: 92 }}>
      <Stack spacing={1.4} sx={{ mb: 3, alignItems: 'center', textAlign: 'center' }}>
        <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.22em', fontWeight: 700 }}>
          Get in touch
        </Typography>
        <Typography variant="h2">Talk to the team</Typography>
        <Typography sx={{ color: 'text.secondary', maxWidth: 640 }}>
          Whether it's partnerships, enterprise hosting, investment, or support, tell us what you need and we will get back to you.
        </Typography>
      </Stack>

      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', lg: '1.5fr 1fr' } }}>
        <Paper variant="outlined" sx={{ p: { xs: 2, md: 2.5 }, ...cardSx }}>
          <Box component="form" onSubmit={onContactSubmit} sx={{ display: 'grid', gap: 1.3 }}>
            <TextField label="Name" value={contactForm.name} onChange={(event) => onContactChange('name', event.target.value)} fullWidth />
            <TextField label="Purpose" value={contactForm.purpose} onChange={(event) => onContactChange('purpose', event.target.value)} select fullWidth>
              {contactPurposes.map((purpose) => (
                <MenuItem key={purpose} value={purpose}>
                  {purpose}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Email"
              type="email"
              required
              value={contactForm.email}
              onChange={(event) => onContactChange('email', event.target.value)}
              fullWidth
            />
            <TextField
              label="Message"
              value={contactForm.message}
              onChange={(event) => onContactChange('message', event.target.value)}
              required
              multiline
              minRows={4}
              fullWidth
            />

            <Button type="submit" variant="contained" disabled={contactStatus === 'loading'}>
              {contactStatus === 'loading' ? 'Sending...' : 'Send message'}
            </Button>

            {contactStatus === 'success' && (
              <Typography variant="body2" color="success.main">
                Thanks, your message was sent successfully.
              </Typography>
            )}
            {contactStatus === 'error' && (
              <Typography variant="body2" color="error.main">
                Something went wrong while sending your message. Please try again.
              </Typography>
            )}
          </Box>
        </Paper>

        <Paper variant="outlined" sx={{ p: { xs: 2, md: 2.5 }, ...cardSx, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Follow Skypier
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
            Stay current with releases and announcements from the community.
          </Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
            {socialLinks.map((social) => (
              <Button key={social.label} component="a" href={social.href} target="_blank" rel="noreferrer" variant="text" startIcon={social.icon}>
                {social.label}
              </Button>
            ))}
          </Stack>
        </Paper>
      </Box>
    </Box>
  )
}
