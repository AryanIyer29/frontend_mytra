import React from 'react'

const features = [
  'All-in-one biker platform',
  'Verified services',
  'Best prices',
  'Easy booking',
]

const RideFurther: React.FC = () => {
  return (
    <section className="bg-[#111111] w-full py-10">
      <div className="max-w-[1583px] mx-auto px-6">
        <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 relative">
          {/* M badge */}
          <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-[#3a2a1a] border-2 border-[#F15A22] flex items-center justify-center text-white font-bold text-base">
            m
          </div>

          {/* Left content */}
          <div className="flex-1 pt-10 md:pt-0">
            <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight mb-2">
              Ride Further.
            </h2>
            <h2 className="text-[#F15A22] font-bold text-3xl md:text-4xl leading-tight mb-4">
              Travel Smarter.
            </h2>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              Gear up, plan your journeys, protect your bike, and enjoy exclusive deals along the way.
            </p>
            <div className="flex flex-col gap-3">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1a3a2a] border border-[#2a5a3a] flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" fill="none" stroke="#4ade80" strokeWidth="2.5" viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right image collage */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex gap-3 items-end">
              {/* Tall left image */}
              <div className="w-[110px] h-[240px] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca4d19?w=300&q=80"
                  alt="Rider"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Center stacked images */}
              <div className="flex flex-col gap-3">
                <div className="w-[110px] h-[110px] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80"
                    alt="Mountain"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[110px] h-[110px] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80"
                    alt="Road"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Right tall image */}
              <div className="w-[110px] h-[200px] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?w=300&q=80"
                  alt="Travel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RideFurther
