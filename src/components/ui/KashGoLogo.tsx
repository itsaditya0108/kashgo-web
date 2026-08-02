"use client";

import React from "react";

interface KashGoLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}

export const KashGoLogo: React.FC<KashGoLogoProps> = ({
  variant = "light",
  size = "md",
  showTagline = true,
  className = "",
}) => {
  const isLight = variant === "light";

  const sizeClasses = {
    sm: { scale: 0.8, text: "text-lg", tag: "text-[8px]" },
    md: { scale: 1, text: "text-2xl", tag: "text-[9px]" },
    lg: { scale: 1.25, text: "text-3xl", tag: "text-[10px]" },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Official Emblem Icon SVG */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          width="42"
          height="42"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-md"
        >
          {/* Green Outer Circle Ring */}
          <circle
            cx="50"
            cy="46"
            r="40"
            stroke="#16A34A"
            strokeWidth="7"
            fill="none"
          />

          {/* Mountain Peaks (White/Slate) */}
          <path
            d="M25 54 L38 32 L48 44 L60 22 L75 54 Z"
            fill={isLight ? "#FFFFFF" : "#1E293B"}
          />
          <path
            d="M38 32 L42 38 L48 35 L60 22 L65 35 Z"
            fill="#16A34A"
            opacity="0.9"
          />

          {/* Green Car Front View */}
          <rect x="36" y="48" width="28" height="12" rx="4" fill="#16A34A" />
          <path d="M40 48 L44 42 L56 42 L60 48 Z" fill={isLight ? "#0F172A" : "#FFFFFF"} />
          {/* Headlights */}
          <circle cx="40" cy="54" r="2" fill="#FFFFFF" />
          <circle cx="60" cy="54" r="2" fill="#FFFFFF" />
          {/* Grille */}
          <rect x="46" y="53" width="8" height="3" fill={isLight ? "#0F172A" : "#FFFFFF"} />

          {/* Curving Road with Speed Line */}
          <path
            d="M15 76 Q35 70 50 62 Q65 54 85 76"
            stroke={isLight ? "#FFFFFF" : "#0F172A"}
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M18 78 Q35 72 50 64"
            stroke="#16A34A"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center leading-none tracking-tight font-black">
          <span className={`tracking-tight ${isLight ? "text-white" : "text-slate-900"} ${currentSize.text}`}>
            Kash
          </span>
          <span className={`text-green-400 font-extrabold ${currentSize.text}`}>
            Go
          </span>
          {/* Speed dashes icon next to 'go' */}
          <span className="ml-1 flex flex-col justify-center gap-0.5">
            <span className="w-2 h-0.5 bg-green-400 rounded-full"></span>
            <span className="w-1.5 h-0.5 bg-green-400 rounded-full"></span>
          </span>
        </div>

        {showTagline && (
          <span
            className={`font-bold tracking-wider uppercase mt-0.5 ${
              isLight ? "text-slate-300" : "text-slate-600"
            } ${currentSize.tag}`}
          >
            — RIDE KASHMIR. GO ANYWHERE. —
          </span>
        )}
      </div>
    </div>
  );
};
