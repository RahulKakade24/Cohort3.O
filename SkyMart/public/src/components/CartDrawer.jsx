
import { ShoppingCart, X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  cartItemCount,
  rawCartTotal,
  finalCartTotal,
  appliedDiscount,
  promoCode,
  setPromoCode,
  onApplyPromo,
  onUpdateQuantity,
  onRemoveFromCart,
  onProceedCheckout
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm transition-opacity animate-fade-in">
      <div className="w-full max-w-md bg-[#131317] border-l border-zinc-800 h-full flex flex-col justify-between shadow-2xl p-6">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-[#d4ff00]" />
            <h2 className="text-lg font-bold text-white">Your Cart ({cartItemCount})</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {cart.length > 0 ? (
            cart.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex items-center justify-between gap-3 p-3 bg-[#1c1c22] border border-zinc-800 rounded-xl"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-14 object-cover rounded-lg bg-white"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=80'; }}
                />

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-white truncate">{product.name}</h4>
                  <div className="text-xs text-[#d4ff00] font-bold mt-1">
                    ${(product.price * quantity).toFixed(2)}
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQuantity(product.id, -1)}
                      className="w-6 h-6 rounded bg-zinc-800 text-zinc-300 flex items-center justify-center hover:bg-zinc-700 text-xs font-bold"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold text-white px-1">{quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(product.id, 1)}
                      className="w-6 h-6 rounded bg-zinc-800 text-zinc-300 flex items-center justify-center hover:bg-zinc-700 text-xs font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveFromCart(product.id)}
                  className="text-zinc-500 hover:text-red-400 p-1"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-20 text-zinc-500 space-y-3">
              <ShoppingBag className="w-12 h-12 mx-auto stroke-1" />
              <p className="text-sm">Your shopping bag is empty.</p>
            </div>
          )}
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="pt-4 border-t border-zinc-800 space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Promo Code (Try: SKY20)"
                className="bg-[#1c1c22] border border-zinc-800 text-xs rounded-xl px-3 py-2 text-white flex-1 focus:outline-none focus:border-[#d4ff00]"
              />
              <button
                onClick={onApplyPromo}
                className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold px-3 py-2 rounded-xl transition-colors"
              >
                Apply
              </button>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>Subtotal</span>
              <span className="text-white font-bold">${rawCartTotal.toFixed(2)}</span>
            </div>
            {appliedDiscount > 0 && (
              <div className="flex items-center justify-between text-xs text-emerald-400">
                <span>Discount ({(appliedDiscount * 100)}%)</span>
                <span>-${(rawCartTotal * appliedDiscount).toFixed(2)}</span>
              </div>
            )}
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>Shipping</span>
              <span className="text-emerald-400 font-bold">FREE</span>
            </div>
            <div className="flex items-center justify-between text-sm font-black text-white pt-2 border-t border-zinc-800">
              <span>Total</span>
              <span className="text-[#d4ff00] text-base">${finalCartTotal.toFixed(2)}</span>
            </div>

            <button
              onClick={onProceedCheckout}
              className="w-full bg-[#d4ff00] text-black font-bold text-sm py-3 rounded-xl hover:bg-[#c2eb00] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#d4ff00]/10"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
