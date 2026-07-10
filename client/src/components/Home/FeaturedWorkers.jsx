import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiHeart,
  FiMapPin,
  FiStar,
  FiAward,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

import { getWorkers } from "../../services/workerService";

const FeaturedWorkers = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const response = await getWorkers();

        const topWorkers = [...(response.workers || [])]
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 3);

        setWorkers(topWorkers);
      } catch (error) {
        console.error("Failed to load featured workers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkers();
  }, []);

  if (loading) {
    return (
      <section className="relative overflow-hidden bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-16 text-center">

            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-5 py-2 font-semibold text-indigo-700">
              <FiAward />
              Featured Professionals
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-900 lg:text-6xl">
              Meet Our
              <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                Top Rated Helpers
              </span>
            </h2>

          </div>

          <div className="grid gap-10 lg:grid-cols-3">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl"
              >
                <div className="h-[340px] animate-pulse bg-slate-200" />

                <div className="space-y-4 p-8">

                  <div className="h-8 w-2/3 animate-pulse rounded bg-slate-200" />

                  <div className="h-5 w-1/2 animate-pulse rounded bg-slate-200" />

                  <div className="h-4 w-full animate-pulse rounded bg-slate-200" />

                  <div className="h-4 w-4/5 animate-pulse rounded bg-slate-200" />

                  <div className="h-14 animate-pulse rounded-2xl bg-slate-200" />

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">

      <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-indigo-300/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-300/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-5 py-2 font-semibold text-indigo-700">
            <FiAward />
            Featured Professionals
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900 lg:text-6xl">
            Meet Our
            <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
              Top Rated Helpers
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Every helper is verified, experienced and trusted by
            hundreds of happy families.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-10 lg:grid-cols-3">

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
                delay: index * 0.2,
                duration: 0.6,
              }}
              whileHover={{
                y: -12,
              }}
              className="group overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl transition-all duration-500 hover:shadow-[0_35px_80px_rgba(15,23,42,.12)]"
            >

              {/* Continue from here in Part 2 */}
                            {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={worker.image}
                  alt={worker.name}
                  className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <button className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-xl backdrop-blur-xl">

                  <FiHeart />

                </button>

                {worker.verified && (

                  <div className="absolute left-5 top-5 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">

                    Verified

                  </div>

                )}

                <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 backdrop-blur-xl">

                  <span
                    className={`font-semibold ${
                      worker.availability
                        ? "text-emerald-600"
                        : "text-orange-500"
                    }`}
                  >

                    ●{" "}
                    {worker.availability
                      ? "Available Today"
                      : "Unavailable"}

                  </span>

                </div>

              </div>

              {/* Content */}

              <div className="p-8">

                <div className="flex items-start justify-between">

                  <div>

                    <h3 className="text-2xl font-black text-slate-900">

                      {worker.name}

                    </h3>

                    <p className="mt-2 font-semibold text-indigo-600">

                      {worker.serviceType}

                    </p>

                  </div>

                  <div className="rounded-2xl bg-indigo-100 px-4 py-2 font-bold text-indigo-700">

                    ⭐ {Number(worker.rating || 0).toFixed(1)}

                  </div>

                </div>

                <div className="mt-8 space-y-4">

                  <div className="flex items-center gap-3 text-slate-600">

                    <FiMapPin className="text-indigo-600" />

                    <span>{worker.location}</span>

                  </div>

                  <div className="flex items-center gap-3 text-slate-600">

                    <FiClock className="text-indigo-600" />

                    <span>{worker.experience} Years Experience</span>

                  </div>

                  <div className="flex items-center gap-3 text-slate-600">

                    <FiStar className="fill-yellow-500 text-yellow-500" />

                    <span>

                      {Math.round((worker.rating || 0) * 50)}+ Positive Reviews

                    </span>

                  </div>

                  <div className="flex items-center gap-3 text-slate-600">

                    <FiCheckCircle className="text-emerald-500" />

                    <span>

                      {worker.verified
                        ? "Police Verified & Background Checked"
                        : "Verification Pending"}

                    </span>

                  </div>

                </div>

                {/* Divider */}

                <div className="my-8 h-px bg-slate-200" />

                {/* Bottom */}

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-slate-500">

                      Starting From

                    </p>

                    <h4 className="text-3xl font-black text-slate-900">

                      ₹{worker.price}

                    </h4>

                    <span className="text-sm text-slate-500">

                      /day

                    </span>

                  </div>

                  <Link
                    to={`/workers/${worker._id}`}
                    className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-6 py-4 font-bold text-white shadow-[0_18px_40px_rgba(79,70,229,.35)] transition duration-300 hover:-translate-y-1"
                  >

                    View Profile

                    <FiArrowRight className="transition group-hover:translate-x-1" />

                  </Link>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-20 text-center"
        >

          <Link
            to="/workers"
            className="inline-flex items-center gap-3 rounded-2xl border border-indigo-200 bg-white px-8 py-4 font-bold text-indigo-700 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-indigo-600"
          >

            View All Helpers

            <FiArrowRight />

          </Link>

        </motion.div>

      </div>

    </section>
  );
};

export default FeaturedWorkers;