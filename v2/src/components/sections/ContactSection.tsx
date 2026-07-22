import { Box, Button, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material'
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded'
import type { ContactFormState, SocialLink } from '../landing.types'

// Formspree form id (shared with the V1 site). reCAPTCHA is enabled on this
// form, so it must be submitted as a native HTML POST rather than via AJAX.
const FORMSPREE_ACTION = 'https://formspree.io/f/xdoqaozn'

type ContactSectionProps = {
  contactPurposes: string[]
  contactForm: ContactFormState
  onContactChange: (field: keyof ContactFormState, value: string) => void
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
  contactStatus,
  socialLinks,
}: ContactSectionProps) {
  // After submission Formspree redirects to `_next`; flag the result so we can
  // show the success/error message once back on the page.
  const nextUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}${window.location.pathname}?contact=success#contact`
      : ''

  return (
    <Box id="contact" className="reveal reveal-delay-3" sx={{ scrollMarginTop: 92 }}>
      <Stack className="scroll-reveal" spacing={1.4} sx={{ mb: 3, alignItems: 'center', textAlign: 'center' }}>
        <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.22em', fontWeight: 700 }}>
          Get in touch
        </Typography>
        <Typography variant="h2">Talk to the team</Typography>
        <Typography sx={{ color: 'text.secondary', maxWidth: 640 }}>
          Whether it's partnerships, enterprise hosting, investment, or support, tell us what you need and we will get back to you.
        </Typography>
      </Stack>

      <Box className="scroll-reveal scroll-reveal-delay-1" sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', lg: '1.5fr 1fr' } }}>
        <Paper variant="outlined" sx={{ p: { xs: 2, md: 2.5 }, ...cardSx }}>
          <Box
            component="form"
            action={FORMSPREE_ACTION}
            method="POST"
            sx={{ display: 'grid', gap: 1.3 }}
          >
            <input type="hidden" name="subject" value={`${contactForm.purpose} New submission`} />
            <input type="hidden" name="_next" value={nextUrl} />
            <TextField
              label="Name"
              name="name"
              value={contactForm.name}
              onChange={(event) => onContactChange('name', event.target.value)}
              fullWidth
            />
            <TextField
              label="Purpose"
              name="purpose"
              value={contactForm.purpose}
              onChange={(event) => onContactChange('purpose', event.target.value)}
              select
              fullWidth
            >
              {contactPurposes.map((purpose) => (
                <MenuItem key={purpose} value={purpose}>
                  {purpose}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Email"
              name="email"
              type="email"
              required
              value={contactForm.email}
              onChange={(event) => onContactChange('email', event.target.value)}
              fullWidth
            />
            <TextField
              label="Message"
              name="message"
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
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.22em', fontWeight: 700 }}>
            Follow Skypier
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5, mb: 2 }}>
            Stay current with releases and announcements from the community.
          </Typography>
          <Stack spacing={1}>
            {socialLinks.map((social) => (
              <Box
                key={social.label}
                component="a"
                href={social.href}
                target="_blank"
                rel="noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  px: 1.75,
                  py: 1.25,
                  borderRadius: 2,
                  textDecoration: 'none',
                  color: 'text.primary',
                  border: '1px solid rgba(10, 22, 48, 0.10)',
                  transition: 'border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease',
                  '& .social-arrow': {
                    ml: 'auto',
                    color: 'text.secondary',
                    opacity: 0,
                    transform: 'translateX(-4px)',
                    transition: 'opacity 0.2s ease, transform 0.2s ease',
                  },
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: 'rgba(10, 22, 48, 0.03)',
                    transform: 'translateY(-1px)',
                  },
                  '&:hover .social-arrow': {
                    opacity: 1,
                    transform: 'translateX(0)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', color: 'primary.main' }}>{social.icon}</Box>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {social.label}
                </Typography>
                <ArrowOutwardRoundedIcon className="social-arrow" fontSize="small" />
              </Box>
            ))}
          </Stack>
        </Paper>
      </Box>
    </Box>
  )
}
