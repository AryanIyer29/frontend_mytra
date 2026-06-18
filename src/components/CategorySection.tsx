import React from 'react'
import { useNavigate } from 'react-router-dom'

const MBadge: React.FC = () => (
  <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#2a1f1a]/90 flex items-center justify-center text-white font-bold text-base shadow-lg border border-white/10">
    m
  </div>
)

const ArrowBadge: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div
    className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-[#F15A22] flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#d44e1a] transition-colors"
    onClick={onClick}
  >
    <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 20 20">
      <path d="M4 10h12M10 4l6 6-6 6"/>
    </svg>
  </div>
)

const CategorySection: React.FC = () => {
  const navigate = useNavigate()

  return (
    <section className="bg-[#111111] w-full">
      <div className="max-w-[1583px] mx-auto px-6">
        {/* Top row: Accessories + Coupons */}
        <div className="grid grid-cols-2 gap-[1px] mb-[1px]">
          {/* Accessories — navigates to /marketplace/accessories */}
          <div
            className="relative overflow-hidden cursor-pointer"
            style={{ height: '220px' }}
            onClick={() => navigate('/marketplace/accessories')}
          >
            <img
              src="https://images.unsplash.com/photo-1558618047-3c8c76ca4d19?w=400&q=80"
              alt="Accessories"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black/35" />
            <span className="absolute bottom-3 left-3 text-white text-sm font-semibold">Accessories</span>
            <ArrowBadge />
          </div>

          {/* Coupons — no dedicated page yet, m badge */}
          <div className="relative overflow-hidden" style={{ height: '220px' }}>
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
              alt="Coupons"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/35" />
            <span className="absolute bottom-3 left-3 text-white text-sm font-semibold">Coupons</span>
            <MBadge />
          </div>
        </div>

        {/* Bottom: Tour & Travels — navigates to /marketplace/travel */}
        <div
          className="relative overflow-hidden cursor-pointer"
          style={{ height: '220px' }}
          onClick={() => navigate('/marketplace/travel')}
        >
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
            alt="Tour & Travels"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
          <div className="absolute inset-0 bg-black/35" />
          <span className="absolute bottom-3 left-3 text-white text-sm font-semibold">Tour & Travels</span>
          <MBadge />
          <ArrowBadge onClick={() => navigate('/marketplace/travel')} />
        </div>
      </div>
    </section>
  )
}

export default CategorySection
