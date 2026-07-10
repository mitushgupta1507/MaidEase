import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiCalendar,
  FiArrowRight,
  FiSearch,
} from "react-icons/fi";

const EmptyBookings = () => {
  return (
    <section className="py-24">

      <div className="max-w-4xl mx-auto px-6">

        <motion.div
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
            duration: 0.6,
          }}
          className="overflow-hidden rounded-[40px] border border-slate-200 bg-white p-12 text-center shadow-[0_25px_70px_rgba(15,23,42,.08)]"
        >

          {/* Icon */}

          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 shadow-[0_25px_50px_rgba(79,70,229,.35)]">

            <FiCalendar
              size={48}
              className="text-white"
            />

          </div>

          {/* Heading */}

          <h2 className="mt-10 text-5xl font-black text-slate-900">

            No Bookings Yet

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">

            It looks like you haven't booked any helpers yet.
            Browse our verified professionals and book trusted
            maids, babysitters or nannies within minutes.

          </p>

          {/* Features */}

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <div className="rounded-3xl bg-slate-50 p-6">

              <h3 className="text-3xl font-black text-indigo-600">

                500+

              </h3>

              <p className="mt-2 text-slate-600">

                Verified Helpers

              </p>

            </div>

            <div className="rounded-3xl bg-slate-50 p-6">

              <h3 className="text-3xl font-black text-indigo-600">

                4.9★

              </h3>

              <p className="mt-2 text-slate-600">

                Average Rating

              </p>

            </div>

            <div className="rounded-3xl bg-slate-50 p-6">

              <h3 className="text-3xl font-black text-indigo-600">

                24×7

              </h3>

              <p className="mt-2 text-slate-600">

                Customer Support

              </p>

            </div>

          </div>

          {/* Button */}

          <Link
            to="/workers"
            className="group mt-12 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-8 py-5 text-lg font-bold text-white shadow-[0_20px_45px_rgba(79,70,229,.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(79,70,229,.45)]"
          >

            <FiSearch />

            Explore Helpers

            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />

          </Link>

        </motion.div>

      </div>

    </section>
  );
};

export default EmptyBookings;