import type { ReactNode } from 'react'

export type NavItem = {
  label: string
  href: string
}

export type ProductCTA = {
  label: string
  href?: string
  variant: 'contained' | 'outlined'
  icon?: ReactNode
  disabled?: boolean
}

export type Product = {
  name: string
  summary: string
  description: string
  stats: string[]
  ctas: ProductCTA[]
  badge?: string
  image?: string
  overview?: string
}

export type ManifestoPoint = {
  title: string
  body: string
}

export type Faq = {
  question: string
  answer: string
}

export type TechItem = {
  name: string
  logo: string
  href: string
}

export type TeamMember = {
  name: string
  role: string
  bio: string
  image: string
  links: {
    label: string
    href: string
    icon: ReactNode
  }[]
}

export type Testimonial = {
  quote: string
  author: string
  role: string
}

export type SocialLink = {
  label: string
  href: string
  icon: ReactNode
}

export type ContactFormState = {
  name: string
  purpose: string
  email: string
  message: string
}
