"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { HeroMobileMockup } from "@/components/ui/HeroMobileMockup";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronLeft,
  X,
  Award,
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

const BEST_PLACES = [
  {
    name: "Gulmarg",
    badge: "❄️ Gondola & Snow",
    img: "/images/dest_gulmarg.png",
    desc: "Famous for the Gulmarg Gondola, snow sports, and breathtaking alpine landscapes.",
    cols: "lg:col-span-2",
    height: "min-h-[380px] md:min-h-[480px]",
    link: "https://wa.me/917400180114?text=Hi%20KASHgo,%20I%20want%20to%20book%20a%20ride%20to%20Gulmarg.",
  },
  {
    name: "Sonmarg",
    badge: "🏔️ Meadow",
    img: "/images/dest_sonmarg.png",
    desc: "The 'Meadow of Gold', gateway to Ladakh, rich glaciers, and alpine treks.",
    cols: "lg:col-span-1",
    height: "min-h-[280px] md:min-h-[380px]",
    link: "https://wa.me/917400180114?text=Hi%20KASHgo,%20I%20want%20to%20book%20a%20ride%20to%20Sonmarg.",
  },
  {
    name: "Dal Lake",
    badge: "🛶 Shikara",
    img: "/images/dest_dallake.png",
    desc: "Explore floating gardens, houseboats, and romantic Shikara rides at sunset.",
    cols: "lg:col-span-1",
    height: "min-h-[280px] md:min-h-[380px]",
    link: "https://wa.me/917400180114?text=Hi%20KASHgo,%20I%20want%20to%20book%20a%20ride%20to%20Dal%20Lake%20in%20Srinagar.",
  },
  {
    name: "Pahalgam",
    badge: "🌲 Valley",
    img: "/images/dest_pahalgam.png",
    desc: "Lidder river valley, Betaab valley, beautiful meadows, and peaceful pine forests.",
    cols: "lg:col-span-1",
    height: "min-h-[280px] md:min-h-[380px]",
    link: "https://wa.me/917400180114?text=Hi%20KASHgo,%20I%20want%20to%20book%20a%20ride%20to%20Pahalgam.",
  },
];

const PREMIUM_FLEET = [
  {
    name: "Toyota Corolla",
    subtitle: "Comfortable Sedan for Everyday Travel",
    desc: "Experience smooth and reliable rides with the Toyota Corolla. Perfect for airport transfers, city travel, and business trips.",
    ideal: ["Airport Transfers", "Business Travel", "City Rides", "Couples"],
    capacity: "4 Passengers",
    luggage: "2 Large + 2 Cabin Bags",
    img: "/images/corolla.jpg",
  },
  {
    name: "Maruti Swift",
    subtitle: "Smart Choice for Budget-Friendly Travel",
    desc: "Compact, economical, and comfortable—ideal for local sightseeing and short-distance travel.",
    ideal: ["Local Sightseeing", "Airport Pickup", "Solo Travelers", "Couples", "Budget Travel"],
    capacity: "4 Passengers",
    luggage: "2 Medium Bags",
    img: "/images/swift.jpg",
  },
  {
    name: "Maruti Ertiga",
    subtitle: "Spacious MPV for Family Adventures",
    desc: "Travel together without compromising comfort. Perfect for families and small groups.",
    ideal: ["Family Trips", "Local Tours", "Airport Transfers", "Weekend Getaways"],
    capacity: "6–7 Passengers",
    luggage: "Large Luggage Space",
    img: "/images/ertiga.jpg",
  },
  {
    name: "Hyundai Creta",
    subtitle: "Stylish SUV for Comfortable Journeys",
    desc: "A premium SUV offering smooth performance, modern interiors, and excellent comfort for long-distance travel.",
    ideal: ["Family Tours", "Honeymoon Trips", "Hill Stations", "Long Drives", "Sightseeing", "Road Trips"],
    capacity: "4-5 Passengers",
    luggage: "2 Large + 2 Cabin Bags",
    img: "/images/creta.jpg",
  },
  {
    name: "Honda City",
    subtitle: "Executive Sedan with Premium Comfort",
    desc: "Designed for travelers who value elegance, comfort, and a refined driving experience.",
    ideal: ["Corporate Travel", "Airport Transfers", "Business Meetings", "City Tours", "Outstation Trips"],
    capacity: "4 Passengers",
    luggage: "Spacious Boot",
    img: "/images/city.jpg",
  },
  {
    name: "Toyota Innova Crysta",
    subtitle: "Spacious Comfort for Every Journey",
    desc: "Enjoy legendary reliability and spacious comfort in Kashmir's favorite premium MPV.",
    ideal: ["Family Trips", "Airport Transfers", "Group Travel", "Pilgrimage", "Outstation Rides"],
    capacity: "6-7 Passengers",
    luggage: "Large Luggage Space",
    img: "/images/innova.jpg",
  },
  {
    name: "Tempo Traveller",
    subtitle: "Group Travel, Made Comfortable",
    desc: "Travel together with maximum comfort. Ideal for family vacations, corporate outings, and group tours.",
    ideal: ["Group Tours", "Corporate Trips", "School Excursions", "Pilgrimage Tours", "Adventure Trips"],
    capacity: "9-17 Passengers",
    luggage: "Spacious Luggage Area",
    img: "/images/tempo.jpg",
  },
  {
    name: "Mahindra Bolero",
    subtitle: "Powerful. Reliable. Built for Every Road",
    desc: "Built for adventure and challenging terrains, the Bolero delivers confidence and performance on every journey.",
    ideal: ["Village Trips", "Family Travel", "Mountain Roads", "Group Travel", "Adventure"],
    capacity: "7-9 Passengers",
    luggage: "Large Boot Space",
    img: "/images/bolero.jpg",
  },
];

export default function Home() {
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);
  const [activeDestIndex, setActiveDestIndex] = useState(0);
  const destinationsRef = useRef<HTMLDivElement>(null);
  const fleetRef = useRef<HTMLDivElement>(null);

  const scrollContainer = (ref: React.RefObject<HTMLDivElement | null>, direction: "left" | "right") => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth * 0.85;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-20 lg:pt-24 lg:pb-32 overflow-hidden hero-mountain-bg text-white">
        {/* Ambient Glow Lights */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-amber-500/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-amber-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }}></div>
        {/* Dark Backing Shadow for Text Column Visibility */}
        <div className="absolute top-12 left-0 w-[550px] h-[450px] bg-slate-950/70 rounded-full blur-[90px] pointer-events-none z-0"></div>



        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 space-y-6 text-left"
            >
              {/* Small Announcement Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest bg-slate-950/90 text-amber-400 border border-amber-500/40 backdrop-blur-md shadow-lg"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(74,222,128,0.85)] animate-pulse"></span>
                <span>🚀 KASHgo App Launching Soon</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white"
              >
                Ride{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                  Smarter.
                </span>
                <br />
                Explore{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                  Kashmir
                </span>{" "}
                Better.
              </motion.h1>

              {/* Subtitle Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl"
              >
                KASHgo is building a modern ride-booking platform designed exclusively for Kashmir. Whether you're arriving as a tourist or commuting as a local, booking a trusted ride will soon be effortless.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
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
              </motion.div>

              {/* Available Soon Badges */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="pt-4 border-t border-slate-800/80"
              >
                <div className="text-[11px] uppercase font-extrabold tracking-widest text-slate-400 mb-3">
                  AVAILABLE SOON ON
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="bg-slate-900/90 border border-slate-800 rounded-2xl px-4 py-2.5 flex items-center gap-3 shadow-md">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white"><path d="M17.52 14.28A1.28 1.28 0 0 0 18.8 13A1.28 1.28 0 0 0 17.52 11.72A1.28 1.28 0 0 0 16.24 13A1.28 1.28 0 0 0 17.52 14.28M6.48 14.28A1.28 1.28 0 0 0 7.76 13A1.28 1.28 0 0 0 6.48 11.72A1.28 1.28 0 0 0 5.2 13A1.28 1.28 0 0 0 6.48 14.28M12.96 4.79L14.9 1.45C14.97 1.34 14.93 1.19 14.81 1.12C14.7 1.05 14.54 1.09 14.47 1.2L12.47 4.67C11 4 9.4 4 7.53 4.67L5.53 1.2C5.46 1.09 5.3 1.05 5.19 1.12C5.07 1.19 5.03 1.34 5.1 1.45L7.04 4.79C3.12 6.94 0.5 11.23 0 16.5H24C23.5 11.23 20.88 6.94 16.96 4.79Z" /></svg>
                    <div>
                      <div className="text-xs font-bold text-white">Android</div>
                      <div className="text-[10px] text-amber-400 font-extrabold">Coming Soon</div>
                    </div>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-800 rounded-2xl px-4 py-2.5 flex items-center gap-3 shadow-md">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white"><path d="M18.72 13.56C18.75 16.63 21.2 17.57 21.23 17.58C21.2 17.65 20.83 18.9 19.92 20.24C19.14 21.39 18.32 22.52 17.06 22.55C15.82 22.58 15.42 21.82 14 21.82C12.57 21.82 12.09 22.52 10.93 22.58C9.69 22.64 8.76 21.39 7.94 20.24C6.26 17.81 4.96 13.72 6.67 10.74C7.52 9.27 8.94 8.35 10.45 8.32C11.66 8.29 12.78 9.12 13.53 9.12C14.27 9.12 15.63 8.11 17.11 8.24C17.72 8.27 19.46 8.5 20.61 10.18C20.52 10.23 18.7 11.3 18.72 13.56M14.77 5.56C15.42 4.77 15.87 3.69 15.75 2.5C14.72 2.55 13.52 3.19 12.85 3.97C12.26 4.66 11.72 5.75 11.87 6.9C13 6.99 14.12 6.35 14.77 5.56Z" /></svg>
                    <div>
                      <div className="text-xs font-bold text-white">iOS</div>
                      <div className="text-[10px] text-amber-400 font-extrabold">Coming Soon</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Hero Mobile Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, type: "spring", stiffness: 90 }}
              className="lg:col-span-6 hidden lg:block"
            >
              <HeroMobileMockup />
            </motion.div>
          </div>

          {/* Bottom Highlights Bar */}
          <div className="mt-16 pt-8 border-t border-slate-800/80 hidden md:grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass-card p-4 rounded-2xl flex items-center gap-3 border border-slate-800 hover:border-amber-500/40 transition-all cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/35">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Built for Everyone</div>
                <div className="text-[11px] text-slate-400">Tourists &amp; Locals</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass-card p-4 rounded-2xl flex items-center gap-3 border border-slate-800 hover:border-amber-500/40 transition-all cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/35">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Kashmir Focused</div>
                <div className="text-[11px] text-slate-400">Built Exclusively for Kashmir</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass-card p-4 rounded-2xl flex items-center gap-3 border border-slate-800 hover:border-amber-500/40 transition-all cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/35">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Trusted &amp; Secure</div>
                <div className="text-[11px] text-slate-400">Verified Drivers, Safe Rides</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass-card p-4 rounded-2xl flex items-center gap-3 border border-slate-800 hover:border-amber-500/40 transition-all cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/35">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Better Every Day</div>
                <div className="text-[11px] text-slate-400">Smarter Platform Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY KASHMIR */}
      <section className="py-20 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase bg-amber-500/20 text-amber-400 border border-amber-500/40">
            Trusted by Kashmir, Built for Everyone
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Instead of creating another cab service, we're building a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              smarter way to travel
            </span>{" "}
            across Kashmir.
          </h2>

          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
            From airport pickups and city rides to unforgettable journeys through the valley, KASHgo brings technology, trusted drivers and local expertise together in one seamless platform.
          </p>
        </div>
      </section>

      {/* ABOUT KASHGO */}
      <section id="about" className="py-20 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/35">
                About KASHgo
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                More Than a Ride. <br />
                <span className="text-amber-400">A Better Way to Move Across Kashmir.</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                KASHgo is built to simplify travel across Kashmir through transparent, fast, and stress-free digital booking. By connecting you with verified local drivers, we make every journey across the valley safer, smarter, and more reliable.
              </p>
              <div className="p-5 bg-slate-900 border-l-4 border-amber-500 text-white font-bold text-base rounded-r-2xl border border-slate-800 shadow-md">
                "This isn't just about reaching a destination. It's about making every journey safer, smarter and more comfortable."
              </div>
            </div>

            {/* Right Feature Card */}
            <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-slate-800">
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

              <h3 className="text-2xl font-bold text-white mb-6">
                Why Kashmir Chooses KASHgo
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
              <div className="w-full max-w-lg bg-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-800 relative overflow-hidden text-center">
                {/* Real Founder Photo Frame in Circle shape */}
                <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden border-2 border-amber-500 shadow-xl bg-slate-900 p-1">
                  <Image
                    src="/images/founder.png"
                    alt="Shaikh Shaheen Kamalmiya - Founder & CEO KASHgo"
                    fill
                    sizes="(max-width: 768px) 100vw, 256px"
                    priority
                    className="object-cover object-center rounded-full"
                  />
                </div>

                <h3 className="text-2xl font-black text-white mb-1">
                  Shaikh Shaheen Kamalmiya
                </h3>
                <div className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-6">
                  Founder &amp; CEO, KASHgo
                </div>

                <div className="bg-slate-900 rounded-2xl p-4 text-left border border-slate-800 space-y-2">
                  <Quote className="w-6 h-6 text-amber-400" />
                  <p className="text-slate-200 text-xs italic leading-relaxed font-medium">
                    "Our mission isn't simply to build an app. It's to build trust—one journey at a time."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Story Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/35">
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
              <div className="p-4 bg-slate-950 border-2 border-amber-500 rounded-2xl shadow-sm font-extrabold text-white text-lg">
                "Why should finding a trusted ride still feel complicated?"
              </div>
              <p className="text-slate-300 text-base leading-relaxed">
                That question became the foundation of KASHgo. Driven by a passion for technology and customer experience, the vision was to create a ride-booking platform designed specifically for the people of Kashmir—combining local knowledge with modern technology to deliver a smoother travel experience for everyone.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setIsFounderModalOpen(true)}
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-900 font-extrabold text-sm px-6 py-3 rounded-full transition-all shadow-lg shadow-amber-500/25 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES KASHGO DIFFERENT */}
      <section className="py-20 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/35 mb-3 inline-block">
              Regional Excellence
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              What Makes KASHgo Different?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Not every ride-booking platform understands Kashmir. KASHgo is designed from the ground up for the unique travel needs of the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIATORS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/60 transition-all flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 flex items-center justify-center shrink-0 shadow-xs">
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
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/35 mb-3 inline-block">
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
                className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-amber-500 transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl p-3 bg-slate-900 rounded-2xl border border-slate-800">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/35">
                    {cat.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
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

      {/* BEST PLACES TO VISIT */}
      <section className="py-20 bg-[#090D16] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/35 rounded-full text-xs font-black uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" /> Iconic Destinations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Visit the Best Places in Kashmir
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Discover breathtaking valleys, snow-covered mountains, serene lakes, and iconic destinations with KASHgo.
            </p>
          </div>

          <div ref={destinationsRef} className="flex flex-row overflow-x-auto gap-4 pb-4 w-full snap-x snap-mandatory scrollbar-none lg:flex-row lg:overflow-x-visible lg:pb-0 lg:gap-6 items-stretch">
            {BEST_PLACES.map((place, idx) => {
              const isActive = idx === activeDestIndex;
              return (
                <motion.div
                  key={idx}
                  onClick={() => setActiveDestIndex(idx)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: isActive ? 0 : -6 }}
                  className={`${isActive ? "lg:flex-[2]" : "lg:flex-[1]"} min-w-[85vw] sm:min-w-[340px] lg:min-w-0 snap-center min-h-[360px] md:min-h-[440px] group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 flex flex-col justify-end p-6 transition-all duration-500 ease-in-out hover:border-amber-500/40 hover:shadow-[0_15px_30px_rgba(245,158,11,0.15)] cursor-pointer`}
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={place.img}
                      alt={place.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Subtle dark gradient overlay to ensure text is fully readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-20 space-y-2 text-left">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-950/80 text-amber-400 border border-amber-500/40 backdrop-blur-sm">
                      {place.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none pt-1">
                      {place.name.toUpperCase()}
                    </h3>

                    {/* Show description in expanded mode or hover on smaller mode */}
                    <p className={`text-slate-200 text-xs sm:text-sm leading-relaxed transition-all duration-300 ${isActive ? "opacity-100 max-h-24 mt-2" : "opacity-0 max-h-0 overflow-hidden md:group-hover:opacity-100 md:group-hover:max-h-24 md:group-hover:mt-2"}`}>
                      {place.desc}
                    </p>

                    {/* Book Now trigger inside card */}
                    <div className={`transition-all duration-300 ${isActive ? "opacity-100 translate-y-0 h-auto mt-3" : "opacity-0 translate-y-2 h-0 overflow-hidden"}`}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(place.link, '_blank');
                        }}
                        className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-900 font-extrabold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
                      >
                        <span>Book Ride</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Slider Arrow Indicators for Mobile Swipe */}
          <div className="flex lg:hidden items-center justify-center gap-3 mt-6">
            <button
              onClick={() => scrollContainer(destinationsRef, "left")}
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-white flex items-center justify-center active:bg-amber-600 transition-colors shadow-md cursor-pointer hover:border-amber-500/40"
              aria-label="Previous Destination"
            >
              <ChevronLeft className="w-5 h-5 text-slate-300" />
            </button>
            <button
              onClick={() => scrollContainer(destinationsRef, "right")}
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-white flex items-center justify-center active:bg-amber-600 transition-colors shadow-md cursor-pointer hover:border-amber-500/40"
              aria-label="Next Destination"
            >
              <ChevronRight className="w-5 h-5 text-slate-300" />
            </button>
          </div>
        </div>
      </section>

      {/* PREMIUM FLEET SECTION */}
      <section className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/35 rounded-full text-xs font-black uppercase tracking-wider">
              <Car className="w-3.5 h-3.5" /> Premium Mobility
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Premium Fleet ⭐⭐⭐⭐⭐
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Find the Perfect Vehicle for Every Journey. Whether you're traveling solo, with family, or in a group, our carefully maintained fleet offers comfort, safety, and reliability for every trip across Kashmir.
            </p>
          </div>

          <div ref={fleetRef} className="flex overflow-x-auto gap-6 pb-4 w-full snap-x snap-mandatory scrollbar-none lg:grid lg:grid-cols-2 lg:overflow-x-visible lg:pb-0 lg:gap-8">
            {PREMIUM_FLEET.map((vehicle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -8, scale: 1.015 }}
                className="flex flex-col md:flex-row min-w-[85vw] sm:min-w-[400px] lg:min-w-0 snap-center bg-slate-900 rounded-3xl border border-slate-800 hover:border-amber-500/50 hover:shadow-[0_15px_30px_rgba(245,158,11,0.08)] transition-all overflow-hidden group"
              >
                {/* Vehicle Image Container */}
                <div
                  className="relative w-full md:w-[42%] bg-slate-950 overflow-hidden shrink-0"
                  style={{ minHeight: '260px' }}
                >
                  <Image
                    src={vehicle.img}
                    alt={vehicle.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900 via-transparent to-transparent z-10"></div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8 space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-white tracking-tight leading-none group-hover:text-amber-400 transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      {vehicle.subtitle}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed pt-1">
                      {vehicle.desc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {/* Capacity Specs */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{vehicle.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Car className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{vehicle.luggage}</span>
                      </div>
                    </div>

                    {/* Ideal For Tags */}
                    <div className="space-y-1">
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Ideal For
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {vehicle.ideal.slice(0, 3).map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-slate-950 text-slate-300 border border-slate-850"
                          >
                            {tag}
                          </span>
                        ))}
                        {vehicle.ideal.length > 3 && (
                          <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-full bg-slate-950 text-amber-400 border border-slate-850">
                            +{vehicle.ideal.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Book Button */}
                  <div className="pt-4 z-10">
                    <a
                      href={`https://wa.me/917400180114?text=Hi%20KASHgo,%20I'd%2520like%2520to%2520book%2520a%2520ride%2520with%2520the%2520${encodeURIComponent(vehicle.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-900 font-extrabold text-xs py-3 rounded-2xl transition-all shadow-md active:scale-95 cursor-pointer"
                    >
                      <span>Book {vehicle.name.split(' ')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Slider Arrow Indicators for Mobile Swipe */}
          <div className="flex lg:hidden items-center justify-center gap-3 mt-6">
            <button
              onClick={() => scrollContainer(fleetRef, "left")}
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-white flex items-center justify-center active:bg-amber-600 transition-colors shadow-md cursor-pointer hover:border-amber-500/40"
              aria-label="Previous Vehicle"
            >
              <ChevronLeft className="w-5 h-5 text-slate-300" />
            </button>
            <button
              onClick={() => scrollContainer(fleetRef, "right")}
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-white flex items-center justify-center active:bg-amber-600 transition-colors shadow-md cursor-pointer hover:border-amber-500/40"
              aria-label="Next Vehicle"
            >
              <ChevronRight className="w-5 h-5 text-slate-300" />
            </button>
          </div>

          {/* Section CTA Card */}
          <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="space-y-3 max-w-2xl text-center md:text-left">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/35">
                ⭐ Help &amp; Support
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Need Help Choosing the Right Vehicle?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you're planning a romantic getaway, a family vacation, or a group adventure, our team will help you select the perfect vehicle for your trip.
              </p>
            </div>
            <div className="shrink-0 text-center space-y-2">
              <a
                href="https://wa.me/917400180114?text=Hi%20KASHgo,%20I%20need%20help%20choosing%20the%20right%20vehicle%20for%20my%20Kashmir%20trip."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-900 font-extrabold text-sm px-6 py-3 rounded-full transition-all shadow-lg shadow-amber-500/25 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>🚖 Book Your Ride Today</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[10px] text-slate-400 font-medium">Explore Kashmir in Comfort!</p>
            </div>
          </div>
        </div>
      </section>

      {/* APP EXPERIENCE */}
      <section id="how-it-works" className="py-20 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/35">
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
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-sm font-bold text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right iPhone Showcase */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-sm bg-slate-950 rounded-[44px] p-4 border-4 border-slate-800 shadow-2xl">
                <div className="bg-slate-900 rounded-[36px] p-5 border border-slate-800 text-white space-y-4">
                  <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">KASHgo App Live Preview</div>
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                    <div className="text-sm font-bold">Fast Kashmir Ride Booking</div>
                    <div className="text-xs text-slate-400 mt-1">Srinagar Airport ➔ Gulmarg Pass</div>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 font-extrabold text-xs rounded-xl text-center">
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
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/35 mb-4 inline-block">
            Coming Soon
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 max-w-3xl mx-auto">
            The KASHgo App Is On Its Way.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10">
            We're working behind the scenes to deliver a seamless ride-booking experience across Kashmir. Be among the first to experience KASHgo when we launch.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              className="bg-slate-950 hover:bg-slate-800 text-white px-6 py-3.5 rounded-2xl border border-slate-800 hover:border-amber-500/40 flex items-center gap-3 transition-colors cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-white"><path d="M17.52 14.28A1.28 1.28 0 0 0 18.8 13A1.28 1.28 0 0 0 17.52 11.72A1.28 1.28 0 0 0 16.24 13A1.28 1.28 0 0 0 17.52 14.28M6.48 14.28A1.28 1.28 0 0 0 7.76 13A1.28 1.28 0 0 0 6.48 11.72A1.28 1.28 0 0 0 5.2 13A1.28 1.28 0 0 0 6.48 14.28M12.96 4.79L14.9 1.45C14.97 1.34 14.93 1.19 14.81 1.12C14.7 1.05 14.54 1.09 14.47 1.2L12.47 4.67C11 4 9.4 4 7.53 4.67L5.53 1.2C5.46 1.09 5.3 1.05 5.19 1.12C5.07 1.19 5.03 1.34 5.1 1.45L7.04 4.79C3.12 6.94 0.5 11.23 0 16.5H24C23.5 11.23 20.88 6.94 16.96 4.79Z" /></svg>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-slate-400">Google Play</div>
                <div className="text-sm font-bold text-amber-400">Coming Soon</div>
              </div>
            </button>

            <button
              type="button"
              className="bg-slate-950 hover:bg-slate-800 text-white px-6 py-3.5 rounded-2xl border border-slate-800 hover:border-amber-500/40 flex items-center gap-3 transition-colors cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-white"><path d="M18.72 13.56C18.75 16.63 21.2 17.57 21.23 17.58C21.2 17.65 20.83 18.9 19.92 20.24C19.14 21.39 18.32 22.52 17.06 22.55C15.82 22.58 15.42 21.82 14 21.82C12.57 21.82 12.09 22.52 10.93 22.58C9.69 22.64 8.76 21.39 7.94 20.24C6.26 17.81 4.96 13.72 6.67 10.74C7.52 9.27 8.94 8.35 10.45 8.32C11.66 8.29 12.78 9.12 13.53 9.12C14.27 9.12 15.63 8.11 17.11 8.24C17.72 8.27 19.46 8.5 20.61 10.18C20.52 10.23 18.7 11.3 18.72 13.56M14.77 5.56C15.42 4.77 15.87 3.69 15.75 2.5C14.72 2.55 13.52 3.19 12.85 3.97C12.26 4.66 11.72 5.75 11.87 6.9C13 6.99 14.12 6.35 14.77 5.56Z" /></svg>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-slate-400">App Store</div>
                <div className="text-sm font-bold text-amber-400">Coming Soon</div>
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
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/35">
                Become a Driver
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Drive with KASHgo
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
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/35 mb-3 inline-block">
              Why People Will Love KASHgo
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Built Around Real Travel Needs
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {TRAVEL_NEEDS_PILLS.map((pill, idx) => (
              <div
                key={idx}
                className="px-5 py-3 rounded-full bg-slate-900 border border-slate-800 text-white font-bold text-sm flex items-center gap-2 shadow-xs hover:border-amber-500 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 flex items-center justify-center">
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
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Kashmir Is Waiting.
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Soon, getting around will be easier than ever. Download the KASHgo app when it launches and experience travel designed for Kashmir.
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

      {/* FOUNDER POPUP MODAL */}
      <AnimatePresence>
        {isFounderModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setIsFounderModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsFounderModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-850 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
                {/* Founder Circular Image */}
                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-amber-500 shadow-xl bg-slate-950 shrink-0">
                  <Image
                    src="/images/founder.png"
                    alt="Shaikh Shaheen Kamalmiya"
                    fill
                    sizes="176px"
                    priority
                    className="object-cover object-center"
                  />
                </div>

                {/* Basic Info */}
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/35 rounded-full text-[10px] font-extrabold uppercase tracking-widest">
                    <Award className="w-3 h-3" /> Founder Profile
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-none">
                    Shaikh Shaheen Kamalmiya
                  </h3>
                  <p className="text-amber-400 font-extrabold text-sm sm:text-base">
                    Founder & Director – KASHgo
                  </p>
                  <p className="text-xs text-slate-400 font-semibold tracking-wider uppercase">
                    Mumbai, India
                  </p>
                </div>
              </div>

              <hr className="border-slate-800" />

              {/* Bio Details */}
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed text-left">
                <p>
                  Shaikh Shaheen Kamalmiya is the <strong className="text-white font-semibold">Founder and Director of KASHgo</strong>, a technology-driven mobility platform dedicated to delivering safe, reliable, and customer-centric transportation services across Jammu & Kashmir.
                </p>
                <p>
                  Based in Mumbai, she is an accomplished technology and business leader with over <strong className="text-white font-semibold">20 years of professional experience</strong> in Information Technology, Digital Transformation, Enterprise Project Management, and Business Strategy. Throughout her career, she has successfully led complex technology initiatives, managed large-scale transformation programs, and driven operational excellence across diverse industries.
                </p>
                <p>
                  She holds a Postgraduate degree and an MBA from Mumbai, along with the globally recognized <strong className="text-white font-semibold">Project Management Professional (PMP®)</strong> certification. Her expertise includes strategic planning, project governance, process optimization, stakeholder management, technology implementation, and organizational leadership.
                </p>
                <p>
                  As the visionary behind KASHgo, Shaheen is committed to building a modern, technology-enabled mobility ecosystem that prioritizes safety, innovation, reliability, and customer satisfaction. Her mission is to create a trusted transportation platform that enhances connectivity, generates employment opportunities, and contributes to the sustainable growth of Jammu & Kashmir.
                </p>
              </div>

              {/* Professional Highlights list */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-3 text-left">
                <h4 className="text-xs font-black uppercase tracking-wider text-amber-400">
                  Professional Highlights
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
                  {[
                    "Founder & Director – KASHgo",
                    "Based in Mumbai, India",
                    "20+ years of IT & Digital leadership",
                    "Postgraduate and MBA from Mumbai",
                    "Project Management Professional (PMP®)",
                    "Digital Transformation & EPM Expert",
                    "Operations & Technology Innovation",
                    "Focused on Sustainable Business Growth",
                  ].map((highlight, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
