import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">
                  M
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  MaidEase
                </h2>
                <p className="text-slate-400 text-sm">
                  Trusted Home Helpers
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed">
              Connecting families with trusted maids,
              babysitters and nannies through a secure
              and professional platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-slate-400 hover:text-indigo-400 transition"
              >
                Home
              </Link>

              <Link
                to="/workers"
                className="text-slate-400 hover:text-indigo-400 transition"
              >
                Workers
              </Link>

              <Link
                to="/bookings"
                className="text-slate-400 hover:text-indigo-400 transition"
              >
                Bookings
              </Link>

              <Link
                to="/profile"
                className="text-slate-400 hover:text-indigo-400 transition"
              >
                Profile
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              Services
            </h3>

            <div className="flex flex-col gap-3">
              <p className="text-slate-400">
                House Maids
              </p>

              <p className="text-slate-400">
                Babysitters
              </p>

              <p className="text-slate-400">
                Nannies
              </p>

              <p className="text-slate-400">
                Elder Care
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-slate-400">
              <p>support@maidease.com</p>
              <p>+91 98765 43210</p>
              <p>Available 24/7</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">
                Stay Updated
              </h3>

              <p className="text-slate-400 mt-2">
                Get updates about new helpers and
                special offers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10 outline-none w-full lg:w-80"
              />

              <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 font-semibold hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-center">
            © 2026 MaidEase. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="#"
              className="text-slate-400 hover:text-indigo-400 transition"
            >
              Privacy
            </Link>

            <Link
              to="#"
              className="text-slate-400 hover:text-indigo-400 transition"
            >
              Terms
            </Link>

            <Link
              to="#"
              className="text-slate-400 hover:text-indigo-400 transition"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;