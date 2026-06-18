# MYTRA Frontend

A production-quality frontend implementation of the MYTRA motorcycle lifestyle platform — built from Figma designs.

## Tech Stack

- **React 19** + **TypeScript**
- **Tailwind CSS v3**
- **React Router v6**
- **Vite 8**

## Pages & Routes

| Route | Page |
|---|---|
| `/` | Home — hero, categories, accessories, travel, insurance, stats |
| `/marketplace` | Marketplace landing — Accessories & Tour/Travel |
| `/marketplace/accessories` | Accessories listing (Frame 889) |
| `/marketplace/accessories/:id` | Accessory detail — size picker, buy now, add to cart (Frame 890) |
| `/marketplace/travel` | Travel packages — grouped by vendor (Frame 886) |
| `/marketplace/travel/:id` | Travel package detail — itinerary accordion (Frame 888) |
| `/cart` | Cart — qty controls, remove items, empty state |
| `/checkout` | Checkout — address form, payment method |
| `/order-confirmation` | Order confirmation summary |
| `/profile` | User profile + addresses + edit modal |
| `/profile/orders` | User orders list |
| `/profile/settings` | Settings + logout |
| `/news` | News (stub) |
| `/events` | Events (stub) |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000)

## Build

```bash
npm run build
npm run preview
```
