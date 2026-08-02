"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Car, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

const RIDE_CATEGORIES = [
  {
    icon: "🚖",
    title: "City Rides",
    desc: "Quick and convenient travel within the city. Perfect for daily commuters and short trips across Srinagar.",
    badge: "Local Commute",
  },
  {
    icon: "✈️",
    title: "Airport Transfers",
    desc: "Reliable pickups and drop-offs with timely arrivals at Srinagar (SXR) and Leh (IXL) airports.",
    badge: "Priority Shuttle",
  },
  {
    icon: "🏔️",
    title: "Tourist Rides",
    desc: "Discover Kashmir's most iconic destinations — Gulmarg, Pahalgam, Sonamarg — comfortably.",
    badge: "Scenic Circuits",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Travel",
    desc: "Spacious, comfortable rides designed for family outings and unforgettable vacations.",
    badge: "Extra Comfort",
  },
  {
    icon: "🏢",
    title: "Business Travel",
    desc: "Professional rides for meetings, corporate events and executive travel across the valley.",
    badge: "Executive",
  },
  {
    icon: "🚐",
    title: "Group Travel",
    desc: "Travel together with larger vehicles for friends, families and organised tour groups.",
    badge: "Multi-Passenger",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col font-sans">
      <Navbar />

      {/* HEADER BANNER */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-green-500/10 text-green-400 border border-green-500/20 mb-4"
          >
            <Car className="w-4 h-4 text-green-400" />
            <span>KashGo Ride Categories</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Every Journey Has a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Perfect Ride.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Whether you need a quick intra-city cab, an airport shuttle, or a group trip to Gulmarg, explore our tailored ride options across Kashmir.
          </motion.p>
        </div>
      </section>

      {/* RIDE CATEGORIES GRID */}
      <section className="py-20 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RIDE_CATEGORIES.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-green-500 hover:shadow-xl transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl p-3 bg-slate-950 rounded-2xl border border-slate-800 shadow-xs">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                    {cat.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {cat.desc}
                </p>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-green-400" /> Verified Driver
                  </span>
                  <Link href="/contact" className="text-green-400 hover:text-green-300 transition-colors">
                    Inquire Ride ➔
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-slate-950 text-white text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20 inline-block">
            Coming Soon
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Kashmir Is Waiting.</h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">Download the KashGo app when it launches and explore Kashmir like never before.</p>
          <Link href="/#app-download">
            <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Download App (Coming Soon)
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
