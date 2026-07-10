import { motion } from "framer-motion";
import {
  FiShield,
  FiClock,
  FiAward,
  FiThumbsUp,
  FiCheckCircle,
  FiUsers,
} from "react-icons/fi";

const features = [
  {
    title: "Verified Professionals",
    description:
      "Every helper goes through identity verification and background checks before joining MaidEase.",
    icon: FiShield,
    color: "from-indigo-600 to-violet-600",
  },
  {
    title: "Instant Booking",
    description:
      "Book trusted helpers in minutes with flexible scheduling and transparent pricing.",
    icon: FiClock,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Top Rated Service",
    description:
      "Thousands of satisfied families trust our experienced professionals every day.",
    icon: FiAward,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Quality Guaranteed",
    description:
      "We ensure reliable service with continuous monitoring and customer feedback.",
    icon: FiThumbsUp,
    color: "from-pink-500 to-rose-500",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* Background */}

      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-indigo-300/20 blur-[140px]" />

      <div className="absolute -right-24 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-300/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-5 py-2 font-semibold text-indigo-700">

            <FiCheckCircle />

            Why Choose MaidEase

          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900 lg:text-6xl">

            Premium Experience

            <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">

              Built Around Trust

            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

            We combine technology, verification and exceptional customer support
            to provide a safe and seamless home service experience.

          </p>

        </motion.div>

        {/* Bento Grid */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {/* Left Big Card */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="rounded-[36px] bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 p-10 text-white shadow-[0_35px_80px_rgba(79,70,229,.30)] lg:row-span-2"
          >

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur-xl">

              <FiUsers size={40} />

            </div>

            <h3 className="mt-10 text-4xl font-black">

              Trusted by
              <br />
              Thousands

            </h3>

            <p className="mt-6 leading-8 text-indigo-100">

              Every booking is backed by verified professionals,
              transparent pricing and customer-first support.

            </p>

            <div className="mt-12 grid grid-cols-2 gap-5">

              <div className="rounded-3xl bg-white/10 p-5 backdrop-blur-xl">

                <h4 className="text-4xl font-black">

                  15K+

                </h4>

                <p className="mt-2 text-indigo-100">

                  Bookings

                </p>

              </div>

              <div className="rounded-3xl bg-white/10 p-5 backdrop-blur-xl">

                <h4 className="text-4xl font-black">

                  98%

                </h4>

                <p className="mt-2 text-indigo-100">

                  Satisfaction

                </p>

              </div>

            </div>

          </motion.div>

          {/* Feature Cards */}

          <div className="lg:col-span-2 grid gap-8 md:grid-cols-2">
                        {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
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
                    delay: index * 0.15,
                    duration: 0.6,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl transition-all duration-500 hover:shadow-[0_30px_70px_rgba(15,23,42,.10)]"
                >
                  <div
                    className={`flex h-18 w-18 items-center justify-center rounded-3xl bg-gradient-to-r ${feature.color} text-white shadow-xl`}
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-8 text-2xl font-black text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-5 leading-7 text-slate-600">
                    {feature.description}
                  </p>

                  <div
                    className={`mt-8 h-1 w-20 rounded-full bg-gradient-to-r ${feature.color} transition-all duration-500 group-hover:w-full`}
                  />
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom Stats */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-24 grid gap-8 rounded-[40px] border border-slate-200 bg-slate-50 p-10 shadow-xl md:grid-cols-4"
        >
          <div className="text-center">
            <h3 className="text-5xl font-black text-indigo-600">
              500+
            </h3>

            <p className="mt-3 font-medium text-slate-600">
              Verified Helpers
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-black text-indigo-600">
              15K+
            </h3>

            <p className="mt-3 font-medium text-slate-600">
              Successful Bookings
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-black text-indigo-600">
              98%
            </h3>

            <p className="mt-3 font-medium text-slate-600">
              Customer Satisfaction
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-black text-indigo-600">
              24×7
            </h3>

            <p className="mt-3 font-medium text-slate-600">
              Customer Support
            </p>
          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default WhyChooseUs;