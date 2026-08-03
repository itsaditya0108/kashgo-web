"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, CheckCircle2, Shield, Heart } from "lucide-react";
import { FaInstagram, FaXTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { KASHgoLogo } from "../ui/KASHgoLogo";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Background Green Accent Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <KASHgoLogo variant="light" size="md" showTagline={true} />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              KASHgo is building a modern ride-booking platform designed exclusively for Kashmir. Connecting passengers with verified local drivers through seamless mobile technology.
            </p>
            <div className="text-sm font-bold text-amber-400 italic">
              "Ride Smart. Ride Local. Ride KASHgo."
            </div>
            <div className="flex items-center gap-2 text-xs text-amber-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 w-fit">
              <Shield className="w-4 h-4 text-amber-400" /> Built Exclusively for Kashmir
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/kashgo.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KASHgo on Instagram"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/kashgo_in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KASHgo on X (Twitter)"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/kashgo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KASHgo on LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917400180114"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KASHgo on WhatsApp"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-amber-400 transition-colors">About KASHgo</Link></li>
              <li><Link href="/services" className="hover:text-amber-400 transition-colors">Ride Categories</Link></li>
              <li><Link href="/driver" className="hover:text-amber-400 transition-colors">Become a Driver</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Ride Categories */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-4">
              Ride Categories
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>🚖 City Rides</li>
              <li>✈️ Airport Transfers</li>
              <li>🏔️ Tourist Rides</li>
              <li>👨‍👩‍👧 Family Travel</li>
              <li>🏢 Business Travel</li>
              <li>🚐 Group Travel</li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-4">
              Launch Updates
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Be among the first to experience KASHgo when we launch.
            </p>
            {subscribed ? (
              <div className="bg-green-950/60 border border-amber-500/40 text-amber-300 text-xs p-3 rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                Subscribed for early access!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs rounded-xl px-3.5 py-2.5 pr-10 focus:outline-none focus:border-amber-500"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe for app launch"
                    className="absolute right-1.5 top-1.5 bottom-1.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-900 font-bold px-2.5 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="mt-6 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>+91 7400180114 (Support)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>kashgo2026@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Srinagar &amp; Leh, Kashmir</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links Row */}
        <div className="pt-6 pb-2 flex flex-wrap gap-4 text-xs text-slate-500">
          <Link href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-amber-400 transition-colors">Cookie Policy</Link>
          <Link href="#" className="hover:text-amber-400 transition-colors">Refund Policy</Link>
        </div>

        {/* Bottom row: copyright left, credit right */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} KASHgo Mobility Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>by</span>
            <a
              href="https://www.backtocode.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 font-semibold hover:underline"
            >
              BackToCode
            </a>
            <span>for Kashmir</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
