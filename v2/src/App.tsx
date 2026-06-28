import { useMemo, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { lightSectionTheme } from './theme'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import PublicRoundedIcon from '@mui/icons-material/PublicRounded'
import BoltRoundedIcon from '@mui/icons-material/BoltRounded'
import AppleIcon from '@mui/icons-material/Apple'
import AndroidIcon from '@mui/icons-material/Android'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import XIcon from '@mui/icons-material/X'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded'
import { Box, Container } from '@mui/material'
import TingPhoto from './assets/brand/img/ting.webp'
import GrootPhoto from './assets/brand/img/groot.webp'
import MeganPhoto from './assets/brand/img/megan.webp'
import LuisPhoto from './assets/brand/img/luis.webp'
import { SiteHeader } from './components/layout/SiteHeader'
import { SiteFooter } from './components/layout/SiteFooter'
import { HeroSection } from './components/sections/HeroSection'
import { PlanetHorizon } from './components/brand/PlanetHorizon'
import { ProductsPage } from './components/pages/ProductsPage'
import { ProductOverviewSection } from './components/sections/ProductOverviewSection'
import { ManifestoSection } from './components/sections/ManifestoSection'
import { BetaSection } from './components/sections/BetaSection'
import { FaqSection } from './components/sections/FaqSection'
import { TeamSection } from './components/sections/TeamSection'
import { ContactSection } from './components/sections/ContactSection'
import type { ContactFormState, NavItem, Product, SocialLink, TeamMember } from './components/landing.types'
import { landingContent } from './content/landingContent'
import type { IconKey, ImageKey } from './content/landingContent'

const smallIconMap: Record<IconKey, ReactNode> = {
  download: <DownloadRoundedIcon fontSize="small" />,
  learnMore: <OpenInNewRoundedIcon fontSize="small" />,
  pwa: <PublicRoundedIcon fontSize="small" />,
  playStore: <AndroidIcon fontSize="small" />,
  appStore: <AppleIcon fontSize="small" />,
  announcement: <BoltRoundedIcon fontSize="small" />,
  github: <GitHubIcon fontSize="small" />,
  linkedin: <LinkedInIcon fontSize="small" />,
  x: <XIcon fontSize="small" />,
}

const socialIconMap: Record<IconKey, ReactNode> = {
  download: <DownloadRoundedIcon />,
  learnMore: <OpenInNewRoundedIcon />,
  pwa: <PublicRoundedIcon />,
  playStore: <AndroidIcon />,
  appStore: <AppleIcon />,
  announcement: <BoltRoundedIcon />,
  github: <GitHubIcon />,
  linkedin: <LinkedInIcon />,
  x: <XIcon />,
}

const imageMap: Record<ImageKey, string> = {
  ting: TingPhoto,
  groot: GrootPhoto,
  megan: MeganPhoto,
  luis: LuisPhoto,
}

const navItems: NavItem[] = landingContent.navItems

const products: Product[] = landingContent.products.map((product) => ({
  ...product,
  ctas: product.ctas.map((cta) => ({
    ...cta,
    icon: cta.icon ? smallIconMap[cta.icon] : undefined,
  })),
}))

const teamMembers: TeamMember[] = landingContent.teamMembers.map((member) => ({
  ...member,
  image: imageMap[member.image],
  links: member.links.map((link) => ({
    ...link,
    icon: smallIconMap[link.icon],
  })),
}))

const socialLinks: SocialLink[] = landingContent.socialLinks.map((link) => ({
  ...link,
  icon: socialIconMap[link.icon],
}))

const contactPurposes = landingContent.contactPurposes

function App() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/'
  const isProductsPage = pathname === '/products'
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [waitlistStatus, setWaitlistStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [waitlistEmail, setWaitlistEmail] = useState('')
  const [contactForm, setContactForm] = useState<ContactFormState>({
    name: '',
    purpose: contactPurposes[0],
    email: '',
    message: '',
  })
  const currentYear = useMemo(() => new Date().getFullYear(), [])
  const currentNavItems = useMemo(
    () =>
      navItems.map((item) => {
        if (!isProductsPage || !item.href.startsWith('#')) {
          return item
        }

        return {
          ...item,
          href: `/${item.href}`,
        }
      }),
    [isProductsPage],
  )

  const handleContactChange = (field: keyof ContactFormState, value: string) => {
    setContactForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setContactStatus('loading')

    try {
      const response = await fetch('https://formspree.io/f/xdoqaozn', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...contactForm,
          subject: `${contactForm.purpose} New submission`,
        }),
      })

      if (!response.ok) {
        throw new Error('Contact request failed')
      }

      setContactStatus('success')
      setContactForm({
        name: '',
        purpose: contactPurposes[0],
        email: '',
        message: '',
      })
    } catch {
      setContactStatus('error')
    }
  }

  const handleWaitlistSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setWaitlistStatus('loading')

    try {
      const formData = new FormData()
      formData.append('Email', waitlistEmail)

      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbxgowDv4E0Kqqkex4FjL78XK6DIpRE_6emhaOcs1zQJ_MGDC0mXIKmW_BwA4tH-oswK/exec',
        {
          method: 'POST',
          body: formData,
        },
      )

      if (!response.ok) {
        throw new Error('Waitlist request failed')
      }

      setWaitlistStatus('success')
      setWaitlistEmail('')
    } catch {
      setWaitlistStatus('error')
    }
  }

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <SiteHeader
        navItems={currentNavItems}
        brandHref={isProductsPage ? '/' : '#hero'}
        exploreHref="/products#catalog"
        exploreLabel={isProductsPage ? 'Browse catalog' : 'Explore products'}
        drawerOpen={drawerOpen}
        onOpenDrawer={() => setDrawerOpen(true)}
        onCloseDrawer={() => setDrawerOpen(false)}
      />

      {isProductsPage ? (
        <ProductsPage products={products} />
      ) : (
        <>
          {/* HeroSection is full-bleed — lives outside the constrained Container */}
          <HeroSection />

          <ThemeProvider theme={lightSectionTheme}>
            <Box sx={{ position: 'relative', zIndex: 1, backgroundColor: 'background.default', color: 'text.primary', overflow: 'visible' }}>

              <PlanetHorizon />

              <Container component="main" maxWidth="lg" sx={{ py: { xs: 3, md: 6 }, display: 'grid', gap: { xs: 7, md: 11 } }}>
                <ProductOverviewSection products={products} />
                <ManifestoSection
                  eyebrow={landingContent.manifesto.eyebrow}
                  title={landingContent.manifesto.title}
                  intro={landingContent.manifesto.intro}
                  points={landingContent.manifesto.points}
                />
                <BetaSection
                  eyebrow={landingContent.beta.eyebrow}
                  title={landingContent.beta.title}
                  description={landingContent.beta.description}
                  perks={landingContent.beta.perks}
                  waitlistEmail={waitlistEmail}
                  onWaitlistEmailChange={setWaitlistEmail}
                  onWaitlistSubmit={handleWaitlistSubmit}
                  waitlistStatus={waitlistStatus}
                />
                <TeamSection teamMembers={teamMembers} />
                <ContactSection
                  contactPurposes={contactPurposes}
                  contactForm={contactForm}
                  onContactChange={handleContactChange}
                  onContactSubmit={handleContactSubmit}
                  contactStatus={contactStatus}
                  socialLinks={socialLinks}
                />
                <FaqSection faqs={landingContent.faqs} />
              </Container>
            </Box>
          </ThemeProvider>
        </>
      )}

      <SiteFooter currentYear={currentYear} />
    </Box>
  )
}

export default App
