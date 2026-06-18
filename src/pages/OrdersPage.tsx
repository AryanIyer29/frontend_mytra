import React from 'react'
import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import Breadcrumb from '../components/Breadcrumb'
import ProfileSidebar from '../components/ProfileSidebar'

const orders = [
  { date: '25 November 2026', number: '#MY3465' },
  { date: '25 November 2026', number: '#MY3465' },
  { date: '25 November 2026', number: '#MY3465' },
]

const helmets = [
  { name: 'TVS Racing Anti Matter Full Face Helmet for ...', sub: 'Sub Details' },
  { name: 'TVS Racing Anti Matter Full Face Helmet for ...', sub: 'Sub Details' },
  { name: 'TVS Racing Anti Matter Full Face Helmet for ...', sub: 'Sub Details' },
]

const OrdersPage: React.FC = () => (
  <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
    <SiteNavbar />
    <main className="flex-1 max-w-[1728px] mx-auto w-full px-8 py-8">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Orders' }]} />
      <div className="flex gap-6 items-start">
        <ProfileSidebar />
        <div className="flex-1 bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-[#111] font-bold text-xl mb-6">User Orders</h2>
          <div className="flex flex-col gap-4">
            {orders.map((order, oi) => (
              <div key={oi} className="border border-gray-100 rounded-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-8">
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Order Placed</p>
                      <p className="text-sm text-[#F15A22] font-semibold">{order.date}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Order Number</p>
                      <p className="text-sm text-[#F15A22] font-semibold">{order.number}</p>
                    </div>
                  </div>
                  <button className="border border-[#F15A22] text-[#F15A22] text-xs font-medium px-4 py-2 rounded-full hover:bg-[#F15A22] hover:text-white transition-colors">
                    Order Details →
                  </button>
                </div>
                <div className="flex gap-6">
                  {helmets.map((item, ii) => (
                    <div key={ii} className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#f5f0e8] rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1558618047-3c8c76ca4d19?w=100&q=80"
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-[#111] leading-tight max-w-[140px] line-clamp-2">{item.name}</p>
                        <p className="text-xs text-gray-400">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
)

export default OrdersPage
