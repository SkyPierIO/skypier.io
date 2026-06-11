# V2 Landing Page

Standalone Vite + React + MUI implementation for the Skypier V2 landing page.

## Stack

- Vite
- React
- TypeScript
- Material UI (MUI)

## Run

From [v2/package.json](v2/package.json):

1. Install dependencies:
   - `pnpm install`
2. Start development server:
   - `pnpm run dev`
3. Build production bundle:
   - `pnpm run build`
4. Preview production build:
   - `pnpm run preview`

## Implemented Criteria

- [x] Use Vite + React + MUI for the stack
- [x] Use a similar design as the current landing page, modernized visually
- [x] Include sections for Products
  - [x] Skypier VPN prominently featured with CTA to download and learn more
    - [x] Includes stats (users, countries, recognition placeholder)
  - [x] Skypier dM prominently featured with CTA to PWA, Play Store, and App Store
    - [x] Includes stats (users and platform availability)
  - [x] Skypier Blackhole featured with coming-soon state and announcement CTA
- [x] Include a section for the team with photos and bios
- [x] Include a section for testimonials/reviews
- [x] Keep the same core color scheme and branding while modernizing layout
- [x] Ensure responsive desktop and mobile behavior
- [x] Include clear CTA to download VPN, open dM, and follow social channels
- [x] Include contact and waitlist flow

## Final CTA Links Wired

- VPN download: https://github.com/SkyPierIO/skypier-vpn/releases
- VPN learn more: https://pkg.go.dev/github.com/SkyPierIO/skypier-vpn#section-readme
- dM PWA: https://skypier.chat
- dM Play Store: https://play.google.com/store/apps/details?id=io.skypier.chat
- dM App Store: https://apps.apple.com/us/app/skypierchat
- Blackhole: announced as coming soon

## Social Links Wired

- X: https://x.com/SkypierIO
- GitHub: https://github.com/SkyPierIO
- LinkedIn: https://www.linkedin.com/company/skypier

## Source and Structure

- Main page: [v2/src/App.tsx](v2/src/App.tsx)
- Content layer: [v2/src/content/landingContent.ts](v2/src/content/landingContent.ts)
- MUI theme: [v2/src/theme.ts](v2/src/theme.ts)
- Global styles and motion: [v2/src/index.css](v2/src/index.css)
- Layout components:
  - [v2/src/components/layout/SiteHeader.tsx](v2/src/components/layout/SiteHeader.tsx)
  - [v2/src/components/layout/SiteFooter.tsx](v2/src/components/layout/SiteFooter.tsx)
- Section components:
  - [v2/src/components/sections/HeroSection.tsx](v2/src/components/sections/HeroSection.tsx)
  - [v2/src/components/sections/ProductsSection.tsx](v2/src/components/sections/ProductsSection.tsx)
  - [v2/src/components/sections/TeamSection.tsx](v2/src/components/sections/TeamSection.tsx)
  - [v2/src/components/sections/TestimonialsSection.tsx](v2/src/components/sections/TestimonialsSection.tsx)
  - [v2/src/components/sections/ContactSection.tsx](v2/src/components/sections/ContactSection.tsx)
- Brand assets:
  - [v2/src/assets/brand/svg/logo.svg](v2/src/assets/brand/svg/logo.svg)
  - [v2/src/assets/brand/svg/skypier_baseline.svg](v2/src/assets/brand/svg/skypier_baseline.svg)
  - [v2/src/assets/brand/img/ting.webp](v2/src/assets/brand/img/ting.webp)
  - [v2/src/assets/brand/img/groot.webp](v2/src/assets/brand/img/groot.webp)
  - [v2/src/assets/brand/img/megan.webp](v2/src/assets/brand/img/megan.webp)
  - [v2/src/assets/brand/img/luis.webp](v2/src/assets/brand/img/luis.webp)
  - [v2/src/assets/brand/fonts/Satoshi-Variable.woff2](v2/src/assets/brand/fonts/Satoshi-Variable.woff2)

## Forms

- Contact form posts to Formspree endpoint from the existing site.
- Waitlist form posts to the existing Google Apps Script endpoint.

## Notes

- Product stats, testimonials, team bios, and landing links can be edited in [v2/src/content/landingContent.ts](v2/src/content/landingContent.ts) without touching UI components.
- Blackhole is intentionally rendered as a coming-soon product state.
