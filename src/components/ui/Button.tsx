"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "dark" | "ghost" | "yellow";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "left",
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none btn-shimmer";

  const variants = {
    primary:
      "bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-900 font-extrabold shadow-lg shadow-amber-500/25 border border-amber-400/40",
    yellow:
      "bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-900 font-extrabold shadow-lg shadow-amber-500/25 border border-amber-400/40",
    secondary:
      "bg-amber-50 hover:bg-amber-100 text-amber-900 font-semibold border border-amber-200",
    outline:
      "bg-slate-900/60 backdrop-blur-md border border-amber-400/50 hover:border-amber-400 text-amber-300 hover:text-amber-200",
    dark: "bg-slate-900 hover:bg-slate-800 text-white shadow-md shadow-slate-900/10 border border-slate-800",
    ghost:
      "bg-transparent hover:bg-amber-500/10 text-slate-200 hover:text-amber-400",
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-4 gap-2.5",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={twMerge(
        clsx(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )
      )}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="inline-block shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="inline-block shrink-0">{icon}</span>
      )}
    </motion.button>
  );
};
