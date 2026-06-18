# FIGMA ROUTE AUDIT REPORT

## 1. Existing Routes
| Route | Page | Status |
|---|---|---|
| / | HomePage | ✅ Works |
| /profile | ProfilePage | ✅ Works |
| /profile/orders | OrdersPage | ✅ Works |
| /profile/settings | SettingsPage | ✅ Works |
| /cart | CartPage | ✅ Works |
| /checkout | CheckoutPage | ✅ Works |
| /order-confirmation | OrderConfirmationPage | ✅ Works |

## 2. Missing Routes (Figma requires)
| Route | Figma Frame | Status |
|---|---|---|
| /marketplace | Marketplace landing | ❌ MISSING |
| /marketplace/accessories | Frame 889 | ❌ MISSING |
| /marketplace/accessories/:id | Frame 890 | ❌ MISSING |
| /marketplace/travel | Frame 886 | ❌ MISSING |
| /marketplace/travel/:id | Frame 888 | ❌ MISSING |
| /news | Nav link | ❌ MISSING (stub) |
| /events | Nav link | ❌ MISSING (stub) |

## 3. Broken Routes
- Home CategorySection "Accessories" arrow → no navigation
- Home CategorySection "Tour & Travels" arrow → no navigation
- BestSellingAccessories "View All" → no navigation
- BestSellingTravel "View All" → no navigation
- ProductCard → no navigation to detail
- TravelCard arrow button → no navigation to detail
- Navbar "News" → 404
- Navbar "Events" → 404
- Navbar "Marketplace" → 404

## 4. Missing State
- No cart context — cart state is local to CartPage only
- ProductCard "Add to Cart" has no handler
- No shared cart between pages

## 5. Required Fixes
1. Create CartContext for global cart state
2. Create /marketplace landing page
3. Create /marketplace/accessories listing (Frame 889)
4. Create /marketplace/accessories/:id detail (Frame 890)
5. Create /marketplace/travel listing (Frame 886)
6. Create /marketplace/travel/:id detail (Frame 888)
7. Create stub pages for /news and /events
8. Wire CategorySection clicks to routes
9. Wire ProductCard to detail + add-to-cart
10. Wire TravelCard to detail page
11. Wire "View All" buttons to listing pages
12. Register all routes in App.tsx
