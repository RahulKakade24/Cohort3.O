
import { Search, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { CATEGORIES } from '../data/products';

export default function ShopPage({
  filteredProducts,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  maxPrice,
  setMaxPrice,
  sortBy,
  setSortBy,
  wishlist,
  onSelectProduct,
  onToggleWishlist,
  onAddToCart
}) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-white tracking-tight">All Products</h1>
        <p className="text-sm text-zinc-400 mt-1">{filteredProducts.length} products found</p>
      </div>

      {/* Filter Bar */}
      <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full bg-[#1c1c22] border border-zinc-800/80 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4ff00]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="w-full md:w-56 bg-[#1c1c22] border border-zinc-800 rounded-xl px-3 py-2 text-xs flex flex-col justify-center">
          <div className="flex justify-between text-zinc-400 mb-1">
            <span>Max Price:</span>
            <span className="text-[#d4ff00] font-bold">${maxPrice}</span>
          </div>
          <input
            type="range"
            min="10"
            max="600"
            step="10"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="accent-[#d4ff00] cursor-pointer w-full"
          />
        </div>

        <div className="w-full md:w-44">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-[#1c1c22] border border-zinc-800 rounded-xl px-3 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-[#d4ff00] cursor-pointer"
          >
            <option value="All">All Categories</option>
            {CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full md:w-44">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full bg-[#1c1c22] border border-zinc-800 rounded-xl px-3 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-[#d4ff00] cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
            selectedCategory === 'All'
              ? 'bg-[#d4ff00] text-black'
              : 'bg-[#131317] border border-zinc-800 text-zinc-400 hover:text-white'
          }`}
        >
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.name)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === cat.name
                ? 'bg-[#d4ff00] text-black'
                : 'bg-[#131317] border border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onToggleWishlist={onToggleWishlist}
              onAddToCart={onAddToCart}
              isWishlisted={wishlist.some((w) => w.id === product.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-[#131317] border border-zinc-800 rounded-3xl space-y-3">
          <div className="w-12 h-12 rounded-full bg-zinc-800 text-zinc-500 flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">No products found</h3>
          <p className="text-sm text-zinc-400">Try adjusting your search query or price filters.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setMaxPrice(600);
            }}
            className="bg-[#d4ff00] text-black font-bold text-xs px-4 py-2 rounded-full mt-2"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
