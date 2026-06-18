import React from 'react'
import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import Hero from '../components/Hero'
import CategorySection from '../components/CategorySection'
import BestSellingAccessories from '../components/BestSellingAccessories'
import BestSellingTravel from '../components/BestSellingTravel'
import RestaurantDeals from '../components/RestaurantDeals'
import ProtectYourRide from '../components/ProtectYourRide'
import StatsBar from '../components/StatsBar'
import RideFurther from '../components/RideFurther'

const HomePage: React.FC = () => (
  <div className="min-h-screen bg-[#111111] flex flex-col">
    <SiteNavbar />
    <main className="flex-1">
      <Hero />
      <CategorySection />
      <BestSellingAccessories />
      <BestSellingTravel />
      <RestaurantDeals />
      <ProtectYourRide />
      <StatsBar />
      <RideFurther />
    </main>
    <SiteFooter />
  </div>
)

export default HomePage
