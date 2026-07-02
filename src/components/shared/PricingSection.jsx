"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Car, 
  CalendarCheck, 
  MapPin, 
  DollarSign, 
  ArrowRight 
} from "lucide-react";

// 1. Features strictly mapped to DriveSphere's workflow from image_610940.png
const FEATURES = [
  {
    id: "booking",
    icon: CalendarCheck,
    title: "Instant Verification & Booking",
    description: "Skip the paperwork. Browse real-time availability, select your rental duration, and secure your premium ride instantly with verified host check-ins.",
    tag: "Seamless Experience",
    bgGradient: "from-blue-600/20 to-indigo-600/20",
    metric: "Instant Approval",
  },
  {
    id: "fleet",
    icon: Car,
    title: "Curated Premium Fleet",
    description: "Whether you need a sleek Tesla for business, a robust Range Rover for family trips, or a performance BMW, find a meticulously maintained car for every occasion.",
    tag: "Diverse Selection",
    bgGradient: "from-amber-600/20 to-orange-600/20",
    metric: "100+ Models Available",
  },
  {
    id: "locations",
    icon: MapPin,
    title: "Strategic Transit Hubs",
    description: "Convenient pickup and drop-off points located right where you need them, including Dhaka Airport, Sylhet Airport, Khulna Bus Terminal, and local city centers.",
    tag: "Location Coverage",
    bgGradient: "from-emerald-600/20 to-teal-600/20",
    metric: "Multi-City Access",
  },
  {
    id: "hosting",
    icon: DollarSign,
    title: "List Your Vehicle & Earn",
    description: "Turn your idle car into a high-yielding asset. List your vehicle safely under DriveSphere’s secure rental framework and manage bookings directly from your dashboard.",
    tag: "DriveSphere Hosts",
    bgGradient: "from-purple-600/20 to-pink-600/20",
    metric: "Passive Income Stream",
  },
];

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState(FEATURES[0]);

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block tailored to DriveSphere */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#8d0eb4] mb-3">
            Why Choose DriveSphere
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Reinventing the way you rent and share vehicles.
          </h3>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            From flexible short-term airport rentals to hosting your own vehicle for additional income streams, our decentralized platform handles the logistics smoothly.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Interactive Feature Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              const isActive = activeTab.id === feature.id;

              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature)}
                  onMouseEnter={() => setActiveTab(feature)}
                  className={`w-full text-left p-5 rounded-xl border transition-all relative flex items-start gap-4 group ${
                    isActive
                      ? "bg-white dark:bg-slate-900 border-[#e6bcf3] shadow-md shadow-indigo-500/5"
                      : "bg-transparent border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  {/* Active Indicator Strip */}
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#e6bcf3] dark:bg-[#e6bcf3] rounded-l-xl"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Icon Wrapper */}
                  <div className={`p-2.5 rounded-lg border shrink-0 transition-colors duration-200 ${
                    isActive 
                      ? "bg-indigo-50 dark:bg-indigo-950/50 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400"
                      : "bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100"
                  }`}>
                    <Icon size={20} strokeWidth={2} />
                  </div>

                  {/* Feature Summary */}
                  <div className="space-y-1">
                    <h4 className={`font-semibold transition-colors ${
                      isActive ? "text-[#e6bcf3] dark:text-[#e6bcf3]" : "text-slate-900 dark:text-slate-200"
                    }`}>
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Immersive Feature Showcase Card */}
          <div className="lg:col-span-7 h-full min-h-[400px]">
            <div className="h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-col h-full justify-between z-10"
                >
                  {/* Subtle ambient dynamic background glow without messy colors */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${activeTab.bgGradient} opacity-40 mix-blend-multiply dark:mix-blend-lighten blur-3xl pointer-events-none -z-10`} />

                  <div>
                    {/* Feature Badge */}
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 mb-6">
                      {activeTab.tag}
                    </span>

                    {/* Full Feature Header & Body */}
                    <h3 className="text-2xl font-bold mb-4 tracking-tight">
                      {activeTab.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                      {activeTab.description}
                    </p>
                  </div>

                  {/* DriveSphere Operational Metric Footer */}
                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                        DriveSphere Guarantee
                      </p>
                      <p className="text-lg font-bold text-slate-800 dark:text-slate-200">
                        {activeTab.metric}
                      </p>
                    </div>

                    <a
                      href="#explore-cars"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group"
                    >
                      Find your perfect ride
                      <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}