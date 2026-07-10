import { motion } from "framer-motion";
import {
  FiMapPin,
  FiStar,
  FiShield,
  FiAward,
  FiCheckCircle,
  FiHeart,
  FiClock,
} from "react-icons/fi";

const WorkerHero = ({ worker }) => {
  if (!worker) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 pt-36 pb-24">

      {/* Background */}

      <div className="absolute -left-28 top-0 h-[420px] w-[420px] rounded-full bg-indigo-600/20 blur-[150px]" />

      <div className="absolute -right-28 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-5 gap-12 items-center">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="lg:col-span-2"
          >

            <div className="relative">

              <img
                src={worker.image}
                alt={worker.name}
                className="w-full rounded-[40px] shadow-[0_35px_80px_rgba(0,0,0,.35)]"
              />

              {worker.verified && (
                <div className="absolute left-6 top-6 rounded-full bg-emerald-500 px-5 py-2 text-white font-semibold shadow-xl">
                  Verified
                </div>
              )}

              <button className="absolute right-6 top-6 h-14 w-14 rounded-full bg-white/90 backdrop-blur-xl shadow-xl flex items-center justify-center">
                <FiHeart size={22} />
              </button>

            </div>

          </motion.div>

          {/* Details */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="lg:col-span-3"
          >

            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-2 text-white backdrop-blur-xl">

              <FiShield />

              {worker.verified
                ? "Background Verified"
                : "Verification Pending"}

            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-black text-white">
              {worker.name}
            </h1>

            <p className="mt-3 text-2xl font-semibold text-indigo-300">
              {worker.serviceType}
            </p>

            <div className="mt-8 flex flex-wrap gap-6">

              <div className="flex items-center gap-2 text-yellow-400">

                <FiStar className="fill-yellow-400" />

                <span className="text-white font-semibold">
                  {worker.rating} Rating
                </span>

              </div>

              <div className="flex items-center gap-2 text-slate-300">

                <FiMapPin />

                {worker.location}

              </div>

              <div className="flex items-center gap-2 text-slate-300">

                <FiClock />

                {worker.experience} Years Experience

              </div>

            </div>

            <p className="mt-10 text-lg leading-8 text-slate-300">
              {worker.description}
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-5">

              <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-6">

                <FiAward className="text-3xl text-indigo-300" />

                <h3 className="mt-4 text-3xl font-black text-white">
                  {worker.experience}+
                </h3>

                <p className="text-slate-300">
                  Years Experience
                </p>

              </div>

              <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-6">

                <FiStar className="text-3xl text-yellow-400" />

                <h3 className="mt-4 text-3xl font-black text-white">
                  {worker.rating}
                </h3>

                <p className="text-slate-300">
                  Average Rating
                </p>

              </div>

              <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-6">

                <FiCheckCircle className="text-3xl text-emerald-400" />

                <h3 className="mt-4 text-3xl font-black text-white">
                  {worker.verified ? "100%" : "Pending"}
                </h3>

                <p className="text-slate-300">
                  Verification
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default WorkerHero;