import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material'
import { Home, Email } from '@mui/icons-material'
import LogoWordmark from '../../assets/brand/svg/skypier_baseline.svg'

type SiteFooterProps = {
  currentYear: number
}

export function SiteFooter({ currentYear }: SiteFooterProps) {
  return (
    <Box 
      component="footer" 
      sx={{ 
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(14, 165, 233, 0.1)',
      }}
    >
      {/* Main Footer Content */}
      <Container maxWidth={false} sx={{ py: 10, px: { xs: 3, md: 6 } }}>
        <Grid container spacing={4}>
          {/* Column 1: Skypier Branding */}
          <Grid item xs={12} md={6} lg={3}>
            <Stack spacing={2}>
              <Box 
                component="img" 
                src={LogoWordmark} 
                alt="Skypier logo" 
                sx={{ height: 48, width: 'auto' }}
              />
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.85)',
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Skypier goal is to ensure freedom and privacy to the web through our product offers.
              </Typography>
            </Stack>
          </Grid>

          {/* Column 2: Products */}
          <Grid item xs={12} md={6} lg={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#0ea5e9',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                mb: 2,
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              Products
            </Typography>
            <Stack spacing={1.5} sx={{ alignItems: { xs: 'center', md: 'flex-start' } }}>
              <Link 
                href="https://tinglik.notion.site/On-boarding-the-SkyPier-Network-0967d277dfee49dfb2e537a1b89961b6"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: '#0ea5e9' }
                }}
              >
                Skypier VPN
              </Link>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.85)',
                  opacity: 0.5,
                  cursor: 'not-allowed'
                }}
              >
                More to come...
              </Typography>
            </Stack>
          </Grid>

          {/* Column 3: Useful Links */}
          <Grid item xs={12} md={6} lg={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#0ea5e9',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                mb: 2,
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              Useful Links
            </Typography>
            <Stack spacing={1.5} sx={{ alignItems: { xs: 'center', md: 'flex-start' } }}>
              <Link 
                href="/terms-of-service"
                underline="none"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: '#0ea5e9' }
                }}
              >
                Terms of Service
              </Link>
              <Link 
                href="/privacy-policy"
                underline="none"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: '#0ea5e9' }
                }}
              >
                Privacy Policy
              </Link>
              <Link 
                href="https://tinglik.notion.site/On-boarding-the-SkyPier-Network-0967d277dfee49dfb2e537a1b89961b6"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: '#0ea5e9' }
                }}
              >
                Documentation
              </Link>
            </Stack>
          </Grid>

          {/* Column 4: Contact */}
          <Grid item xs={12} md={6} lg={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#0ea5e9',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                mb: 2,
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              Contact
            </Typography>
            <Stack spacing={1.5} sx={{ alignItems: { xs: 'center', md: 'flex-start' } }}>
              {/* Address */}
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                <Home sx={{ fontSize: 20, color: 'rgba(255, 255, 255, 0.85)', flexShrink: 0 }} />
                <Typography 
                  variant="body2" 
                  sx={{ color: 'rgba(255, 255, 255, 0.85)' }}
                >
                  New York, NY 10012, US
                </Typography>
              </Stack>
              
              {/* Email */}
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <Email sx={{ fontSize: 20, color: 'rgba(255, 255, 255, 0.85)', flexShrink: 0 }} />
                <Link 
                  href="mailto:info@skypier.io"
                  underline="none"
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.85)',
                    fontSize: '0.875rem',
                    transition: 'color 0.2s ease',
                    '&:hover': { color: '#0ea5e9' }
                  }}
                >
                  info@skypier.io
                </Link>
              </Stack>
              
              {/* Social Links */}
              <Stack 
                direction="row" 
                spacing={2}
                sx={{ 
                  mt: 1,
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}
              >
                <Link 
                  href="https://twitter.com/SkypierIO"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.85)',
                    transition: 'all 0.2s ease',
                    '&:hover': { 
                      color: '#0ea5e9',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <i className="fab fa-lg fa-x-twitter"></i>
                </Link>
                <Link 
                  href="https://github.com/SkyPierIO"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.85)',
                    transition: 'all 0.2s ease',
                    '&:hover': { 
                      color: '#0ea5e9',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <i className="fab fa-lg fa-github"></i>
                </Link>
                <Link 
                  href="https://www.linkedin.com/company/Skypier"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.85)',
                    transition: 'all 0.2s ease',
                    '&:hover': { 
                      color: '#0ea5e9',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <i className="fab fa-lg fa-linkedin"></i>
                </Link>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Copyright Section */}
      <Box 
        sx={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          py: 3,
          textAlign: 'center'
        }}
      >
        <Typography 
          variant="body2" 
          sx={{ color: 'rgba(255, 255, 255, 0.6)' }}
        >
          © {currentYear} Skypier Technologies
        </Typography>
      </Box>
    </Box>
  )
}
