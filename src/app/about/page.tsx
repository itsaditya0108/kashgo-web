"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Target, Eye, Users, Award, Quote, CheckCircle2, ArrowRight, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutPage() {
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 bg-slate-900/80 border-b border-slate-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            About KASHgo Mobility
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6"
          >
            Connecting Kashmir Through <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Trusted Mobility
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            KASHgo was founded with a single mission: to simplify travel across Jammu, Kashmir &amp; Ladakh by bringing technology, verified local drivers, and riders together in one platform.
          </motion.p>
        </div>
      </section>

      {/* MEET THE FOUNDER */}
      <section className="py-20 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-lg bg-slate-900 text-white rounded-3xl p-10 shadow-2xl border border-slate-800 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
                {/* Real Founder Photo Frame in Circle shape */}
                <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden border-2 border-amber-500 shadow-xl bg-slate-950 p-1">
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

                <div className="bg-slate-950 rounded-2xl p-4 text-left border border-slate-800 space-y-2">
                  <Quote className="w-6 h-6 text-amber-400" />
                  <p className="text-slate-200 text-xs italic leading-relaxed font-medium">
                    "Our mission isn't simply to build an app. It's to build trust—one journey at a time."
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Company Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Designed For Locals &amp; Visitors Alike
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Navigating Kashmir should be seamless. KASHgo combines native valley routes expertise with modern technology to deliver transparent pricing, punctual pickups, and background-verified drivers.
              </p>

              <div className="pt-1">
                <button
                  onClick={() => setIsFounderModalOpen(true)}
                  className="group inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-sm px-6 py-3 rounded-full transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-colors">
                  <Target className="w-6 h-6 text-amber-400 mb-2" />
                  <div className="text-base font-bold text-white mb-1">Our Mission</div>
                  <div className="text-xs text-slate-300">To provide safe, reliable, and technology-driven transportation across Kashmir.</div>
                </div>

                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-colors">
                  <Eye className="w-6 h-6 text-amber-400 mb-2" />
                  <div className="text-base font-bold text-white mb-1">Our Vision</div>
                  <div className="text-xs text-slate-300">To become Kashmir's most trusted mobility network for locals and tourists alike.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-3 inline-block">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              The Core Values that Drive KASHgo
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              We are building a platform rooted in integrity, transparency, and a deep commitment to the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Safety & Trust", desc: "We stringently verify every driver partner and monitor rides to ensure that passengers always feel secure." },
              { icon: Users, title: "Community First", desc: "Built by locals for locals (and our guests). We prioritize empowering local driver partners to grow with us." },
              { icon: Award, title: "Excellence in Service", desc: "From maintaining clean vehicles to ensuring punctual pickups, we never compromise on quality." },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-950 rounded-3xl p-8 border border-slate-800 text-center hover:border-amber-500/50 transition-colors group"
              >
                <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 transition-colors">
                  <Icon className="w-8 h-8 text-amber-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
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
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full text-[10px] font-extrabold uppercase tracking-widest">
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
