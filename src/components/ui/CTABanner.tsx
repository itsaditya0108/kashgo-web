"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight, ShieldCheck, Smartphone, Car } from "lucide-react";
import Link from "next/link";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export const CTABanner: React.FC<CTABannerProps> = ({
  title = "Ready for a Safer, Smoother Ride Across Kashmir & Ladakh?",
  subtitle = "Download the KASHgo app or register as a driver captain today. Transparent pricing, verified local captains, and 24/7 mountain support.",
  primaryCtaText = "Book a Ride Now",
  primaryCtaLink = "/contact",
  secondaryCtaText = "Become a Driver",
  secondaryCtaLink = "/driver",
}) => {
  return (
    <div className="relative my-16 sm:my-24 overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl p-8 sm:p-12 md:p-16 border border-slate-800">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-amber-600/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/35 mb-6"
        >
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Kashmir & Ladakh Premier Mobility Platform</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-10"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md"
        >
          <Link href={primaryCtaLink} className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              icon={<ArrowRight className="w-5 h-5" />}
            >
              {primaryCtaText}
            </Button>
          </Link>
          <Link href={secondaryCtaLink} className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              fullWidth
              className="border-slate-700 text-white hover:border-amber-500 hover:text-amber-400"
              icon={<Car className="w-5 h-5" />}
            >
              {secondaryCtaText}
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
