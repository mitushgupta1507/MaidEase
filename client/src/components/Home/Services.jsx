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
    description:
      "Daily, weekly and monthly housekeeping services by trained professionals.",
    icon: FiHome,
    color: "from-indigo-500 via-violet-500 to-purple-600",
    helpers: "250+ Helpers",
  },
  {
    title: "Trusted Babysitters",
    description:
      "Experienced babysitters providing safe and caring childcare for your family.",
    icon: FiHeart,
    color: "from-pink-500 via-rose-500 to-red-500",
    helpers: "180+ Helpers",
  },
  {
    title: "Experienced Nannies",
    description:
      "Certified nannies for newborns, toddlers and growing children.",
    icon: FiUsers,
    color: "from-emerald-500 via-teal-500 to-cyan-500",
    helpers: "140+ Helpers",
  },
  {
    title: "Home Cooks",
    description:
      "Healthy home-cooked meals prepared by experienced verified cooks.",
    icon: FiCoffee,
    color: "from-orange-500 via-amber-500 to-yellow-500",
    helpers: "90+ Helpers",
  },
];

const Services = () => {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-indigo-300/20 blur-[140px]" />

      <div className="absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-300/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-5 py-2 font-semibold text-indigo-700">

            <FiCheckCircle />

            Our Premium Services

          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900 lg:text-6xl">

            Everything Your

            <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">

              Home Needs

            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

            Hire experienced and verified professionals for
            housekeeping, childcare and home assistance with
            complete confidence.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .15,
                  duration: .6,
                }}
                whileHover={{
                  y: -12,
                }}
                className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-xl transition-all duration-500 hover:shadow-[0_30px_70px_rgba(15,23,42,.12)]"
              >

                {/* Top Border */}

                <div
                  className={`h-2 w-full bg-gradient-to-r ${service.color}`}
                />

                <div className="p-8">

                  {/* Icon */}

                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r ${service.color} text-white shadow-xl`}
                  >
                    <Icon size={34} />
                  </div>

                  {/* Title */}

                  <h3 className="mt-8 text-2xl font-black text-slate-900">

                    {service.title}

                  </h3>

                  {/* Description */}

                  <p className="mt-5 leading-7 text-slate-600">

                    {service.description}

                  </p>

                  {/* Bottom */}

                  <div className="mt-10 flex items-center justify-between">

                    <div>

                      <p className="text-sm text-slate-500">

                        Available

                      </p>

                      <h4 className="font-bold text-indigo-600">

                        {service.helpers}

                      </h4>

                    </div>

                    <button
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${service.color} text-white shadow-lg transition duration-300 group-hover:scale-110`}
                    >

                      <FiArrowRight />

                    </button>

                  </div>

                </div>

                {/* Hover Glow */}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition duration-500 group-hover:opacity-[0.05]`}
                />

              </motion.div>

            );
          })}

        </div>

        {/* Bottom Banner */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mt-24 overflow-hidden rounded-[40px] bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-10 shadow-[0_35px_80px_rgba(79,70,229,.30)] lg:p-16"
        >

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <h2 className="text-4xl font-black text-white">

                Trusted Home Care,

                <br />

                Delivered Professionally.

              </h2>

              <p className="mt-6 max-w-xl leading-8 text-indigo-100">

                Every professional is background verified,
                trained and reviewed before joining the
                MaidEase platform.

              </p>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-3xl bg-white/15 p-6 backdrop-blur-xl">

                <h3 className="text-5xl font-black text-white">

                  15K+

                </h3>

                <p className="mt-2 text-indigo-100">

                  Completed Services

                </p>

              </div>

              <div className="rounded-3xl bg-white/15 p-6 backdrop-blur-xl">

                <h3 className="text-5xl font-black text-white">

                  98%

                </h3>

                <p className="mt-2 text-indigo-100">

                  Satisfaction Rate

                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Services;