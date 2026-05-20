"use client";
import { motion } from "framer-motion";
import { FaCarSide, FaCarAlt, FaCar, FaTaxi, FaCarCrash, FaCaravan } from "react-icons/fa";

export default function PricingSection() {
  const plans = [
    {
      name: "Basic Wash",
      price: "$19.00/month",
      features: ["Oil Change", "Tire Rotation", "Brake Pad Replacement", "Transmission Repair"],
      highlight: false,
    },
    {
      name: "Premium Wash",
      price: "$59.00/month",
      features: ["Oil Change", "Spot-Free Rinse", "Towel Dry", "Interior Vacuum"],
      highlight: true,
    },
    {
      name: "Deluxe Wash",
      price: "$29.00/month",
      features: ["Exterior Wash", "Interior Vacuum", "Spot-Free Rinse", "Towel Dry"],
      highlight: false,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 bg-blue-50 text-white">
      <h2 className="text-3xl md:text-4xl text-black font-bold text-center mb-4">
        Choose the Perfect Plan
      </h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
        Select the best car wash plan that suits your vehicle and lifestyle.
      </p>

      {/* Vehicle Icons Row */}
      <div className="flex flex-wrap justify-center gap-6 mb-12 text-orange-400">
        <FaCarSide size={40} />
        <FaCarAlt size={40} />
        <FaCar size={40} />
        <FaTaxi size={40} />
        <FaCarCrash size={40} />
        <FaCaravan size={40} />
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className={`rounded-xl shadow-lg p-8 text-center ${
              plan.highlight
                ? "bg-linear-to-r from-indigo-400 to-pink-400"
                : "bg-blue-100 text-black"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-xl font-bold mb-6">{plan.price}</p>
            <ul className="space-y-2 mb-6 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
            <button
              className={`px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 ${
                plan.highlight
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-linear-to-r from-indigo-400 to-pink-400"
              }`}
            >
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
