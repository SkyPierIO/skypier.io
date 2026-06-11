import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { Box, Divider, Paper, Stack, Typography } from '@mui/material'
import type { Testimonial } from '../landing.types'

type TestimonialsSectionProps = {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <Box id="testimonials" className="reveal reveal-delay-3" sx={{ scrollMarginTop: 92 }}>
      <Stack spacing={1.5} sx={{ mb: 3 }}>
        <Typography variant="h2">Testimonials</Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
          Early users and advisors highlight where Skypier products are already delivering measurable trust and utility.
        </Typography>
      </Stack>

      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, minmax(0, 1fr))' } }}>
        {testimonials.map((item) => (
          <Paper key={item.author} variant="outlined" sx={{ p: 2.5, borderRadius: 4, backgroundColor: 'rgba(9, 20, 43, 0.74)' }}>
            <Stack spacing={1.25}>
              <Stack direction="row" spacing={0.25}>
                <StarRoundedIcon fontSize="small" color="primary" />
                <StarRoundedIcon fontSize="small" color="primary" />
                <StarRoundedIcon fontSize="small" color="primary" />
                <StarRoundedIcon fontSize="small" color="primary" />
                <StarRoundedIcon fontSize="small" color="primary" />
              </Stack>
              <Typography color="text.secondary">"{item.quote}"</Typography>
              <Divider />
              <Typography variant="subtitle2">{item.author}</Typography>
              <Typography variant="caption" color="text.secondary">
                {item.role}
              </Typography>
            </Stack>
          </Paper>
        ))}
      </Box>
    </Box>
  )
}
