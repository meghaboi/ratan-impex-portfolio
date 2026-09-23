import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

type Direction = 'bottom' | 'top' | 'left' | 'right'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  from?: Direction
  once?: boolean
  /** Color of the sliding curtain — should match the section background it sits on. */
  curtainColor?: string
}

const ORIGIN: Record<Direction, string> = {
  bottom: 'bottom',
  top: 'top',
  left: 'left',
  right: 'right',
}

const isHorizontal = (d: Direction) => d === 'left' || d === 'right'

/**
 * Reveals its child (typically an image) with a curtain wipe + a subtle scale-down from 1.08 -> 1.
 * Deliberately avoids animating `clip-path` directly: combined with framer-motion's viewport
 * IntersectionObserver in this stack (framer-motion 13 + React 19) it silently kills onViewportEnter
 * for that element (verified empirically — swap to clip-path only to reproduce). A transform-based
 * curtain achieves the same wipe visually without touching that broken code path.
 */
export default function ImageReveal({
  children,
  className,
  delay = 0,
  duration = 1,
  from = 'bottom',
  once = true,
  curtainColor = '#fdf8ee',
}: Props) {
  const reduced = useReducedMotion()
  if (reduced) return <div className={className}>{children}</div>

  const horizontal = isHorizontal(from)
  const curtainStyle = { transformOrigin: ORIGIN[from], backgroundColor: curtainColor }

  return (
    <div className={`relative overflow-hidden ${className ?? ''}`}>
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once, amount: 0.2 }}
        transition={{ duration: duration + 0.3, delay: delay + duration * 0.35, ease: EASE }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
      {horizontal ? (
        <motion.div
          initial={{ scaleX: 1 }}
          whileInView={{ scaleX: 0 }}
          viewport={{ once, amount: 0.2 }}
          transition={{ duration, delay, ease: EASE }}
          style={curtainStyle}
          className="absolute inset-0"
        />
      ) : (
        <motion.div
          initial={{ scaleY: 1 }}
          whileInView={{ scaleY: 0 }}
          viewport={{ once, amount: 0.2 }}
          transition={{ duration, delay, ease: EASE }}
          style={curtainStyle}
          className="absolute inset-0"
        />
      )}
    </div>
  )
}
