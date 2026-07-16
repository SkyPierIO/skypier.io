import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded'
import { Box, Button, Card, CardContent, Chip, Container, Stack, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { lightSectionTheme } from '../../theme'
import { PlanetHorizon } from '../brand/PlanetHorizon'
import type { Product } from '../landing.types'

type ProductsPageProps = {
  products: Product[]
}

const productLogoByName: Record<string, string> = {
  'Skypier VPN': '/vpn.png',
  'Skypier dM': '/dM.svg',
  'Skypier Blackhole': '/blackhole.png',
}

function getProductMonogram(name: string) {
  if (name.includes('dM')) {
    return 'dM'
  }

  if (name.includes('Blackhole')) {
    return 'BH'
  }

  if (name.includes('VPN')) {
    return 'VPN'
  }

  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()
}

function getProductLogoSrc(name: string) {
  return productLogoByName[name]
}

// Anchor id for deep links to a product card, e.g. /products#skypier-vpn.
export function getProductAnchorId(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-')
}

export function ProductsPage({ products }: ProductsPageProps) {
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

        <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 }, display: 'grid', gap: { xs: 2.5, md: 3.5 } }}>
          <Box
            id="catalog"
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
            <Stack spacing={1.6} sx={{ maxWidth: 760 }}>
              <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.22em', fontWeight: 700 }}>
                Product catalog
              </Typography>
              <Typography variant="h1" sx={{ fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem' } }}>
                Every Skypier app, in one place
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.08rem' }, maxWidth: 680 }}>
                One decentralized network, a few different ways to use it. Pick the app that fits how you want to stay
                private and start in a couple of clicks.
              </Typography>
            </Stack>
          </Box>

          <Stack spacing={2.2}>
            {products.map((product, index) => {
              const logoSrc = getProductLogoSrc(product.name)

              return (
                <Card
                  key={product.name}
                  id={getProductAnchorId(product.name)}
                  className={`reveal reveal-delay-${Math.min(index + 1, 3)}`}
                  variant="outlined"
                  sx={{
                    scrollMarginTop: 92,
                    borderRadius: 4,
                    backgroundColor: 'background.paper',
                    border: '1px solid rgba(10, 22, 48, 0.10)',
                  }}
                >
                  <CardContent
                    sx={{
                      p: { xs: 2.2, md: 3 },
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', md: '96px minmax(0, 1fr) auto' },
                      gap: { xs: 1.8, md: 2.6 },
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      aria-label={`${product.name} logo`}
                      sx={{
                        width: 96,
                        height: 96,
                        borderRadius: 3.5,
                        display: 'grid',
                        placeItems: 'center',
                        overflow: 'hidden',
                        color: 'primary.main',
                        background: 'linear-gradient(145deg, rgba(0,153,187,0.14), rgba(255,84,145,0.12))',
                        border: '1px solid rgba(10, 22, 48, 0.08)',
                        letterSpacing: 1,
                      }}
                    >
                      {logoSrc ? (
                        <Box
                          component="img"
                          src={logoSrc}
                          alt={`${product.name} logo`}
                          sx={{
                            width: '100%',
                            height: '100%',
                            // The logo sources are square images with their own background,
                            // so cover + a slight zoom makes them fill the rounded box edge to edge.
                            objectFit: 'cover',
                            transform: 'scale(1.12)',
                            transformOrigin: 'center',
                          }}
                        />
                      ) : (
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
                          {getProductMonogram(product.name)}
                        </Typography>
                      )}
                    </Box>

                    <Stack spacing={1}>
                      <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
                        <Typography variant="h5">{product.name}</Typography>
                        {product.badge && <Chip label={product.badge} color="secondary" size="small" />}
                      </Stack>
                      <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 600 }}>
                        {product.summary}
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>{product.description}</Typography>
                    </Stack>

                    <Stack spacing={1} sx={{ minWidth: { xs: 'auto', md: 188 } }}>
                      {product.ctas.map((cta) =>
                        cta.href ? (
                          <Button
                            key={cta.label}
                            component="a"
                            href={cta.href}
                            target="_blank"
                            rel="noreferrer"
                            variant={cta.variant}
                            startIcon={cta.icon}
                            endIcon={<ArrowOutwardRoundedIcon fontSize="small" />}
                            disabled={cta.disabled}
                          >
                            {cta.label}
                          </Button>
                        ) : (
                          <Button key={cta.label} variant={cta.variant} startIcon={cta.icon} disabled>
                            {cta.label}
                          </Button>
                        ),
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              )
            })}
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
