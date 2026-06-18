// Shared data — used across all marketplace pages

export interface Product {
  id: string
  name: string
  image: string
  price: number
  originalPrice: number
  rating: number
  reviewCount: number
  vendor: string
  size?: string[]
  highlights?: string
  description?: string
}

export interface TravelPackage {
  id: string
  name: string
  image: string
  price: number
  originalPrice: number
  from: string
  to: string
  distance: string
  dates: string
  duration: string
  clubName: string
  clubRating: number
  memberCount: string
  vendor: string
  overview?: string
  highlights?: string[]
  itinerary?: { day: string; title: string; description: string }[]
}

export const accessories: Product[] = [
  {
    id: 'acc-1',
    name: 'Outlaw - Riding Cargo - Charcoal Black - CORE-X',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca4d19?w=600&q=80',
    price: 12000,
    originalPrice: 18000,
    rating: 4.5,
    reviewCount: 343,
    vendor: 'Rolling Denims',
    size: ['XS', 'S', 'M', 'XL', 'SS'],
    highlights: 'Knee & Hip Airbag: Without Airbag / With Airbag',
    description: 'Discover the breathtaking beauty of Leh Ladakh, a land of dramatic mountains, pristine lakes, and timeless monasteries. This trip takes you through some of the highest motorable passes in the world and the most scenic roads in the Himalayas.',
  },
  {
    id: 'acc-2',
    name: 'Outlaw - Riding Cargo - Charcoal Black - CORE-X',
    image: 'https://images.unsplash.com/photo-1584735175315-9d5df23be620?w=600&q=80',
    price: 12000,
    originalPrice: 18000,
    rating: 4.5,
    reviewCount: 343,
    vendor: 'Rolling Denims',
    size: ['XS', 'S', 'M', 'XL', 'SS'],
    highlights: 'Knee & Hip Airbag: Without Airbag / With Airbag',
    description: 'High-performance riding cargo pants designed for comfort and protection on long rides.',
  },
  {
    id: 'acc-3',
    name: 'Outlaw - Riding Cargo - Charcoal Black - CORE-X',
    image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600&q=80',
    price: 12000,
    originalPrice: 18000,
    rating: 4.5,
    reviewCount: 343,
    vendor: 'Rolling Denims',
    size: ['XS', 'S', 'M', 'XL', 'SS'],
    highlights: 'Knee & Hip Airbag: Without Airbag / With Airbag',
    description: 'Fabric gear pants built for all-weather riding with CE-certified armor protection.',
  },
  {
    id: 'acc-4',
    name: 'Outlaw - Riding Cargo - Charcoal Black - CORE-X',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca4d19?w=600&q=80',
    price: 12000,
    originalPrice: 18000,
    rating: 4.5,
    reviewCount: 343,
    vendor: 'Rolling Denims',
    size: ['XS', 'S', 'M', 'XL', 'SS'],
    highlights: 'Knee & Hip Airbag: Without Airbag / With Airbag',
    description: 'Premium riding cargo with integrated hip and knee protection system.',
  },
]

export const travelPackages: TravelPackage[] = [
  {
    id: 'tr-1',
    name: 'Leh Ladak Package',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    price: 12000,
    originalPrice: 16000,
    from: 'Leh',
    to: 'Ladak',
    distance: '460km',
    dates: '12 Nov - 22 Nov 2025',
    duration: '8 Days',
    clubName: 'Curly Tail',
    clubRating: 4.5,
    memberCount: '10+',
    vendor: 'Curly Tail',
    overview: 'Experience the magic of Leh Ladakh with breathtaking mountain passes, crystal-clear lakes, and ancient monastery landscapes.',
    highlights: [
      'Highest motorable passes in the world',
      'Visit Pangong Tso lake',
      'Ancient monastery tour',
      'Local cultural experience',
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival In Leh', description: 'Enjoy a smooth transition to Leh, settle into your hotel with breathtaking views and acclimatize comfortably with a short exploration and early sleep.' },
      { day: 'Day 2', title: 'Leh', description: 'Explore the local market and monasteries. Visit Shanti Stupa and Leh Palace.' },
      { day: 'Day 3', title: 'Leh', description: 'Day excursion to Nubra Valley via Khardung La pass.' },
      { day: 'Day 5', title: 'Leh', description: 'Visit Pangong Lake and return to Leh.' },
    ],
  },
  {
    id: 'tr-2',
    name: 'Kashmir Holiday Tour Via Jammu',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    price: 10000,
    originalPrice: 14000,
    from: 'Leh',
    to: 'Ladak',
    distance: '460km',
    dates: '15 Nov - 25 Nov 2025',
    duration: '10 Days',
    clubName: 'Curly Tail',
    clubRating: 4.5,
    memberCount: '10+',
    vendor: 'Curly Tail',
    overview: 'Explore the paradise on earth — Kashmir — through Jammu with stops at Vaishno Devi, Dal Lake, and Gulmarg.',
    highlights: [
      'Shikara ride on Dal Lake',
      'Gulmarg Gondola ride',
      'Pahalgam valley',
      'Mughal Garden visit',
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival In Jammu', description: 'Arrive Jammu, hotel check-in and local sightseeing.' },
      { day: 'Day 2', title: 'Jammu to Srinagar', description: 'Drive to Srinagar via scenic Jawahar Tunnel.' },
      { day: 'Day 3', title: 'Srinagar', description: 'Dal Lake Shikara ride and Mughal Gardens visit.' },
    ],
  },
  {
    id: 'tr-3',
    name: 'Kashmir Chilli-ston Package',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    price: 12000,
    originalPrice: 16000,
    from: 'Leh',
    to: 'Ladak',
    distance: '460km',
    dates: '20 Nov - 30 Nov 2025',
    duration: '11 Days',
    clubName: 'Curly Tail',
    clubRating: 4.5,
    memberCount: '10+',
    vendor: 'Curly Tail',
    overview: 'A comprehensive Himalayan adventure combining the best of Kashmir and Ladakh.',
    highlights: ['Snow-capped peaks', 'River rafting', 'Monastery visits', 'Star gazing nights'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival', description: 'Arrive and settle in.' },
      { day: 'Day 2', title: 'Exploration', description: 'Local sightseeing and acclimatization.' },
    ],
  },
  {
    id: 'tr-4',
    name: 'Amazing Ladakh',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    price: 12000,
    originalPrice: 16000,
    from: 'Leh',
    to: 'Ladak',
    distance: '460km',
    dates: '01 Dec - 10 Dec 2025',
    duration: '9 Days',
    clubName: 'Vendor 2',
    clubRating: 4.2,
    memberCount: '8+',
    vendor: 'Vendor 2',
    overview: 'The ultimate Ladakh experience covering all major attractions from magnetic hills to monastery trails.',
    highlights: ['Magnetic Hill', 'Zanskar Valley', 'Bike expedition', 'Camping under stars'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival In Leh', description: 'Arrive and acclimatize.' },
      { day: 'Day 2', title: 'Sightseeing', description: 'Visit Magnetic Hill and Gurudwara Pathar Sahib.' },
    ],
  },
  {
    id: 'tr-5',
    name: 'Leh Ladak Package',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    price: 12000,
    originalPrice: 16000,
    from: 'Leh',
    to: 'Ladak',
    distance: '460km',
    dates: '12 Dec - 22 Dec 2025',
    duration: '8 Days',
    clubName: 'Vendor 2',
    clubRating: 4.2,
    memberCount: '8+',
    vendor: 'Vendor 2',
    overview: 'Discover Ladakh with Vendor 2\'s curated itinerary through the most scenic mountain routes.',
    highlights: ['High altitude passes', 'Buddhist culture', 'Scenic camping', 'Photography spots'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival', description: 'Arrive and check-in.' },
      { day: 'Day 2', title: 'Explore', description: 'Morning monasteries, afternoon market.' },
    ],
  },
  {
    id: 'tr-6',
    name: 'Kashmir Holiday Tour Via Jammu',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    price: 10000,
    originalPrice: 14000,
    from: 'Leh',
    to: 'Ladak',
    distance: '460km',
    dates: '05 Dec - 15 Dec 2025',
    duration: '10 Days',
    clubName: 'Vendor 2',
    clubRating: 4.2,
    memberCount: '8+',
    vendor: 'Vendor 2',
    overview: 'Explore Kashmir via Jammu with Vendor 2\'s expert guides and comfortable accommodations.',
    highlights: ['Dal Lake', 'Gondola ride', 'Snow peaks', 'Local cuisine'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival', description: 'Arrive Jammu.' },
      { day: 'Day 2', title: 'Srinagar', description: 'Drive to Srinagar.' },
    ],
  },
  {
    id: 'tr-7',
    name: 'Kashmir Chilli-ston Package',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    price: 12000,
    originalPrice: 16000,
    from: 'Leh',
    to: 'Ladak',
    distance: '460km',
    dates: '10 Dec - 21 Dec 2025',
    duration: '11 Days',
    clubName: 'Vendor 2',
    clubRating: 4.2,
    memberCount: '8+',
    vendor: 'Vendor 2',
    overview: 'A Himalayan journey combining Kashmir and Ladakh highlights with Vendor 2.',
    highlights: ['Scenic mountain roads', 'River rafting', 'Cultural immersion', 'Night camping'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival', description: 'Arrive and settle in.' },
    ],
  },
  {
    id: 'tr-8',
    name: 'Amazing Ladakh',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    price: 12000,
    originalPrice: 16000,
    from: 'Leh',
    to: 'Ladak',
    distance: '460km',
    dates: '15 Dec - 24 Dec 2025',
    duration: '9 Days',
    clubName: 'Vendor 2',
    clubRating: 4.2,
    memberCount: '8+',
    vendor: 'Vendor 2',
    overview: 'An amazing Ladakh experience with Vendor 2 covering all iconic spots.',
    highlights: ['Magnetic Hill', 'Nubra Valley', 'Pangong Lake', 'Khardung La'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival', description: 'Arrive Leh.' },
    ],
  },
]
