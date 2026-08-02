"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { HeroMobileMockup } from "@/components/ui/HeroMobileMockup";
import { motion } from "framer-motion";
import {
  Car,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  MapPin,
  Users,
  Star,
  Quote,
  Check,
  Sparkles,
  Headphones,
  Compass,
  Plane,
  Building,
  Heart,
  Shield,
  Clock,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const RIDE_CATEGORIES = [
  {
    icon: "🚖",
    title: "City Rides",
    desc: "Quick and convenient travel within the city.",
    badge: "Local Commute",
  },
  {
    icon: "✈️",
    title: "Airport Transfers",
    desc: "Reliable pickups and drop-offs with timely arrivals.",
    badge: "Priority Express",
  },
  {
    icon: "🏔️",
    title: "Tourist Rides",
    desc: "Discover Kashmir's most iconic destinations comfortably.",
    badge: "Popular Circuit",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Travel",
    desc: "Spacious rides designed for family outings and vacations.",
    badge: "Extra Comfort",
  },
  {
    icon: "🏢",
    title: "Business Travel",
    desc: "Professional rides for meetings, events and corporate travel.",
    badge: "Executive Class",
  },
  {
    icon: "🚐",
    title: "Group Travel",
    desc: "Travel together with larger vehicles for friends and families.",
    badge: "Multi-Passenger",
  },
];

const DIFFERENTIATORS = [
  "Built exclusively for Kashmir",
  "Verified local driver partners",
  "Tourist-friendly experience",
  "Easy ride booking through the mobile app",
  "Transparent pricing",
  "Clean and comfortable vehicles",
  "Dedicated customer support",
];

const TRAVEL_NEEDS_PILLS = [
  "Easy Booking Experience",
  "Verified Drivers",
  "Transparent Pricing",
  "Multiple Vehicle Options",
  "Safe & Comfortable Rides",
  "Local Knowledge",
  "Tourist Friendly",
  "Customer Support",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col font-sans selection:bg-green-400 selection:text-slate-950">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden hero-mountain-bg text-white">
        {/* Ambient Glow Lights */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-green-500/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Small Announcement Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest bg-slate-950/90 text-green-400 border border-green-500/40 backdrop-blur-md shadow-lg">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span>🚀 WE ARE WORKING — APP LAUNCHING SOON ACROSS KASHMIR</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Ride{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-green-500">
                  Smarter.
                </span>
                <br />
                Explore{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-green-500">
                  Kashmir
                </span>{" "}
                Better.
              </h1>

              {/* Subtitle Paragraph */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                KashGo is building a modern ride-booking platform designed exclusively for Kashmir. Whether you're arriving as a tourist or commuting as a local, booking a trusted ride will soon be effortless.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="#app-download">
                  <Button variant="primary" size="lg" icon={<Smartphone className="w-5 h-5" />}>
                    Download App <span className="text-xs opacity-90 ml-1 font-extrabold">(Coming Soon)</span>
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" icon={<PhoneCall className="w-5 h-5" />}>
                    Contact Us
                  </Button>
                </Link>
              </div>

              {/* Available Soon Badges */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-[11px] uppercase font-extrabold tracking-widest text-slate-400 mb-3">
                  AVAILABLE SOON ON
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="bg-slate-900/90 border border-slate-800 rounded-2xl px-4 py-2.5 flex items-center gap-3 shadow-md">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white"><path d="M17.52 14.28A1.28 1.28 0 0 0 18.8 13A1.28 1.28 0 0 0 17.52 11.72A1.28 1.28 0 0 0 16.24 13A1.28 1.28 0 0 0 17.52 14.28M6.48 14.28A1.28 1.28 0 0 0 7.76 13A1.28 1.28 0 0 0 6.48 11.72A1.28 1.28 0 0 0 5.2 13A1.28 1.28 0 0 0 6.48 14.28M12.96 4.79L14.9 1.45C14.97 1.34 14.93 1.19 14.81 1.12C14.7 1.05 14.54 1.09 14.47 1.2L12.47 4.67C11 4 9.4 4 7.53 4.67L5.53 1.2C5.46 1.09 5.3 1.05 5.19 1.12C5.07 1.19 5.03 1.34 5.1 1.45L7.04 4.79C3.12 6.94 0.5 11.23 0 16.5H24C23.5 11.23 20.88 6.94 16.96 4.79Z"/></svg>
                    <div>
                      <div className="text-xs font-bold text-white">Android</div>
                      <div className="text-[10px] text-green-400 font-extrabold">Coming Soon</div>
                    </div>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-800 rounded-2xl px-4 py-2.5 flex items-center gap-3 shadow-md">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white"><path d="M18.72 13.56C18.75 16.63 21.2 17.57 21.23 17.58C21.2 17.65 20.83 18.9 19.92 20.24C19.14 21.39 18.32 22.52 17.06 22.55C15.82 22.58 15.42 21.82 14 21.82C12.57 21.82 12.09 22.52 10.93 22.58C9.69 22.64 8.76 21.39 7.94 20.24C6.26 17.81 4.96 13.72 6.67 10.74C7.52 9.27 8.94 8.35 10.45 8.32C11.66 8.29 12.78 9.12 13.53 9.12C14.27 9.12 15.63 8.11 17.11 8.24C17.72 8.27 19.46 8.5 20.61 10.18C20.52 10.23 18.7 11.3 18.72 13.56M14.77 5.56C15.42 4.77 15.87 3.69 15.75 2.5C14.72 2.55 13.52 3.19 12.85 3.97C12.26 4.66 11.72 5.75 11.87 6.9C13 6.99 14.12 6.35 14.77 5.56Z"/></svg>
                    <div>
                      <div className="text-xs font-bold text-white">iOS</div>
                      <div className="text-[10px] text-green-400 font-extrabold">Coming Soon</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Mobile Mockup */}
            <div className="lg:col-span-6 hidden lg:block">
              <HeroMobileMockup />
            </div>
          </div>

          {/* Bottom Highlights Bar */}
          <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-card p-4 rounded-2xl flex items-center gap-3 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center shrink-0 border border-green-500/20">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Built for Everyone</div>
                <div className="text-[11px] text-slate-400">Tourists &amp; Locals</div>
              </div>
            </div>

            <div className="glass-card p-4 rounded-2xl flex items-center gap-3 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center shrink-0 border border-green-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Kashmir Focused</div>
                <div className="text-[11px] text-slate-400">Built Exclusively for Kashmir</div>
              </div>
            </div>

            <div className="glass-card p-4 rounded-2xl flex items-center gap-3 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center shrink-0 border border-green-500/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Trusted &amp; Secure</div>
                <div className="text-[11px] text-slate-400">Verified Drivers, Safe Rides</div>
              </div>
            </div>

            <div className="glass-card p-4 rounded-2xl flex items-center gap-3 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center shrink-0 border border-green-500/20">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Better Every Day</div>
                <div className="text-[11px] text-slate-400">Smarter Platform Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY KASHMIR */}
      <section className="py-20 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase bg-green-500/10 text-green-400 border border-green-500/30">
            Trusted by Kashmir, Built for Everyone
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Instead of creating another cab service, we're building a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              smarter way to travel
            </span>{" "}
            across Kashmir.
          </h2>

          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
            From airport pickups and city rides to unforgettable journeys through the valley, KashGo brings technology, trusted drivers and local expertise together in one seamless platform.
          </p>
        </div>
      </section>

      {/* ABOUT KASHGO */}
      <section id="about" className="py-20 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                About KashGo
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                More Than a Ride. <br />
                <span className="text-green-400">A Better Way to Move Across Kashmir.</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Every great journey starts with trust.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                KashGo was founded with a vision to simplify travel across Kashmir through technology. We believe booking a ride should be fast, transparent and stress-free—whether you're a tourist discovering the valley or a local commuting every day.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                By connecting passengers with verified local drivers through an intuitive mobile app, KashGo aims to redefine how people experience travel across Kashmir.
              </p>
              <div className="p-5 bg-slate-900 border-l-4 border-green-500 text-white font-bold text-base rounded-r-2xl border border-slate-800 shadow-md">
                "This isn't just about reaching a destination. It's about making every journey safer, smarter and more comfortable."
              </div>
            </div>

            {/* Right Feature Card */}
            <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-slate-800">
              <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <h3 className="text-2xl font-bold text-white mb-6">
                Why Kashmir Chooses KashGo
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 text-xl">
                    🚀
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Instant Digital Booking</div>
                    <div className="text-xs text-slate-300">Fast fare quotes without bargaining delays.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 text-xl">
                    🧑‍✈️
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Verified Local Driver Partners</div>
                    <div className="text-xs text-slate-300">Native captains with deep knowledge of valley routes.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 text-xl">
                    🚗
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Clean &amp; Comfortable Vehicles</div>
                    <div className="text-xs text-slate-300">Maintained fleet for city streets &amp; mountain passes.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE FOUNDER */}
      <section className="py-20 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Founder Photo Display */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800 relative overflow-hidden text-center">
                {/* Real Founder Photo Frame */}
                <div className="relative w-56 h-72 mx-auto mb-6 rounded-2xl overflow-hidden border-2 border-green-500 shadow-xl bg-slate-900 p-1">
                  <Image
                    src="/images/founder.png"
                    alt="Shaikh Shaheen Kamalmiya - Founder & CEO KashGo"
                    fill
                    sizes="(max-width: 768px) 100vw, 224px"
                    priority
                    className="object-cover object-center rounded-xl"
                  />
                </div>

                <h3 className="text-2xl font-black text-white mb-1">
                  Shaikh Shaheen Kamalmiya
                </h3>
                <div className="text-xs font-extrabold text-green-400 uppercase tracking-widest mb-6">
                  Founder &amp; CEO, KashGo
                </div>

                <div className="bg-slate-900 rounded-2xl p-4 text-left border border-slate-800 space-y-2">
                  <Quote className="w-6 h-6 text-green-400" />
                  <p className="text-slate-200 text-xs italic leading-relaxed font-medium">
                    "Our mission isn't simply to build an app. It's to build trust—one journey at a time."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Story Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                Meet The Founder
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                A Vision Inspired by Kashmir
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Great ideas often begin with a simple observation.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                As tourism continues to grow and everyday travel becomes more important, one question remained:
              </p>
              <div className="p-4 bg-slate-950 border-2 border-green-500 rounded-2xl shadow-sm font-extrabold text-white text-lg">
                "Why should finding a trusted ride still feel complicated?"
              </div>
              <p className="text-slate-300 text-base leading-relaxed">
                That question became the foundation of KashGo. Driven by a passion for technology and customer experience, the vision was to create a ride-booking platform designed specifically for the people of Kashmir—combining local knowledge with modern technology to deliver a smoother travel experience for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES KASHGO DIFFERENT */}
      <section className="py-20 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20 mb-3 inline-block">
              Regional Excellence
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              What Makes KashGo Different?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Not every ride-booking platform understands Kashmir. KashGo is designed from the ground up for the unique travel needs of the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIATORS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-green-500/60 transition-all flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Check className="w-4 h-4" />
                </div>
                <div className="text-base font-bold text-white pt-0.5">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RIDE CATEGORIES */}
      <section id="categories" className="py-20 bg-slate-900/80 text-white relative overflow-hidden border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20 mb-3 inline-block">
              Ride Categories
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Every Journey Has a Perfect Ride
            </h2>
            <p className="text-slate-300 text-base">
              Tailored fleet solutions for every destination across Jammu, Kashmir &amp; Ladakh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RIDE_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-green-500 transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl p-3 bg-slate-900 rounded-2xl border border-slate-800">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                    {cat.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APP EXPERIENCE */}
      <section id="how-it-works" className="py-20 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                App Experience
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Designed Around Simplicity.
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Everything you need is just a few taps away.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Book rides faster",
                  "Track your driver live",
                  "View ride history",
                  "Secure payments",
                  "Save favourite locations",
                  "Manage your profile",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 bg-slate-900 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                    <span className="text-sm font-bold text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right iPhone Showcase */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-sm bg-slate-950 rounded-[44px] p-4 border-4 border-slate-800 shadow-2xl">
                <div className="bg-slate-900 rounded-[36px] p-5 border border-slate-800 text-white space-y-4">
                  <div className="text-xs text-green-400 font-bold uppercase tracking-wider">KashGo App Live Preview</div>
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                    <div className="text-sm font-bold">Fast Kashmir Ride Booking</div>
                    <div className="text-xs text-slate-400 mt-1">Srinagar Airport ➔ Gulmarg Pass</div>
                  </div>
                  <div className="p-3 bg-green-600 text-white font-extrabold text-xs rounded-xl text-center">
                    Driver Assigned • Tariq M. (4.9★)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMING SOON BANNER */}
      <section id="app-download" className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20 mb-4 inline-block">
            Coming Soon
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 max-w-3xl mx-auto">
            The KashGo App Is On Its Way.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10">
            We're working behind the scenes to deliver a seamless ride-booking experience across Kashmir. Be among the first to experience KashGo when we launch.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              className="bg-slate-950 hover:bg-slate-800 text-white px-6 py-3.5 rounded-2xl border border-slate-800 hover:border-green-500/40 flex items-center gap-3 transition-colors cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-white"><path d="M17.52 14.28A1.28 1.28 0 0 0 18.8 13A1.28 1.28 0 0 0 17.52 11.72A1.28 1.28 0 0 0 16.24 13A1.28 1.28 0 0 0 17.52 14.28M6.48 14.28A1.28 1.28 0 0 0 7.76 13A1.28 1.28 0 0 0 6.48 11.72A1.28 1.28 0 0 0 5.2 13A1.28 1.28 0 0 0 6.48 14.28M12.96 4.79L14.9 1.45C14.97 1.34 14.93 1.19 14.81 1.12C14.7 1.05 14.54 1.09 14.47 1.2L12.47 4.67C11 4 9.4 4 7.53 4.67L5.53 1.2C5.46 1.09 5.3 1.05 5.19 1.12C5.07 1.19 5.03 1.34 5.1 1.45L7.04 4.79C3.12 6.94 0.5 11.23 0 16.5H24C23.5 11.23 20.88 6.94 16.96 4.79Z"/></svg>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-slate-400">Google Play</div>
                <div className="text-sm font-bold text-green-400">Coming Soon</div>
              </div>
            </button>

            <button
              type="button"
              className="bg-slate-950 hover:bg-slate-800 text-white px-6 py-3.5 rounded-2xl border border-slate-800 hover:border-green-500/40 flex items-center gap-3 transition-colors cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-white"><path d="M18.72 13.56C18.75 16.63 21.2 17.57 21.23 17.58C21.2 17.65 20.83 18.9 19.92 20.24C19.14 21.39 18.32 22.52 17.06 22.55C15.82 22.58 15.42 21.82 14 21.82C12.57 21.82 12.09 22.52 10.93 22.58C9.69 22.64 8.76 21.39 7.94 20.24C6.26 17.81 4.96 13.72 6.67 10.74C7.52 9.27 8.94 8.35 10.45 8.32C11.66 8.29 12.78 9.12 13.53 9.12C14.27 9.12 15.63 8.11 17.11 8.24C17.72 8.27 19.46 8.5 20.61 10.18C20.52 10.23 18.7 11.3 18.72 13.56M14.77 5.56C15.42 4.77 15.87 3.69 15.75 2.5C14.72 2.55 13.52 3.19 12.85 3.97C12.26 4.66 11.72 5.75 11.87 6.9C13 6.99 14.12 6.35 14.77 5.56Z"/></svg>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-slate-400">App Store</div>
                <div className="text-sm font-bold text-green-400">Coming Soon</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* BECOME A DRIVER PARTNER */}
      <section className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                Become a Driver
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Drive with KashGo
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Become a valued partner in Kashmir's growing mobility network. Enjoy flexible working hours, transparent earnings and the opportunity to connect with thousands of riders across the region.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link href="/driver">
                <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Apply as Driver
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PEOPLE WILL LOVE KASHGO */}
      <section className="py-20 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20 mb-3 inline-block">
              Why People Will Love KashGo
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Built Around Real Travel Needs
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {TRAVEL_NEEDS_PILLS.map((pill, idx) => (
              <div
                key={idx}
                className="px-5 py-3 rounded-full bg-slate-900 border border-slate-800 text-white font-bold text-sm flex items-center gap-2 shadow-xs hover:border-green-500 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-green-600 text-white flex items-center justify-center">
                  <Check className="w-3 h-3" />
                </div>
                <span>{pill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Kashmir Is Waiting.
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Soon, getting around will be easier than ever. Download the KashGo app when it launches and experience travel designed for Kashmir.
          </p>
          <div className="pt-4">
            <Link href="#app-download">
              <Button variant="primary" size="lg" icon={<Smartphone className="w-5 h-5" />}>
                Download App (Coming Soon)
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
