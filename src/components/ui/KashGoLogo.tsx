"use client";

import React from "react";

interface KASHgoLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}

export const KASHgoLogo: React.FC<KASHgoLogoProps> = ({
  size = "md",
  showTagline = true,
  className = "",
}) => {
  const sizeMap = {
    sm: { img: 36, text: "text-lg", tag: "text-[8px]" },
    md: { img: 44, text: "text-2xl", tag: "text-[9px]" },
    lg: { img: 56, text: "text-3xl", tag: "text-[10px]" },
  };

  const s = sizeMap[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Actual KASHgo Logo PNG */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/kashgo-logo.png"
        alt="KASHgo Logo"
        width={s.img}
        height={s.img}
        className="object-contain drop-shadow-md shrink-0"
        style={{ width: s.img, height: s.img }}
      />

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center leading-none tracking-tight font-black">
          <span className={`tracking-tight text-white ${s.text}`}>
            KASH
          </span>
          <span className={`text-yellow-400 font-extrabold ${s.text}`}>
            go
          </span>
          {/* Speed dashes */}
          <span className="ml-1 flex flex-col justify-center gap-0.5">
            <span className="w-2 h-0.5 bg-yellow-400 rounded-full"></span>
            <span className="w-1.5 h-0.5 bg-yellow-400 rounded-full"></span>
          </span>
        </div>

        {showTagline && (
          <span className={`font-bold tracking-wider uppercase mt-0.5 text-slate-300 ${s.tag}`}>
            — RIDE KASHMIR. GO ANYWHERE. —
          </span>
        )}
      </div>
    </div>
  );
};
