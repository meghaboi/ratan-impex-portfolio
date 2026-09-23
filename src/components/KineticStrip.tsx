import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

type WordDef = { text: string; range: [string, string]; align: 'text-left' | 'text-right' }

// vw, not %: a `%` translate is relative to the word's OWN rendered width, which makes the
// motion size unpredictable and, for short words, barely visible. vw gives a consistent,
// clearly noticeable sweep across the viewport regardless of word length.
const WORDS: WordDef[] = [
  { text: 'INDIA', range: ['-25vw', '10vw'], align: 'text-left' },
  { text: 'GLOBAL', range: ['20vw', '-16vw'], align: 'text-right' },
  { text: 'DISTRIBUTION', range: ['-20vw', '22vw'], align: 'text-left' },
]

function Word({ text, range, align, progress }: WordDef & { progress: MotionValue<number> }) {
  const x = useTransform(progress, [0, 1], range)
  return (
    <motion.div
      style={{ x }}
      className={`font-display text-display whitespace-nowrap font-extrabold uppercase leading-[0.92] tracking-tight text-cream/90 ${align}`}
    >
      {text}
    </motion.div>
  )
}

/** Three oversized words drifting horizontally at different rates as the strip scrolls through view. */
export default function KineticStrip() {
  const ref = useRef<HTMLDivElement>(null)
  // A tighter window than the usual 'start end'/'end start': that spends most of its range
  // while the section is still mostly off-screen (entering from below / leaving off the top),
  // so the sweep either hadn't started or was already done by the time it was visible. This
  // keeps the full animated range inside the time the section is substantially on-screen.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 15%'] })

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink py-20 text-cream md:py-28">
      <div className="flex flex-col gap-1 md:gap-2">
        {WORDS.map((w) => (
          <Word key={w.text} {...w} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  )
}
