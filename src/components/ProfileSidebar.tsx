import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const ProfileSidebar: React.FC = () => {
  const location = useLocation()
  const links = [
    { label: 'Profile', to: '/profile' },
    { label: 'Orders', to: '/profile/orders' },
    { label: 'Settings', to: '/profile/settings' },
  ]
  return (
    // Figma: white card, profile/orders/settings stacked, active = bold black with bottom underline separator
    <div className="bg-white rounded-xl border border-gray-200 w-[140px] flex-shrink-0 overflow-hidden shadow-sm">
      {links.map((l) => {
        const active = location.pathname === l.to
        return (
          <Link
            key={l.label}
            to={l.to}
            className={`block text-sm px-5 py-4 text-center transition-colors
              ${active
                ? 'text-[#111111] font-bold border-b-[2px] border-[#111111]'
                : 'text-[#999] font-normal border-b border-gray-100 hover:text-[#333]'
              }`}
          >
            {l.label}
          </Link>
        )
      })}
    </div>
  )
}

export default ProfileSidebar
