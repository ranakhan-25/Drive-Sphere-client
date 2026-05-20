import DeleteBookingCar from "@/components/shared/DeleteBookingCar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const token = await auth.api.getToken({ headers: await headers() });
  const userId = session?.user?.id;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/booking/${userId}`,
    {
      cache: "no-store",
      headers: {
        authorization: `Bearer ${token.token}`,
      },
    },
  );
  const data = await res.json();

  const bookingData = data.payload;

  return (
    <section className="  sm:w-md md:w-2xl lg:w-4xl mx-auto  py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        My Bookings
      </h2>

      {bookingData && bookingData.length > 0 ? (
        <div className="space-y-6">
          {bookingData.map((booking) => (
            <div
              key={booking._id}
              className="w-full flex flex-col md:flex-row items-start gap-6 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              {/* Image */}
              {booking?.carImage && (
                <Image
                  width={100}
                  height={100}
                  src={booking?.carImage}
                  alt={booking?.name}
                  className="w-full md:w-64 h-48 object-cover rounded-lg"
                />
              )}

              {/* Info */}
              <div className="flex-1 space-y-2 text-gray-700 dark:text-gray-300">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {booking?.name}
                </h3>
                <p>Location: {booking?.location}</p>
                <p className="text-indigo-600 dark:text-indigo-400 font-bold">
                  ${booking.dailyRentPrice}/day
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    Start: {new Date(booking.bookingDate).toLocaleDateString()}
                  </p>
                </div>

                {/* Delete Button */}
                <DeleteBookingCar id={booking._id} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 dark:text-gray-300 py-10">
          No bookings found.
        </div>
      )}
    </section>
  );
};

export default MyBookingPage;
