"use client";

import React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

interface SectionTitleProps {
  badge?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  dark?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  highlightText,
  subtitle,
  align = "center",
  dark = false,
  className,
}) => {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={clsx(
        "flex flex-col max-w-3xl mb-12 md:mb-16",
        alignment[align],
        className
      )}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-green-50 text-green-700 border border-green-200/80 mb-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={clsx(
          "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight",
          dark ? "text-white" : "text-slate-900"
        )}
      >
        {title}{" "}
        {highlightText && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
            {highlightText}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={clsx(
            "mt-4 text-base sm:text-lg leading-relaxed",
            dark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
