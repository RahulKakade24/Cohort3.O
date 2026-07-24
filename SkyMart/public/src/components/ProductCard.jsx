
import { Heart, ShoppingCart, Star } from 'lucide-react';

const RatingStars = ({ rating, count }) => (
  <div className="flex items-center gap-1.5">
    <div className="flex text-amber-400">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= Math.floor(rating)
              ? 'fill-amber-400 text-amber-400'
              : star - 0.5 <= rating
              ? 'fill-amber-400/50 text-amber-400'
              : 'text-zinc-600'
          }`}
        />
      ))}
    </div>
    {count !== undefined && (
      <span className="text-xs text-zinc-400 font-medium">({count})</span>
    )}
  </div>
);

export default function ProductCard({
  product,
  onSelect,
  onToggleWishlist,
  onAddToCart,
  isWishlisted
}) {
  return (
    <div
      onClick={() => onSelect(product)}
      className="bg-[#131317] border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-zinc-600 transition-all cursor-pointer flex flex-col justify-between relative"
    >
      <div className="relative bg-white p-4 h-48 flex items-center justify-center overflow-hidden">
        <span className="absolute top-2.5 left-2.5 bg-zinc-800/80 backdrop-blur-sm text-zinc-300 text-[10px] font-semibold px-2.5 py-1 rounded-full z-10">
          {product.category}
        </span>

        <button
          onClick={(e) => onToggleWishlist(product, e)}
          className="absolute top-2.5 right-2.5 z-10 p-1.5 rounded-full bg-zinc-900/40 hover:bg-zinc-900 text-white transition-colors"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=80'; }}
        />
      </div>

      <div className="p-4 flex flex-col justify-between flex-1 space-y-3 bg-[#131317]">
        <div>
          <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wide">
            {product.category}
          </div>
          <h3 className="font-bold text-sm text-white line-clamp-2 mt-0.5 group-hover:text-[#d4ff00] transition-colors">
            {product.name}
          </h3>
          <div className="mt-2">
            <RatingStars rating={product.rating} count={product.reviewsCount} />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-zinc-800/60">
          <div className="text-base font-black text-[#d4ff00]">
            ${product.price.toFixed(2)}
          </div>

          <button
            onClick={(e) => onAddToCart(product, e)}
            className="bg-[#d4ff00] hover:bg-[#c2eb00] text-black font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
