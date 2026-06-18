import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="bg-[#111111] w-full">
      <div className="max-w-[1583px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 min-h-[320px]">
        {/* Left text */}
        <div className="flex-1 max-w-[520px]">
          <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Ride. Travel. Save.<br />
            Everything in One Place.
          </h1>
          <p className="text-gray-400 text-sm mb-6">
            Accessories / Trips / Insurance / Deals
          </p>
          <button className="bg-[#F15A22] text-white text-sm font-semibold px-6 py-2.5 rounded-md hover:bg-[#d44e1a] transition-colors">
            Explore
          </button>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-end">
          <div className="w-full max-w-[600px] h-[260px] md:h-[300px] rounded-xl overflow-hidden bg-[#1a2a4a]">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
              alt="Rider on motorcycle"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
