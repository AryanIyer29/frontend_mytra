import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import OrdersPage from './pages/OrdersPage'
import SettingsPage from './pages/SettingsPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import OrderConfirmationPage from './pages/OrderConfirmationPage'
import { Navigate } from 'react-router-dom'
import AccessoriesListingPage from './pages/AccessoriesListingPage'
import AccessoryDetailPage from './pages/AccessoryDetailPage'
import TravelListingPage from './pages/TravelListingPage'
import TravelDetailPage from './pages/TravelDetailPage'
import NewsPage from './pages/NewsPage'
import EventsPage from './pages/EventsPage'

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {/* Home */}
      <Route path="/" element={<HomePage />} />

      {/* Marketplace — redirects to Home (Frame 885 IS the home feed) */}
      <Route path="/marketplace" element={<Navigate to="/" replace />} />
      <Route path="/marketplace/accessories" element={<AccessoriesListingPage />} />
      <Route path="/marketplace/accessories/:id" element={<AccessoryDetailPage />} />
      <Route path="/marketplace/travel" element={<TravelListingPage />} />
      <Route path="/marketplace/travel/:id" element={<TravelDetailPage />} />

      {/* Cart & checkout flow */}
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/order-confirmation" element={<OrderConfirmationPage />} />

      {/* Profile flow */}
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/orders" element={<OrdersPage />} />
      <Route path="/profile/settings" element={<SettingsPage />} />

      {/* Nav stubs */}
      <Route path="/news" element={<NewsPage />} />
      <Route path="/events" element={<EventsPage />} />
    </Routes>
  </BrowserRouter>
)

export default App
