import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { faqs } from '../data/content'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative overflow-hidden bg-cream-soft py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 -top-20 h-72 w-72 rounded-full bg-saffron/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-berry/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 md:px-8">
        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-berry">FAQ</span>
          <h2 className="font-display mt-3 text-3xl font-semibold text-ink sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <ScrollReveal key={f.q} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-ink/5">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display font-semibold text-ink">{f.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-saffron/20 text-berry"
                    >
                      <Plus size={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="px-6 pb-5 text-ink/70">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
