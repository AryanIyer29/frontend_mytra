import React from 'react'
import { Link } from 'react-router-dom'
import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import Breadcrumb from '../components/Breadcrumb'

const CheckoutPage: React.FC = () => (
  <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
    <SiteNavbar />
    <main className="flex-1 max-w-[1728px] mx-auto w-full px-8 py-8">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Cart', to: '/cart' }, { label: 'Payment Details' }]} />
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Left: User Details + Payment */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="font-bold text-[#111] text-lg mb-5">User Details</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {['First Name*','Company Name','Email Address','Apartment, floor, etc. (optional)','Town/City'].map((label, i) => (
                <div key={i} className={label === 'Town/City' ? 'col-span-1' : ''}>
                  <label className="block text-xs text-gray-500 mb-1">{label}</label>
                  <input className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:border-[#F15A22]" />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {['Phone Number','Street Address'].map(label => (
                <div key={label}>
                  <label className="block text-xs text-gray-500 mb-1">{label}</label>
                  <input className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:border-[#F15A22]" />
                </div>
              ))}
            </div>
            <label className="flex items-center gap-2 text-xs text-gray-500 mb-4 cursor-pointer">
              <input type="checkbox" className="accent-[#F15A22]" />
              Save this information for future check-outs
            </label>
            <h3 className="font-semibold text-[#111] text-sm mb-3">Payment Method</h3>
            <div className="flex flex-col gap-2">
              {['UPI/Google Pay', 'Credit/Debit/ATM Card', 'Cash on Delivery'].map((method, i) => (
                <label key={method} className="flex items-center gap-2 text-sm text-[#111] cursor-pointer">
                  <input type="radio" name="payment" defaultChecked={i === 0} className="accent-[#F15A22]" />
                  {method}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Cart Total */}
        <div className="w-full lg:w-[320px] bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex gap-2 mb-4">
            <input placeholder="Coupon code" className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:border-[#F15A22]" />
            <button className="bg-[#111] text-white text-xs font-semibold px-4 py-2 rounded-md">Apply</button>
          </div>
          <h3 className="font-bold text-[#111] mb-4">Cart Total</h3>
          <div className="flex flex-col gap-3 mb-5">
            <div className="flex justify-between text-sm"><span className="text-gray-500">Subtotal</span><span className="font-medium">₹27,700</span></div>
            <div className="flex justify-between text-sm border-t border-gray-100 pt-3"><span className="text-gray-500">Shipping</span><span className="font-medium text-green-600">Free</span></div>
            <div className="flex justify-between text-sm border-t border-gray-100 pt-3"><span className="font-semibold">Total</span><span className="font-bold">₹27,700</span></div>
          </div>
          <Link to="/order-confirmation">
            <button className="w-full bg-[#F15A22] text-white font-semibold py-3 rounded-full hover:bg-[#d44e1a] transition-colors text-sm">
              Proceed to Payment
            </button>
          </Link>
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
)

export default CheckoutPage
