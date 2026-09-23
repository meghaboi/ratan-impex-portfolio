import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import BrandPage from './pages/BrandPage'

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

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands/:slug" element={<BrandPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
