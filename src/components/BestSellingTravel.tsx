import React from 'react'
import { useNavigate } from 'react-router-dom'
import TravelCard from './TravelCard'
import { travelPackages } from '../data/products'

const BestSellingTravel: React.FC = () => {
  const navigate = useNavigate()
  return (
    <section className="bg-[#111111] w-full py-10">
      <div className="max-w-[1583px] mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-bold text-xl md:text-2xl">Best Selling Travel Packages</h2>
          <button
            onClick={() => navigate('/marketplace/travel')}
            className="border border-[#444] text-white text-xs font-medium px-4 py-2 rounded-full hover:border-[#F15A22] hover:text-[#F15A22] transition-colors"
          >
            View All
          </button>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-2">
            {travelPackages.slice(0, 4).map((pkg) => (
              <TravelCard
                key={pkg.id}
                id={pkg.id}
                image={pkg.image}
                name={pkg.name}
                price={pkg.price}
                originalPrice={pkg.originalPrice}
                from={pkg.from}
                to={pkg.to}
                distance={pkg.distance}
                dates={pkg.dates}
                clubName={pkg.clubName}
                clubRating={pkg.clubRating}
                memberCount={pkg.memberCount}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestSellingTravel
