import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, MessageCircle } from 'lucide-react'
import { contact } from '../data/content'

const links = [
  { label: 'About', hash: '#about' },
  { label: 'Brands', hash: '#brands' },
  { label: 'Products', hash: '#products' },
  { label: 'FAQ', hash: '#faq' },
  { label: 'Contact', hash: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (hash: string) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/' + hash)
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-cream/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src="/images/misc/logo.png"
            alt="Ratan Impex"
            className={`h-9 w-auto transition-all duration-300 md:h-10 ${scrolled ? '' : 'brightness-0 invert'}`}
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <button
              key={l.hash}
              onClick={() => goTo(l.hash)}
              className={`font-medium transition-colors hover:text-berry ${
                scrolled ? 'text-ink/80' : 'text-cream/90'
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <a
          href={contact.whatsappCall}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-berry px-5 py-2.5 font-semibold text-white shadow-md shadow-berry/20 transition-transform hover:scale-105 md:flex"
        >
          <MessageCircle size={18} />
          Get in Touch
        </a>

        <button
          className={`p-2 transition-colors md:hidden ${scrolled || open ? 'text-ink' : 'text-cream'}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-cream md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-5">
              {links.map((l) => (
                <button
                  key={l.hash}
                  onClick={() => goTo(l.hash)}
                  className="rounded-lg px-3 py-3 text-left font-medium text-ink/80 hover:bg-saffron/20"
                >
                  {l.label}
                </button>
              ))}
              <a
                href={contact.whatsappCall}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-berry px-5 py-3 font-semibold text-white"
              >
                <MessageCircle size={18} />
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
