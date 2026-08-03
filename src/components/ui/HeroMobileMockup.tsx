"use client";

import React from "react";
import Image from "next/image";
import { Menu, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export const HeroMobileMockup: React.FC = () => {
  return (
    <div className="relative w-auto max-w-[340px] mx-auto flex items-center justify-center py-2">
      {/* Green Location Pin Dot & Route Dashed Line */}
      <div className="absolute -top-7 right-6 z-30 hidden xl:flex items-center gap-1 pointer-events-none">
        <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center shadow-lg border border-slate-700 text-sm">
          📍
        </div>
        <svg className="w-24 h-10 stroke-green-500 stroke-2 fill-none" viewBox="0 0 100 50">
          <path d="M10 35 Q 50 10 90 20" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* Container for Phone + Floating Glass Badges */}
      <div className="relative z-20 flex items-center justify-center">
        {/* iPhone 15 Pro Device Frame (Compact Handheld Proportions) */}
        <div className="relative z-20 w-[240px] sm:w-[260px] bg-slate-950 rounded-[40px] p-2.5 border-[3px] border-slate-700/90 shadow-2xl ring-1 ring-white/10">
          {/* Dynamic Island Notch */}
          <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-slate-950 rounded-full z-40 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-800"></div>
          </div>

          {/* Screen Content */}
          <div className="bg-[#0B132B] rounded-[32px] overflow-hidden pt-7 pb-6 px-3.5 space-y-4 text-white border border-slate-800/80">
            {/* App Bar */}
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                {/* Real KASHgo Logo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/kashgo-logo.png"
                  alt="KASHgo"
                  width={20}
                  height={20}
                  style={{ width: 20, height: 20 }}
                  className="object-contain shrink-0"
                />
                {/* Brand text */}
                <div className="flex items-center font-black text-[11px] tracking-tight leading-none">
                  <span className="text-white">KASH</span>
                  <span className="text-yellow-400">go</span>
                  <span className="ml-0.5 flex flex-col gap-[1.5px] justify-center">
                    <span className="w-1.5 h-[1.5px] bg-yellow-400 rounded-full"></span>
                    <span className="w-1 h-[1.5px] bg-yellow-400 rounded-full"></span>
                  </span>
                </div>
              </div>
              <Menu className="w-3.5 h-3.5 text-slate-300 cursor-pointer" />
            </div>

            {/* Destination Input Box */}
            <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 space-y-1.5">
              <div className="text-[9px] text-slate-400 font-medium">Welcome,</div>
              <div className="text-[11px] font-black text-white tracking-tight">Where are you going today?</div>

              <div className="bg-slate-950 rounded-lg p-2.5 text-[10px] text-slate-400 flex items-center justify-between mt-1.5 border border-slate-800">
                <span>Enter destination</span>
                <span className="w-4 h-4 rounded-full bg-green-600 text-white text-[9px] flex items-center justify-center font-bold shadow-xs">
                  ➔
                </span>
              </div>
            </div>

            {/* 4 Category Tabs */}
            <div className="grid grid-cols-4 gap-1.5">
              <div className="py-2 px-1 bg-green-500/15 border border-green-500/40 rounded-lg text-center">
                <div className="text-[11px]">🚖</div>
                <div className="text-[7.5px] font-extrabold text-green-400 mt-0.5">City Rides</div>
              </div>
              <div className="py-2 px-1 bg-slate-950 border border-slate-800 rounded-lg text-center">
                <div className="text-[11px]">✈️</div>
                <div className="text-[7.5px] font-bold text-slate-300 mt-0.5">Airport</div>
              </div>
              <div className="py-2 px-1 bg-slate-950 border border-slate-800 rounded-lg text-center">
                <div className="text-[11px]">🏔️</div>
                <div className="text-[7.5px] font-bold text-slate-300 mt-0.5">Tourist</div>
              </div>
              <div className="py-2 px-1 bg-slate-950 border border-slate-800 rounded-lg text-center">
                <div className="text-[11px]">🚙</div>
                <div className="text-[7.5px] font-bold text-slate-300 mt-0.5">Outstation</div>
              </div>
            </div>

            {/* Vehicle Selection Card */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-black text-white">Book a Ride Now</div>
              <div className="text-[8.5px] text-slate-400 font-medium">Choose your preferred vehicle</div>

              <div className="bg-slate-950 rounded-xl p-2.5 border border-slate-800 flex items-center justify-between gap-1.5 shadow-inner">
                {/* Fixed Parent Dimensions for Next Image */}
                <div className="relative w-16 h-10 shrink-0 min-h-[40px] overflow-hidden rounded-md">
                  <Image
                    src="/images/white_sedan.png"
                    alt="KASHgo Sedan"
                    fill
                    sizes="64px"
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-extrabold text-white">Sedan</div>
                  <div className="text-[8px] text-slate-400 font-medium">👤 4 Seats • 🛡️ Comfortable</div>
                </div>
                <div className="w-5 h-5 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 shadow-xs">
                  ➔
                </div>
              </div>
            </div>

            {/* Bottom Safety Trust Shield */}
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-2 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-green-400 shrink-0" />
              <div>
                <div className="text-[8.5px] font-extrabold text-white">Safe Rides, Trusted Drivers</div>
                <div className="text-[7.5px] text-slate-300">Your safety is our priority</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stacked Glass Badges on Right Side */}
        <div className="absolute top-6 -right-48 z-30 space-y-2 hidden xl:block pointer-events-none">
          <div className="glass-card rounded-xl p-2.5 flex items-center gap-2.5 shadow-xl max-w-[190px] border border-white/10">
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-base shrink-0">
              👥
            </div>
            <div>
              <div className="text-[11px] font-black text-white leading-tight">Verified Drivers</div>
              <div className="text-[9px] text-slate-400 leading-tight">Trusted &amp; Background Verified</div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-2.5 flex items-center gap-2.5 shadow-xl max-w-[190px] border border-white/10">
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-base shrink-0">
              🛡️
            </div>
            <div>
              <div className="text-[11px] font-black text-white leading-tight">Your Safety</div>
              <div className="text-[9px] text-slate-400 leading-tight">Our Top Priority</div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-2.5 flex items-center gap-2.5 shadow-xl max-w-[190px] border border-white/10">
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-base shrink-0">
              🎧
            </div>
            <div>
              <div className="text-[11px] font-black text-white leading-tight">24/7 Support</div>
              <div className="text-[9px] text-slate-400 leading-tight">We're here for you anytime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
