"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCarCrash } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      
      {/* Animated Icon */}
      <motion.div
        initial={{ rotate: -20, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-6"
      >
        <FaCarCrash size={100} className="text-yellow-300 drop-shadow-lg" />
      </motion.div>

      {/* Animated Heading */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-extrabold mb-4"
      >
        404
      </motion.h1>

      {/* Animated Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-2xl mb-6"
      >
        Oops! Page Not Found
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-lg mb-6 text-gray-200 max-w-md"
      >
        The page you are looking for might have been removed, renamed, or is temporarily unavailable.
      </motion.p>

      {/* Animated Button */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <Link
          href="/"
          className="px-6 py-2 bg-yellow-400 text-black rounded-lg shadow hover:bg-yellow-500 transition"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}
