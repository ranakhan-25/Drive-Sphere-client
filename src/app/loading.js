"use client";
import { motion } from "framer-motion";

export default function LoadingPage() {
  return (
    <div className=" flex flex-col items-center justify-center h-screen  overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        
        <motion.div
          className="w-20 h-20 border-4 border-yellow-400 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />

        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="mt-8 text-2xl font-semibold tracking-wide text-center"
        >
          Loading, please wait...
        </motion.h1>
      </div>
    </div>
  );
}
