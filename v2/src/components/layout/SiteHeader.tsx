import { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, Button, Drawer, IconButton, List, ListItemButton, ListItemText, Toolbar } from '@mui/material'
import type { NavItem } from '../landing.types'
import LogoWordmark from '../../assets/brand/svg/skypier_baseline.svg'
import LogoWordmarkDark from '../../assets/brand/svg/skypier_baseline_dark.svg'

// Must match HeroSection: TRANS_START(120) + TRANS_RANGE(480)
const HERO_TRANS_END = 600

type SiteHeaderProps = {
  navItems: NavItem[]
  brandHref: string
  exploreHref: string
  exploreLabel?: string
  drawerOpen: boolean
  onOpenDrawer: () => void
  onCloseDrawer: () => void
}

export function SiteHeader({ navItems, brandHref, exploreHref, exploreLabel = 'Explore products', drawerOpen, onOpenDrawer, onCloseDrawer }: SiteHeaderProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isLight = scrollY >= HERO_TRANS_END
  const isScrolled = scrollY > 20

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={
          isLight
            ? {
                backgroundColor: 'rgba(255,255,255,0.88)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
                color: '#0A1630',
                transition: 'background-color 300ms ease, color 300ms ease, border-color 300ms ease',
              }
            : isScrolled
              ? {
                  backgroundColor: 'rgba(0,0,0,0.45)',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  color: '#ffffff',
                  transition: 'background-color 300ms ease, color 300ms ease, border-color 300ms ease',
                }
              : {
                  backgroundColor: '#000000',
                  backdropFilter: 'none',
                  color: '#ffffff',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  transition: 'background-color 300ms ease, color 300ms ease, border-color 300ms ease',
                }
        }
      >
        <Toolbar sx={{ minHeight: { xs: 68, md: 76 }, px: { xs: 1, md: 3 } }}>
          <Box component="a" href={brandHref} sx={{ display: 'inline-flex', alignItems: 'center' }}>
            <Box component="img" src={isLight ? LogoWordmarkDark : LogoWordmark} alt="Skypier" sx={{ width: { xs: 150, md: 184 }, opacity: 0.95, transition: 'opacity 300ms ease' }} />
          </Box>

          <Box sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {navItems.map((item) => (
              <Button key={item.label} component="a" href={item.href} color="inherit">
                {item.label}
              </Button>
            ))}
            <Button component="a" href={exploreHref} variant="contained" color="secondary">
              {exploreLabel}
            </Button>
          </Box>

          <IconButton
            aria-label="Open navigation"
            color="inherit"
            onClick={onOpenDrawer}
            sx={{ ml: 'auto', display: { xs: 'inline-flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={onCloseDrawer}>
        <Box sx={{ width: 280, py: 1.5 }}>
          <List>
            {navItems.map((item) => (
              <ListItemButton key={item.label} component="a" href={item.href} onClick={onCloseDrawer}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
            <ListItemButton component="a" href={exploreHref} onClick={onCloseDrawer}>
              <ListItemText primary={exploreLabel} />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      <Toolbar sx={{ minHeight: { xs: 68, md: 76 } }} />
    </>
  )
}
