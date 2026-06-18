import React from 'react'
import { Link } from 'react-router-dom'
import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import Breadcrumb from '../components/Breadcrumb'
import { useCart } from '../context/CartContext'

const EmptyCart: React.FC = () => (
  <div className="flex-1 bg-white rounded-xl border border-gray-200 flex flex-col items-center justify-center py-24 gap-4">
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
      <rect x="15" y="35" width="60" height="42" rx="5" stroke="#ddd" strokeWidth="2.5"/>
      <path d="M15 35l10-22h40l10 22" stroke="#ddd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M32 13l4 22M58 13l-4 22" stroke="#ddd" strokeWidth="2" strokeLinecap="round"/>
      <path d="M28 56h34" stroke="#ddd" strokeWidth="2" strokeLinecap="round"/>
      <path d="M60 24l9-9m0 0l4 4-9 9-4-4z" stroke="#ccc" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
    <p className="text-[#333] text-base font-semibold">Cart is empty!</p>
    <Link to="/marketplace">
      <button className="bg-[#F15A22] text-white text-sm font-semibold px-8 py-2.5 rounded-full hover:bg-[#d44e1a] transition-colors">
        Go Shopping
      </button>
    </Link>
  </div>
)

const CartPage: React.FC = () => {
  const { items, updateQty, removeItem, subtotal } = useCart()
  const isEmpty = items.length === 0

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <SiteNavbar />
      <main className="flex-1 max-w-[1728px] mx-auto w-full px-8 py-8">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Cart' }]} />
        {isEmpty ? (
          <EmptyCart />
        ) : (
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Product list */}
            <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-[#111] font-bold text-lg mb-5">Product List</h2>
              <div className="grid grid-cols-4 text-xs text-[#999] font-medium border-b border-gray-100 pb-3 mb-1">
                <span>Product</span>
                <span className="text-right">Price</span>
                <span className="text-right">Quantity</span>
                <span className="text-right">Subtotal</span>
              </div>
              {items.map((item) => (
                <div key={item.id} className="grid grid-cols-4 items-center py-4 border-b border-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-[#f5f0e8] rounded-lg overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover"/>
                    </div>
                    <div>
                      <span className="text-xs text-[#111] max-w-[150px] line-clamp-2 leading-snug block">{item.name}</span>
                      <button onClick={() => removeItem(item.id)} className="text-[10px] text-red-400 hover:text-red-600 mt-0.5">Remove</button>
                    </div>
                  </div>
                  <span className="text-xs text-right text-[#333]">₹{item.price.toLocaleString('en-IN')}</span>
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => updateQty(item.id, -1)} className="w-6 h-6 border border-gray-200 rounded text-sm font-bold flex items-center justify-center hover:border-[#F15A22] hover:text-[#F15A22] transition-colors">-</button>
                    <span className="text-xs w-5 text-center font-medium">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="w-6 h-6 border border-gray-200 rounded text-sm font-bold flex items-center justify-center hover:border-[#F15A22] hover:text-[#F15A22] transition-colors">+</button>
                  </div>
                  <span className="text-xs font-semibold text-right text-[#111]">₹{(item.price * item.qty).toLocaleString('en-IN')}</span>
                </div>
              ))}
            </div>

            {/* Right panel */}
            <div className="w-full lg:w-[320px] flex flex-col gap-4">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex gap-2">
                  <input placeholder="Coupon code" className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:border-[#F15A22] transition-colors"/>
                  <button className="bg-[#111] text-white text-xs font-semibold px-4 py-2 rounded-md hover:bg-[#333] transition-colors">Apply</button>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-[#111] text-base mb-4">Cart Total</h3>
                <div className="flex justify-between text-sm py-3 border-b border-gray-100">
                  <span className="text-[#666]">Subtotal</span>
                  <span className="font-medium text-[#111]">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-sm py-3 border-b border-gray-100">
                  <span className="text-[#666]">Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-sm py-3">
                  <span className="font-semibold text-[#111]">Total</span>
                  <span className="font-bold text-[#111]">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <Link to="/checkout">
                  <button className="w-full bg-[#F15A22] text-white font-semibold py-3 rounded-full hover:bg-[#d44e1a] transition-colors text-sm mt-4">
                    Proceed to Payment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  )
}

export default CartPage
