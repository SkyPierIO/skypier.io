import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import { Box, Button, Chip, Stack, Typography } from '@mui/material'
import type { Product } from '../landing.types'

type ProductOverviewSectionProps = {
  products: Product[]
}

export function ProductOverviewSection({ products }: ProductOverviewSectionProps) {
  return (
    <Box id="products" className="reveal" sx={{ scrollMarginTop: 92 }}>
      <Stack spacing={1.4} sx={{ mb: { xs: 4, md: 7 }, alignItems: 'center', textAlign: 'center' }}>
        <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.22em', fontWeight: 700 }}>
          Product overview
        </Typography>
        <Typography variant="h2">One network. Three ways to stay private.</Typography>
        <Typography sx={{ color: 'text.secondary', maxWidth: 680 }}>
          Every Skypier product runs on the same decentralized backbone, built so privacy is the default, not an upsell.
        </Typography>
      </Stack>

      <Stack spacing={{ xs: 6, md: 10 }}>
        {products.map((product, index) => {
          const reverse = index % 2 === 1

          return (
            <Box
              key={product.name}
              sx={{
                display: 'grid',
                gap: { xs: 3, md: 6 },
                alignItems: 'center',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              }}
            >
              {/* Copy */}
              <Stack spacing={1.6} sx={{ order: { xs: 1, md: reverse ? 2 : 1 } }}>
                <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
                  <Typography variant="h3" sx={{ fontSize: { xs: '1.6rem', md: '2rem' } }}>
                    {product.name}
                  </Typography>
                  {product.badge && <Chip size="small" color="secondary" label={product.badge} />}
                </Stack>

                <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 600 }}>
                  {product.summary}
                </Typography>

                <Typography sx={{ color: 'text.secondary' }}>{product.overview ?? product.description}</Typography>

                <Stack spacing={0.8} sx={{ pt: 0.5 }}>
                  {product.stats.map((stat) => (
                    <Stack key={stat} direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                      <CheckCircleRoundedIcon sx={{ fontSize: 18, color: 'primary.main' }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {stat}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                <Stack direction="row" spacing={1} sx={{ pt: 1, flexWrap: 'wrap' }}>
                  {product.ctas.map((cta) =>
                    cta.href ? (
                      <Button
                        key={cta.label}
                        component="a"
                        href={cta.href}
                        target="_blank"
                        rel="noreferrer"
                        variant={cta.variant}
                        size="small"
                        startIcon={cta.icon}
                        disabled={cta.disabled}
                      >
                        {cta.label}
                      </Button>
                    ) : (
                      <Button key={cta.label} variant={cta.variant} size="small" startIcon={cta.icon} disabled>
                        {cta.label}
                      </Button>
                    ),
                  )}
                </Stack>
              </Stack>

              {/* Screenshot */}
              <Box
                sx={{
                  order: { xs: 0, md: reverse ? 1 : 2 },
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  aspectRatio: { xs: '16 / 10', md: '4 / 3' },
                  border: '1px solid rgba(10, 22, 48, 0.08)',
                  boxShadow: '0 20px 50px rgba(10, 22, 48, 0.12)',
                  background:
                    'radial-gradient(circle at 30% 20%, rgba(0,153,187,0.16), transparent 55%), radial-gradient(circle at 80% 90%, rgba(255,84,145,0.14), transparent 50%), linear-gradient(160deg, #0b1c3b 0%, #0a1630 100%)',
                }}
              >
                <Box
                  component="img"
                  src={product.image}
                  alt={`${product.name} screenshot`}
                  loading="lazy"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                />
              </Box>
            </Box>
          )
        })}
      </Stack>
    </Box>
  )
}
