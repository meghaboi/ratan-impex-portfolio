import Hero from '../components/Hero'
import KineticStrip from '../components/KineticStrip'
import BrandMarquee from '../components/BrandMarquee'
import Benefits from '../components/Benefits'
import ProductPreview from '../components/ProductPreview'
import StatsBanner from '../components/StatsBanner'
import BrandWall from '../components/BrandWall'
import GlobalReach from '../components/GlobalReach'
import Process from '../components/Process'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <KineticStrip />
      <BrandMarquee />
      <Benefits />
      <ProductPreview />
      <StatsBanner />
      <BrandWall />
      <GlobalReach />
      <Process />
      <FAQ />
      <Contact variant="compact" />
    </>
  )
}
