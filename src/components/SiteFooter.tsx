import React from 'react'
import { Link } from 'react-router-dom'

// Footer links with correct routes matching Figma
const col1Links = [
  { label: 'Home', to: '/' },
  { label: 'News', to: '/news' },
  { label: 'Events', to: '/events' },
  { label: 'Marketplace', to: '/marketplace' },
]
const col2Links = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Term & Condition', to: '/terms' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
]

const SiteFooter: React.FC = () => (
  // Figma footer bg: #111111 dark, logo white, link columns, copyright
  <footer className="bg-[#111111] w-full pt-14 pb-6">
    <div className="max-w-[1728px] mx-auto px-10">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-12">
        {/* Logo — linked rings + MYTRA */}
        <div className="flex items-center gap-2.5">
          <svg width="36" height="20" viewBox="0 0 36 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2.5" fill="none"/>
            <circle cx="26" cy="10" r="8" stroke="white" strokeWidth="2.5" fill="none"/>
          </svg>
          <span className="text-white font-black text-[18px] tracking-[0.12em] uppercase">MYTRA</span>
        </div>

        {/* Two link columns */}
        <div className="flex gap-24">
          <div className="flex flex-col gap-3">
            {col1Links.map(l => (
              <Link key={l.label} to={l.to} className="text-[#999] text-sm hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {col2Links.map(l => (
              <Link key={l.label} to={l.to} className="text-[#999] text-sm hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-[#2a2a2a] pt-5 text-center">
        <p className="text-[#555] text-xs">Mytra.club © 2026. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

export default SiteFooter
