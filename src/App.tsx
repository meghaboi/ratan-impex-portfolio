import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import BrandPage from './pages/BrandPage'
import BrandsPage from './pages/BrandsPage'
import ProductsPage from './pages/ProductsPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import { resetScrollTriggers, ScrollTrigger } from './lib/scroll'

function ScrollToHash() {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80)
        return
      }
    }
    window.scrollTo(0, 0)
  }, [hash, pathname])
  return null
}

/** Every page mounts its own ScrollTrigger instances; without this they'd pile up (and misfire
 *  against the previous page's now-unmounted elements) across client-side route changes. */
function ScrollTriggerReset() {
  const { pathname } = useLocation()
  useEffect(() => {
    resetScrollTriggers()
    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <ScrollProgress />
      <ScrollToHash />
      <ScrollTriggerReset />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/brands/:slug" element={<BrandPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
