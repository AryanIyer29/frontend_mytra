import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Figma: MYTRA logo — infinity-link icon + bold uppercase text
const MytraLogo: React.FC<{ dark?: boolean }> = ({ dark }) => (
  <Link to="/" className="flex items-center gap-2">
    {/* Infinity / linked-rings icon matching Figma */}
    <svg width="36" height="20" viewBox="0 0 36 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke={dark ? '#fff' : '#111'} strokeWidth="2.5" fill="none"/>
      <circle cx="26" cy="10" r="8" stroke={dark ? '#fff' : '#111'} strokeWidth="2.5" fill="none"/>
    </svg>
    <span
      className="font-black text-[18px] tracking-[0.12em] uppercase"
      style={{ color: dark ? '#ffffff' : '#111111' }}
    >
      MYTRA
    </span>
  </Link>
)

interface SiteNavbarProps {
  dark?: boolean
}

const SiteNavbar: React.FC<SiteNavbarProps> = ({ dark = false }) => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Home', to: '/' },
    { label: 'News', to: '/news' },
    { label: 'Events', to: '/events' },
    { label: 'Marketplace', to: '/marketplace' },
  ]

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  // Figma: white bg on all pages including home (dark prop kept for potential future use)
  const bg = dark ? 'bg-[#111111]' : 'bg-white'
  const border = dark ? 'border-[#222]' : 'border-[#e8e8e8]'
  const defaultText = dark ? 'text-[#ccc]' : 'text-[#444]'
  const iconStroke = dark ? '#ffffff' : '#333333'

  return (
    <nav className={`w-full ${bg} border-b ${border} sticky top-0 z-50`}>
      <div className="max-w-[1728px] mx-auto px-8 h-[64px] flex items-center justify-between gap-8">
        {/* Logo */}
        <MytraLogo dark={dark} />

        {/* Center nav links */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={`text-sm transition-colors hover:text-[#F15A22]
                ${isActive(l.to)
                  ? 'text-[#F15A22] font-bold'
                  : `${defaultText} font-medium`
                }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right actions — Get Insured + icons */}
        <div className="hidden md:flex items-center gap-5">
          {/* Get Insured pill — Figma: orange border, orange text, shield icon */}
          <Link
            to="/marketplace"
            className="flex items-center gap-1.5 border border-[#F15A22] text-[#F15A22] text-[13px] font-semibold px-4 py-1.5 rounded-full hover:bg-[#F15A22] hover:text-white transition-colors whitespace-nowrap"
          >
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Get Insured
          </Link>

          {/* Wishlist heart — Figma: stroke heart, badge count */}
          <Link to="/wishlist" aria-label="Wishlist" className="relative">
            <svg width="22" height="22" fill="none" stroke={iconStroke} strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="absolute -top-1.5 -right-1.5 w-[16px] h-[16px] bg-[#F15A22] rounded-full text-white text-[9px] flex items-center justify-center font-bold leading-none">1</span>
          </Link>

          {/* Cart bag */}
          <Link to="/cart" aria-label="Cart">
            <svg width="22" height="22" fill="none" stroke={iconStroke} strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6h18M16 10a4 4 0 01-8 0" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          {/* Profile person */}
          <Link to="/profile" aria-label="Profile">
            <svg width="22" height="22" fill="none" stroke={iconStroke} strokeWidth="1.8" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <svg width="24" height="24" fill="none" stroke={iconStroke} strokeWidth="2">
            {menuOpen
              ? <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round"/>
              : <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className={`md:hidden ${bg} border-t ${border} px-8 py-5 flex flex-col gap-4`}>
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={`text-sm font-medium ${isActive(l.to) ? 'text-[#F15A22]' : defaultText}`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
            <Link to="/marketplace" className="text-[#F15A22] text-sm font-semibold" onClick={() => setMenuOpen(false)}>Get Insured</Link>
            <Link to="/cart" className={`text-sm ${defaultText}`} onClick={() => setMenuOpen(false)}>Cart</Link>
            <Link to="/profile" className={`text-sm ${defaultText}`} onClick={() => setMenuOpen(false)}>Profile</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default SiteNavbar
