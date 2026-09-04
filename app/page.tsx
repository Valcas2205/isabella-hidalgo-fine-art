import { Contact, Footer, Header, Hero, ShopSlider, FeatureSplit, AboutMini, WorldToLiveWith, VideoHero } from '@/components/site'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureSplit />
        <AboutMini />
        <ShopSlider />
        <WorldToLiveWith />
        <VideoHero />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
