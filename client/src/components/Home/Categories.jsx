import { motion } from "framer-motion";
import {
  FiHome,
  FiHeart,
  FiUsers,
  FiCoffee,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

const services = [
  {
    title: "Professional Maids",
    icon: <FiHome />,
    description:
      "Verified housekeeping professionals for daily and deep cleaning services.",
    color: "from-indigo-500 via-violet-500 to-purple-600",
    jobs: "220+ Helpers",
  },
  {
    title: "Trusted Babysitters",
    icon: <FiHeart />,
    description:
      "Experienced babysitters who provide safe and caring childcare support.",
    color: "from-pink-500 via-rose-500 to-red-500",
    jobs: "140+ Helpers",
  },
  {
    title: "Experienced Nannies",
    icon: <FiUsers />,
    description:
      "Full-time and part-time nannies with verified childcare experience.",
    color: "from-emerald-500 via-teal-500 to-cyan-500",
    jobs: "180+ Helpers",
  },
  {
    title: "Home Cooks",
    icon: <FiCoffee />,
    description:
      "Healthy home-cooked meals prepared by skilled and verified cooks.",
    color: "from-orange-500 via-amber-500 to-yellow-500",
    jobs: "90+ Helpers",
  },
];

const Categories = () => {
  return (
    <section className="relative py-28 bg-slate-50 overflow-hidden">

      {/* Background */}

      <div className="absolute left-0 top-0 w-80 h-80 rounded-full bg-indigo-300/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-violet-300/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold">

            <FiCheckCircle />

            Premium Services

          </span>

          <h2 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-black text-slate-900">

            Find the Right

            <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">

              Home Care Professional

            </span>

          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-8">

            Every professional on MaidEase is carefully verified,
            trained and reviewed to ensure the highest level of
            trust and service quality.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .15,
                duration: .6,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="group relative rounded-[32px] bg-white border border-slate-200 shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500"
            >

              {/* Top Gradient */}

              <div
                className={`h-2 bg-gradient-to-r ${service.color}`}
              />

              <div className="p-8">

                <div
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${service.color} text-white flex items-center justify-center text-3xl shadow-xl`}
                >
                  {service.icon}
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">

                  {service.title}

                </h3>

                <p className="mt-5 text-slate-600 leading-7">

                  {service.description}

                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-indigo-600 font-bold">

                    {service.jobs}

                  </span>

                  <div className="w-12 h-12 rounded-2xl bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 flex items-center justify-center">

                    <FiArrowRight />

                  </div>

                </div>

              </div>

              {/* Hover Glow */}

              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-all duration-500`}
              />

            </motion.div>

          ))}

        </div>

        {/* Bottom Section */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mt-24 rounded-[40px] overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 shadow-2xl"
        >

          <div className="grid lg:grid-cols-2 items-center">

            <div className="p-12 lg:p-16">

              <span className="text-indigo-300 uppercase tracking-[0.35em] text-sm">

                Why MaidEase

              </span>

              <h3 className="mt-5 text-4xl font-black text-white">

                One Platform.

                <br />

                Complete Home Care.

              </h3>

              <p className="mt-6 text-slate-300 leading-8">

                Whether you need a maid, nanny, babysitter or cook,
                MaidEase provides trusted professionals with verified
                profiles, transparent pricing and instant booking.

              </p>

              <button className="mt-10 group px-8 py-4 rounded-2xl bg-white text-slate-900 font-bold flex items-center gap-3 hover:scale-105 transition-all duration-300">

                Explore Services

                <FiArrowRight className="group-hover:translate-x-1 transition-all"/>

              </button>

            </div>

            <div className="hidden lg:flex justify-center p-12">

              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 flex items-center justify-center shadow-[0_0_120px_rgba(99,102,241,.5)]">

                <div className="w-56 h-56 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center">

                  <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center text-6xl">

                    🏡

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Categories;