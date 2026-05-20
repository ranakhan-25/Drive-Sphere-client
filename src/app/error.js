"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-linear-to-br from-red-600 via-pink-600 to-purple-700 text-white overflow-hidden">
      
      {/* Floating Glow Effect */}
      <motion.div
        className="absolute w-72 h-72 bg-red-400 opacity-30 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Animated Error Code */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-8xl font-extrabold drop-shadow-lg"
        >
          500
        </motion.h1>

        {/* Error Message */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-lg text-center max-w-md"
        >
          Oops! Something went wrong. Please try again later.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex gap-4"
        >
          <Link
            href="/"
            className="px-6 py-2 rounded-lg bg-white text-red-600 font-semibold shadow-md hover:bg-gray-200 transition"
          >
            Go Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}