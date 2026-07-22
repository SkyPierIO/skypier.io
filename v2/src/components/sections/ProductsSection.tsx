import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { Box, Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import type { Product } from '../landing.types'

type ProductsSectionProps = {
  products: Product[]
}

export function ProductsSection({ products }: ProductsSectionProps) {
  return (
    <Box id="products" className="reveal reveal-delay-1" sx={{ scrollMarginTop: 92 }}>
      <Stack spacing={1.5} sx={{ mb: 3 }}>
        <Typography variant="h2">Products</Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
          Skypier product lines are designed to work independently or together, with clear calls-to-action and transparent capabilities.
        </Typography>
      </Stack>

      <Box sx={{ display: 'grid', gap: 2.5, gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, minmax(0, 1fr))' } }}>
        {products.map((product, index) => (
          <Card key={product.name} className={`reveal reveal-delay-${Math.min(index + 1, 3)}`} variant="outlined" sx={{ borderRadius: 1.5, backgroundColor: 'rgba(9, 20, 43, 0.76)' }}>
            <CardContent sx={{ p: 3, display: 'grid', gap: 1.2 }}>
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
                <Typography variant="h6">{product.name}</Typography>
                {product.badge && <Chip size="small" color="secondary" label={product.badge} />}
              </Stack>

              <Typography variant="subtitle2" color="primary.light">
                {product.summary}
              </Typography>
              <Typography color="text.secondary">{product.description}</Typography>

              <Stack spacing={0.6} sx={{ py: 0.4 }}>
                {product.stats.map((stat) => (
                  <Stack key={stat} direction="row" spacing={0.7} sx={{ alignItems: 'center' }}>
                    <StarRoundedIcon sx={{ fontSize: 18, color: 'primary.light' }} />
                    <Typography variant="body2">{stat}</Typography>
                  </Stack>
                ))}
              </Stack>

              <Stack direction="row" spacing={1} sx={{ pt: 0.5, flexWrap: 'wrap' }}>
                {product.ctas.map((cta) =>
                  cta.href ? (
                    <Button key={cta.label} component="a" href={cta.href} target="_blank" rel="noreferrer" variant={cta.variant} size="small" startIcon={cta.icon} disabled={cta.disabled}>
                      {cta.label}
                    </Button>
                  ) : (
                    <Button key={cta.label} variant={cta.variant} size="small" startIcon={cta.icon} disabled>
                      {cta.label}
                    </Button>
                  ),
                )}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  )
}
