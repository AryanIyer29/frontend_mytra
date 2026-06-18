import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from './ProductCard'
import { accessories } from '../data/products'

const BestSellingAccessories: React.FC = () => {
  const navigate = useNavigate()
  return (
    <section className="bg-[#111111] w-full py-10">
      <div className="max-w-[1583px] mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-bold text-xl md:text-2xl">Best Selling Accessories</h2>
          <button
            onClick={() => navigate('/marketplace/accessories')}
            className="border border-[#444] text-white text-xs font-medium px-4 py-2 rounded-full hover:border-[#F15A22] hover:text-[#F15A22] transition-colors"
          >
            View All
          </button>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-2">
            {accessories.map((item) => (
              <ProductCard key={item.id} id={item.id} image={item.image} name={item.name} price={item.price} originalPrice={item.originalPrice} rating={item.rating} reviewCount={item.reviewCount} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mt-6">
          {[0,1,2,3,4].map((dot) => (
            <div key={dot} className={`rounded-full transition-all ${dot === 0 ? 'w-6 h-2 bg-[#F15A22]' : 'w-2 h-2 bg-[#444]'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSellingAccessories
