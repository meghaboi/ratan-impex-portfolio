import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { faqs } from '../data/content'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative bg-cream-soft py-28 md:py-40">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <ScrollReveal>
          <span className="label-meta text-berry">06 — Questions</span>
          <h2 className="font-display mt-4 text-heading font-extrabold text-ink">Frequently asked</h2>
        </ScrollReveal>

        <div className="mt-12">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <ScrollReveal key={f.q} delay={i * 0.04}>
                <div className="rule-t border-ink/10">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-ink/30">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-display text-lg font-semibold text-ink sm:text-xl">{f.q}</span>
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-4 w-4 shrink-0"
                    >
                      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink/50" />
                      <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-ink/50" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl pb-6 pl-9 text-ink/70">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            )
          })}
          <div className="rule-t border-ink/10" />
        </div>
      </div>
    </section>
  )
}
