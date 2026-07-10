import { motion } from "framer-motion";
import {
  FiAward,
  FiBriefcase,
  FiCheckCircle,
  FiGlobe,
  FiShield,
  FiStar,
} from "react-icons/fi";

const AboutWorker = ({ worker }) => {
  if (!worker) return null;

  const skills = [
    "Deep House Cleaning",
    "Kitchen Cleaning",
    "Laundry & Ironing",
    "Child Care",
    "Elderly Assistance",
    "Pet Friendly",
  ];

  const certifications = [
    "Police Verification",
    "Identity Verified",
    "Skill Certified",
    "Medical Checkup",
  ];

  const languages = [
    "Hindi",
    "English",
  ];

  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="lg:col-span-2 space-y-8"
          >

            {/* About */}

            <div className="rounded-[36px] bg-white p-8 shadow-xl border border-slate-200">

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 flex items-center justify-center text-white">

                  <FiBriefcase size={28} />

                </div>

                <div>

                  <h2 className="text-3xl font-black text-slate-900">

                    About Me

                  </h2>

                  <p className="text-slate-500">

                    Professional Introduction

                  </p>

                </div>

              </div>

              <p className="mt-8 leading-8 text-slate-600">

                {worker.description}

              </p>

            </div>

            {/* Skills */}

            <div className="rounded-[36px] bg-white p-8 shadow-xl border border-slate-200">

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 flex items-center justify-center text-white">

                  <FiStar size={28} />

                </div>

                <h2 className="text-3xl font-black text-slate-900">

                  Skills & Expertise

                </h2>

              </div>

              <div className="grid md:grid-cols-2 gap-5 mt-10">

                {skills.map((skill) => (

                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.03 }}
                    className="rounded-2xl border border-slate-200 p-5 flex items-center gap-4 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-300"
                  >

                    <FiCheckCircle className="text-emerald-500 text-xl" />

                    <span className="font-semibold text-slate-700">

                      {skill}

                    </span>

                  </motion.div>

                ))}

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="space-y-8"
          >

            {/* Certifications */}

            <div className="rounded-[36px] bg-white p-8 shadow-xl border border-slate-200">

              <div className="flex items-center gap-4">

                <FiShield className="text-3xl text-indigo-600" />

                <h3 className="text-2xl font-black text-slate-900">

                  Certifications

                </h3>

              </div>

              <div className="mt-8 space-y-4">

                {certifications.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <FiCheckCircle className="text-emerald-500" />

                    <span className="text-slate-700">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* Languages */}

            <div className="rounded-[36px] bg-white p-8 shadow-xl border border-slate-200">

              <div className="flex items-center gap-4">

                <FiGlobe className="text-3xl text-indigo-600" />

                <h3 className="text-2xl font-black text-slate-900">

                  Languages

                </h3>

              </div>

              <div className="mt-8 flex flex-wrap gap-3">

                {languages.map((lang) => (

                  <span
                    key={lang}
                    className="rounded-full bg-indigo-100 px-5 py-3 font-semibold text-indigo-700"
                  >

                    {lang}

                  </span>

                ))}

              </div>

            </div>

            {/* Experience Card */}

            <div className="rounded-[36px] bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-8 shadow-2xl text-white">

              <FiAward className="text-5xl" />

              <h3 className="mt-8 text-4xl font-black">

                {worker.experience}+ Years

              </h3>

              <p className="mt-4 text-indigo-100 leading-8">

                Professional experience serving families with premium housekeeping and childcare services.

              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default AboutWorker;