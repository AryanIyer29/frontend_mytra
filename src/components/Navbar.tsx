import React, { useState } from 'react'

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-[#111111] border-b border-[#222] sticky top-0 z-50">
      <div className="max-w-[1583px] mx-auto px-6 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
              <path d="M2 10C2 10 6 2 14 2C22 2 26 10 26 10C26 10 22 18 14 18C6 18 2 10 2 10Z" stroke="white" strokeWidth="2" fill="none"/>
              <circle cx="14" cy="10" r="4" fill="white"/>
            </svg>
            <span className="text-white font-bold text-xl tracking-widest uppercase">MYTRA</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Blog', 'Links', 'Products'].map((link) => (
            <a key={link} href="#" className="text-white text-sm font-medium hover:text-[#F15A22] transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="bg-[#F15A22] text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#d44e1a] transition-colors">
            Try Free
          </button>
          <button className="border border-[#F15A22] text-[#F15A22] text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#F15A22] hover:text-white transition-colors">
            Login/Signup
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round"/>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1a1a] px-6 py-4 flex flex-col gap-4">
          {['Home', 'Blog', 'Links', 'Products'].map((link) => (
            <a key={link} href="#" className="text-white text-sm font-medium">
              {link}
            </a>
          ))}
          <button className="bg-[#F15A22] text-white text-sm font-semibold px-4 py-2 rounded-md w-full">
            Try Free
          </button>
          <button className="border border-[#F15A22] text-[#F15A22] text-sm font-semibold px-4 py-2 rounded-md w-full">
            Login/Signup
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
