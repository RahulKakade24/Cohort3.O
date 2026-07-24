
import {
  ArrowRight,
  Package,
  TrendingUp,
  Star,
  Tag,
  ShoppingBag,
  Heart,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';

export default function HomePage({
  currentUser,
  cartItemCount,
  finalCartTotal,
  wishlist,
  onNavigateShop,
  onCategoryClick,
  onSelectProduct,
  onToggleWishlist,
  onAddToCart,
  onFilterByRating
}) {
  return (
    <div className="space-y-10">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-[#131317] border border-zinc-800 rounded-3xl p-6 md:p-10 bg-grid-pattern">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#d4ff00] tracking-wider uppercase">
              Good Evening 👋
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Welcome back, <span className="text-[#d4ff00]">{currentUser.name}!</span>
            </h1>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Discover today's picks — hand-curated products across electronics, fashion, and more.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onNavigateShop}
                className="bg-[#d4ff00] text-black font-bold text-sm px-6 py-3 rounded-full hover:bg-[#c2eb00] transition-all flex items-center gap-2 shadow-lg shadow-[#d4ff00]/10"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onNavigateShop}
                className="border border-zinc-700/80 hover:border-zinc-500 text-zinc-200 hover:text-white font-medium text-sm px-6 py-3 rounded-full transition-colors bg-zinc-900/50"
              >
                View All Products
              </button>
            </div>
          </div>

          <div className="flex lg:flex-col gap-4 w-full lg:w-auto">
            <div className="bg-zinc-900/90 border border-zinc-800 p-4 rounded-2xl text-center min-w-[150px] flex-1 lg:flex-none">
              <div className="text-2xl font-black text-[#d4ff00]">20+</div>
              <div className="text-xs text-zinc-400 mt-1">Products Available</div>
            </div>

            <div className="bg-zinc-900/90 border border-zinc-800 p-4 rounded-2xl text-center min-w-[150px] flex-1 lg:flex-none">
              <div className="text-2xl font-black text-white">Free</div>
              <div className="text-xs text-zinc-400 mt-1">Delivery on $50+</div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-zinc-800 text-[#d4ff00] flex items-center justify-center font-bold">
            <Package className="w-5 h-5" />
          </div>
          <div>
            <div className="text-lg font-bold text-white">{cartItemCount}</div>
            <div className="text-xs text-zinc-400">Cart Items in bag</div>
          </div>
        </div>

        <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-zinc-800 text-blue-400 flex items-center justify-center font-bold">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <div className="text-lg font-bold text-white">${finalCartTotal.toFixed(2)}</div>
            <div className="text-xs text-zinc-400">Cart Value ready</div>
          </div>
        </div>

        <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-zinc-800 text-amber-400 flex items-center justify-center font-bold">
            <Star className="w-5 h-5" />
          </div>
          <div>
            <div className="text-lg font-bold text-white">{wishlist.length}</div>
            <div className="text-xs text-zinc-400">Saved Wishlist Items</div>
          </div>
        </div>

        <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-zinc-800 text-purple-400 flex items-center justify-center font-bold">
            <Tag className="w-5 h-5" />
          </div>
          <div>
            <div className="text-lg font-bold text-white">6</div>
            <div className="text-xs text-zinc-400">Categories To explore</div>
          </div>
        </div>
      </div>

      {/* Shop By Category */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white tracking-tight">Shop by Category</h2>
          <button
            onClick={onNavigateShop}
            className="text-xs font-semibold text-[#d4ff00] hover:underline flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onCategoryClick(cat.name)}
              className="bg-white text-black p-5 rounded-2xl text-center cursor-pointer hover:scale-105 transition-all shadow-lg hover:shadow-2xl hover:shadow-[#d4ff00]/10 flex flex-col items-center justify-center gap-2 group"
            >
              <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <div className="font-bold text-sm text-zinc-900">{cat.name}</div>
              <div className="text-xs text-zinc-500">{cat.count} items</div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Rated & New Arrivals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Rated */}
        <div className="bg-white text-black rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <h3 className="font-bold text-lg text-zinc-900">Top Rated</h3>
            </div>
            <button
              onClick={onFilterByRating}
              className="text-xs font-semibold text-lime-600 hover:underline flex items-center gap-1"
            >
              See all <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-3">
            {PRODUCTS.filter((p) => p.isTopRated).slice(0, 5).map((prod) => (
              <div
                key={prod.id}
                onClick={() => onSelectProduct(prod)}
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-100 transition-colors cursor-pointer border border-transparent hover:border-zinc-200"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-12 h-12 rounded-lg object-cover bg-zinc-200"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=80'; }}
                  />
                  <div>
                    <div className="font-semibold text-sm text-zinc-900 line-clamp-1">{prod.name}</div>
                    <div className="text-xs font-bold text-[#a6cc00] mt-0.5">${prod.price.toFixed(2)}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => onToggleWishlist(prod, e)}
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-red-500 hover:bg-zinc-200 transition-colors"
                  >
                    <Heart className={`w-4 h-4 ${wishlist.some((w) => w.id === prod.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  </button>
                  <button
                    onClick={(e) => onAddToCart(prod, e)}
                    className="w-8 h-8 rounded-lg bg-[#d4ff00] hover:bg-[#c2eb00] text-black flex items-center justify-center transition-colors shadow-sm"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New Arrivals */}
        <div className="bg-white text-black rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 fill-lime-500 text-lime-500" />
              <h3 className="font-bold text-lg text-zinc-900">New Arrivals</h3>
            </div>
            <button
              onClick={onNavigateShop}
              className="text-xs font-semibold text-lime-600 hover:underline flex items-center gap-1"
            >
              See all <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-3">
            {PRODUCTS.filter((p) => p.isNew).slice(0, 5).map((prod) => (
              <div
                key={prod.id}
                onClick={() => onSelectProduct(prod)}
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-100 transition-colors cursor-pointer border border-transparent hover:border-zinc-200"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-12 h-12 rounded-lg object-cover bg-zinc-200"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=80'; }}
                  />
                  <div>
                    <div className="font-semibold text-sm text-zinc-900 line-clamp-1">{prod.name}</div>
                    <div className="text-xs font-bold text-[#a6cc00] mt-0.5">${prod.price.toFixed(2)}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => onToggleWishlist(prod, e)}
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-red-500 hover:bg-zinc-200 transition-colors"
                  >
                    <Heart className={`w-4 h-4 ${wishlist.some((w) => w.id === prod.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  </button>
                  <button
                    onClick={(e) => onAddToCart(prod, e)}
                    className="w-8 h-8 rounded-lg bg-[#d4ff00] hover:bg-[#c2eb00] text-black flex items-center justify-center transition-colors shadow-sm"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Guarantees */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        <div className="bg-[#131317] border border-zinc-800 p-5 rounded-2xl flex items-center gap-4">
          <div className="p-3 rounded-xl bg-zinc-800 text-[#d4ff00]">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-white text-sm">Fast Delivery</div>
            <div className="text-xs text-zinc-400 mt-0.5">Same-day on select items</div>
          </div>
        </div>

        <div className="bg-[#131317] border border-zinc-800 p-5 rounded-2xl flex items-center gap-4">
          <div className="p-3 rounded-xl bg-zinc-800 text-blue-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-white text-sm">Secure Payments</div>
            <div className="text-xs text-zinc-400 mt-0.5">100% encrypted checkout</div>
          </div>
        </div>

        <div className="bg-[#131317] border border-zinc-800 p-5 rounded-2xl flex items-center gap-4">
          <div className="p-3 rounded-xl bg-zinc-800 text-emerald-400">
            <Tag className="w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-white text-sm">Best Prices</div>
            <div className="text-xs text-zinc-400 mt-0.5">Price-match guarantee</div>
          </div>
        </div>
      </div>
    </div>
  );
}
