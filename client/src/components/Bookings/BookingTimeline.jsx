import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiClock,
  FiHome,
  FiMapPin,
} from "react-icons/fi";

const timeline = [
  {
    title: "Booking Confirmed",
    time: "10:00 AM",
    description: "Your booking has been confirmed successfully.",
    icon: FiCheckCircle,
    active: true,
  },
  {
    title: "Helper Assigned",
    time: "10:15 AM",
    description: "A verified helper has been assigned.",
    icon: FiHome,
    active: true,
  },
  {
    title: "On The Way",
    time: "11:00 AM",
    description: "The helper is travelling to your location.",
    icon: FiMapPin,
    active: true,
  },
  {
    title: "Service Started",
    time: "11:20 AM",
    description: "Cleaning service has started.",
    icon: FiClock,
    active: false,
  },
  {
    title: "Service Completed",
    time: "--",
    description: "Waiting for completion.",
    icon: FiCheckCircle,
    active: false,
  },
];

const BookingTimeline = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >

          <span className="rounded-full bg-indigo-100 px-5 py-2 font-semibold text-indigo-700">

            Live Tracking

          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">

            Booking

            <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">

              Timeline

            </span>

          </h2>

          <p className="mt-6 text-slate-600 max-w-2xl mx-auto leading-8">

            Stay updated with every stage of your booking from
            confirmation until the service is completed.

          </p>

        </motion.div>

        <div className="mt-20 relative">

          {/* Vertical Line */}

          <div className="absolute left-7 top-0 h-full w-1 rounded-full bg-slate-200" />

          <div className="space-y-10">

            {timeline.map((step, index) => {

              const Icon = step.icon;

              return (

                <motion.div
                  key={step.title}
                  initial={{
                    opacity: 0,
                    x: -40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.12,
                    duration: .5,
                  }}
                  className="relative flex gap-8"
                >

                  {/* Icon */}

                  <div
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full shadow-xl ${
                      step.active
                        ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white"
                        : "bg-slate-300 text-white"
                    }`}
                  >

                    <Icon size={24} />

                  </div>

                  {/* Card */}

                  <div
                    className={`flex-1 rounded-[28px] border p-7 shadow-lg transition-all duration-300 ${
                      step.active
                        ? "border-indigo-100 bg-indigo-50"
                        : "border-slate-200 bg-white"
                    }`}
                  >

                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

                      <h3 className="text-2xl font-black text-slate-900">

                        {step.title}

                      </h3>

                      <span
                        className={`rounded-full px-4 py-2 text-sm font-bold ${
                          step.active
                            ? "bg-indigo-600 text-white"
                            : "bg-slate-200 text-slate-600"
                        }`}
                      >

                        {step.time}

                      </span>

                    </div>

                    <p className="mt-5 leading-7 text-slate-600">

                      {step.description}

                    </p>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default BookingTimeline;