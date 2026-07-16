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
    { label: 'Products', href: '#products' },
    { label: 'Beta', href: '#beta' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  products: [
    {
      name: 'Skypier VPN',
      summary: 'Token-gated decentralized VPN',
      description:
        'Skypier VPN is our flagship privacy network built for secure, censorship-resilient access with hybrid cloud architecture and practical onboarding.',
      image: '/screenshot-vpn.png',
      overview:
        'Skypier VPN routes your traffic through a peer-powered network instead of a handful of corporate datacenters. There is no central server to subpoena, throttle, or shut down, because connectivity is provided by the community itself. Token-gated access keeps the network sybil-resistant while NAT traversal punches through restrictive firewalls, so you stay reachable whether you are at home, on hotel Wi-Fi, or behind a carrier-grade NAT.',
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
      image: '/screenshot-dm.png',
      overview:
        'Skypier dM is a peer-to-peer messenger where conversations travel directly between participants, never through a server that reads, stores, and monetizes them. Your identity is a key you hold, not an account we own. Available today as a fast, install-free PWA and shipping to the App Store and Play Store, dM brings the same decentralized backbone as the VPN to your everyday conversations.',
      stats: ['18k+ users', 'PWA live now', 'Android and iOS app links available'],
      ctas: [
        {
          label: 'Open PWA',
          href: 'https://skypier.chat',
          variant: 'contained' as const,
          icon: 'pwa' as const,
        },
        // The mobile apps are not published yet, so the store pages 404. Keep the
        // CTAs visible as placeholders (disabled + tooltip) and restore the hrefs
        // once the apps are live:
        //   Play Store: https://play.google.com/store/apps/details?id=io.skypier.chat
        //   App Store:  https://apps.apple.com/us/app/skypierchat
        {
          label: 'Play Store',
          variant: 'outlined' as const,
          icon: 'playStore' as const,
          tooltip: 'Coming soon! The Android app is not published yet.',
        },
        {
          label: 'App Store',
          variant: 'outlined' as const,
          icon: 'appStore' as const,
          tooltip: 'Coming soon! The iOS app is not published yet.',
        },
      ],
    },
    {
      name: 'Skypier Blackhole',
      summary: 'Ad and tracker blocker',
      description:
        'Blackhole is currently in announcement mode and focused on delivering high-signal ad and tracker blocking with transparent controls.',
      image: '/screenshot-blackhole.png',
      overview:
        'Blackhole is a network-level ad and tracker blocker that swallows the surveillance scripts most apps quietly rely on. Instead of trusting every site to behave, Blackhole filters trackers, telemetry, and intrusive ads before they ever reach your device, with transparent, user-controlled rules and no hidden allow-lists sold to advertisers. Currently in announcement mode, with early access opening to the beta community first.',
      stats: ['Coming soon', 'Early adopter list opening', 'Integrated with VPN nodes for operator security.'],
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
  manifesto: {
    eyebrow: 'A different model',
    title: 'When trust is broken',
    intro:
      "The Web2 model is built on data extraction and valorization. Your behavior, your contacts and your location, all packaged and sold. And it doesn't stop when you pay: even a Pro subscription rarely buys you out of the surveillance, it just adds a receipt. Skypier is built the other way around. We don't know you. We're just delivering the software to people, and the rest stays yours.",
    points: [
      {
        title: 'The community is the network',
        body: 'There is no Skypier datacenter at the center of everything. Capacity is contributed by the people who use it, so the network grows with its community instead of with our server bills.',
      },
      {
        title: 'No single point of failure',
        body: 'Decentralized by design means there is nothing to seize, throttle, or switch off. No central node can take the network down or quietly log what passes through it.',
      },
      {
        title: 'Reachable globally',
        body: 'Our decentralized infrastructure is reachable from anywhere, routing around censorship and regional blocks instead of depending on a fixed list of exit servers.',
      },
      {
        title: 'NAT traversal, built in',
        body: 'Skypier punches through firewalls and carrier-grade NAT, so even firewall-protected and restricted networks can connect peer-to-peer without manual port forwarding.',
      },
      {
        title: 'Roaming ready',
        body: 'Switch from Wi-Fi to mobile, change countries, move between networks, and your connection follows you and re-establishes itself without dropping your identity.',
      },
      {
        title: 'You hold the keys',
        body: 'Your identity is a key you control, not an account we own. We deliver software; we do not build a profile of the person using it.',
      },
    ],
  },
  beta: {
    eyebrow: 'Early access',
    title: 'Join the Skypier Beta',
    description:
      'Be among the first to run the decentralized stack end to end. Beta members get early builds, direct access to the team, and a say in what ships next. No spam, just product updates as new releases land.',
    perks: ['Early access to new releases', 'Direct line to the founders', 'Shape the roadmap'],
  },
  techStack: {
    eyebrow: 'Built on giants',
    title: 'Standing on proven, open infrastructure',
    intro:
      'Skypier does not reinvent the hard parts of decentralization. We build on the same battle-tested protocols that power Ethereum, Filecoin, and IPFS, so privacy comes with the reliability of infrastructure that already secures billions in value.',
    items: [
      { name: 'libp2p', logo: 'https://libp2p.io/img/libp2p-logo-full.svg', href: 'https://libp2p.io' },
      { name: 'The Graph', logo: '/logos/thegraph.png', href: 'https://thegraph.com' },
      { name: 'Reown', logo: '/logos/reown.png', href: 'https://reown.com' },
      { name: 'Ethereum', logo: '/logos/ethereum.svg', href: 'https://ethereum.org' },
    ],
  },
  faqs: [
    {
      question: 'Is Skypier really decentralized, or just marketing?',
      answer:
        'Genuinely decentralized. Traffic is carried by a peer-to-peer network of community-run nodes rather than a fixed set of company-owned servers, so there is no central point that can read, log, or shut down your connection.',
    },
    {
      question: 'If you don\'t sell my data, how does Skypier make money?',
      answer:
        'We make money by delivering software, not by monetizing you. Access to the network is token-gated and paid tiers fund development. Your browsing, messages, and contacts are never the product.',
    },
    {
      question: 'Will it work behind a strict firewall or corporate NAT?',
      answer:
        'Yes. Skypier includes built-in NAT traversal that establishes peer-to-peer connections through most firewalls and carrier-grade NAT, so you stay reachable without manual port forwarding.',
    },
    {
      question: 'What happens to my connection when I switch networks?',
      answer:
        'Skypier is roaming-ready. Moving from Wi-Fi to mobile data or between countries re-establishes your session automatically without changing your identity or dropping your privacy guarantees.',
    },
    {
      question: 'Which products are available today?',
      answer:
        'Skypier VPN is live with downloadable releases, and Skypier dM is available now as a PWA with mobile apps rolling out. Blackhole, our ad and tracker blocker, is in announcement mode, so join the beta to get early access first.',
    },
    {
      question: 'How do I get into the beta?',
      answer:
        'Add your email to the waiting list above. We onboard beta members in waves and will reach out with builds and instructions as spots open up.',
    },
  ],
}
