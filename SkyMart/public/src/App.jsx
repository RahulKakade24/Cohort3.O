
import  { useState, useMemo} from 'react';
import {
  X,
  Package,
  CheckCircle,
  Clock,
  Star,
  ShoppingBag,
  CheckCircle2
} from 'lucide-react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import AuthPage from './pages/AuthPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';

import { PRODUCTS } from './data/products';



function StoreContent() {
  const [activeTab, setActiveTab] = useState('login');
  const [currentUser, setCurrentUser] = useState(null);

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orders, setOrders] = useState([
    
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(600);
  const [sortBy, setSortBy] = useState('featured');


  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState('');


  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  const cartItemCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const rawCartTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }, [cart]);

  const finalCartTotal = useMemo(() => {
    const discounted = rawCartTotal * (1 - appliedDiscount);
    return Math.max(0, discounted);
  }, [rawCartTotal, appliedDiscount]);

  const addToCart = (product, e) => {
    if (e) e.stopPropagation();
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prevCart, { product, quantity: 1 }];
    });
    showToast(`Added "${product.name}" to cart!`);
  };

  const toggleWishlist = (product, e) => {
    if (e) e.stopPropagation();
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        showToast('Removed from favorites');
        return prev.filter((item) => item.id !== product.id);
      } else {
        showToast(`Added "${product.name}" to favorites`);
        return [...prev, product];
      }
    });
  };

  const updateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
    showToast('Item removed from cart');
  };

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'SKY20') {
      setAppliedDiscount(0.2);
      showToast('🎉 Promo SKY20 applied! 20% discount added.');
    } else {
      showToast('Invalid Promo Code. Try "SKY20"');
    }
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' ||
        product.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesPrice = product.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [searchQuery, selectedCategory, maxPrice, sortBy]);

  const handleLogin = (email) => {
    if (!email) {
      showToast('Please enter an email address.');
      return;
    }
    const extractedName = email.split('@')[0] || 'User';
    setCurrentUser({ name: extractedName, email });
    setActiveTab('home');
    showToast(`Welcome, ${extractedName}!`);
  };

 
  const handleRegisterSuccess = (email) => {
  showToast(`🎉 Account created for ${email}! Please sign in with your credentials.`);
  setActiveTab('login');
};

  

  const handleLogout = () => {
    setCurrentUser(null);
    setActiveTab('login');
    showToast('Signed out successfully.');
  };

  const handleCategoryClick = (catName) => {
    setSelectedCategory(catName);
    setActiveTab('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans antialiased selection:bg-[#d4ff00] selection:text-black">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentUser={currentUser}
        cartItemCount={cartItemCount}
        onLogout={handleLogout}
        onOpenCart={() => setIsCartOpen(true)}
        
      />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 min-h-[calc(100vh-160px)]">
        {/* Render Register Page */}
        {!currentUser && activeTab === 'register' && (
          <RegisterPage
            onRegisterSuccess={handleRegisterSuccess}
            onNavigateLogin={() => setActiveTab('login')}
          />
        )}

        {/* Render Auth Sign In Page */}
        {(!currentUser || activeTab === 'login') && activeTab !== 'register' && (
          <AuthPage
            onLogin={handleLogin}
          
            onNavigateRegister={() => setActiveTab('register')}
          />
        )}

        {currentUser && activeTab === 'home' && (
          <HomePage
            currentUser={currentUser}
            cartItemCount={cartItemCount}
            finalCartTotal={finalCartTotal}
            wishlist={wishlist}
            onNavigateShop={() => setActiveTab('shop')}
            onCategoryClick={handleCategoryClick}
            onSelectProduct={setSelectedProduct}
            onToggleWishlist={toggleWishlist}
            onAddToCart={addToCart}
            onFilterByRating={() => {
              setSelectedCategory('All');
              setSortBy('rating');
              setActiveTab('shop');
            }}
          />
        )}

        {currentUser && activeTab === 'shop' && (
          <ShopPage
            filteredProducts={filteredProducts}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            sortBy={sortBy}
            setSortBy={setSortBy}
            wishlist={wishlist}
            onSelectProduct={setSelectedProduct}
            onToggleWishlist={toggleWishlist}
            onAddToCart={addToCart}
          />
        )}

        {currentUser && activeTab === 'orders' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <div>
              <h1 className="text-3xl font-black text-white tracking-tight">Your Orders</h1>
              <p className="text-sm text-zinc-400 mt-1">Track current and past order status</p>
            </div>

            <div className="space-y-4">
              {orders.map((ord) => (
                <div key={ord.id} className="bg-[#131317] border border-zinc-800 p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-[#d4ff00]">
                      <Package className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-white">{ord.id}</span>
                        <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> {ord.status}
                        </span>
                      </div>
                      <div className="text-xs text-zinc-400 mt-1 flex items-center gap-2">
                        <span><Clock className="w-3 h-3 inline mr-1" />{ord.date}</span>
                        <span>•</span>
                        <span>{ord.itemsCount} items</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full md:w-auto gap-6 border-t md:border-t-0 pt-3 md:pt-0 border-zinc-800">
                    <div className="text-right">
                      <div className="text-xs text-zinc-400">Total Paid</div>
                      <div className="text-lg font-black text-[#d4ff00]">${ord.total.toFixed(2)}</div>
                    </div>

                    <button
                      onClick={() => showToast(`Invoice receipt downloaded for ${ord.id}`)}
                      className="bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors"
                    >
                      Receipt
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentUser && activeTab === 'about' && <AboutPage />}
      </main>

      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        cartItemCount={cartItemCount}
        rawCartTotal={rawCartTotal}
        finalCartTotal={finalCartTotal}
        appliedDiscount={appliedDiscount}
        promoCode={promoCode}
        setPromoCode={setPromoCode}
        onApplyPromo={applyPromoCode}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
        onProceedCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#131317] border border-zinc-800 rounded-3xl max-w-2xl w-full p-6 md:p-8 relative overflow-hidden space-y-6 shadow-2xl">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-800/50 hover:bg-zinc-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="bg-white rounded-2xl p-6 h-64 flex items-center justify-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=80'; }}
                />
              </div>

              <div className="space-y-4">
                <span className="bg-zinc-800 text-[#d4ff00] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {selectedProduct.category}
                </span>

                <h3 className="text-2xl font-bold text-white leading-snug">{selectedProduct.name}</h3>

                <div className="flex items-center gap-1.5 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="text-xs text-white font-bold">{selectedProduct.rating}</span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">{selectedProduct.description}</p>

                <div className="text-2xl font-black text-[#d4ff00]">${selectedProduct.price.toFixed(2)}</div>

                <div className="pt-2 flex gap-3">
                  <button
                    onClick={(e) => {
                      addToCart(selectedProduct, e);
                      setSelectedProduct(null);
                    }}
                    className="flex-1 bg-[#d4ff00] text-black font-bold text-sm py-3 px-4 rounded-xl hover:bg-[#c2eb00] transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#131317] border border-zinc-800 rounded-3xl max-w-md w-full p-6 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-[#d4ff00]/20 text-[#d4ff00] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">Order Confirmed!</h3>
              <p className="text-xs text-zinc-400 mt-2">
                Thank you for shopping at SkyMart, <strong className="text-zinc-200">{currentUser?.name}</strong>. Your items will arrive shortly!
              </p>
            </div>

            <div className="bg-[#1c1c22] p-4 rounded-xl text-left space-y-2 border border-zinc-800 text-xs">
              <div className="flex justify-between text-zinc-400">
                <span>Items:</span>
                <span className="text-white font-medium">{cartItemCount} items</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Total Amount Paid:</span>
                <span className="text-[#d4ff00] font-bold">${finalCartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Payment Method:</span>
                <span className="text-white font-medium">SkyMart Express Pay</span>
              </div>
            </div>

            <button
              onClick={() => {
                const newOrder = {
                  id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
                  date: new Date().toISOString().split('T')[0],
                  total: finalCartTotal,
                  itemsCount: cartItemCount,
                  status: 'Processing'
                };
                setOrders((prev) => [newOrder, ...prev]);
                setCart([]);
                setIsCheckoutOpen(false);
                setAppliedDiscount(0);
                showToast('Order placed successfully!');
              }}
              className="w-full bg-[#d4ff00] text-black font-bold text-sm py-3 rounded-xl hover:bg-[#c2eb00] transition-colors"
            >
              Back to Store
            </button>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#18181b] border border-[#d4ff00]/40 text-white px-4 py-3 rounded-xl shadow-2xl shadow-black/80 animate-bounce-short">
          <div className="w-8 h-8 rounded-full bg-[#d4ff00]/20 text-[#d4ff00] flex items-center justify-center font-bold">
            ⚡
          </div>
          <div className="text-sm font-medium pr-2">{toastMessage}</div>
          <button onClick={() => setToastMessage('')} className="text-zinc-400 hover:text-white p-1">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    
      <StoreContent />
    
  );
}
