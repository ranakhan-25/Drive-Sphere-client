"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/banner-bg-car.jpg')] bg-cover bg-center bg-no-repeat"></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">

        {/* Left Side Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6 text-center md:text-left text-white"
        >

          <p className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm">
            Premium Car Rental
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Find Your <span className="text-pink-300">Perfect Ride</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200">
            Explore a wide range of cars, book instantly, and enjoy a seamless
            rental experience with DriveSphere.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">

            <Link
              href="/explore-cars"
              className="inline-block px-6 py-3 rounded-xl bg-linear-to-r from-indigo-400 to-pink-400 text-black font-semibold shadow-lg hover:scale-105 transition duration-300"
            >
              Explore Cars
            </Link>

            <Link
              href="/add-car"
              className="inline-block px-6 py-3 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 transition duration-300"
            >
              Add Your Car
            </Link>

          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        >
          <Image
            src="https://as1.ftcdn.net/v2/jpg/09/26/26/06/1000_F_926260609_e8QS1OeQznCoj3JnE167VdAJu3pvzscg.jpg"
            alt="Car Banner"
            width={550}
            height={350}
            className="rounded-3xl shadow-2xl object-cover border border-white/20"
          />
        </motion.div>

      </div>
    </section>
  );
}