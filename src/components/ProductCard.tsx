import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

interface ProductCardProps {
  id?: string
  image: string
  name: string
  price: number
  originalPrice: number
  rating: number
  reviewCount?: number
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg key={star} width="12" height="12" viewBox="0 0 12 12" fill={star <= Math.floor(rating) ? '#F15A22' : star - 0.5 <= rating ? 'url(#half)' : '#444'}>
        <defs>
          <linearGradient id="half">
            <stop offset="50%" stopColor="#F15A22" />
            <stop offset="50%" stopColor="#444" />
          </linearGradient>
        </defs>
        <path d="M6 1l1.3 2.6L10 4l-2 1.9.5 2.7L6 7.3 3.5 8.6 4 5.9 2 4l2.7-.4L6 1z" />
      </svg>
    ))}
  </div>
)

const ProductCard: React.FC<ProductCardProps> = ({ id = 'acc-1', image, name, price, originalPrice, rating }) => {
  const navigate = useNavigate()
  const { addItem } = useCart()

  return (
    <div
      className="bg-white rounded-xl overflow-hidden flex-shrink-0 w-[220px] md:w-[260px] relative cursor-pointer"
      onClick={() => navigate(`/marketplace/accessories/${id}`)}
    >
      {/* Top icons */}
      <div className="absolute top-2 right-2 flex flex-col gap-1 z-10">
        <button className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center shadow" aria-label="Wishlist" onClick={e => e.stopPropagation()}>
          <svg width="14" height="14" fill="none" stroke="#333" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center shadow" aria-label="Quick view" onClick={e => e.stopPropagation()}>
          <svg width="14" height="14" fill="none" stroke="#333" strokeWidth="1.8" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3"/><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="w-full h-[200px] bg-gray-100 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
      </div>

      <div className="p-3 pb-10">
        <p className="text-[#111] text-xs font-medium leading-tight mb-2 line-clamp-2">{name}</p>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[#F15A22] text-sm font-bold">₹{price.toLocaleString('en-IN')}</span>
          <span className="text-gray-400 text-xs line-through">₹{originalPrice.toLocaleString('en-IN')}</span>
        </div>
        <StarRating rating={rating} />
      </div>

      <button
        onClick={e => {
          e.stopPropagation()
          addItem({ id, name, image, price, originalPrice })
          navigate('/cart')
        }}
        className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#F15A22] flex items-center justify-center shadow-lg hover:bg-[#d44e1a] transition-colors"
        aria-label="Add to cart"
      >
        <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/>
        </svg>
      </button>
    </div>
  )
}

export default ProductCard
