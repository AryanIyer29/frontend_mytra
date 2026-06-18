import React from 'react'

const footerLinks = {
  col1: ['Home', 'News', 'Events', 'Marketplace'],
  col2: ['Privacy Policy', 'Terms & Condition', 'About Us', 'Contact Us'],
}

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d0d0d] w-full pt-12 pb-6">
      <div className="max-w-[1583px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
              <path d="M2 10C2 10 6 2 14 2C22 2 26 10 26 10C26 10 22 18 14 18C6 18 2 10 2 10Z" stroke="white" strokeWidth="2" fill="none"/>
              <circle cx="14" cy="10" r="4" fill="white"/>
            </svg>
            <span className="text-white font-bold text-xl tracking-widest uppercase">MYTRA</span>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              {footerLinks.col1.map((link) => (
                <a key={link} href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {footerLinks.col2.map((link) => (
                <a key={link} href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-[#222] pt-5 text-center">
          <p className="text-gray-600 text-xs">Mytra.club © 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
