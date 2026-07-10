import { motion } from "framer-motion";
import {
  FiStar,
  FiThumbsUp,
  FiCheckCircle,
} from "react-icons/fi";

const reviews = [
  {
    id: 1,
    name: "Riya Kapoor",
    rating: 5,
    date: "2 Days Ago",
    review:
      "Very professional and punctual. She completed every task perfectly and was extremely polite. Highly recommended!",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    rating: 5,
    date: "1 Week Ago",
    review:
      "Excellent service. Booking was smooth and the helper was experienced and trustworthy. Will definitely hire again.",
  },
  {
    id: 3,
    name: "Sneha Verma",
    rating: 4,
    date: "2 Weeks Ago",
    review:
      "Very satisfied with the cleaning service. Arrived on time and completed everything efficiently.",
  },
];

const ratingStats = [
  { stars: 5, value: "92%" },
  { stars: 4, value: "6%" },
  { stars: 3, value: "2%" },
  { stars: 2, value: "0%" },
  { stars: 1, value: "0%" },
];

const Reviews = () => {
  return (
    <section className="bg-slate-50 py-24">

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

            Customer Reviews

          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">

            Trusted By

            <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">

              Happy Families

            </span>

          </h2>

        </motion.div>

        <div className="mt-20 grid lg:grid-cols-3 gap-8">

          {/* Rating Summary */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="rounded-[36px] bg-white p-8 shadow-xl border border-slate-200"
          >

            <h3 className="text-6xl font-black text-indigo-600">

              4.9

            </h3>

            <div className="mt-5 flex gap-1">

              {[1,2,3,4,5].map((item)=>(
                <FiStar
                  key={item}
                  className="fill-yellow-400 text-yellow-400 text-xl"
                />
              ))}

            </div>

            <p className="mt-4 text-slate-500">

              Based on 245 verified reviews

            </p>

            <div className="mt-10 space-y-5">

              {ratingStats.map((item)=>(
                <div
                  key={item.stars}
                  className="flex items-center gap-4"
                >

                  <span className="w-10 font-semibold">

                    {item.stars}★

                  </span>

                  <div className="flex-1 h-3 rounded-full bg-slate-200 overflow-hidden">

                    <div
                      style={{width:item.value}}
                      className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600"
                    />

                  </div>

                  <span className="font-semibold">

                    {item.value}

                  </span>

                </div>
              ))}

            </div>

          </motion.div>

          {/* Reviews */}

          <div className="lg:col-span-2 space-y-8">

            {reviews.map((review,index)=>(

              <motion.div
                key={review.id}
                initial={{
                  opacity:0,
                  y:35
                }}
                whileInView={{
                  opacity:1,
                  y:0
                }}
                viewport={{
                  once:true
                }}
                transition={{
                  delay:index*.15,
                  duration:.6
                }}
                whileHover={{
                  y:-6
                }}
                className="rounded-[34px] bg-white border border-slate-200 p-8 shadow-xl"
              >

                <div className="flex justify-between items-start">

                  <div>

                    <h3 className="text-2xl font-black text-slate-900">

                      {review.name}

                    </h3>

                    <p className="mt-2 text-slate-500">

                      {review.date}

                    </p>

                  </div>

                  <div className="flex gap-1">

                    {[...Array(review.rating)].map((_,i)=>(
                      <FiStar
                        key={i}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}

                  </div>

                </div>

                <p className="mt-8 leading-8 text-slate-600">

                  {review.review}

                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                  <span className="flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-2 font-semibold text-emerald-700">

                    <FiCheckCircle />

                    Verified Booking

                  </span>

                  <span className="flex items-center gap-2 rounded-full bg-indigo-100 px-5 py-2 font-semibold text-indigo-700">

                    <FiThumbsUp />

                    Recommended

                  </span>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Reviews;