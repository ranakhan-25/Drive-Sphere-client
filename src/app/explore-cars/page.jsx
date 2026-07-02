import Image from "next/image";
import Link from "next/link";

export default async function ExploreCars({ searchParams }) {
  const params = await searchParams;
  const query = params?.search?.toLowerCase() || "";
  const page = parseInt(params?.page || "1", 10);
  const perPage = 9;

  // Fetch data
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/cars`, {
    cache: "no-store",
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.log("API ERROR:", errorText);

    throw new Error("Failed to fetch cars");
  }

  const data = await res.json();
  const cars = data.payload || [];

  // Filter by carName
  const filteredCars = cars.filter((car) =>
    car.carName.toLowerCase().includes(query),
  );

  // Pagination logic
  const totalCars = filteredCars.length;
  const totalPages = Math.ceil(totalCars / perPage);
  const startIndex = (page - 1) * perPage;
  const paginatedCars = filteredCars.slice(startIndex, startIndex + perPage);

  // Helper for page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (page <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (page >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      } else {
        pages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-16 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-gray-800 dark:text-white">
        Available Cars
      </h2>

      {/* Search Form */}
      <form className="flex justify-center mb-10">
        <input
          type="text"
          name="search"
          placeholder="Search by car name..."
          defaultValue={params?.search || ""}
          className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="ml-3 px-4 py-2 rounded-lg bg-[#e6bcf3] text-[#910bba] font-semibold shadow-md transition-all duration-300"
        >
          Search
        </button>
      </form>

      {/* Car Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedCars.length > 0 ? (
          paginatedCars.map((car) => (
            <div
              key={car._id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-transform hover:scale-105"
            >
              {car.imageUrl && (
                <Image
                  width={100}
                  height={100}
                  src={car.imageUrl}
                  alt={car.carName}
                  className="w-full h-48 object-cover"
                />
              )}
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
                <p className="text-indigo-600 dark:text-indigo-400 font-bold">
                  ${car.dailyRentPrice}/day
                </p>
                <Link
                  href={`/cars/${car._id}`}
                  className="inline-block px-4 py-2 rounded-lg bg-[#e6bcf3] font-semibold shadow-md  active:scale-95 active:shadow-inner transition-all duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <h2 className="text-2xl font-bold text-red-500">
              No Cars Found
            </h2>{" "}
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-10 space-x-2">
        {/* Previous Button */}
        {page > 1 && (
          <Link
            href={`?search=${params?.search || ""}&page=${page - 1}`}
            className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-600 transition"
          >
            ←
          </Link>
        )}

        {/* Page Numbers with Ellipsis */}
        {getPageNumbers().map((p, i) =>
          p === "..." ? (
            <span key={i} className="px-3 py-2 text-gray-500">
              ...
            </span>
          ) : (
            <Link
              key={i}
              href={`?search=${params?.search || ""}&page=${p}`}
              className={`px-3 py-2 rounded-lg border ${
                page === p
                  ? "bg-[#e6bcf3]"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-indigo-100 dark:hover:bg-gray-700"
              }`}
            >
              {p}
            </Link>
          ),
        )}

        {/* Next Button */}
        {page < totalPages && (
          <Link
            href={`?search=${params?.search || ""}&page=${page + 1}`}
            className="px-3 py-2 rounded-lg bg-[#e6bcf3] transition"
          >
            →
          </Link>
        )}
      </div>
    </section>
  );
}
