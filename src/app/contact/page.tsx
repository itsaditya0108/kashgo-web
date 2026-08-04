"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle2,
  Send,
  ChevronDown,
  Globe,
  Headphones,
} from "lucide-react";

const FAQS = [
  {
    q: "How do I book a ride with KASHgo in Srinagar or Leh?",
    a: "You can book directly via our website hero booking widget or through the KASHgo mobile app. Simply select your pickup location, drop destination, ride class, and click confirm.",
  },
  {
    q: "Are KASHgo prices fixed or do they surge during tourist season?",
    a: "KASHgo operates on a transparent, upfront fare model. What you see on the screen before booking is what you pay—no hidden surge multipliers or unannounced charges.",
  },
  {
    q: "Do you offer airport pickups for Srinagar (SXR) and Leh (IXL)?",
    a: "Yes! We specialize in priority airport transfers. Our captains monitor your flight status automatically and wait at the arrival terminal with a nameboard.",
  },
  {
    q: "Can I book a 4x4 cab for Gulmarg or Zoji La Pass during snowfall?",
    a: "Absolutely. Our KASHgo Mountain 4x4 fleet is equipped with snow chains, heating systems, and experienced winter pass captains.",
  },
  {
    q: "What payment methods are supported?",
    a: "We support cash to driver, UPI (GPay, PhonePe, Paytm), and major Credit/Debit Cards via in-app or digital invoice payments.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col font-sans">
      <Navbar />

      {/* HEADER BANNER */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/35 mb-4"
          >
            <Headphones className="w-4 h-4 text-amber-400" />
            <span>KASHgo Support & Offices</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto"
          >
            We're Here to Help You{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Move Smoothly.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Have a question about ride bookings, driver onboarding, or corporate travel? Reach out to our team in Srinagar & Leh.
          </motion.p>
        </div>
      </section>

      {/* CONTACT INFO & FORM SECTION */}
      <section className="py-20 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/35">
                Direct Contact
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                Reach Out to Our Regional Support Desk
              </h2>

              <div className="space-y-4 pt-2">
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Helpline & Support</h3>
                    <p className="text-slate-300 font-semibold text-base mt-1">+91 7400180114 (Support)</p>
                    <p className="text-slate-300 font-semibold text-base mt-1">+91 9169160316 (Landline)</p>
                    <p className="text-xs text-slate-400">Available for active trip assistance and inquiries</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Our Offices</h3>
                    <p className="text-slate-300 font-medium text-xs mt-1.5"><strong className="text-amber-400">Srinagar:</strong> Rajbagh, Near Lal Mandi Road, Srinagar 190008</p>
                    <p className="text-slate-300 font-medium text-xs mt-1.5"><strong className="text-amber-400">Leh:</strong> Fort Road, Leh, Ladakh 194101</p>
                    <p className="text-slate-300 font-medium text-xs mt-1.5"><strong className="text-amber-400">Corporate:</strong> 401 Vishakha Arcade, Opp. Courtyard Restaurant, Andheri West, Near MVM College, Mumbai 400058</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Email Address</h3>
                    <p className="text-slate-300 font-semibold text-base mt-1">kashgo2026@gmail.com</p>
                    <p className="text-xs text-slate-400">Average response within 2 hours</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Headquarters</h3>
                    <p className="text-slate-300 font-medium text-sm mt-1">Srinagar: Rajbagh, Near Lal Mandi Road, Srinagar 190008</p>
                    <p className="text-slate-300 font-medium text-sm mt-1">Leh: Fort Road, Leh, Ladakh 194101</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm relative">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send Us a Message
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Fill out the form below and our regional support team will get back to you promptly.
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center flex flex-col items-center bg-slate-950 rounded-2xl border border-slate-800 p-6"
                  >
                    <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-slate-400 text-sm max-w-md mb-6">
                      Thank you <span className="font-semibold text-white">{formData.name}</span>. We have received your message regarding "{formData.subject}" and sent a confirmation to <span className="font-semibold text-white">{formData.email}</span>.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      size="sm"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-600 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rahul@example.com"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-600 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-600 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          Inquiry Subject
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-600 transition-all"
                        >
                          <option value="Ride Booking Inquiry">Ride Booking Inquiry</option>
                          <option value="Airport Pickup Special">Airport Pickup Special</option>
                          <option value="Driver Onboarding">Driver Onboarding</option>
                          <option value="Corporate / Tour Package">Corporate / Tour Package</option>
                          <option value="Feedback / Complaints">Feedback / Complaints</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                        Message Details *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe how we can help you..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-amber-600 transition-all"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        fullWidth
                        size="lg"
                        icon={<Send className="w-4 h-4" />}
                      >
                        Submit Inquiry
                      </Button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS PLACEHOLDER */}
      <section className="py-16 bg-[#090D16] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Location Map"
            title="Our Hub Locations in"
            highlightText="JK & Ladakh"
            dark={true}
          />

          <div className="w-full h-80 rounded-3xl bg-slate-900 border border-slate-800 relative overflow-hidden flex items-center justify-center text-white shadow-xl">
            {/* Styled Map Graphic Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>

            <div className="relative z-10 text-center max-w-md p-6 bg-slate-950/80 backdrop-blur-md rounded-2xl border border-slate-800">
              <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center mx-auto mb-3 text-white">
                <MapPin className="w-6 h-6 animate-bounce" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Interactive Location Hubs</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Srinagar HQ: Rajbagh Lal Mandi • Leh Office: Fort Road
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/35">
                <Globe className="w-3.5 h-3.5" /> Coordinates Verified (kashgo.in)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="py-20 bg-[#090D16]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Help & FAQs"
            title="Frequently Asked"
            highlightText="Questions"
            dark={true}
          />

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between font-bold text-white text-base focus:outline-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-amber-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-800 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
