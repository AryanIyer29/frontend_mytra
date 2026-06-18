import React from 'react'
import { Link } from 'react-router-dom'
import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import StatsBar from '../components/StatsBar'
import RideFurther from '../components/RideFurther'
import { travelPackages } from '../data/products'

// Frame 886 — Travel packages grouped by vendor
// Two groups: "Curly Tail" and "Vendor 2"

const SmallTravelCard: React.FC<{ pkg: typeof travelPackages[0] }> = ({ pkg }) => (
  <Link to={`/marketplace/travel/${pkg.id}`} className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex-shrink-0 w-[220px] md:w-[260px]">
    {/* Icons */}
    <div className="relative">
      <div className="w-full h-[170px] overflow-hidden">
        <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
      </div>
      <div className="absolute top-2 right-2 flex flex-col gap-1">
        <button className="w-6 h-6 rounded-full bg-white/90 shadow flex items-center justify-center" aria-label="Wishlist" onClick={e => e.preventDefault()}>
          <svg width="11" height="11" fill="none" stroke="#333" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="w-6 h-6 rounded-full bg-white/90 shadow flex items-center justify-center" aria-label="View" onClick={e => e.preventDefault()}>
          <svg width="11" height="11" fill="none" stroke="#333" strokeWidth="1.8" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3"/>
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
    <div className="p-3">
      <p className="text-[#111] text-xs font-semibold leading-snug mb-1.5 line-clamp-2">{pkg.name}</p>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#F15A22] text-sm font-bold">₹{pkg.price.toLocaleString('en-IN')}</span>
        <span className="text-gray-400 text-xs line-through">₹{pkg.originalPrice.toLocaleString('en-IN')}</span>
      </div>
      <div className="flex items-center gap-3 text-[10px] text-gray-500">
        <span className="flex items-center gap-1">
          <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          </svg>
          {pkg.from} - {pkg.to}
        </span>
        <span className="flex items-center gap-1">
          <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
          </svg>
          {pkg.duration}
        </span>
      </div>
    </div>
  </Link>
)

const TravelListingPage: React.FC = () => {
  const curlyTail = travelPackages.filter(p => p.vendor === 'Curly Tail')
  const vendor2 = travelPackages.filter(p => p.vendor === 'Vendor 2')

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteNavbar />
      <main className="flex-1">
        <div className="max-w-[1728px] mx-auto px-8 py-10">

          {/* Group 1 — Curly Tail */}
          <div className="mb-10">
            <h2 className="text-[#111] font-bold text-xl mb-5">
              Travel packages from{' '}
              <span className="text-[#F15A22]">Curly Tail</span>
            </h2>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 pb-2">
                {curlyTail.map(pkg => (
                  <SmallTravelCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>
          </div>

          {/* Group 2 — Vendor 2 */}
          <div className="mb-10">
            <h2 className="text-[#111] font-bold text-xl mb-5">
              Travel packages from{' '}
              <span className="text-[#F15A22]">Vendor 2</span>
            </h2>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 pb-2">
                {vendor2.map(pkg => (
                  <SmallTravelCard key={pkg.id} pkg={pkg} />
                ))}
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

export default TravelListingPage
