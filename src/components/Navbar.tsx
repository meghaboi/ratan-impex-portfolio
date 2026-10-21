import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import MagneticLink from './MagneticLink'
import { contact } from '../data/content'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Brands', to: '/brands' },
  { label: 'Products', to: '/products' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

const EASE = [0.16, 1, 0.3, 1] as const

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  const isActive = (to: string) => (to === '/' ? location.pathname === '/' : location.pathname.startsWith(to))

  // Campaign artwork is bright and product-led, so the home-page navigation stays ink-coloured
  // until the solid header arrives on scroll. Interior page mastheads remain light-on-dark.
  const onDark = open || (!scrolled && location.pathname !== '/')
  const tone = onDark ? 'text-cream' : 'text-ink'

  return (
    <header className="fixed top-0 z-50 w-full">
      <div
        className={`absolute inset-0 border-b transition-all duration-500 ${
          scrolled ? 'border-ink/10 bg-cream/92 backdrop-blur-md' : 'border-transparent bg-transparent'
        }`}
      />

      <div
        className={`relative z-10 mx-auto flex max-w-[1600px] items-center justify-between px-6 transition-all duration-500 md:px-10 ${
          scrolled ? 'py-2' : 'py-4 md:py-5'
        }`}
      >
        <Link to="/" onClick={() => setOpen(false)} aria-label="Ratan Impex — home">
          <img
            src="/images/misc/logo.png"
            alt="Ratan Impex"
            className={`w-auto transition-all duration-500 ${scrolled ? 'h-11 md:h-12' : 'h-14 md:h-16'} ${
              onDark ? 'brightness-0 invert' : ''
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => {
            const active = isActive(l.to)
            return (
              <Link key={l.to} to={l.to} className={`group relative label-meta pb-1 ${tone}`}>
                {l.label}
                <span
                  className={`absolute bottom-0 left-0 h-px w-full origin-left bg-current transition-transform duration-300 ease-out ${
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        <MagneticLink className="hidden md:inline-block" strength={8}>
          <a
            href={contact.whatsappCall}
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 border px-5 py-2.5 label-meta transition-colors ${
              scrolled ? 'border-ink/20 text-ink hover:bg-ink hover:text-cream' : 'border-cream/30 text-cream hover:bg-cream hover:text-ink'
            }`}
          >
            Get in Touch
            <ArrowUpRight size={14} />
          </a>
        </MagneticLink>

        <button
          className={`p-2 transition-colors md:hidden ${tone}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 flex h-[100dvh] flex-col justify-between bg-ink px-6 pb-10 pt-24 text-cream md:hidden"
          >
            <nav className="flex flex-col">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 + i * 0.06, ease: EASE }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`font-editorial rule-b block border-cream/15 py-4 text-left text-4xl italic ${
                      isActive(l.to) ? 'text-saffron' : ''
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <a
              href={contact.whatsappCall}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between border border-cream/25 px-5 py-4 label-meta"
            >
              Get in Touch
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
