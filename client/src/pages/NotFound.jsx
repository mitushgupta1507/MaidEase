import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-slate-950 relative overflow-hidden flex items-center justify-center px-6">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/30 rounded-full blur-3xl"></div>

      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 lg:p-16 shadow-2xl">
          {/* 404 */}
          <h1 className="text-[120px] lg:text-[220px] font-black leading-none bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            404
          </h1>

          <h2 className="text-4xl lg:text-5xl font-black text-white mt-4">
            Page Not Found
          </h2>

          <p className="text-slate-300 text-lg mt-6 max-w-2xl mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
            Let's get you back to the MaidEase platform.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Link
              to="/"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white font-bold shadow-xl hover:scale-105 transition-all duration-300"
            >
              Go To Homepage
            </Link>

            <Link
              to="/workers"
              className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 text-white font-bold hover:bg-white/10 transition-all duration-300"
            >
              Browse Helpers
            </Link>
          </div>

          {/* Decorative Cards */}
          <div className="grid md:grid-cols-3 gap-5 mt-14">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-5">
              <h3 className="text-white font-bold text-xl">
                Verified Helpers
              </h3>

              <p className="text-slate-400 mt-2">
                Find trusted maids and nannies.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-5">
              <h3 className="text-white font-bold text-xl">
                Easy Booking
              </h3>

              <p className="text-slate-400 mt-2">
                Book services in just a few clicks.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-5">
              <h3 className="text-white font-bold text-xl">
                Premium Support
              </h3>

              <p className="text-slate-400 mt-2">
                We're always here to help you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;