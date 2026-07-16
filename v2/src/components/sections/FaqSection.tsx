import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import { Accordion, AccordionDetails, AccordionSummary, Box, Stack, Typography } from '@mui/material'
import type { Faq } from '../landing.types'

type FaqSectionProps = {
  faqs: Faq[]
}

export function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <Box id="faq" className="reveal" sx={{ scrollMarginTop: 92 }}>
      <Stack className="scroll-reveal" spacing={1.4} sx={{ mb: { xs: 3, md: 4 }, alignItems: 'center', textAlign: 'center' }}>
        <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.22em', fontWeight: 700 }}>
          FAQ
        </Typography>
        <Typography variant="h2">Questions, answered</Typography>
        <Typography sx={{ color: 'text.secondary', maxWidth: 620 }}>
          Everything you might want to know about how Skypier keeps your connection private and resilient.
        </Typography>
      </Stack>

      <Box className="scroll-reveal scroll-reveal-delay-1" sx={{ maxWidth: 820, mx: 'auto', display: 'grid', gap: 1.2 }}>
        {faqs.map((faq) => (
          <Accordion
            key={faq.question}
            disableGutters
            elevation={0}
            sx={{
              borderRadius: '14px !important',
              overflow: 'hidden',
              border: '1px solid rgba(10, 22, 48, 0.10)',
              backgroundColor: 'background.paper',
              '&:before': { display: 'none' },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreRoundedIcon sx={{ color: 'primary.main' }} />}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  )
}
