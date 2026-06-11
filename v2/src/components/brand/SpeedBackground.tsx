import { useEffect, useRef } from 'react'
import { engine, animate } from 'animejs'

// Mostly white (stars) with Skypier brand-color accents
const COLORS = ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#55DDFF', '#55DDFF', '#FF5491']
const COUNT = 90

export function SpeedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // engine.speed is the animejs engine parameter — it multiplies every
    // animation's playback rate globally, creating the "warp" sensation.
    engine.speed = 0.55

    const W = window.innerWidth
    const H = window.innerHeight
    // Distance from center to the farthest corner (so every angle exits the screen)
    const maxR = Math.sqrt((W / 2) ** 2 + (H / 2) ** 2) + 80

    const emitters: HTMLDivElement[] = []

    for (let i = 0; i < COUNT; i++) {
      // Distribute evenly around the full circle with a small random jitter
      const baseAngle = (i / COUNT) * 360
      const jitter = (Math.random() - 0.5) * (360 / COUNT) * 2
      const angleDeg = baseAngle + jitter

      const length = 40 + Math.random() * 100   // streak length 40-140 px
      const thick  = 3  + Math.random() * 4     // 3-7 px thick
      const color  = COLORS[i % COLORS.length]
      const startR = 8  + Math.random() * 28    // start radius from center
      const dur    = 1400 + Math.random() * 1600 // 1400-3000 ms per loop

      // ── Emitter div ──────────────────────────────────────────────────────────
      // Anchored at screen center, rotated to the streak's outward direction.
      // Children inherit the rotated coordinate space, so translateX inside the
      // emitter travels along the angle — no sin/cos math needed.
      const emitter = document.createElement('div')
      emitter.style.cssText = [
        'position:absolute',
        'left:50%',
        'top:50%',
        `transform:rotate(${angleDeg}deg)`,
        'pointer-events:none',
      ].join(';')

      // ── Streak div ────────────────────────────────────────────────────────────
      // Positioned at the emitter origin (= screen center).
      // Gradient goes bright → transparent toward the leading edge so the tail
      // glows while the head fades into the dark — classic comet / hyperspace look.
      const streak = document.createElement('div')
      streak.style.cssText = [
        'position:absolute',
        'left:0',
        `top:${-(thick / 2)}px`,
        `width:${length}px`,
        `height:${thick}px`,
        `background:linear-gradient(to right,${color},${color}00)`,
        `box-shadow:0 0 ${thick * 3}px ${thick}px ${color}88`,
        `border-radius:${thick / 2}px`,
        'opacity:0',
        'pointer-events:none',
        'will-change:transform,opacity',
      ].join(';')

      emitter.appendChild(streak)
      container.appendChild(emitter)
      emitters.push(emitter)

      animate(streak, {
        // Moves outward along the emitter's rotated X axis
        translateX: [startR, maxR],
        opacity: [0, 1],
        duration: dur,
        // Random phase offset so the screen is always populated, never all-blank
        delay: Math.floor(Math.random() * dur),
        ease: 'inExpo',  // starts slow (near center) → rockets toward edge
        loop: true,
      })
    }

    return () => {
      engine.speed = 1
      emitters.forEach((el) => el.remove())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
