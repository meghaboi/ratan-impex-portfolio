import Hero from '../components/Hero'
import BrandMarquee from '../components/BrandMarquee'
import Stats from '../components/Stats'
import About from '../components/About'
import BrandStack from '../components/BrandStack'
import FeaturedProducts from '../components/FeaturedProducts'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <BrandMarquee />
      <About />
      <BrandStack />
      <FeaturedProducts />
      <FAQ />
      <Contact />
    </>
  )
}
