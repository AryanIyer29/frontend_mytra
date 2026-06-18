import React from 'react'
import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import Breadcrumb from '../components/Breadcrumb'
import ProfileSidebar from '../components/ProfileSidebar'

const SettingsPage: React.FC = () => (
  <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
    <SiteNavbar />
    <main className="flex-1 max-w-[1728px] mx-auto w-full px-8 py-8">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Settings' }]} />
      <div className="flex gap-6 items-start">
        <ProfileSidebar />
        <div className="flex-1 bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-[#111] font-bold text-xl mb-6">User Oders</h2>
          <div className="flex items-center justify-between py-4 border-b border-gray-100">
            <p className="text-sm text-[#111]">Log out of your account</p>
            <button className="border border-[#F15A22] text-[#F15A22] text-sm font-medium px-6 py-2 rounded-full hover:bg-[#F15A22] hover:text-white transition-colors">
              Logout
            </button>
          </div>
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
)

export default SettingsPage
