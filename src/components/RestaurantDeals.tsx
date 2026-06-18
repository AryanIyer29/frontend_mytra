import React from 'react'

const deals = [
  { code: 'Cafe Coffee Day : Code x Mix $250', label: 'Copy Code' },
  { code: 'Cafe Coffee Day : Code x Mix $230', label: 'Copy Code' },
]

const CafeLogo: React.FC = () => (
  <div className="flex items-center justify-center w-full h-full">
    <div className="bg-[#c0392b] rounded-2xl px-6 py-5 flex flex-col items-center justify-center w-[140px]">
      <span className="text-white font-black text-lg leading-tight text-center">
        Café<br />Coffee<br />Day
      </span>
      <div className="mt-2 w-10 h-6 border-l-4 border-b-4 border-white rounded-bl-full" />
    </div>
  </div>
)

const RestaurantDeals: React.FC = () => {
  return (
    <section className="bg-[#111111] w-full py-10">
      <div className="max-w-[1583px] mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-bold text-xl md:text-2xl">
            Get the best deals at your favourite restaurant
          </h2>
          <button className="border border-[#444] text-white text-xs font-medium px-4 py-2 rounded-full hover:border-[#F15A22] hover:text-[#F15A22] transition-colors">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {deals.map((deal, i) => (
            <div key={i} className="bg-[#FDDCBC] rounded-xl overflow-hidden relative" style={{ height: '220px' }}>
              {/* Wishlist + view icons */}
              <div className="absolute top-3 right-3 flex flex-col gap-1 z-10">
                <button className="w-7 h-7 rounded-full bg-white/80 flex items-center justify-center shadow" aria-label="Wishlist">
                  <svg width="13" height="13" fill="none" stroke="#333" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="w-7 h-7 rounded-full bg-white/80 flex items-center justify-center shadow" aria-label="View">
                  <svg width="13" height="13" fill="none" stroke="#333" strokeWidth="1.8" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              <CafeLogo />

              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#111111]/90 px-4 py-2 flex items-center justify-between">
                <span className="text-white text-xs">{deal.code}</span>
                <button className="bg-[#F15A22] text-white text-xs font-semibold px-3 py-1.5 rounded-md flex items-center gap-1 hover:bg-[#d44e1a] transition-colors">
                  {deal.label}
                  <svg width="12" height="12" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="9" y="9" width="13" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RestaurantDeals
