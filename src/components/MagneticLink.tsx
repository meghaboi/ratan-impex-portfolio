import { useRef, type PointerEvent, type ReactNode } from 'react'
import { motion, useSpring } from 'framer-motion'

type Props = {
  children: ReactNode
  className?: string
  strength?: number
}

/** Subtly nudges its children toward the cursor within its own bounds — used sparingly, on CTAs only. */
export default function MagneticLink({ children, className, strength = 10 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const x = useSpring(0, { stiffness: 220, damping: 18, mass: 0.4 })
  const y = useSpring(0, { stiffness: 220, damping: 18, mass: 0.4 })

  const handleMove = (e: PointerEvent<HTMLSpanElement>) => {
    if (e.pointerType !== 'mouse') return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * strength)
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.span
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ x, y }}
      className={`${className ?? 'inline-block'}`}
    >
      {children}
    </motion.span>
  )
}
