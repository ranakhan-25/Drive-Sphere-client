// app/cars/page.jsx

import CarCard from "@/components/shared/CarCard";

const CarsPage = async ({ searchParams }) => {

  // IMPORTANT
  const params = await searchParams;

  const search = params?.search || "";
  const type = params?.type || "";

  // Fetch Data
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/cars?search=${search}&type=${type}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  const cars = data?.payload || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          Explore Premium Cars
        </h1>

        <p className="text-gray-500 mb-8">
          Find your perfect rental car easily.
        </p>

        {/* Search + Filter */}
        <form className="flex flex-col md:flex-row gap-4 justify-center items-center">

          {/* Search */}
          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="Search by car name..."
            className="w-full md:w-80 border border-gray-300 px-4 py-3 rounded-xl"
          />

          {/* Filter */}
          <select
            name="type"
            defaultValue={type}
            className="w-full md:w-60 border border-gray-300 px-4 py-3 rounded-xl"
          >
            <option value="">All Types</option>
            <option value="Luxury SUV">Luxury SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Sports">Sports</option>
            <option value="Electric">Electric</option>
          </select>

          {/* Button */}
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            Search
          </button>
        </form>
      </div>

      {/* Cards */}
      {cars.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold">
            No Cars Found
          </h2>
        </div>
      )}
    </div>
  );
};

export default CarsPage;