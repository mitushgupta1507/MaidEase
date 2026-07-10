import { Link, useNavigate } from "react-router-dom";

const WorkerCard = ({ worker }) => {
  const navigate = useNavigate();

  const {
    _id,
    name,
    serviceType,
    image,
    experience,
    rating,
    availability,
    location,
    price,
    verified,
  } = worker;

  const handleBookNow = () => {
    navigate("/bookings", {
      state: {
        worker,
      },
    });
  };

  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-slate-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Top Gradient */}
      <div className="h-2 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600"></div>

      {/* Glow */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl opacity-0 transition-all duration-700 group-hover:opacity-100"></div>

      <div className="p-6">

        {/* Image */}
        <div className="relative">
          <img
            src={
              image ||
              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt={name}
            className="h-72 w-full rounded-3xl object-cover"
          />

          <div
            className={`absolute right-4 top-4 rounded-full border px-4 py-2 text-xs font-semibold backdrop-blur-xl ${
              availability
                ? "border-emerald-200 bg-emerald-100 text-emerald-700"
                : "border-red-200 bg-red-100 text-red-700"
            }`}
          >
            {availability ? "Available" : "Unavailable"}
          </div>
        </div>

        {/* Name */}
        <div className="mt-6">
          <h3 className="text-2xl font-bold text-slate-900">
            {name}
          </h3>

          <p className="mt-1 font-semibold text-indigo-600">
            {serviceType}
          </p>
        </div>

        {/* Info */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-slate-50 p-3">
            <p className="text-xs text-slate-500">
              Experience
            </p>

            <p className="font-bold text-slate-800">
              {experience} Years
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-3">
            <p className="text-xs text-slate-500">
              Rating
            </p>

            <p className="font-bold text-slate-800">
              ⭐ {rating}
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm text-slate-500">
            📍 {location}
          </span>

          <span className="font-bold text-indigo-600">
            ₹{price}/hr
          </span>
        </div>

        {/* Verified Badge */}
        <div className="mt-5">
          <span
            className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${
              verified
                ? "bg-emerald-100 text-emerald-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {verified
              ? "Verified Worker"
              : "Verification Pending"}
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">

          <Link
            to={`/workers/${_id}`}
            className="flex-1 rounded-2xl border-2 border-indigo-200 py-3 text-center font-semibold text-indigo-700 transition-all duration-300 hover:bg-indigo-50"
          >
            View Details
          </Link>

          <button
            onClick={handleBookNow}
            className="flex-1 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-indigo-300"
          >
            Book Now
          </button>

        </div>

      </div>
    </div>
  );
};

export default WorkerCard;