import React from 'react'
import { useNavigate } from 'react-router-dom'

interface TravelCardProps {
  id?: string
  image: string
  name: string
  price: number
  originalPrice: number
  from?: string
  to?: string
  distance?: string
  dates?: string
  clubName?: string
  clubRating?: number
  memberCount?: string
}

const TravelCard: React.FC<TravelCardProps> = ({
  id = 'tr-1', image, name, price, originalPrice,
  from = 'Delhi', to = 'Leh', distance = '260km',
  dates = '12 Nov - 22 Nov 2025',
  clubName = 'Adventure Leaders',
  clubRating = 4.5,
  memberCount = '10+',
}) => {
  const navigate = useNavigate()

  return (
    <div
      className="rounded-2xl overflow-hidden flex-shrink-0 w-[300px] md:w-[332px] flex flex-col cursor-pointer"
      style={{ backgroundColor: '#211F24' }}
      onClick={() => navigate(`/marketplace/travel/${id}`)}
    >
      {/* Image with overlays */}
      <div className="relative w-full h-[180px] overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />

        {/* Member badge — green pill top-left */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#1a7a3a] px-2.5 py-1 rounded-full">
          <div className="flex -space-x-1">
            {[0,1,2].map(i => (
              <div key={i} className="w-5 h-5 rounded-full bg-gray-400 border border-[#1a7a3a] overflow-hidden">
                <img src={`https://i.pravatar.cc/20?img=${i+10}`} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <span className="text-white text-xs font-semibold">{memberCount}</span>
        </div>

        {/* Bookmark — top right */}
        <button
          className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center"
          aria-label="Save"
          onClick={e => e.stopPropagation()}
        >
          <svg width="16" height="16" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Bottom gradient — type + title */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 pt-6 pb-3">
          <p className="text-gray-300 text-[11px] mb-0.5">Multiday / ₹₹₹</p>
          <p className="text-white font-bold text-base leading-tight">{name}</p>
        </div>
      </div>

      {/* Route + date */}
      <div className="px-3 py-3 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <svg width="12" height="12" fill="none" stroke="#aaa" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="10"/>
          </svg>
          <span className="text-white text-xs font-medium">{from}</span>
          <div className="flex-1 flex items-center gap-1">
            <div className="flex-1 h-[1.5px] bg-[#F15A22]"/>
            <span className="text-[#F15A22] text-[10px] font-semibold whitespace-nowrap">{distance}</span>
            <div className="flex-1 h-[1.5px] bg-[#F15A22]"/>
          </div>
          <svg width="12" height="12" fill="none" stroke="#aaa" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="10"/>
          </svg>
          <span className="text-white text-xs font-medium">{to}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="12" height="12" fill="none" stroke="#aaa" strokeWidth="1.5" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-white text-xs">{dates}</span>
        </div>
      </div>

      {/* Club bar */}
      <div className="mx-3 mb-3 bg-[#111] rounded-2xl px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-white overflow-hidden flex-shrink-0 border border-[#333]">
            <img src="https://i.pravatar.cc/36?img=5" alt={clubName} className="w-full h-full object-cover"/>
          </div>
          <div>
            <p className="text-white text-xs font-semibold leading-tight">{clubName}</p>
            <div className="flex items-center gap-1">
              <span className="text-gray-400 text-[10px]">Club</span>
              <span className="text-yellow-400 text-[10px]">★</span>
              <span className="text-gray-300 text-[10px]">{clubRating}</span>
            </div>
          </div>
        </div>
        <button
          className="w-9 h-9 rounded-full bg-[#F15A22] flex items-center justify-center flex-shrink-0 hover:bg-[#d44e1a] transition-colors"
          aria-label="View details"
          onClick={e => { e.stopPropagation(); navigate(`/marketplace/travel/${id}`) }}
        >
          <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 20 20">
            <path d="M4 10h12M10 4l6 6-6 6"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TravelCard
