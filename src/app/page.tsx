import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import EventInsights from '@/components/EventInsights'
import ProductsSection from '@/components/ProductsSection'
import AboutSection from '@/components/AboutSection'
import Testimonials from '@/components/Testimonials'
import ApproachSection from '@/components/ApproachSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <ServicesSection />
      <EventInsights />
      <ProductsSection />
      <AboutSection />
      <Testimonials />
      <ApproachSection />
    </main>
  )
}
