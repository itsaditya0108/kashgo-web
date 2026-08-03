"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "./Button";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  tagline: string;
  category: string;
  priceStarting: string;
  features: string[];
  vehicleTypes: string;
  badge?: string;
  imageSrc?: string;
  delay?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  tagline,
  category,
  priceStarting,
  features,
  vehicleTypes,
  badge,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-amber-400 transition-all duration-300 relative overflow-hidden"
    >
      {badge && (
        <div className="absolute top-0 right-0 bg-amber-600 text-white text-[11px] font-extrabold uppercase px-4 py-1 rounded-bl-xl tracking-wider">
          {badge}
        </div>
      )}

      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2 block">
          {category}
        </span>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm mb-6">{tagline}</p>

        <div className="bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-100">
          <div className="text-xs text-slate-500 font-medium">Starts from</div>
          <div className="text-2xl font-extrabold text-slate-900">
            {priceStarting}{" "}
            <span className="text-xs font-normal text-slate-500">/ ride</span>
          </div>
          <div className="mt-2 text-xs font-semibold text-amber-700 bg-amber-100/60 inline-block px-2.5 py-1 rounded-lg">
            Fleet: {vehicleTypes}
          </div>
        </div>

        <div className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 text-sm text-slate-700">
              <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <Link href="/contact" className="w-full">
        <Button variant="primary" fullWidth icon={<ArrowRight className="w-4 h-4" />}>
          Book {title}
        </Button>
      </Link>
    </motion.div>
  );
};
