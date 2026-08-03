"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Smartphone, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";
import { KASHgoLogo } from "../ui/KASHgoLogo";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Become a Driver", href: "/driver" },
  { name: "Contact Us", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/92 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.4)] border-b border-amber-500/10 py-3"
          : "bg-gradient-to-b from-slate-950/90 to-transparent backdrop-blur-xs py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official KASHgo Brand Logo */}
          <Link href="/" className="group">
            <KASHgoLogo variant="light" size="md" showTagline={true} />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 relative ${
                    isActive
                      ? "text-amber-400 font-bold"
                      : "text-slate-300 hover:text-white hover:bg-amber-500/10"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-slate-800/90 rounded-full border border-amber-500/40"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link href="#app-download">
              <Button
                variant="primary"
                size="sm"
                icon={<Smartphone className="w-4 h-4" />}
              >
                Download App <span className="text-[10px] opacity-80 ml-1 font-bold">(Coming Soon)</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-xl text-slate-200 hover:text-amber-400 hover:bg-slate-900 focus:outline-none transition-colors border border-slate-800"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950 border-b border-slate-800 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2 max-w-7xl mx-auto">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-amber-500/20 text-amber-400 font-bold border border-amber-500/35"
                        : "text-slate-300 hover:bg-slate-900"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-2">
                <Link href="#app-download" className="w-full">
                  <Button variant="primary" fullWidth size="md">
                    Download App (Coming Soon)
                  </Button>
                </Link>
                <Link href="/contact" className="w-full">
                  <Button variant="outline" fullWidth size="md">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
