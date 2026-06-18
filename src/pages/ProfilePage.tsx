import React, { useState } from 'react'
import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import Breadcrumb from '../components/Breadcrumb'
import ProfileSidebar from '../components/ProfileSidebar'

const addresses = [
  {
    type: 'Home',
    name: 'Jatin Singh',
    line1: 'H No 291, Opp Water Tank',
    line2: 'Choti Mata Road, Masani Village, Sec 6',
    line3: '122001 Gurgaon Haryana India',
    phone: '+917982015334',
  },
  {
    type: 'Home',
    name: 'Jatin Singh',
    line1: 'H No 291, Opp Water Tank',
    line2: 'Choti Mata Road, Masani Village, Sec 6',
    line3: '122001 Gurgaon Haryana India',
    phone: '+917982015334',
  },
  {
    type: 'Home',
    name: 'Jatin Singh',
    line1: 'H No 291, Opp Water Tank',
    line2: 'Choti Mata Road, Masani Village, Sec 6',
    line3: '122001 Gurgaon Haryana India',
    phone: '+917982015334',
  },
]

interface ModalProps { onClose: () => void }
const EditModal: React.FC<ModalProps> = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
    <div className="bg-white rounded-2xl w-full max-w-[500px] p-8 relative">
      <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#111] text-white flex items-center justify-center text-sm font-bold">✕</button>
      <h3 className="text-[#111] font-bold text-lg mb-6">User Details</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {[['First Name',''],['Company Name',''],['Street Address',''],['Apartment, floor, etc. (optional)',''],['Town/City','']].map(([label]) => (
          <div key={label} className={label === 'Town/City' ? 'col-span-1' : ''}>
            <label className="block text-xs text-gray-500 mb-1">{label}</label>
            <input className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:border-[#F15A22]" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {[['Phone Number'],['Email Address']].map(([label]) => (
          <div key={label}>
            <label className="block text-xs text-gray-500 mb-1">{label}</label>
            <input className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:border-[#F15A22]" />
          </div>
        ))}
      </div>
      <button className="w-full bg-[#F15A22] text-white font-semibold py-3 rounded-full hover:bg-[#d44e1a] transition-colors">
        Update Details
      </button>
    </div>
  </div>
)

const ProfilePage: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <SiteNavbar />
      {showModal && <EditModal onClose={() => setShowModal(false)} />}
      <main className="flex-1 max-w-[1728px] mx-auto w-full px-8 py-8">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Profile' }]} />
        <div className="flex gap-6 items-start">
          <ProfileSidebar />
          <div className="flex-1 bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-[#111] font-bold text-xl mb-6">User Profile</h2>
            {/* Personal Details */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-[#111]">Personal Details</span>
                <button onClick={() => setShowModal(true)} aria-label="Edit personal details">
                  <svg width="14" height="14" fill="none" stroke="#F15A22" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Name</p>
                  <p className="text-sm text-[#111]">Jatin Singh</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">E-mail</p>
                  <p className="text-sm text-[#111]">jauirat12@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Addresses */}
            <div>
              <p className="text-sm font-semibold text-[#111] mb-4">Addresses</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {addresses.map((addr, i) => (
                  <div key={i} className="border border-gray-100 rounded-lg p-4">
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="text-xs font-medium text-[#111]">{addr.type}</span>
                      <button aria-label="Edit address">
                        <svg width="12" height="12" fill="none" stroke="#F15A22" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {addr.name}<br/>{addr.line1}<br/>{addr.line2}<br/>{addr.line3}<br/>{addr.phone}
                    </p>
                  </div>
                ))}
                {/* Add address */}
                <button className="border border-dashed border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:border-[#F15A22] transition-colors min-h-[150px]">
                  <div className="w-9 h-9 rounded-full bg-[#F15A22] flex items-center justify-center">
                    <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-xs text-gray-400">Add address</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

export default ProfilePage
