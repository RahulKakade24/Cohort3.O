
import { Zap, ShoppingCart, LogOut} from 'lucide-react';

export default function Navbar({
  activeTab,
  setActiveTab,
  currentUser,
  cartItemCount,
  onLogout,
  onOpenCart,
  
}) {
  return (
    <header className="sticky top-0 z-40 bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 px-4 md:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div
          onClick={() => setActiveTab(currentUser ? 'home' : 'login')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-[#d4ff00] text-black flex items-center justify-center font-black shadow-lg shadow-[#d4ff00]/20 group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 fill-black stroke-black" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#d4ff00] transition-colors">
            SkyMart
          </span>
        </div>

        {/* Desktop Navigation */}
        {currentUser && (
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['home', 'shop', 'orders', 'about'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`transition-colors relative py-1 capitalize ${
                  activeTab === tab
                    ? 'text-[#d4ff00] font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4ff00] rounded-full" />
                )}
              </button>
            ))}
          </nav>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3">
          

          {currentUser ? (
            <>
              <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-300">
                <div className="w-5 h-5 rounded-full bg-[#d4ff00] text-black font-bold flex items-center justify-center text-[10px]">
                  {currentUser.name.charAt(0).toUpperCase()}
                </div>
                <span>{currentUser.name}</span>
              </div>

              <button
                onClick={onOpenCart}
                className="relative p-2 text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-full border border-zinc-800 transition-colors"
                aria-label="Shopping Cart"
              >
                <ShoppingCart className="w-4 h-4" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#d4ff00] text-black font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                    {cartItemCount}
                  </span>
                )}
              </button>

              <button
                onClick={onLogout}
                className="p-2 text-zinc-400 hover:text-red-400 hover:bg-zinc-800/60 rounded-full border border-zinc-800 transition-colors"
                title="Sign Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </>
          ) : (
            <button
              onClick={() => setActiveTab('login')}
              className="bg-[#d4ff00] text-black font-bold text-xs px-4 py-2 rounded-full hover:bg-[#c2eb00] transition-colors"
            >
              Sign In
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {currentUser && (
        <div className="flex md:hidden items-center justify-around mt-3 pt-2 border-t border-zinc-800/60 text-xs font-medium">
          {['home', 'shop', 'orders', 'about'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`capitalize ${activeTab === tab ? 'text-[#d4ff00] font-bold' : 'text-zinc-400'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
