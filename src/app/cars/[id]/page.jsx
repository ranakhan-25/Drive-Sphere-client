
import BookNowBtn from "@/components/shared/BookNowBtn";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

export default async function CarDetails({ params }) {
  const { id } = await params;

  const token = await auth.api.getToken({ headers: await headers() });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/cars/${id}`,
    {
      cache: "no-store",
      headers: {
        authorization: `Bearer ${token?.token}`,
      },
    },
  );
  const data = await res.json();
  const car = data?.payload;

  if (!car) {
    return (
      <section className="py-16 text-center text-gray-500 dark:text-gray-300">
        Car details not found.
      </section>
    );
  }

  return (
    <section className="max-w-6xl my-5 mx-auto px-6 py-16 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        {car?.carName} Details
      </h2>

      {/* Two Column Layout */}
      <div className="md:grid md:grid-cols-2 md:gap-10 items-start">
        {/* Image */}
        {car?.imageUrl && (
          <Image
            width={100}
            height={100}
            src={car?.imageUrl}
            alt={car?.carName}
            className="w-full h-80 object-cover rounded-lg shadow-md mb-8 md:mb-0"
          />
        )}

        {/* Car Info */}
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <div>
            <p>
              <span className="font-semibold">Type:</span> {car?.carType}
            </p>
            <p>
              <span className="font-semibold">Seats:</span> {car?.seatCapacity}
            </p>
            <p>
              <span className="font-semibold">Location:</span>{" "}
              {car?.pickupLocation}
            </p>
            <p>
              <span className="font-semibold">Availability:</span>{" "}
              {car?.availabilityStatus}
            </p>
          </div>

          <p>
            <span className="font-semibold">Description:</span>{" "}
            {car?.description}
          </p>
          <p className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">
            ${car?.dailyRentPrice}/day
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <BookNowBtn data={car} />
          </div>
        </div>
      </div>
    </section>
  );
}
