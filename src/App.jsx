import { useLang } from './context/LangContext'
import Nav from './components/Nav'
import PromoSection from './components/PromoSection'
import CardGrid from './components/CardGrid'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import MobileReserveCTA from './components/MobileReserveCTA'

export default function App() {
  const { t } = useLang()

  return (
    <>
      <Nav />
      <PromoSection />
      <CardGrid
        cards={t.cards1}
        label={t.section1.label}
        title={t.section1.title}
        desc={t.section1.desc}
      />
      <Carousel slides={t.carousel} />
      <CardGrid
        cards={t.cards2}
        label={t.section2.label}
        title={t.section2.title}
        variant="bento"
      />
      <Footer />
      <MobileReserveCTA />
    </>
  )
}
