import type { FormEvent } from 'react'
import { Box, Button, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material'
import type { ContactFormState, SocialLink } from '../landing.types'

type ContactSectionProps = {
  contactPurposes: string[]
  contactForm: ContactFormState
  onContactChange: (field: keyof ContactFormState, value: string) => void
  onContactSubmit: (event: FormEvent<HTMLFormElement>) => void
  contactStatus: 'idle' | 'loading' | 'success' | 'error'
  waitlistEmail: string
  onWaitlistEmailChange: (value: string) => void
  onWaitlistSubmit: (event: FormEvent<HTMLFormElement>) => void
  waitlistStatus: 'idle' | 'loading' | 'success' | 'error'
  socialLinks: SocialLink[]
}

export function ContactSection({
  contactPurposes,
  contactForm,
  onContactChange,
  onContactSubmit,
  contactStatus,
  waitlistEmail,
  onWaitlistEmailChange,
  onWaitlistSubmit,
  waitlistStatus,
  socialLinks,
}: ContactSectionProps) {
  return (
    <Box id="contact" className="reveal reveal-delay-3" sx={{ scrollMarginTop: 92 }}>
      <Stack spacing={1.5} sx={{ mb: 3 }}>
        <Typography variant="h2">Contact and waitlist</Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
          Reach out for partnerships, support, or investment conversations. Join the waitlist to get product updates as new releases ship.
        </Typography>
      </Stack>

      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', lg: '1.4fr 1fr' } }}>
        <Paper variant="outlined" sx={{ p: { xs: 2, md: 2.5 }, borderRadius: 4, backgroundColor: 'rgba(9, 20, 43, 0.76)' }}>
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

        <Stack spacing={2}>
          <Paper variant="outlined" sx={{ p: { xs: 2, md: 2.5 }, borderRadius: 4, backgroundColor: 'rgba(9, 20, 43, 0.76)' }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Join the waitlist
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Get notified about Blackhole early access and product updates.
            </Typography>
            <Box component="form" onSubmit={onWaitlistSubmit} sx={{ display: 'grid', gap: 1.2 }}>
              <TextField label="Email" type="email" required value={waitlistEmail} onChange={(event) => onWaitlistEmailChange(event.target.value)} />
              <Button type="submit" variant="outlined" disabled={waitlistStatus === 'loading'}>
                {waitlistStatus === 'loading' ? 'Submitting...' : 'Join waitlist'}
              </Button>
            </Box>
            {waitlistStatus === 'success' && (
              <Typography variant="body2" color="success.main" sx={{ mt: 1.2 }}>
                Thanks for joining. We will keep you updated.
              </Typography>
            )}
            {waitlistStatus === 'error' && (
              <Typography variant="body2" color="error.main" sx={{ mt: 1.2 }}>
                Waitlist submission failed. Please try again.
              </Typography>
            )}
          </Paper>

          <Paper variant="outlined" sx={{ p: { xs: 2, md: 2.5 }, borderRadius: 4, backgroundColor: 'rgba(9, 20, 43, 0.76)' }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Follow Skypier
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
              Stay current with releases and announcements.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
              {socialLinks.map((social) => (
                <Button key={social.label} component="a" href={social.href} target="_blank" rel="noreferrer" variant="text" startIcon={social.icon}>
                  {social.label}
                </Button>
              ))}
            </Stack>
          </Paper>
        </Stack>
      </Box>
    </Box>
  )
}
