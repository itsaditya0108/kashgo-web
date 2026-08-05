"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Target,
  Eye,
  Users,
  Award,
  Quote,
  ArrowRight,
  X,
  Compass,
  Zap,
  TrendingUp,
  Map,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutPage() {
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#090D16] text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-950 text-white relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/35 mb-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                About KASHgo Mobility
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]"
              >
                Empowering Journeys. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                  Digitalizing Kashmir.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl"
              >
                KASHgo is building a state-of-the-art ride-booking platform tailored exclusively for Jammu, Kashmir, and Ladakh. We connect riders with verified native captains, transforming travel with transparent rates, absolute safety, and digital efficiency.
              </motion.p>
            </div>

            {/* Right Column: Beautiful Real Location Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="lg:col-span-5 flex justify-center w-full"
            >
              <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
                  alt="Scenic snow-capped mountains of Srinagar, Kashmir valley"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 z-20 space-y-1 text-left">
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-slate-950/80 px-2 py-0.5 rounded border border-amber-500/30 backdrop-blur-xs">
                    Kashmir Valley
                  </span>
                  <p className="text-white text-xs font-semibold">The pristine region we serve</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE CHALLENGE & THE VISION */}
      <section className="py-20 bg-[#090D16] border-t border-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* The Challenge Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900/60 rounded-3xl p-8 sm:p-10 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div className="space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> The Challenge
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Navigating the Valley's Traditional Barriers
                </h2>
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    Jammu and Kashmir possesses some of the most breathtaking but challenging terrains in the world. Historically, both residents and tourists have faced unique logistics barriers.
                  </p>
                  <p>
                    Securing safe rides has long been complicated by endless fare negotiations, lack of digital tracking, unpredictable vehicle options, and inconsistent availability—especially during adverse weather or on remote border routes.
                  </p>
                </div>
              </div>
              <div className="mt-8 p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-xs text-slate-400">
                💡 Traditional haggling and booking opacity have created travel friction for visitors and underpaid driver partners.
              </div>
            </motion.div>

            {/* The Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/20 rounded-3xl p-8 sm:p-10 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-lg shadow-amber-950/10"
            >
              <div className="space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-amber-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> The App Vision
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Building a Seamless Digital Bridge
                </h2>
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    Our vision is to replace uncertainty with a reliable, instant digital hailing ecosystem. With the KASHgo app, booking a safe, comfortable, and flat-rate ride is as easy as tapping your phone.
                  </p>
                  <p>
                    By introducing upfront pricing, verified captain profiles, in-app safety features, and a premium modern fleet, we are setting a new standard for transport convenience across cities, meadows, and passes.
                  </p>
                </div>
              </div>
              <div className="mt-8 p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20 text-xs text-amber-400 font-medium">
                🚀 We aim to digitalize local transport, making Jammu, Kashmir, and Ladakh globally accessible, modern, and safe.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STRATEGIC APP PILLARS */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/35 inline-block">
              Pillars of Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How KASHgo Drives the Region Forward
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              KASHgo is more than an app—it is an engine for regional development, community growth, and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-slate-900/90 rounded-3xl p-8 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                  <Map className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Smart Mountain Logistics</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Tailored routing and dispatch technology built specifically for mountain routes, high-altitude passes, and dynamic weather conditions. We keep drivers and passengers informed and safe on challenging terrains.
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-amber-400">Reliability & Safety</span>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-900/90 rounded-3xl p-8 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Captain Empowerment</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  We upskill local driver-partners, providing them with professional training, digital literacy, and a steady stream of bookings. By eliminating intermediaries, we guarantee fair earnings and respect for our captains.
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-amber-400">Community Growth</span>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-900/90 rounded-3xl p-8 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Economic Integration</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Seamlessly connecting remote valleys, iconic shrines (Vaishno Devi, Amarnath), and sensitive borders (LoC, LAC) to the central network, fostering tourism development and boosting local hospitality businesses.
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-amber-400">Regional Prosperity</span>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION BENTO */}
      <section className="py-20 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Mission Card */}
            <div className="p-8 sm:p-10 bg-slate-900 rounded-3xl border border-slate-800 hover:border-slate-750 transition-all flex gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">Our Mission</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  To provide safe, reliable, and technology-driven transportation across Jammu, Kashmir &amp; Ladakh. We are committed to establishing fare transparency, passenger safety, and support for the local ecosystem.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-8 sm:p-10 bg-slate-900 rounded-3xl border border-slate-800 hover:border-slate-750 transition-all flex gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                <Eye className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">Our Vision</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  To become the region's premier digital mobility partner, recognized for outstanding hospitality, technology innovation, and positive community impact, serving tourists and locals with equal dedication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-slate-900/60 border-t border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/35 inline-block">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Values That Drive KASHgo
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              We operate under core principles that prioritize the security, respect, and elevation of our passengers and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Safety & Trust",
                desc: "Every driver-partner undergoes strict background checks, and all rides feature real-time GPS tracking and dedicated support monitoring to keep you secure.",
              },
              {
                icon: Users,
                title: "Community First",
                desc: "We prioritize local captains and regional development, returning a larger share of fares to the drivers to build sustainable livelihoods across the valleys.",
              },
              {
                icon: Award,
                title: "Excellence in Service",
                desc: "From ensuring clean, well-maintained vehicles to prompt timelines and responsive support, we work tirelessly to deliver a premium ride experience.",
              },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-950 rounded-3xl p-8 border border-slate-800 text-center hover:border-amber-500/50 transition-colors group"
              >
                <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/35 flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 transition-colors">
                  <Icon className="w-8 h-8 text-amber-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER'S CORNER - Sleek, integrated visual section */}
      <section className="py-20 bg-[#090D16] border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
          <div className="bg-slate-900/80 rounded-3xl border border-slate-850 p-8 sm:p-10 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Circular Founder Photo Frame */}
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-amber-500 shadow-xl bg-slate-950 p-0.5 shrink-0">
              <Image
                src="/images/founder.png"
                alt="Shaikh Shaheen Kamalmiya - Founder & CEO KASHgo"
                fill
                sizes="144px"
                className="object-cover object-center rounded-full"
              />
            </div>

            {/* Founder content snippet */}
            <div className="space-y-4 text-center md:text-left flex-1">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-500/20 px-2.5 py-0.5 rounded-full border border-amber-500/35">
                  Leadership Vision
                </span>
                <h3 className="text-2xl font-black text-white pt-1">
                  Shaikh Shaheen Kamalmiya
                </h3>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Founder &amp; Director, KASHgo
                </p>
              </div>

              <div className="relative">
                <Quote className="w-5 h-5 text-amber-500/30 absolute -top-3.5 -left-3" />
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pl-3 italic">
                  "Our mission isn't simply to build a ride-booking application. It's to build a foundation of safety, equity, and trust—modernizing transport while honoring the warmth and hospitality of Jammu, Kashmir &amp; Ladakh."
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsFounderModalOpen(true)}
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-900 font-extrabold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
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
