// import  { useState } from 'react';
// import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

// export default function AuthPage({ onLogin, onDemoLogin }) {
//   const [loginEmail, setLoginEmail] = useState('');
//   const [loginPassword, setLoginPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin(loginEmail);
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-6 min-h-[75vh]">
//       {/* Left Brand Showcase */}
//       <div className="space-y-8">
//         <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full text-xs font-bold text-[#d4ff00] uppercase tracking-wider">
//           Welcome Back
//         </div>

//         <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-white">
//           Shop the future.{' '}
//           <span className="text-[#d4ff00] block mt-1">Today.</span>
//         </h1>

//         <p className="text-zinc-400 text-base md:text-lg max-w-lg leading-relaxed">
//           Thousands of products, lightning-fast delivery, and prices that make your wallet happy.
//         </p>

//         <div className="grid grid-cols-3 gap-4 pt-4">
//           <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl text-center">
//             <div className="text-xl md:text-2xl font-black text-[#d4ff00]">20K+</div>
//             <div className="text-xs text-zinc-400 font-medium mt-1">Products</div>
//           </div>

//           <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl text-center">
//             <div className="text-xl md:text-2xl font-black text-[#d4ff00]">50K+</div>
//             <div className="text-xs text-zinc-400 font-medium mt-1">Users</div>
//           </div>

//           <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl text-center">
//             <div className="text-xl md:text-2xl font-black text-[#d4ff00]">4.9★</div>
//             <div className="text-xs text-zinc-400 font-medium mt-1">Rating</div>
//           </div>
//         </div>
//       </div>

//       {/* Right Login Card */}
//       <div className="bg-[#131317] border border-zinc-800 p-8 rounded-3xl max-w-md w-full mx-auto shadow-2xl relative">
//         <h2 className="text-2xl font-bold text-white tracking-tight">Sign in</h2>
//         <p className="text-sm text-zinc-400 mt-1 mb-6">Enter your credentials to continue</p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <div className="relative">
//               <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
//               <input
//                 type="email"
//                 value={loginEmail}
//                 onChange={(e) => setLoginEmail(e.target.value)}
//                 placeholder="Email address"
//                 required
//                 className="w-full bg-[#1c1c22] border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4ff00] transition-colors"
//               />
//             </div>
//           </div>

//           <div>
//             <div className="relative">
//               <Lock className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 value={loginPassword}
//                 onChange={(e) => setLoginPassword(e.target.value)}
//                 placeholder="Password"
//                 required
//                 className="w-full bg-[#1c1c22] border border-zinc-800 rounded-xl pl-10 pr-10 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4ff00] transition-colors"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
//               >
//                 {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
//               </button>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#d4ff00] text-black font-bold text-sm py-3 px-6 rounded-xl hover:bg-[#c2eb00] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#d4ff00]/10 mt-2"
//           >
//             <span>Sign in</span>
//             <ArrowRight className="w-4 h-4" />
//           </button>
//         </form>

//         <div className="mt-6 pt-6 border-t border-zinc-800/80 text-center">
//           <p className="text-xs text-zinc-400 mb-3">
//             Don't have an account?{' '}
//             <span
//               className="text-[#d4ff00] cursor-pointer hover:underline font-semibold"
//               onClick={onDemoLogin}
//             >
//               Create one
//             </span>
//           </p>
         
//         </div>
//       </div>
//     </div>
//   );
// }
import  { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function AuthPage({ onLogin, onNavigateRegister }) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(loginEmail);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-6 min-h-[75vh]">
      {/* Left Brand Showcase */}
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full text-xs font-bold text-[#d4ff00] uppercase tracking-wider">
          Welcome Back
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-white">
          Shop the future.{' '}
          <span className="text-[#d4ff00] block mt-1">Today.</span>
        </h1>

        <p className="text-zinc-400 text-base md:text-lg max-w-lg leading-relaxed">
          Thousands of products, lightning-fast delivery, and prices that make your wallet happy.
        </p>

        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl text-center">
            <div className="text-xl md:text-2xl font-black text-[#d4ff00]">20K+</div>
            <div className="text-xs text-zinc-400 font-medium mt-1">Products</div>
          </div>

          <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl text-center">
            <div className="text-xl md:text-2xl font-black text-[#d4ff00]">50K+</div>
            <div className="text-xs text-zinc-400 font-medium mt-1">Users</div>
          </div>

          <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl text-center">
            <div className="text-xl md:text-2xl font-black text-[#d4ff00]">4.9★</div>
            <div className="text-xs text-zinc-400 font-medium mt-1">Rating</div>
          </div>
        </div>
      </div>

      {/* Right Login Card */}
      <div className="bg-[#131317] border border-zinc-800 p-8 rounded-3xl max-w-md w-full mx-auto shadow-2xl relative">
        <h2 className="text-2xl font-bold text-white tracking-tight">Sign in</h2>
        <p className="text-sm text-zinc-400 mt-1 mb-6">Enter your credentials to continue</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="relative">
              <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
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
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
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
            <span>Sign in</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-zinc-800/80 text-center">
          <p className="text-xs text-zinc-400 mb-3">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={onNavigateRegister}
              className="text-[#d4ff00] hover:underline font-semibold ml-1"
            >
              Create one
            </button>
          </p>
          
        </div>
      </div>
    </div>
  );
}
