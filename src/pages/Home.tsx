import Hero from '../components/Hero'
import BrandMarquee from '../components/BrandMarquee'
import About from '../components/About'
import BrandIndex from '../components/BrandIndex'
import FeaturedProducts from '../components/FeaturedProducts'
import Process from '../components/Process'
import GlobalReach from '../components/GlobalReach'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <About />
      <BrandIndex />
      <FeaturedProducts />
      <Process />
      <GlobalReach />
      <FAQ />
      <Contact />
    </>
  )
}
