import { useEffect, useId, useRef, useState } from 'react'
import type { SVGProps } from 'react'
import { animate } from 'animejs'
import { HERO_LOGO_VIEWBOX, LOGO_SHAPE_PATH } from './logoKnotFrames'

type AnimatedKnotLogoProps = SVGProps<SVGSVGElement> & {
  title?: string
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setPrefersReducedMotion(media.matches)
    onChange()
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return prefersReducedMotion
}

export function AnimatedKnotLogo({
  title = 'Skypier logo',
  ...svgProps
}: AnimatedKnotLogoProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const svgRef = useRef<SVGSVGElement | null>(null)
  const titleId = useId()

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    if (prefersReducedMotion) {
      svg.style.opacity = '1'
      return
    }

    svg.style.opacity = '0'

    // engine.speed is owned by SpeedBackground; animate runs at whatever rate it sets
    const anim = animate(svg, {
      opacity: [0, 1],
      scale: [0.82, 1],
      duration: 1400,
      ease: 'outExpo',
      delay: 350,
    })

    return () => { anim.pause() }
  }, [prefersReducedMotion])

  return (
    <svg
      ref={svgRef}
      viewBox={HERO_LOGO_VIEWBOX}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      aria-labelledby={title ? titleId : undefined}
      {...svgProps}
    >
      {title ? <title id={titleId}>{title}</title> : null}

      <path d={LOGO_SHAPE_PATH} fill="#55DDFF" />
    </svg>
  )
}
