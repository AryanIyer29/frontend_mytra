import React from 'react'
import { Link } from 'react-router-dom'
import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import StatsBar from '../components/StatsBar'
import RideFurther from '../components/RideFurther'

// Frame 886 layout: two category cards — Accessories + Tour & Travel
const MarketplacePage: React.FC = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <SiteNavbar />
    <main className="flex-1">
      <div className="max-w-[1728px] mx-auto px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Accessories card */}
          <Link to="/marketplace/accessories" className="group relative rounded-2xl overflow-hidden h-[280px] block">
            <img
              src="https://images.unsplash.com/photo-1558618047-3c8c76ca4d19?w=800&q=80"
              alt="Accessories"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-5 left-5 flex items-center justify-between w-[calc(100%-40px)]">
              <span className="text-white font-bold text-xl">Accessories</span>
              <div className="w-10 h-10 rounded-full bg-[#F15A22] flex items-center justify-center">
                <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 20 20">
                  <path d="M4 10h12M10 4l6 6-6 6"/>
                </svg>
              </div>
            </div>
          </Link>

          {/* Tour & Travel card */}
          <Link to="/marketplace/travel" className="group relative rounded-2xl overflow-hidden h-[280px] block">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
              alt="Tour & Travel"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-5 left-5 flex items-center justify-between w-[calc(100%-40px)]">
              <span className="text-white font-bold text-xl">Tour & Travel</span>
              <div className="w-10 h-10 rounded-full bg-[#F15A22] flex items-center justify-center">
                <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 20 20">
                  <path d="M4 10h12M10 4l6 6-6 6"/>
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <StatsBar />
      <RideFurther />
    </main>
    <SiteFooter />
  </div>
)

export default MarketplacePage
