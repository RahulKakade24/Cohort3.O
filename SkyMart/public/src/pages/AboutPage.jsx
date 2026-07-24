// import React from 'react';
import { Zap, Package, Users, Star, Truck } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/products';

export default function AboutPage() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-[#d4ff00] text-black flex items-center justify-center font-black mx-auto shadow-lg shadow-[#d4ff00]/20">
          <Zap className="w-6 h-6 fill-black" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          About <span className="text-[#d4ff00]">SkyMart</span>
        </h1>

        <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          SkyMart is a next-generation e-commerce platform built to make online shopping fast, fair, and enjoyable — for everyone.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl text-center">
            <Package className="w-5 h-5 text-[#d4ff00] mx-auto mb-1" />
            <div className="text-xl font-black text-white">20K+</div>
            <div className="text-xs text-zinc-400">Products</div>
          </div>

          <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl text-center">
            <Users className="w-5 h-5 text-blue-400 mx-auto mb-1" />
            <div className="text-xl font-black text-white">50K+</div>
            <div className="text-xs text-zinc-400">Happy Customers</div>
          </div>

          <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl text-center">
            <Star className="w-5 h-5 text-[#d4ff00] mx-auto mb-1" />
            <div className="text-xl font-black text-white">4.9</div>
            <div className="text-xs text-zinc-400">Avg. Rating</div>
          </div>

          <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl text-center">
            <Truck className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
            <div className="text-xl font-black text-white">99%</div>
            <div className="text-xs text-zinc-400">On-time Delivery</div>
          </div>
        </div>
      </div>

      <div className="bg-[#131317] border border-zinc-800 p-8 rounded-3xl space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">Our Story</h2>
        <div className="space-y-4 text-zinc-400 text-sm md:text-base leading-relaxed">
          <p>
            SkyMart started as a simple experiment — build a blazingly fast, modern web store that runs without full page reloads or layout shifts.
          </p>
          <p>
            Today, SkyMart provides a responsive shopping environment with cart state management, product filtering, live discounts, and instant feedback toast alerts.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight text-center">Meet the Team</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-[#131317] border border-zinc-800 p-5 rounded-2xl text-center space-y-3"
            >
              <div className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center font-bold text-lg ${member.bg}`}>
                {member.letter}
              </div>
              <div>
                <div className="font-bold text-sm text-white">{member.name}</div>
                <div className="text-xs text-zinc-400 mt-0.5">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
