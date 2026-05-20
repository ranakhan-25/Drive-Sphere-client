
"use client";

import Image from "next/image";
import UpdateCar from "./UpdateCar";
import DeleteCarBtn from "./DeleteCarBtn";

const CarCard = ({ car }) => {

  return (
    <div className="border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white">
      {/* Image */}
      <div className="relative w-full h-60">
        {car?.imageUrl ? (
          <Image
            src={car.imageUrl}
            alt={car?.carName || "Car Image"}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <p>No Image</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Name + Price */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl font-bold">
            {car?.carName}
          </h2>

          <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
            ${car?.dailyRentPrice}/day
          </span>
        </div>

        {/* Details */}
        <div className="space-y-2 text-gray-600">
          <p>
            <span className="font-semibold">
              Car Type:
            </span>{" "}
            {car?.carType}
          </p>

          <p>
            <span className="font-semibold">
              Seat Capacity:
            </span>{" "}
            {car?.seatCapacity}
          </p>

          <p>
            <span className="font-semibold">
              Pickup:
            </span>{" "}
            {car?.pickupLocation}
          </p>

          <p className="line-clamp-2">
            {car?.description}
          </p>
        </div>

        {/* Availability */}
        <div className="mt-4">
          <span
            className={`font-medium ${
              car?.availabilityStatus
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {car?.availabilityStatus && car?.availabilityStatus}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          {/* Update */}
          <UpdateCar data={car} />

          {/* Delete */}
          <DeleteCarBtn carId={car._id}/>
        </div>
      </div>
    </div>
  );
};

export default CarCard;