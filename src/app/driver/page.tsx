"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Clock,
  Smartphone,
  FileCheck,
  Award,
  ArrowRight,
  UserCheck,
} from "lucide-react";

const BENEFITS = [
  {
    icon: Clock,
    title: "Flexible Hours",
    desc: "Drive when you want. You are your own boss.",
  },
  {
    icon: DollarSign,
    title: "Transparent Earnings",
    desc: "Clear weekly payouts with zero hidden fees.",
  },
  {
    icon: UserCheck,
    title: "Verified Passengers",
    desc: "Safe rides with local and tourist riders.",
  },
  {
    icon: ShieldCheck,
    title: "Driver Support",
    desc: "Dedicated 24/7 support for all driver partners.",
  },
  {
    icon: Award,
    title: "Performance Rewards",
    desc: "Earn bonuses for high ratings and consistent service.",
  },
  {
    icon: Smartphone,
    title: "Easy App Management",
    desc: "Manage bookings, earnings and profile in one app.",
  },
];

export default function DriverPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "Srinagar",
    vehicleType: "Sedan",
    licenseNumber: "",
    experienceYears: "3-5 years",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col font-sans">
      <Navbar />

      {/* HEADER BANNER */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4"
          >
            <Car className="w-4 h-4 text-amber-400" />
            <span>Drive with KASHgo</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Become a Valued Partner in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Kashmir's Mobility Network.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Enjoy flexible working hours, transparent earnings and the opportunity to connect with thousands of riders across the region.
          </motion.p>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="py-16 bg-[#090D16] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-3 inline-block">
              Driver Partner Benefits
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Why Drive with KASHgo?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map(({ icon: Icon, title, desc }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-5 bg-slate-900 rounded-2xl border border-slate-800 flex items-start gap-4 hover:border-amber-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-0.5">{title}</div>
                  <div className="text-xs text-slate-400">{desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS & REGISTRATION FORM */}
      <section className="py-20 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Requirements */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Requirements
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                What You Need to Join
              </h2>

              <div className="space-y-3">
                {[
                  "Valid driving licence (LMV or HMV)",
                  "Vehicle registration certificate (RC)",
                  "Vehicle insurance documents",
                  "Aadhar / Voter ID for identity verification",
                  "Smartphone with Android 8+ or iOS 13+",
                  "Minimum 1 year of driving experience",
                ].map((req, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Registration Form */}
            <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                Apply as Driver
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Fill in your details below and our team will get in touch with you.
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center flex flex-col items-center bg-slate-950 rounded-2xl border border-slate-800 p-6"
                  >
                    <div className="w-16 h-16 bg-amber-500/10 text-amber-400 rounded-full flex items-center justify-center mb-4 border border-amber-500/20">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Application Received!
                    </h4>
                    <p className="text-slate-300 text-sm max-w-md mb-6">
                      Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. Our driver onboarding team will contact you at <span className="font-semibold text-white">{formData.phone}</span>.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      size="sm"
                    >
                      Submit Another Application
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Tariq Ahmad"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-600 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-600 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          City / Operating Area *
                        </label>
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-600 transition-all"
                        >
                          <option value="Srinagar">Srinagar</option>
                          <option value="Leh">Leh, Ladakh</option>
                          <option value="Baramulla">Baramulla / Gulmarg</option>
                          <option value="Anantnag">Anantnag / Pahalgam</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          Vehicle Type *
                        </label>
                        <select
                          value={formData.vehicleType}
                          onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-600 transition-all"
                        >
                          <option value="Sedan">Sedan (Dzire, Etios)</option>
                          <option value="Hatchback">Hatchback (Swift, WagonR)</option>
                          <option value="SUV">SUV 4x4 (Innova, Scorpio)</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        fullWidth
                        size="lg"
                        icon={<ArrowRight className="w-5 h-5" />}
                      >
                        Apply as Driver Partner
                      </Button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
