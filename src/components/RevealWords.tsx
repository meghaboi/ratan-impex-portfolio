import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

type Tag = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'

type Props = {
  text: string
  className?: string
  delay?: number
  stagger?: number
  as?: Tag
  /** Animate on mount (hero) instead of on scroll into view (sections further down the page). */
  whileMount?: boolean
}

/** Splits text into words and reveals each one via a masked upward slide — used for the handful of headline moments that carry the story, never on body copy. */
export default function RevealWords({
  text,
  className,
  delay = 0,
  stagger = 0.045,
  as: Tag = 'span',
  whileMount = false,
}: Props) {
  const reduced = useReducedMotion()
  const words = text.split(' ')

  if (reduced) return <Tag className={className}>{text}</Tag>

  return (
    <Tag className={className}>
      {words.map((word, i) =>
        whileMount ? (
          <span key={i} className="inline-block overflow-hidden align-top">
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.85, delay: delay + i * stagger, ease: EASE }}
              className="inline-block"
            >
              {word}&nbsp;
            </motion.span>
          </span>
        ) : (
          <span key={i} className="inline-block overflow-hidden align-top">
            <motion.span
              initial={{ y: '110%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.85, delay: delay + i * stagger, ease: EASE }}
              className="inline-block"
            >
              {word}&nbsp;
            </motion.span>
          </span>
        ),
      )}
    </Tag>
  )
}
