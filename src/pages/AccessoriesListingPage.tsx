import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import StatsBar from '../components/StatsBar'
import RideFurther from '../components/RideFurther'
import { accessories } from '../data/products'
import { useCart } from '../context/CartContext'

// Frame 889 — white bg, "Find best denims from Rolling Denims" heading,
// 4-col product grid, stats bar, ride further section, footer

const StarRating: React.FC<{ rating: number; count: number }> = ({ rating, count }) => (
  <div className="flex items-center gap-1">
    {[1,2,3,4,5].map(s => (
      <svg key={s} width="11" height="11" viewBox="0 0 12 12"
        fill={s <= Math.floor(rating) ? '#F15A22' : '#ddd'}>
        <path d="M6 1l1.3 2.6L10 4l-2 1.9.5 2.7L6 7.3 3.5 8.6 4 5.9 2 4l2.7-.4L6 1z"/>
      </svg>
    ))}
    <span className="text-[#666] text-[10px] ml-1">({count})</span>
  </div>
)

const AccessoriesListingPage: React.FC = () => {
  const { addItem } = useCart()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteNavbar />
      <main className="flex-1">
        <div className="max-w-[1728px] mx-auto px-8 py-10">
          {/* Figma Frame 889: "Find best denims from Rolling Denims" */}
          <h2 className="text-[#111] font-bold text-xl mb-6">
            Find best denims from{' '}
            <span className="text-[#F15A22]">Rolling Denims</span>
          </h2>

          {/* 4-col product grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
            {accessories.map((product) => (
              <div key={product.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden relative shadow-sm hover:shadow-md transition-shadow">
                {/* Wishlist + view icons */}
                <div className="absolute top-2 right-2 flex flex-col gap-1 z-10">
                  <button className="w-7 h-7 rounded-full bg-white/90 shadow flex items-center justify-center" aria-label="Wishlist">
                    <svg width="13" height="13" fill="none" stroke="#333" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="w-7 h-7 rounded-full bg-white/90 shadow flex items-center justify-center" aria-label="Quick view">
                    <svg width="13" height="13" fill="none" stroke="#333" strokeWidth="1.8" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                {/* Image — clickable → detail page */}
                <Link to={`/marketplace/accessories/${product.id}`}>
                  <div className="w-full h-[200px] bg-gray-50 overflow-hidden cursor-pointer">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
                  </div>
                </Link>

                {/* Info */}
                <div className="p-3 pb-10 relative">
                  <Link to={`/marketplace/accessories/${product.id}`}>
                    <p className="text-[#111] text-xs font-medium leading-snug mb-2 line-clamp-2 hover:text-[#F15A22] transition-colors">
                      {product.name}
                    </p>
                  </Link>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[#F15A22] text-sm font-bold">₹{product.price.toLocaleString('en-IN')}</span>
                    <span className="text-gray-400 text-xs line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <StarRating rating={product.rating} count={product.reviewCount} />

                  {/* Add to cart — orange circle bottom right */}
                  <button
                    onClick={() => {
                      addItem({ id: product.id, name: product.name, image: product.image, price: product.price, originalPrice: product.originalPrice })
                      navigate('/cart')
                    }}
                    className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#F15A22] flex items-center justify-center shadow hover:bg-[#d44e1a] transition-colors"
                    aria-label="Add to cart"
                  >
                    <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <StatsBar />
        <RideFurther />
      </main>
      <SiteFooter />
    </div>
  )
}

export default AccessoriesListingPage
