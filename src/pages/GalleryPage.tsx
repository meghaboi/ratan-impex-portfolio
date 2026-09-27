import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, X } from 'lucide-react'
import ProductGrid, { type GridItem } from '../components/ProductGrid'
import Contact from '../components/Contact'
import { galleryImages } from '../data/content'

const items: GridItem[] = galleryImages.map((g, i) => ({
  key: `${g.image}-${i}`,
  image: g.image,
  title: g.title,
}))

export default function GalleryPage() {
  const [active, setActive] = useState<GridItem | null>(null)

  return (
    <>
      <section className="relative flex min-h-[60vh] flex-col justify-end overflow-hidden bg-ink pt-28 text-cream">
        <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-10">
          <Link to="/" className="label-meta mb-10 flex w-fit items-center gap-2 text-cream/60 hover:text-cream">
            <ArrowLeft size={14} /> Back home
          </Link>

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="label-meta text-saffron"
          >
            {items.length}+ Photos
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display mt-4 text-display font-extrabold uppercase leading-[0.92] tracking-tight"
          >
            Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-editorial mt-5 max-w-xl text-lead italic text-cream/85"
          >
            Every brand and product we bring to India, in one visual wall.
          </motion.p>
        </div>
      </section>

      <section className="relative bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <ProductGrid items={items} columns={4} onItemClick={setActive} />
        </div>
      </section>

      <Contact variant="compact" />

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-6"
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center border border-cream/25 text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-[85vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={active.image ?? undefined} alt={active.title} className="max-h-[75vh] w-full object-contain" />
              <p className="label-meta mt-4 text-center text-cream/70">{active.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
