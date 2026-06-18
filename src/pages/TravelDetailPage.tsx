import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import StatsBar from '../components/StatsBar'
import RideFurther from '../components/RideFurther'
import Breadcrumb from '../components/Breadcrumb'
import { travelPackages } from '../data/products'

// Frame 888 — Travel package detail with itinerary accordion

const TravelDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const pkg = travelPackages.find(p => p.id === id) ?? travelPackages[0]
  const [openDay, setOpenDay] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteNavbar />
      <main className="flex-1">
        <div className="max-w-[1728px] mx-auto px-8 py-8">
          <Breadcrumb items={[
            { label: 'Home', to: '/' },
            { label: 'Marketplace', to: '/marketplace' },
            { label: 'Travel', to: '/marketplace/travel' },
            { label: pkg.name },
          ]} />

          {/* Frame 888 layout: left image, right details */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left: Package image */}
            <div className="flex-1 max-w-[560px]">
              <div className="w-full rounded-2xl overflow-hidden aspect-video">
                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover"/>
              </div>
              {/* Thumbnail dots */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {[0,1,2,3].map(i => (
                  <div key={i} className={`rounded-full transition-all ${i === 0 ? 'w-5 h-2 bg-[#F15A22]' : 'w-2 h-2 bg-gray-300'}`}/>
                ))}
              </div>
            </div>

            {/* Right: Package details */}
            <div className="flex-1">
              <h1 className="text-[#111] font-bold text-2xl leading-snug mb-2">{pkg.name}</h1>
              <p className="text-[#555] text-sm mb-3">{pkg.overview}</p>

              {/* Route + duration */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1.5 text-xs text-[#555]">
                  <svg width="12" height="12" fill="none" stroke="#F15A22" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                  {pkg.from} - {pkg.to}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#555]">
                  <svg width="12" height="12" fill="none" stroke="#555" strokeWidth="1.8" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2"/>
                    <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round"/>
                  </svg>
                  {pkg.duration}
                </div>
              </div>

              {/* Price */}
              <div className="mb-5">
                <p className="text-[#999] text-xs mb-0.5">Starting from</p>
                <div className="flex items-center gap-3">
                  <span className="text-[#F15A22] font-bold text-2xl">₹{pkg.price.toLocaleString('en-IN')}</span>
                  <span className="text-gray-400 text-sm line-through">₹{pkg.originalPrice.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex items-center gap-3 mb-8">
                <button
                  onClick={() => navigate('/checkout')}
                  className="bg-[#F15A22] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#d44e1a] transition-colors text-sm"
                >
                  Book Package
                </button>
                <button className="border border-gray-300 text-[#111] font-semibold px-8 py-3 rounded-full hover:border-[#F15A22] hover:text-[#F15A22] transition-colors text-sm">
                  Contact Agent
                </button>
              </div>

              {/* Overview & Highlights */}
              <div className="mb-6">
                <h3 className="text-[#111] font-bold text-base mb-3">Overview & Highlights</h3>
                <p className="text-[#555] text-sm leading-relaxed mb-4">{pkg.overview}</p>
                {pkg.highlights && (
                  <ul className="flex flex-col gap-2">
                    {pkg.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#444]">
                        <div className="w-4 h-4 rounded-full bg-[#22c55e] flex items-center justify-center flex-shrink-0">
                          <svg width="8" height="8" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 12 12">
                            <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Itinerary Accordion */}
              <div>
                <h3 className="text-[#111] font-bold text-base mb-3">Itinerary</h3>
                <div className="flex flex-col gap-2">
                  {pkg.itinerary?.map((item, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                        onClick={() => setOpenDay(openDay === i ? null : i)}
                      >
                        <span className="text-[#111] text-sm font-semibold">{item.day} {item.title}</span>
                        <svg
                          width="16" height="16" fill="none" stroke="#666" strokeWidth="2"
                          viewBox="0 0 24 24"
                          className={`transition-transform duration-200 ${openDay === i ? 'rotate-180' : ''}`}
                        >
                          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      {openDay === i && (
                        <div className="px-4 pb-4 text-sm text-[#555] leading-relaxed border-t border-gray-100">
                          {item.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <StatsBar />
        <RideFurther />
      </main>
      <SiteFooter />
    </div>
  )
}

export default TravelDetailPage
