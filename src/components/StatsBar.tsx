import React from 'react'

const stats = [
  {
    value: '5 Valuable',
    label: 'Vendors',
    icon: (
      <div className="relative w-12 h-12">
        <div className="w-10 h-10 rounded-full bg-[#222] border-2 border-[#333] flex items-center justify-center absolute right-0 top-0">
          <svg width="18" height="18" fill="none" stroke="#888" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#333] border-2 border-[#444] flex items-center justify-center absolute left-0 top-2">
          <svg width="18" height="18" fill="none" stroke="#aaa" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="w-6 h-6 rounded-full bg-[#F15A22] flex items-center justify-center absolute -bottom-1 right-0 text-white text-[10px] font-bold">
          +
        </div>
      </div>
    ),
  },
  {
    value: '10,000+',
    label: 'Happy Customer',
    icon: (
      <div className="w-12 h-12 flex items-center justify-center text-3xl">
        😊
      </div>
    ),
  },
  {
    value: '6+ Year',
    label: 'of experience',
    icon: (
      <div className="w-12 h-12 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
          <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    ),
  },
]

const StatsBar: React.FC = () => {
  return (
    <section className="bg-[#111111] w-full py-8">
      <div className="max-w-[1583px] mx-auto px-6">
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#FFF5EB] rounded-2xl px-6 py-5 flex items-center justify-between"
            >
              <div>
                <p className="text-[#111] font-bold text-xl md:text-2xl">{stat.value}</p>
                <p className="text-[#666] text-sm mt-1">{stat.label}</p>
              </div>
              {stat.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBar
