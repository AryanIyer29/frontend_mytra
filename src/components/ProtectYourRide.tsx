import React from 'react'

const checkItems1 = [
  'Comprehensive Coverage',
  'Personal Accident Cover',
  'Theft & Damage Coverage',
  '24x7 Roadside Assistance',
  'Third-Party Liability',
  'No Claim Bonus',
]

const checkItems2 = [
  'Own Damage Protection',
  'Personal Accident Cover',
  'Zero Depreciation Cover',
  '24x7 Roadside Assistance',
  'Third-Party Liability',
  'Engine Protection',
]

// Figma: green circle checkmarks, not orange
const CheckItem: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center gap-2">
    <div className="w-4 h-4 rounded-full bg-[#22c55e] flex items-center justify-center flex-shrink-0">
      <svg width="8" height="8" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 12 12">
        <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <span className="text-white text-xs">{label}</span>
  </div>
)

const ProtectYourRide: React.FC = () => {
  return (
    <section className="bg-[#111111] w-full py-10">
      <div className="max-w-[1583px] mx-auto px-6">
        {/* Section title */}
        <h2 className="text-white font-bold text-xl md:text-2xl text-center mb-8">
          Protect Your Ride
        </h2>

        <div className="flex flex-col gap-6">
          {/* Card 1 — Your Bike Deserves Better Protection */}
          <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="flex-1 p-8 flex flex-col justify-center">
              <h3 className="text-white font-bold text-xl mb-1">Your Bike Deserves</h3>
              <h3 className="text-[#F15A22] font-bold text-xl mb-6">Better Protection</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6">
                {checkItems1.map((item) => (
                  <CheckItem key={item} label={item} />
                ))}
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-white text-sm font-semibold">From</span>
                <span className="text-[#F15A22] text-lg font-bold">₹539</span>
              </div>
              <button className="bg-[#F15A22] text-white text-sm font-semibold px-6 py-2.5 rounded-md w-fit hover:bg-[#d44e1a] transition-colors">
                Book Now →
              </button>
            </div>
            {/* Right image */}
            <div className="flex-1 min-h-[260px] relative bg-[#0d0d0d] flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca4d19?w=600&q=80"
                alt="Bike protection"
                className="w-full h-full object-cover opacity-60"
              />
              {/* Person with bike overlay illustration placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-purple-900/50 flex items-center justify-center mx-auto mb-2">
                    <svg width="48" height="48" fill="none" stroke="#a855f7" strokeWidth="1.5" viewBox="0 0 48 48">
                      <circle cx="24" cy="24" r="20" />
                      <path d="M24 14v10l6 6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Ride Protected. Drive Confident. */}
          <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden flex flex-col md:flex-row">
            {/* Left image */}
            <div className="flex-1 min-h-[260px] relative bg-[#0d0d0d] flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80"
                alt="Car protection"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-purple-900/50 flex items-center justify-center">
                  <svg width="40" height="40" fill="none" stroke="#a855f7" strokeWidth="1.5" viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="18" />
                    <path d="M18 24l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex-1 p-8 flex flex-col justify-center">
              <h3 className="text-white font-bold text-xl mb-1">Ride Protected.</h3>
              <h3 className="text-[#F15A22] font-bold text-xl mb-6">Drive Confident.</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6">
                {checkItems2.map((item) => (
                  <CheckItem key={item} label={item} />
                ))}
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-white text-sm font-semibold">From</span>
                <span className="text-[#F15A22] text-lg font-bold">₹539</span>
              </div>
              <button className="bg-[#F15A22] text-white text-sm font-semibold px-6 py-2.5 rounded-md w-fit hover:bg-[#d44e1a] transition-colors">
                Book Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProtectYourRide
