import { Link } from 'react-router-dom'
import { MessageCircle, ArrowUpRight } from 'lucide-react'
import { brands, contact, company } from '../data/content'

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative bg-ink text-cream/70">
      <div className="border-b border-cream/10 py-14">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <p className="label-meta text-cream/40">Brands we bring to India</p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {brands.map((b) => (
              <Link
                key={b.slug}
                to={`/brands/${b.slug}`}
                className="font-display inline-flex items-center gap-1 text-xl font-semibold text-cream/80 transition-colors hover:text-saffron sm:text-2xl"
              >
                {b.name}
                <ArrowUpRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <img src="/images/misc/logo.png" alt="Ratan Impex" className="h-14 w-auto brightness-0 invert" />
            <p className="mt-4 max-w-xs text-sm">{company.description}</p>
            <div className="mt-5 flex gap-3">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center border border-cream/15 transition-colors hover:border-saffron hover:text-saffron"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={contact.whatsappCall}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center border border-cream/15 transition-colors hover:border-saffron hover:text-saffron"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="label-meta text-cream/40">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-saffron">About Us</Link></li>
              <li><Link to="/brands" className="hover:text-saffron">Brands</Link></li>
              <li><Link to="/products" className="hover:text-saffron">Products</Link></li>
              <li><Link to="/gallery" className="hover:text-saffron">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-saffron">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="label-meta text-cream/40">Brands</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {brands.map((b) => (
                <li key={b.slug}>
                  <Link to={`/brands/${b.slug}`} className="inline-flex items-center gap-1 hover:text-saffron">
                    {b.name}
                    <ArrowUpRight size={13} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-meta text-cream/40">Contact Us</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>{contact.phone}</li>
              <li>{contact.email}</li>
              <li className="max-w-xs">{contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} {company.legalName}, All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
