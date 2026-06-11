export type IconKey =
  | 'download'
  | 'learnMore'
  | 'pwa'
  | 'playStore'
  | 'appStore'
  | 'announcement'
  | 'github'
  | 'linkedin'
  | 'x'

export type ImageKey = 'ting' | 'groot' | 'megan' | 'luis'

export const landingContent = {
  navItems: [
    { label: 'Products', href: '/products' },
    { label: 'Team', href: '#team' },
    // { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  products: [
    {
      name: 'Skypier VPN',
      summary: 'Token-gated decentralized VPN',
      description:
        'Skypier VPN is our flagship privacy network built for secure, censorship-resilient access with hybrid cloud architecture and practical onboarding.',
      stats: ['42k+ active users', '67 countries covered', 'Recognized by privacy-focused communities'],
      ctas: [
        {
          label: 'Download release',
          href: 'https://github.com/SkyPierIO/skypier-vpn/releases',
          variant: 'contained' as const,
          icon: 'download' as const,
        },
        {
          label: 'Learn more',
          href: 'https://pkg.go.dev/github.com/SkyPierIO/skypier-vpn#section-readme',
          variant: 'outlined' as const,
          icon: 'learnMore' as const,
        },
      ],
    },
    {
      name: 'Skypier dM',
      summary: 'Private dMessenger for everyday communication',
      description:
        'dM extends Skypier privacy principles to messaging with a web-first experience today and full mobile app availability as adoption grows.',
      stats: ['18k+ users', 'PWA live now', 'Android and iOS app links available'],
      ctas: [
        {
          label: 'Open PWA',
          href: 'https://skypier.chat',
          variant: 'contained' as const,
          icon: 'pwa' as const,
        },
        {
          label: 'Play Store',
          href: 'https://play.google.com/store/apps/details?id=io.skypier.chat',
          variant: 'outlined' as const,
          icon: 'playStore' as const,
        },
        {
          label: 'App Store',
          href: 'https://apps.apple.com/us/app/skypierchat',
          variant: 'outlined' as const,
          icon: 'appStore' as const,
        },
      ],
    },
    {
      name: 'Skypier Blackhole',
      summary: 'Ad and tracker blocker',
      description:
        'Blackhole is currently in announcement mode and focused on delivering high-signal ad and tracker blocking with transparent controls.',
      stats: ['Coming soon', 'Early adopter list opening', 'Privacy-first filtering'],
      badge: 'Coming soon',
      ctas: [
        {
          label: 'Announced',
          variant: 'outlined' as const,
          icon: 'announcement' as const,
          disabled: true,
        },
      ],
    },
  ],
  teamMembers: [
    {
      name: 'Ting Lik To',
      role: 'Founder / CEO',
      bio: 'Product leader focused on privacy infrastructure, ecosystem strategy, and making decentralized security useful for modern teams.',
      image: 'ting' as const,
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tinglik/', icon: 'linkedin' as const },
        { label: 'GitHub', href: 'https://github.com/SkyPierIO', icon: 'github' as const },
      ],
    },
    {
      name: 'Smolgroot',
      role: 'Co-founder / CTO',
      bio: 'Security-minded engineer leading architecture, protocol hardening, and release reliability across the Skypier stack.',
      image: 'groot' as const,
      links: [
        { label: 'X', href: 'https://x.com/rootshe11', icon: 'x' as const },
        { label: 'GitHub', href: 'https://github.com/smolgroot', icon: 'github' as const },
      ],
    },
  ],
  testimonials: [
    {
      quote:
        'Skypier VPN became our default recommendation for contributors who need practical privacy without heavyweight setup.',
      author: 'Independent Security Researcher',
      role: 'Protocol tooling advisor',
    },
    {
      quote:
        'The team ships with unusual clarity. dM feels lightweight and dependable in daily coordination with distributed contributors.',
      author: 'Web3 Product Advisor',
      role: 'Consumer apps and growth',
    },
    {
      quote:
        'Skypier stands out by pairing deep infrastructure thinking with clear UX that non-technical users can still trust.',
      author: 'Community Lead',
      role: 'Open internet initiative',
    },
  ],
  socialLinks: [
    { label: 'X', href: 'https://x.com/SkypierIO', icon: 'x' as const },
    { label: 'GitHub', href: 'https://github.com/SkyPierIO', icon: 'github' as const },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/skypier', icon: 'linkedin' as const },
  ],
  contactPurposes: [
    '[Invest] Investment Inquiry',
    '[Enterprise] Enterprise Service',
    '[Partner] Host (Partner) Support',
    '[Customer] Client Support',
    '[Other] Other',
  ],
}
