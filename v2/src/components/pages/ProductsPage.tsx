import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded'
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { Box, Button, Card, CardContent, Chip, Container, Stack, Typography } from '@mui/material'
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

export function ProductsPage({ products }: ProductsPageProps) {
  return (
    <Container component="main" maxWidth="lg" sx={{ py: { xs: 3, md: 6 }, display: 'grid', gap: { xs: 2.5, md: 3.5 } }}>
      <Box
        id="catalog"
        className="reveal"
        sx={{
          p: { xs: 2.5, md: 4 },
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          background:
            'radial-gradient(circle at 10% 20%, rgba(85,221,255,0.14), transparent 46%), radial-gradient(circle at 85% 65%, rgba(255,84,145,0.14), transparent 44%), rgba(7, 15, 34, 0.74)',
          border: '1px solid rgba(230, 244, 255, 0.14)',
        }}
      >
        <Stack spacing={1.4} sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem' }, maxWidth: 760 }}>
            Product catalog
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
            Discover Skypier apps in an app-store style layout featuring official product logos and launch details.
          </Typography>
        </Stack>
      </Box>

      <Stack spacing={2.2}>
        {products.map((product, index) => {
          const logoSrc = getProductLogoSrc(product.name)

          return (
            <Card
              key={product.name}
              className={`reveal reveal-delay-${Math.min(index + 1, 3)}`}
              variant="outlined"
              sx={{
                borderRadius: 3,
                backgroundColor: 'rgba(9, 20, 43, 0.78)',
              }}
            >
              <CardContent
                sx={{
                  p: { xs: 2, md: 2.6 },
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '88px minmax(0, 1fr) auto' },
                  gap: { xs: 1.8, md: 2.3 },
                  alignItems: 'center',
                }}
              >
                <Box
                  aria-label={`${product.name} logo`}
                  sx={{
                    width: 88,
                    height: 88,
                    borderRadius: 3,
                    display: 'grid',
                    placeItems: 'center',
                    overflow: 'hidden',
                    background: 'linear-gradient(145deg, rgba(85,221,255,0.3), rgba(255,84,145,0.24) 55%, rgba(18,36,71,0.94))',
                    border: '1px solid rgba(230, 244, 255, 0.18)',
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
                        objectFit: 'contain',
                        p: 0.45,
                        transform: 'scale(1.08)',
                        transformOrigin: 'center',
                      }}
                    />
                  ) : (
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      {getProductMonogram(product.name)}
                    </Typography>
                  )}
                </Box>

                <Stack spacing={0.9}>
                <Stack direction="row" spacing={1} sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
                  <Typography variant="h5">{product.name}</Typography>
                  {product.badge && <Chip label={product.badge} color="secondary" size="small" />}
                </Stack>
                <Typography variant="subtitle2" color="primary.light">
                  {product.summary}
                </Typography>
                <Typography color="text.secondary">{product.description}</Typography>

                <Stack direction="row" spacing={1.2} sx={{ flexWrap: 'wrap', pt: 0.4 }}>
                  {product.stats.map((stat) => (
                    <Stack key={stat} direction="row" spacing={0.55} sx={{ alignItems: 'center' }}>
                      <StarRoundedIcon sx={{ fontSize: 16, color: 'primary.light' }} />
                      <Typography variant="caption" color="text.secondary">
                        {stat}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
                </Stack>

                <Stack spacing={1} sx={{ minWidth: { xs: 'auto', md: 186 } }}>
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
                      <Button key={cta.label} variant={cta.variant} startIcon={cta.icon} endIcon={<SecurityRoundedIcon fontSize="small" />} disabled>
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
  )
}
