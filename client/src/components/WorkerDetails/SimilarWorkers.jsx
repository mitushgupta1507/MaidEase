import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiHeart,
  FiMapPin,
  FiShield,
  FiStar,
} from "react-icons/fi";

const workers = [
  {
    id: 1,
    name: "Anjali Verma",
    role: "Professional Maid",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900",
    rating: 4.9,
    price: 649,
    location: "Noida",
    available: true,
  },
  {
    id: 2,
    name: "Neha Gupta",
    role: "Professional Nanny",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=900",
    rating: 4.8,
    price: 799,
    location: "Delhi",
    available: true,
  },
  {
    id: 3,
    name: "Kavita Singh",
    role: "Babysitter",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900",
    rating: 5.0,
    price: 699,
    location: "Gurugram",
    available: false,
  },
];

const SimilarWorkers = () => {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <span className="rounded-full bg-indigo-100 px-5 py-2 font-semibold text-indigo-700">

            Similar Professionals

          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">

            You May Also

            <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">

              Like These Helpers

            </span>

          </h2>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {workers.map((worker, index) => (

            <motion.div
              key={worker.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              whileHover={{
                y: -10,
              }}
              className="group overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-xl transition-all duration-500 hover:shadow-[0_30px_80px_rgba(15,23,42,.12)]"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={worker.image}
                  alt={worker.name}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <button className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-xl backdrop-blur-xl">

                  <FiHeart />

                </button>

                <div className="absolute left-5 top-5 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">

                  <FiShield className="inline mr-2" />

                  Verified

                </div>

              </div>

              {/* Content */}

              <div className="p-7">

                <div className="flex items-start justify-between">

                  <div>

                    <h3 className="text-2xl font-black text-slate-900">

                      {worker.name}

                    </h3>

                    <p className="mt-2 font-semibold text-indigo-600">

                      {worker.role}

                    </p>

                  </div>

                  <div className="rounded-2xl bg-indigo-100 px-4 py-2 font-bold text-indigo-700">

                    ⭐ {worker.rating}

                  </div>

                </div>

                <div className="mt-7 space-y-4">

                  <div className="flex items-center gap-3 text-slate-600">

                    <FiMapPin className="text-indigo-600" />

                    {worker.location}

                  </div>

                  <div>

                    <span
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${
                        worker.available
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {worker.available
                        ? "Available Today"
                        : "Available Tomorrow"}
                    </span>

                  </div>

                </div>

                <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">

                  <div>

                    <p className="text-sm text-slate-500">

                      Starting From

                    </p>

                    <h3 className="text-3xl font-black text-slate-900">

                      ₹{worker.price}

                    </h3>

                    <p className="text-sm text-slate-500">

                      per day

                    </p>

                  </div>

                  <Link
                    to={`/workers/${worker.id}`}
                    className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-6 py-4 font-bold text-white shadow-[0_18px_40px_rgba(79,70,229,.35)] transition-all duration-300 hover:-translate-y-1"
                  >

                    View

                    <FiArrowRight className="transition group-hover:translate-x-1" />

                  </Link>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default SimilarWorkers;