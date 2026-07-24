export const CATEGORIES = [
  { id: 'electronics', name: 'Electronics', count: 17, icon: '💻', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80' },
  { id: 'clothing', name: 'Clothing', count: 2, icon: '👕', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=80' },
  { id: 'furniture', name: 'Furniture', count: 3, icon: '🪑', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=80' },
  { id: 'home', name: 'Home', count: 14, icon: '🏠', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&auto=format&fit=crop&q=80' },
  { id: 'sports', name: 'Sports', count: 8, icon: '🏃', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop&q=80' },
  { id: 'accessories', name: 'Accessories', count: 6, icon: '🎒', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=80' }
];

export const PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Wireless Bluetooth Headphones',
    category: 'Electronics',
    categoryId: 'electronics',
    price: 99.99,
    rating: 4.8,
    reviewsCount: 120,
    isTopRated: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
    description: 'Immersive sound with active noise cancellation, deep bass, and up to 40 hours of battery life for non-stop music listening.'
  },
  {
    id: 'prod-2',
    name: 'Smart Watch Series 5',
    category: 'Electronics',
    categoryId: 'electronics',
    price: 299.99,
    rating: 4.7,
    reviewsCount: 85,
    isTopRated: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80',
    description: 'Advanced fitness tracking, real-time heart rate monitoring, OLED retina display, and seamless iOS & Android synchronization.'
  },
  {
    id: 'prod-3',
    name: 'Comfortable Cotton T-Shirt',
    category: 'Clothing',
    categoryId: 'clothing',
    price: 24.99,
    rating: 4.9,
    reviewsCount: 200,
    isTopRated: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80',
    description: '100% organic ultra-soft combed cotton short-sleeve tee designed for everyday luxury, breathability, and durability.'
  },
  {
    id: 'prod-4',
    name: 'Ergonomic Office Chair',
    category: 'Furniture',
    categoryId: 'furniture',
    price: 199.99,
    rating: 4.6,
    reviewsCount: 65,
    isTopRated: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1580481072645-022f9a6d1270?w=600&auto=format&fit=crop&q=80',
    description: 'Full lumbar support with adjustable armrests, breathable mesh backing, and smooth 360-degree swivel wheels for home office comfort.'
  },
  {
    id: 'prod-5',
    name: 'Stainless Steel Water Bottle',
    category: 'Home',
    categoryId: 'home',
    price: 34.99,
    rating: 4.8,
    reviewsCount: 150,
    isTopRated: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80',
    description: 'Double-wall vacuum insulation keeps drinks cold for 24 hours or hot for 12 hours. Leak-proof eco-friendly powder coated finish.'
  },
  {
    id: 'prod-6',
    name: 'Professional Camera Lens',
    category: 'Electronics',
    categoryId: 'electronics',
    price: 599.99,
    rating: 4.9,
    reviewsCount: 45,
    isTopRated: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=600&auto=format&fit=crop&q=80',
    description: 'Prime 50mm f/1.4 aperture portrait lens delivering buttery smooth bokeh, lightning-fast autofocus, and razor-sharp optics.'
  },
  {
    id: 'prod-7',
    name: 'Running Shoes',
    category: 'Clothing',
    categoryId: 'clothing',
    price: 129.99,
    rating: 4.8,
    reviewsCount: 180,
    isTopRated: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
    description: 'Lightweight responsive cushion midsole paired with breathable knit mesh upper designed for maximum endurance and speed.'
  },
  {
    id: 'prod-8',
    name: 'Modern Coffee Table',
    category: 'Furniture',
    categoryId: 'furniture',
    price: 149.99,
    rating: 4.5,
    reviewsCount: 90,
    isTopRated: false,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&auto=format&fit=crop&q=80',
    description: 'Sleek minimalist Scandinavian wood design with sturdy matte black steel legs and lower storage rack for books and decor.'
  },
  {
    id: 'prod-9',
    name: 'Aromatherapy Essential Oil Diffuser',
    category: 'Home',
    categoryId: 'home',
    price: 49.99,
    rating: 4.7,
    reviewsCount: 110,
    isTopRated: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&auto=format&fit=crop&q=80',
    description: 'Ultrasonic cool mist humidifier with 7 ambient LED mood lighting colors, quiet whisper technology, and automatic safety shut-off.'
  },
  {
    id: 'prod-10',
    name: 'Wireless Gaming Mouse',
    category: 'Electronics',
    categoryId: 'electronics',
    price: 79.99,
    rating: 4.8,
    reviewsCount: 95,
    isTopRated: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80',
    description: 'Ultra-lightweight 16,000 DPI optical sensor, custom programmable side buttons, sub-1ms latency wireless connection.'
  }
];

export const TEAM_MEMBERS = [
  { name: 'Aryan Shah', role: 'Founder & CEO', letter: 'A', bg: 'bg-[#d4ff00] text-black' },
  { name: 'Priya Mehta', role: 'Head of Product', letter: 'P', bg: 'bg-blue-500 text-white' },
  { name: 'Rohan Verma', role: 'Lead Engineer', letter: 'R', bg: 'bg-purple-500 text-white' },
  { name: 'Sneha Kapoor', role: 'Design Director', letter: 'S', bg: 'bg-pink-500 text-white' }
];
