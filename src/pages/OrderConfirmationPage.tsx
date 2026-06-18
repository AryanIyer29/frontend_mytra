import React from 'react'
import { Link } from 'react-router-dom'
import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import Breadcrumb from '../components/Breadcrumb'

const OrderConfirmationPage: React.FC = () => (
  <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
    <SiteNavbar />
    <main className="flex-1 max-w-[1728px] mx-auto w-full px-8 py-8">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Order Confirmation' }]} />
      <div className="bg-white rounded-xl border border-gray-200 p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div className="flex gap-10">
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Order Number</p>
              <p className="text-sm text-[#F15A22] font-bold">#MY3465</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Delivery</p>
              <p className="text-sm text-[#111] font-medium">Cart On Delivery (24-31 May)</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Order Total</p>
            <p className="text-sm font-bold text-[#111]">₹1170</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Contact Info */}
          <div>
            <p className="text-xs font-semibold text-[#111] mb-2">Contact Information</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Jatin Singh<br />
              jauirat12@gmail.com<br />
              +91-7982015334
            </p>
          </div>
          {/* Shipping address */}
          <div>
            <p className="text-xs font-semibold text-[#111] mb-2">Shipping address</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Jatin Singh<br />
              H No 291, Opp Water Tank<br />
              Choti Mata Road, Masani Village, Sec 6<br />
              122001 Gurgaon Haryana India<br />
              +917982015334
            </p>
          </div>
          {/* Billing address */}
          <div>
            <p className="text-xs font-semibold text-[#111] mb-2">Billing address</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Jatin Singh<br />
              H No 291, Opp Water Tank<br />
              Choti Mata Road, Masani Village, Sec 6<br />
              122001 Gurgaon Haryana India<br />
              +917982015334
            </p>
          </div>
        </div>

        {/* Payment method */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-[#111] mb-2">Payment method</p>
          <p className="text-xs text-gray-500">UPI/Google Pay</p>
        </div>

        {/* Items */}
        <div>
          <p className="text-xs font-semibold text-[#111] mb-3">Items</p>
          {[0, 1, 2].map(i => (
            <div key={i} className="flex items-center gap-4 py-3 border-t border-gray-100">
              <div className="w-12 h-12 bg-[#f5f0e8] rounded-lg overflow-hidden flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1558618047-3c8c76ca4d19?w=100&q=80" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-[#111]">TVS Racing Anti Matter Full Face Helmet for ...</p>
                <p className="text-xs text-gray-400">Sub Details</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-medium">₹{i === 0 ? '1165' : i === 1 ? '752' : '1780'}</p>
                <p className="text-[10px] text-gray-400">x{i === 0 ? '1' : '1'}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-between pt-3 border-t border-gray-100">
            <div className="flex gap-6 text-xs text-gray-400">
              <span>Subtotal</span>
              <span>Tax</span>
              <span>Total</span>
            </div>
            <div className="flex gap-6 text-xs font-medium text-right">
              <span>₹1720</span>
              <span>Free</span>
              <span>₹1780</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Link to="/">
            <button className="bg-[#F15A22] text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-[#d44e1a] transition-colors">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
)

export default OrderConfirmationPage
