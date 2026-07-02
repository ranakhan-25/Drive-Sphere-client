"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, ShieldCheck, Key, PlusCircle, Calendar, LineChart } from "lucide-react";

const RENTER_STEPS = [
  {
    step: "01",
    icon: Search,
    title: "Browse & Select",
    description: "Explore our premium fleet filtered by vehicle types like SUVs, Sedans, or Electric cars, along with preferred pickup hub locations.",
  },
  {
    step: "02",
    icon: ShieldCheck,
    title: "Secure Verification",
    description: "Complete a swift, 1-minute profile check. Your security and insurance coverage are automatically managed by DriveSphere.",
  },
  {
    step: "03",
    icon: Key,
    title: "Unlock & Drive",
    description: "Meet your host at your designated hub (e.g., Dhaka Airport or Sylhet Airport) to collect the keys and enjoy your perfect ride.",
  },
];

const HOST_STEPS = [
  {
    step: "01",
    icon: PlusCircle,
    title: "List Your Car",
    description: "Upload high-quality vehicle pictures, specify details like type, seat count, location, and set your desired daily rental price.",
  },
  {
    step: "02",
    icon: Calendar,
    title: "Manage Bookings",
    description: "Accept or decline reservation requests instantly from your personalized 'My Bookings' dashboard panel.",
  },
  {
    step: "03",
    icon: LineChart,
    title: "Earn Passive Revenue",
    description: "Get paid securely after every completed trip. Monitor your asset yields directly inside the application interface.",
  },
];

export default function ProcessSection() {
  const [role, setRole] = useState("renter"); // 'renter' or 'host'
  const currentSteps = role === "renter" ? RENTER_STEPS : HOST_STEPS;

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 transition-colors duration-300 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Header and Mode Selector */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#8c17b0] mb-3">
              How It Works
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
              Your journey with DriveSphere, made effortless.
            </h3>
          </div>

          {/* Interactive Modern Switch Segment */}
          <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl flex items-center relative self-start md:self-auto">
            <button
              onClick={() => setRole("renter")}
              className={`px-5 py-2.5 text-sm font-medium rounded-lg relative transition-colors z-10 ${
                role === "renter" ? "text-slate-900 dark:text-white" : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              Renting a Car
              {role === "renter" && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white dark:bg-slate-950 rounded-lg shadow-sm -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </button>
            <button
              onClick={() => setRole("host")}
              className={`px-5 py-2.5 text-sm font-medium rounded-lg relative transition-colors z-10 ${
                role === "host" ? "text-slate-900 dark:text-white" : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              Hosting Your Car
              {role === "host" && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white dark:bg-slate-950 rounded-lg shadow-sm -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          </div>
        </div>

        {/* Steps Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentSteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={`${role}-${item.step}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative p-6 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col justify-between hover:border-indigo-500/50 dark:hover:border-indigo-500/30 transition-all duration-300"
              >
                <div>
                  {/* Step Count & Icon Row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-extrabold tracking-tight text-slate-400  select-none transition-colors duration-300 group-hover:text-indigo-500/20">
                      {item.step}
                    </span>
                    <div className="p-3 bg-[#e6bcf3] border border-slate-200 dark:border-slate-800 text-[#7e159e] rounded-xl  hover:bg-[#c7a3d2] transition-all duration-300">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Text Details */}
                  <h4 className="text-lg font-bold mb-2 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}