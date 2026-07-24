import  { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, ArrowLeft } from 'lucide-react';

export default function RegisterPage({ onRegisterSuccess, onNavigateLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Triggers registration completion and redirects to sign in
    onRegisterSuccess(email);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-6 min-h-[75vh]">
      {/* Left Brand Showcase */}
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full text-xs font-bold text-[#d4ff00] uppercase tracking-wider">
          Join SkyMart
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-white">
          Create your <span className="text-[#d4ff00] block mt-1">account.</span>
        </h1>

        <p className="text-zinc-400 text-base md:text-lg max-w-lg leading-relaxed">
          Join thousands of shoppers and enjoy exclusive discounts, real-time order tracking, and ultra-fast checkout.
        </p>

        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl text-center">
            <div className="text-xl md:text-2xl font-black text-[#d4ff00]">Fast</div>
            <div className="text-xs text-zinc-400 font-medium mt-1">Checkout</div>
          </div>

          <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl text-center">
            <div className="text-xl md:text-2xl font-black text-[#d4ff00]">20% Off</div>
            <div className="text-xs text-zinc-400 font-medium mt-1">With SKY20</div>
          </div>

          <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl text-center">
            <div className="text-xl md:text-2xl font-black text-[#d4ff00]">Safe</div>
            <div className="text-xs text-zinc-400 font-medium mt-1">Encryption</div>
          </div>
        </div>
      </div>

      {/* Right Register Card */}
      <div className="bg-[#131317] border border-zinc-800 p-8 rounded-3xl max-w-md w-full mx-auto shadow-2xl relative">
        <button
          type="button"
          onClick={onNavigateLogin}
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white mb-4 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Sign In
        </button>

        <h2 className="text-2xl font-bold text-white tracking-tight">Create Account</h2>
        <p className="text-sm text-zinc-400 mt-1 mb-6">Enter your details to register</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="relative">
              <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
                className="w-full bg-[#1c1c22] border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4ff00] transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="w-full bg-[#1c1c22] border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4ff00] transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Lock className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full bg-[#1c1c22] border border-zinc-800 rounded-xl pl-10 pr-10 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4ff00] transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#d4ff00] text-black font-bold text-sm py-3 px-6 rounded-xl hover:bg-[#c2eb00] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#d4ff00]/10 mt-2"
          >
            <span>Complete Registration</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-zinc-800/80 text-center">
          <p className="text-xs text-zinc-400">
            Already have an account?{' '}
            <button
              type="button"
              onClick={onNavigateLogin}
              className="text-[#d4ff00] hover:underline font-semibold ml-1"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
