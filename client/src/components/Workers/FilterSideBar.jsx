import { motion } from "framer-motion";
import {
  FiFilter,
  FiRotateCcw,
  FiCheckCircle,
  FiDollarSign,
  FiClock,
  FiStar,
} from "react-icons/fi";

const serviceTypes = [
  "Maid",
  "Babysitter",
  "Nanny",
];

const experienceOptions = [
  {
    label: "0-2 Years",
    value: 0,
  },
  {
    label: "3-5 Years",
    value: 3,
  },
  {
    label: "5+ Years",
    value: 5,
  },
  {
    label: "10+ Years",
    value: 10,
  },
];

const FilterSidebar = ({ filters, setFilters }) => {
  console.log("setFilters =", setFilters);

  console.log("FILTER SIDEBAR RENDERED");

  const resetFilters = () => {
  
    setFilters({
      search: "",
      location: "",
      serviceType: "",
      verified: false,
      availability: false,
      minExperience: "",
      minPrice: "",
      maxPrice: "",
      minRating: "",
      sort: "",
    });
  };

  return (
    <motion.aside
      className="sticky top-28 z-30 overflow-hidden rounded-[34px] border border-white/40 bg-white/80 backdrop-blur-2xl shadow-[0_25px_70px_rgba(15,23,42,.08)]"
      initial={{ opacity: 0, x: -35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="sticky top-28 overflow-hidden rounded-[34px] border border-white/40 bg-white/80 shadow-[0_25px_70px_rgba(15,23,42,.08)] backdrop-blur-2xl"
    >
      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-200 px-7 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white">
            <FiFilter size={22} />
          </div>

          <div>
            <h3 className="text-xl font-black text-slate-900">
              Filters
            </h3>

            <p className="text-sm text-slate-500">
              Refine your search
            </p>
          </div>
        </div>

        <button
          onClick={resetFilters}
          className="rounded-xl bg-slate-100 p-3 text-slate-600 transition hover:bg-indigo-100 hover:text-indigo-600"
        >
          <FiRotateCcw />
        </button>
      </div>

      <div className="space-y-8 p-7">

        {/* Service Type */}

        <div>
          <h4 className="mb-4 flex items-center gap-2 font-bold text-slate-900">
            <FiCheckCircle className="text-indigo-600" />
            Service Type
          </h4>

          <div className="space-y-3">
            {serviceTypes.map((item) => (
              <label
                onClick={() => console.log("LABEL CLICK")}
                key={item}
                className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 transition hover:border-indigo-500 hover:bg-indigo-50"
              >
                <span>{item}</span>

                <input
                  type="radio"
                  name="serviceType"
                  value={item}
                  checked={filters.serviceType === item}
                  onClick={() => console.log("INPUT CLICKED")}
                  onChange={(e) => {
                    console.log("ON CHANGE");
                    console.log(e.target.value);

                    setFilters((prev) => ({
                      ...prev,
                      serviceType: e.target.value,
                    }));
                  }}
                  className="h-5 w-5 accent-indigo-600"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Experience */}

        <div>
          <h4 className="mb-4 flex items-center gap-2 font-bold text-slate-900">
            <FiClock className="text-indigo-600" />
            Experience
          </h4>

          <div className="space-y-3">
            {experienceOptions.map((item) => (
              <label
                key={item.label}
                className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 transition hover:border-indigo-500 hover:bg-indigo-50"
              >
                <span>{item.label}</span>

                <input
                  type="radio"
                  checked={
                    Number(filters.minExperience) ===
                    item.value
                  }
                  onChange={() => {
                    console.log("Clicked Experience:", item.value);

                    setFilters((prev) => {
                      const updated = {
                        ...prev,
                        minExperience: item.value,
                      };

                      console.log("New Filters:", updated);

                      return updated;
                    });
                  }}
                  className="h-5 w-5 accent-indigo-600"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Rating */}

        <div>
          <h4 className="mb-4 flex items-center gap-2 font-bold text-slate-900">
            <FiStar className="text-yellow-500" />
            Minimum Rating
          </h4>

          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={filters.minRating || 1}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                minRating: e.target.value,
              }))
            }
            className="w-full accent-indigo-600"
          />

          <div className="mt-2 flex items-center justify-between text-sm text-slate-500">
            <span>1 ★</span>

            <span>
              {filters.minRating || 1} ★ & above
            </span>

            <span>5 ★</span>
          </div>
        </div>
                {/* Budget */}

        <div>
          <h4 className="mb-4 flex items-center gap-2 font-bold text-slate-900">
            <FiDollarSign className="text-emerald-600" />
            Daily Budget
          </h4>

          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="Min"
              value={filters.minPrice}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  minPrice: e.target.value,
                }))
              }
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:bg-white"
            />

            <input
              type="number"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  maxPrice: e.target.value,
                }))
              }
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:bg-white"
            />
          </div>
        </div>

        {/* Availability */}

        <div>
          <h4 className="mb-4 font-bold text-slate-900">
            Availability
          </h4>

          <label className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 transition hover:border-indigo-500 hover:bg-indigo-50">
            <span>Available Today</span>

            <input
              type="checkbox"
              checked={filters.availability}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  availability: e.target.checked,
                }))
              }
              className="h-5 w-5 accent-indigo-600"
            />
          </label>
        </div>

        {/* Verified */}

        <div>
          <h4 className="mb-4 font-bold text-slate-900">
            Verified Only
          </h4>

          <label className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 transition hover:border-indigo-500 hover:bg-indigo-50">
            <span>Police Verified</span>

            <input
              type="checkbox"
              checked={filters.verified}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  verified: e.target.checked,
                }))
              }
              className="h-5 w-5 accent-indigo-600"
            />
          </label>
        </div>

        {/* Info */}

        <div className="rounded-2xl bg-indigo-50 px-4 py-4 text-center">
          <p className="font-semibold text-indigo-700">
            Filters are applied automatically.
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Change any option to instantly update the worker list.
          </p>
        </div>

      </div>

    </motion.aside>
  );
};

export default FilterSidebar;