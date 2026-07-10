import { motion } from "framer-motion";
import {
  FiSearch,
  FiMapPin,
  FiFilter,
  FiX,
} from "react-icons/fi";

const categories = [
  "All",
  "Maid",
  "Babysitter",
  "Nanny",
];

const SearchBar = ({
  filters,
  setFilters,
}) => {
  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const selectCategory = (category) => {
    setFilters((prev) => ({
      ...prev,
      serviceType:
        category === "All" ? "" : category,
    }));
  };

  return (
    <section className="relative z-20 -mt-16 px-6 lg:px-8">
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="mx-auto max-w-7xl rounded-[36px] border border-white/40 bg-white/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,.12)] backdrop-blur-2xl"
      >
        {/* Search Inputs */}

        <div className="grid gap-5 lg:grid-cols-12">

          {/* Search */}

          <div className="relative lg:col-span-5">
            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-slate-400" />

            <input
              type="text"
              name="search"
              value={filters.search}
              onChange={handleChange}
              placeholder="Search helpers..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-14 pr-5 outline-none transition focus:border-indigo-500 focus:bg-white"
            />
          </div>

          {/* Location */}

          <div className="relative lg:col-span-3">
            <FiMapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-slate-400" />

            <input
              type="text"
              name="location"
              value={filters.location}
              onChange={handleChange}
              placeholder="Your location"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-14 pr-5 outline-none transition focus:border-indigo-500 focus:bg-white"
            />
          </div>

          {/* Filter Button */}

          <div className="lg:col-span-2">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 py-4 font-semibold text-slate-700 transition hover:border-indigo-500 hover:bg-indigo-50"
            >
              <FiFilter />

              Filters
            </button>
          </div>

          {/* Search Button */}

          <div className="lg:col-span-2">
            <button
              type="button"
              className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 py-4 font-bold text-white shadow-[0_20px_40px_rgba(79,70,229,.35)]"
            >
              Search
            </button>
          </div>
        </div>

        {/* Categories */}

        <div className="mt-8 flex flex-wrap gap-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() =>
                selectCategory(category)
              }
              className={`rounded-full px-6 py-3 font-semibold transition ${
                (category === "All" &&
                  filters.serviceType === "") ||
                filters.serviceType === category
                  ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white shadow-lg"
                  : "bg-slate-100 text-slate-700 hover:bg-indigo-100"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Active Filters */}

        <div className="mt-8 flex flex-wrap gap-3">

          {filters.availability && (
            <div className="flex items-center gap-2 rounded-full bg-indigo-100 px-5 py-2 text-indigo-700">
              Available Today

              <FiX
                className="cursor-pointer"
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    availability: false,
                  }))
                }
              />
            </div>
          )}

          {filters.verified && (
            <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-2 text-emerald-700">
              Verified

              <FiX
                className="cursor-pointer"
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    verified: false,
                  }))
                }
              />
            </div>
          )}

        </div>
      </motion.div>
    </section>
  );
};

export default SearchBar;