import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import StatsBar from '../components/StatsBar'
import RideFurther from '../components/RideFurther'
import Breadcrumb from '../components/Breadcrumb'
import { accessories } from '../data/products'
import { useCart } from '../context/CartContext'

// Frame 890 — product detail page

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1,2,3,4,5].map(s => (
      <svg key={s} width="13" height="13" viewBox="0 0 12 12"
        fill={s <= Math.floor(rating) ? '#F15A22' : '#ddd'}>
        <path d="M6 1l1.3 2.6L10 4l-2 1.9.5 2.7L6 7.3 3.5 8.6 4 5.9 2 4l2.7-.4L6 1z"/>
      </svg>
    ))}
  </div>
)

const AccessoryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addItem } = useCart()

  const product = accessories.find(p => p.id === id) ?? accessories[0]
  const [selectedSize, setSelectedSize] = useState(product.size?.[0] ?? '')
  const [selectedAirbag, setSelectedAirbag] = useState('Without Airbag')
  const [qty, setQty] = useState(1)

  const handleAddToCart = () => {
    addItem({ id: product.id, name: product.name, image: product.image, price: product.price, originalPrice: product.originalPrice })
    navigate('/cart')
  }

  const handleBuyNow = () => {
    addItem({ id: product.id, name: product.name, image: product.image, price: product.price, originalPrice: product.originalPrice })
    navigate('/checkout')
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteNavbar />
      <main className="flex-1">
        <div className="max-w-[1728px] mx-auto px-8 py-8">
          <Breadcrumb items={[
            { label: 'Home', to: '/' },
            { label: 'Marketplace', to: '/marketplace' },
            { label: 'Accessories', to: '/marketplace/accessories' },
            { label: product.name },
          ]} />

          {/* Frame 890 layout: left image, right details */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left: Product image */}
            <div className="flex-1 max-w-[560px]">
              <div className="w-full rounded-2xl overflow-hidden bg-gray-50 aspect-square">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover"/>
              </div>
              {/* Thumbnail dots */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {[0,1,2,3].map(i => (
                  <div key={i} className={`rounded-full transition-all ${i === 0 ? 'w-5 h-2 bg-[#F15A22]' : 'w-2 h-2 bg-gray-300'}`}/>
                ))}
              </div>
            </div>

            {/* Right: Product details */}
            <div className="flex-1">
              {/* Starting from label */}
              <p className="text-[#999] text-xs mb-1">Starting from</p>

              {/* Product name */}
              <h1 className="text-[#111] font-bold text-2xl leading-snug mb-2">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#F15A22] font-bold text-2xl">₹{product.price.toLocaleString('en-IN')}</span>
                <span className="text-gray-400 text-sm line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-5">
                <StarRating rating={product.rating} />
                <span className="text-[#999] text-xs">({product.reviewCount})</span>
              </div>

              {/* Size selector */}
              <div className="mb-5">
                <p className="text-[#111] text-sm font-semibold mb-2">Size</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {product.size?.map(s => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-colors
                        ${selectedSize === s
                          ? 'bg-[#F15A22] text-white border-[#F15A22]'
                          : 'bg-white text-[#333] border-gray-200 hover:border-[#F15A22]'
                        }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Knee & Hip Airbag */}
              <div className="mb-6">
                <p className="text-[#111] text-sm font-semibold mb-2">
                  Knee & Hip Airbag:{' '}
                  <span className="text-[#F15A22] font-normal text-xs">Without Airbag / With Airbag</span>
                </p>
                <div className="flex items-center gap-3">
                  {['Without Airbag', 'With Airbag'].map(opt => (
                    <button
                      key={opt}
                      onClick={() => setSelectedAirbag(opt)}
                      className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors
                        ${selectedAirbag === opt
                          ? 'bg-[#111] text-white border-[#111]'
                          : 'bg-white text-[#333] border-gray-300 hover:border-[#111]'
                        }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex items-center gap-3 mb-8">
                <button
                  onClick={handleBuyNow}
                  className="bg-[#F15A22] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#d44e1a] transition-colors text-sm"
                >
                  Buy Now
                </button>
                <button
                  onClick={handleAddToCart}
                  className="border border-gray-300 text-[#111] font-semibold px-8 py-3 rounded-full hover:border-[#F15A22] hover:text-[#F15A22] transition-colors text-sm"
                >
                  Add to Cart
                </button>
              </div>

              {/* Overview & Highlights */}
              <div>
                <h3 className="text-[#111] font-bold text-base mb-3">Overview & Highlights</h3>
                <p className="text-[#555] text-sm leading-relaxed">
                  {product.description}
                </p>
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

export default AccessoryDetailPage
