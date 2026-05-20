"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function AvailableCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/cars`
        );

        const data = await res.json();

        // শুধু AVAILABLE cars filter + 6টা limit
        const availableCars = (data.payload || [])
          .filter((car) => car.availabilityStatus === "Available")
          .slice(0, 6);

        setCars(availableCars);
      } catch (error) {
        console.log("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return (
      <section className="py-16 text-center text-gray-500 dark:text-gray-300">
        Loading cars...
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-16 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-gray-800 dark:text-white">
        Available Cars
      </h2>

      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
        Browse our collection of cars ready for rent.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car, index) => (
          <motion.div
            key={car._id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            {/* Image */}
            {car.imageUrl && (
              <Image
                width={400}
                height={300}
                src={car.imageUrl}
                alt={car.carName || "Car"}
                className="w-full h-48 object-cover"
              />
            )}

            {/* Info */}
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {car.carName}
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                Type: {car.carType} | Seats: {car.seatCapacity}
              </p>

              <p className="text-gray-600 dark:text-gray-300">
                Location: {car.pickupLocation}
              </p>

              <p className="text-indigo-600 font-bold">
                ${car.dailyRentPrice}/day
              </p>

              <Link
                href={`/cars/${car._id}`}
                className="inline-block px-4 py-2 rounded-lg bg-linear-to-r from-pink-300 to-blue-300 font-semibold hover:scale-105 transition"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}