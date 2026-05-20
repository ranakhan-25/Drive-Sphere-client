"use client";
import { motion } from "framer-motion";
import { FaCarSide, FaShieldAlt, FaSmile, FaMoneyBillWave } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaCarSide size={40} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Wide Car Selection",
      description: "Choose from SUVs, Sedans, Luxury, and Electric cars to match your journey.",
    },
    {
      icon: <FaShieldAlt size={40} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Safe & Secure",
      description: "All cars are well-maintained with advanced safety features for peace of mind.",
    },
    {
      icon: <FaSmile size={40} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Customer Satisfaction",
      description: "We prioritize your comfort and provide 24/7 support for hassle-free rentals.",
    },
    {
      icon: <FaMoneyBillWave size={40} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Affordable Pricing",
      description: "Get competitive daily rates with no hidden charges.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
        Why Choose Us
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        Discover why thousands of customers trust DriveSphere for their car rental needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center space-y-4 hover:shadow-xl transition"
          >
            <div className="flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
