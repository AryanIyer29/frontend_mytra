import React from 'react'
import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'

const NewsPage: React.FC = () => (
  <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
    <SiteNavbar />
    <main className="flex-1 max-w-[1728px] mx-auto w-full px-8 py-16 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-[#111] font-bold text-3xl mb-3">News</h1>
        <p className="text-gray-500 text-sm">Coming soon</p>
      </div>
    </main>
    <SiteFooter />
  </div>
)

export default NewsPage
