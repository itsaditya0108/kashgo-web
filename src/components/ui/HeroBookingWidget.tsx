"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Car, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";
import { motion, AnimatePresence } from "framer-motion";

const LOCATIONS = [
  "Srinagar Airport (SXR)",
  "Lal Chowk, Srinagar",
  "Rajbagh, Srinagar",
  "Gulmarg Ski Resort",
  "Pahalgam Valley",
  "Sonamarg Meadow",
  "Mata Vaishno Devi (Katra)",
  "Amarnath Yatra Base Camp",
  "Shiv Khori Cave Temple",
  "Gurez Valley (Dawar)",
  "Doodhpathri Meadow",
  "Line of Control (LoC) Viewpoint",
  "Line of Actual Control (LAC) Ladakh",
  "Leh Ladakh (City Center)",
  "Demchok Village (Indo-China Border)",
  "Turtuk & Thang Village (Indo-Pak Border)",
  "Sadhna Cafe (Kupwara)",
];

const RIDE_TYPES = [
  { id: "mini", name: "KASHgo Mini", baseFare: 150, estMin: "3 mins away", icon: "🚗" },
  { id: "sedan", name: "KASHgo Prime Sedan", baseFare: 300, estMin: "5 mins away", icon: "🚘" },
  { id: "suv4x4", name: "KASHgo Mountain 4x4", baseFare: 800, estMin: "8 mins away", icon: "🚙" },
];

export const HeroBookingWidget: React.FC = () => {
  const [pickup, setPickup] = useState("Lal Chowk, Srinagar");
  const [dropoff, setDropoff] = useState("Gulmarg Ski Resort");
  const [selectedType, setSelectedType] = useState("sedan");
  const [isCalculated, setIsCalculated] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const activeRide = RIDE_TYPES.find((r) => r.id === selectedType) || RIDE_TYPES[1];

  const handleEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculated(true);
  };

  const handleBook = () => {
    setIsBooked(true);
    setTimeout(() => {
      setIsBooked(false);
      setIsCalculated(false);
    }, 4000);
  };

  return (
    <div className="w-full bg-white/90 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-slate-900/10 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-600"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
            Instant Kashmir & Ladakh Booking
          </span>
        </div>
        <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
          24/7 Available
        </span>
      </div>

      <AnimatePresence mode="wait">
        {isBooked ? (
          <motion.div
            key="booked"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-10 text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Captain Matched!
            </h3>
            <p className="text-slate-600 text-sm max-w-xs mb-6">
              Your KASHgo captain is en route to <span className="font-semibold text-slate-900">{pickup}</span>. Estimated arrival in 4 mins.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-500 w-full max-w-xs">
              Booking Ref: <span className="font-mono font-bold text-slate-800">#KG-8921-SXR</span>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleEstimate} className="space-y-4">
            {/* Pickup */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                Pickup Location
              </label>
              <div className="relative flex items-center">
                <MapPin className="w-5 h-5 text-amber-600 absolute left-3.5 pointer-events-none" />
                <select
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-amber-600 focus:bg-white text-slate-900 text-sm rounded-xl pl-11 pr-4 py-3 appearance-none transition-all outline-none font-medium cursor-pointer"
                >
                  {LOCATIONS.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Dropoff */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                Destination
              </label>
              <div className="relative flex items-center">
                <Navigation className="w-5 h-5 text-amber-600 absolute left-3.5 pointer-events-none" />
                <select
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-amber-600 focus:bg-white text-slate-900 text-sm rounded-xl pl-11 pr-4 py-3 appearance-none transition-all outline-none font-medium cursor-pointer"
                >
                  {LOCATIONS.filter((l) => l !== pickup).map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Vehicle Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                Select Ride Class
              </label>
              <div className="grid grid-cols-3 gap-2">
                {RIDE_TYPES.map((ride) => (
                  <button
                    key={ride.id}
                    type="button"
                    onClick={() => setSelectedType(ride.id)}
                    className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                      selectedType === ride.id
                        ? "border-amber-600 bg-amber-50/70 text-slate-900 ring-2 ring-amber-600/20"
                        : "border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    <div className="text-xl mb-1">{ride.icon}</div>
                    <div className="text-xs font-bold leading-tight">{ride.name}</div>
                    <div className="text-[10px] text-slate-500 mt-1">{ride.estMin}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Preview & CTA */}
            <div className="pt-3 border-t border-slate-100">
              <div className="flex items-center justify-between mb-4 bg-amber-50/80 rounded-xl p-3 border border-amber-100">
                <div>
                  <div className="text-xs text-slate-600">Estimated Fare</div>
                  <div className="text-xl font-extrabold text-slate-900">
                    ₹{activeRide.baseFare + 450}{" "}
                    <span className="text-xs font-normal text-slate-500">approx</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-amber-700 font-semibold bg-white px-2.5 py-1 rounded-lg shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-amber-600" /> Fixed Rate
                </div>
              </div>

              {isCalculated ? (
                <Button
                  type="button"
                  onClick={handleBook}
                  variant="primary"
                  fullWidth
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Confirm & Request Ride
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  size="lg"
                  icon={<Car className="w-5 h-5" />}
                >
                  Calculate Fare & Book
                </Button>
              )}
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};
