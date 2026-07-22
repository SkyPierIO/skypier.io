import { useEffect, useMemo, useState } from 'react'
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
import { TeamPage } from './components/pages/TeamPage'
import { TermsPage } from './components/pages/TermsPage'
import { PrivacyPage } from './components/pages/PrivacyPage'
import { ProductOverviewSection } from './components/sections/ProductOverviewSection'
import { ManifestoSection } from './components/sections/ManifestoSection'
import { BetaSection } from './components/sections/BetaSection'
import { TechStackSection } from './components/sections/TechStackSection'
import { FaqSection } from './components/sections/FaqSection'
import { ContactSection } from './components/sections/ContactSection'
import type { ContactFormState, NavItem, Product, SocialLink, TeamMember } from './components/landing.types'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useDocumentSeo } from './hooks/useDocumentSeo'
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
  const isTeamPage = pathname === '/team'
  const isTermsPage = pathname === '/terms-of-service'
  const isPrivacyPage = pathname === '/privacy-policy'
  const isLandingPage = !isProductsPage && !isTeamPage && !isTermsPage && !isPrivacyPage
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

  const seo = useMemo(() => {
    if (isProductsPage) {
      return {
        path: '/products',
        title: 'Products — Skypier VPN, dM & Blackhole',
        description:
          'Explore the Skypier product suite: the token-gated Skypier VPN, the peer-to-peer Skypier dM messenger, and the upcoming Skypier Blackhole.',
      }
    }

    if (isTeamPage) {
      return {
        path: '/team',
        title: 'Meet the Team — Skypier',
        description: 'Meet the people building Skypier, a community-powered privacy network and messenger.',
      }
    }

    if (isTermsPage) {
      return {
        path: '/terms-of-service',
        title: 'Website Terms of Use — Skypier',
        description: 'The terms and conditions that govern your use of the Skypier website and products.',
      }
    }

    if (isPrivacyPage) {
      return {
        path: '/privacy-policy',
        title: 'Privacy Policy — Skypier',
        description: 'How Skypier Technologies, Inc. collects, uses, and protects your data.',
      }
    }

    return {
      path: '/',
      title: 'Skypier — Decentralized Privacy VPN & Messenger',
      description:
        'Skypier is a community-powered privacy network: a token-gated decentralized VPN and a peer-to-peer messenger, built with no central server to seize, throttle, or shut down.',
    }
  }, [isProductsPage, isTeamPage, isTermsPage, isPrivacyPage])

  useDocumentSeo(seo)
  useScrollReveal()

  // SPA pages render after the browser has already processed the URL fragment,
  // so native anchor positioning misses (e.g. footer links to /products#skypier-dm).
  // Re-run the jump once the target exists.
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) {
      return
    }
    document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [])
  const currentNavItems = useMemo(
    () =>
      navItems.map((item) => {
        if (isLandingPage || !item.href.startsWith('#')) {
          return item
        }

        return {
          ...item,
          href: `/${item.href}`,
        }
      }),
    [isLandingPage],
  )

  const handleContactChange = (field: keyof ContactFormState, value: string) => {
    setContactForm((prev) => ({ ...prev, [field]: value }))
  }

  // The Formspree form (xdoqaozn) has reCAPTCHA enabled, which rejects AJAX
  // submissions, so the contact form submits natively (like the V1 site) and
  // Formspree redirects back here via its `_next` field. We surface the result
  // from the query string set on that redirect.
  useEffect(() => {
    const status = new URLSearchParams(window.location.search).get('contact')
    if (status === 'success' || status === 'error') {
      setContactStatus(status)
      const url = new URL(window.location.href)
      url.searchParams.delete('contact')
      window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
    }
  }, [])

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
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteHeader
        navItems={currentNavItems}
        brandHref={isLandingPage ? '#hero' : '/'}
        exploreHref="/products#catalog"
        exploreLabel={isProductsPage ? 'Browse catalog' : 'Download apps'}
        drawerOpen={drawerOpen}
        onOpenDrawer={() => setDrawerOpen(true)}
        onCloseDrawer={() => setDrawerOpen(false)}
      />

      {isProductsPage ? (
        <ProductsPage products={products} />
      ) : isTeamPage ? (
        <TeamPage teamMembers={teamMembers} />
      ) : isTermsPage ? (
        <TermsPage />
      ) : isPrivacyPage ? (
        <PrivacyPage />
      ) : (
        <>
          {/* HeroSection is full-bleed - lives outside the constrained Container */}
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
                <TechStackSection
                  eyebrow={landingContent.techStack.eyebrow}
                  title={landingContent.techStack.title}
                  intro={landingContent.techStack.intro}
                  items={landingContent.techStack.items}
                />
                <ContactSection
                  contactPurposes={contactPurposes}
                  contactForm={contactForm}
                  onContactChange={handleContactChange}
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
