import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WorkerCard from "../WorkerCard";
import { getWorkers } from "../../services/workerService";

const WorkerGrid = ({ filters, setFilters }) => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWorkers = async () => {
    try {
      setLoading(true);
      
      const params = {};

      if (filters.search) params.search = filters.search;
      if (filters.location) params.location = filters.location;
      if (filters.serviceType)
        params.serviceType = filters.serviceType;
      if (filters.availability)
        params.availability = true;
      if (filters.verified)
        params.verified = true;
      if (filters.minExperience)
        params.minExperience =
          filters.minExperience;
      if (filters.minPrice)
        params.minPrice = filters.minPrice;
      if (filters.maxPrice)
        params.maxPrice = filters.maxPrice;
      if (filters.sort)
        params.sort = filters.sort;
      

      const response = await getWorkers(params);


      setWorkers(response.data || []);
    } catch (error) {
      console.error(error);
      setWorkers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkers();
  }, [filters]);

  return (
    <section className="bg-slate-50 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top */}

        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>

            <h2 className="text-3xl font-black text-slate-900">
              Available Helpers
            </h2>

            <p className="mt-2 text-slate-500">
              {loading
                ? "Loading workers..."
                : `Showing ${workers.length} workers`}
            </p>

          </div>

          <select
            value={filters.sort}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                sort: e.target.value,
              }))
            }
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-semibold outline-none focus:border-indigo-500"
          >
            <option value="">
              Sort by Popularity
            </option>

            <option value="rating">
              Highest Rated
            </option>

            <option value="price">
              Lowest Price
            </option>

            <option value="-price">
              Highest Price
            </option>

            <option value="experience">
              Highest Experience
            </option>

            <option value="name">
              Name (A-Z)
            </option>
          </select>

        </div>

        {loading ? (

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="h-[520px] animate-pulse rounded-[32px] bg-white shadow-lg"
              />
            ))}
          </div>

        ) : workers.length === 0 ? (

          <div className="py-24 text-center">

            <h3 className="text-3xl font-bold">
              No Workers Found
            </h3>

            <p className="mt-3 text-slate-500">
              Try changing your filters.
            </p>

          </div>

        ) : (

          <motion.div
            layout
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {workers.map((worker, index) => (
              <motion.div
                key={worker._id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
              >
                <WorkerCard worker={worker} />
              </motion.div>
            ))}
          </motion.div>

        )}

      </div>
    </section>
  );
};

export default WorkerGrid;