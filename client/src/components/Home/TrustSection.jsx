import { motion } from "framer-motion";
import {
  FiShield,
  FiUsers,
  FiStar,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";

const trustItems = [
  {
    icon: <FiUsers size={26} />,
    number: "2,500+",
    title: "Happy Families",
    color: "from-indigo-500 to-violet-600",
  },
  {
    icon: <FiShield size={26} />,
    number: "100%",
    title: "Verified Helpers",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: <FiStar size={26} />,
    number: "4.9/5",
    title: "Average Rating",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: <FiAward size={26} />,
    number: "15K+",
    title: "Successful Bookings",
    color: "from-purple-500 to-pink-500",
  },
];

const TrustSection = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Background Blur */}
      <div className="absolute -top-20 left-0 w-72 h-72 rounded-full bg-indigo-200/30 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-violet-200/30 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-5 py-2 text-indigo-700 font-semibold">

            <FiCheckCircle />

            Trusted Across India

          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-slate-900">

            Why Thousands of Families

            <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">

              Choose MaidEase

            </span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-8">

            We connect families with highly trained and verified
            professionals through a secure, transparent and
            technology-driven platform.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">

          {trustItems.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .15,
                duration: .6,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[30px] bg-white border border-slate-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
            >

              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} text-white flex items-center justify-center shadow-xl`}>

                {item.icon}

              </div>

              <h3 className="mt-8 text-4xl font-black text-slate-900">

                {item.number}

              </h3>

              <p className="mt-3 text-slate-500 font-medium">

                {item.title}

              </p>

              <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${item.color} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`} />

            </motion.div>

          ))}

        </div>

        {/* Bottom Banner */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mt-20 rounded-[35px] bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-10 lg:p-14 text-white shadow-2xl"
        >

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <h3 className="text-3xl lg:text-4xl font-black">

                Trusted by Families Across India

              </h3>

              <p className="mt-5 text-indigo-100 leading-8">

                Every helper goes through identity verification,
                skill assessment and background checks before
                joining the MaidEase platform.

              </p>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-6">

                <h4 className="text-5xl font-black">

                  98%

                </h4>

                <p className="mt-2 text-indigo-100">

                  Customer Satisfaction

                </p>

              </div>

              <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-6">

                <h4 className="text-5xl font-black">

                  24/7

                </h4>

                <p className="mt-2 text-indigo-100">

                  Customer Support

                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default TrustSection;