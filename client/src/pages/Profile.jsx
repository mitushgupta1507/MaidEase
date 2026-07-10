import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const [profileRes, bookingsRes] = await Promise.all([
          api.get("/auth/profile"),
          api.get("/auth/profile/bookings"),
        ]);

        const profileData = profileRes.data.user;
        setProfile(profileData);
        setFormData({
          name: profileData.name || "",
          phone: profileData.phone || "",
          address: profileData.address || "",
        });
        setBookings(bookingsRes.data.bookings || []);
      } catch (error) {
        toast.error(error.response?.data?.message || "Unable to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const stats = useMemo(() => {
    const completed = bookings.filter((booking) => booking.status === "Completed").length;
    const active = bookings.filter((booking) => ["Pending", "Accepted", "In Progress"].includes(booking.status)).length;

    return {
      total: bookings.length,
      completed,
      active,
    };
  }, [bookings]);

  const handleSave = async () => {
    try {
      const { data } = await api.put("/auth/profile", formData);
      setProfile(data.user);
      setIsEditing(false);
      toast.success("Profile updated");
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to update profile");
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-slate-50 flex items-center justify-center">
          <p className="text-slate-600">Loading profile...</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        {/* Cover Section */}
        <section className="relative">
          <div className="h-80 bg-gradient-to-r from-indigo-700 via-violet-600 to-purple-700"></div>

          <div className="absolute inset-0 bg-black/10"></div>

          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="absolute bottom-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        </section>

        {/* Profile Content */}
        <section className="max-w-7xl mx-auto px-6 -mt-32 relative z-10 pb-24">
          {/* Profile Header */}
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100">
            <div className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-end gap-8">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600"
                  alt="Profile"
                  className="w-40 h-40 rounded-[30px] object-cover border-4 border-white shadow-xl"
                />

                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-4xl lg:text-5xl font-black text-slate-900">
                    {profile?.name || "User"}
                  </h1>

                  <p className="text-indigo-600 text-xl font-semibold mt-2">
                    {profile?.role === "admin" ? "Admin Account" : "Member"}
                  </p>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-5">
                    <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold">
                      Verified Account
                    </span>

                    <span className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                      {profile?.status || "Active"}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsEditing((prev) => !prev)}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white font-bold shadow-xl hover:scale-105 transition-all duration-300"
                >
                  {isEditing ? "Cancel" : "Edit Profile"}
                </button>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
            <div className="bg-white rounded-[30px] p-8 shadow-lg">
              <h3 className="text-4xl font-black text-indigo-600">
                {stats.total}
              </h3>
              <p className="text-slate-500 mt-2">
                Total Bookings
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-lg">
              <h3 className="text-4xl font-black text-emerald-600">
                {stats.completed}
              </h3>
              <p className="text-slate-500 mt-2">
                Completed
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-lg">
              <h3 className="text-4xl font-black text-amber-500">
                {stats.active}
              </h3>
              <p className="text-slate-500 mt-2">
                Active
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-lg">
              <h3 className="text-4xl font-black text-violet-600">
                0.0
              </h3>
              <p className="text-slate-500 mt-2">
                Average Rating
              </p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mt-10">
            {/* Personal Information */}
            <div className="lg:col-span-2 bg-white rounded-[35px] shadow-xl p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Personal Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-slate-500 mb-2">Full Name</p>
                  {isEditing ? (
                    <input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 rounded-2xl p-4 font-semibold outline-none"
                    />
                  ) : (
                    <div className="bg-slate-50 rounded-2xl p-4 font-semibold">{profile?.name || "-"}</div>
                  )}
                </div>

                <div>
                  <p className="text-slate-500 mb-2">Email Address</p>
                  <div className="bg-slate-50 rounded-2xl p-4 font-semibold">{profile?.email || "-"}</div>
                </div>

                <div>
                  <p className="text-slate-500 mb-2">Phone Number</p>
                  {isEditing ? (
                    <input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 rounded-2xl p-4 font-semibold outline-none"
                    />
                  ) : (
                    <div className="bg-slate-50 rounded-2xl p-4 font-semibold">{profile?.phone || "-"}</div>
                  )}
                </div>

                <div>
                  <p className="text-slate-500 mb-2">Location</p>
                  {isEditing ? (
                    <input
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-slate-50 rounded-2xl p-4 font-semibold outline-none"
                    />
                  ) : (
                    <div className="bg-slate-50 rounded-2xl p-4 font-semibold">{profile?.address || "-"}</div>
                  )}
                </div>
              </div>

              {isEditing && (
                <button
                  onClick={handleSave}
                  className="mt-6 px-6 py-3 rounded-2xl bg-indigo-600 text-white font-semibold"
                >
                  Save Changes
                </button>
              )}
            </div>

            {/* Membership Card */}
            <div className="bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 rounded-[35px] shadow-2xl p-8 text-white">
              <h2 className="text-3xl font-bold">
                Account Status
              </h2>

              <p className="mt-3 text-indigo-100">
                {profile?.status || "Active"}
              </p>

              <div className="mt-10">
                <h3 className="text-5xl font-black">
                  {profile?.role === "admin" ? "Admin" : "Member"}
                </h3>

                <p className="text-indigo-100 mt-2">
                  Joined {profile?.createdAt ? new Date(profile.createdAt).toLocaleDateString() : "recently"}
                </p>
              </div>
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="bg-white rounded-[35px] shadow-xl p-8 mt-10">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900">
                Recent Bookings
              </h2>

              <button className="text-indigo-600 font-bold">
                View All
              </button>
            </div>

            <div className="space-y-5">
              {bookings.length === 0 ? (
                <div className="text-slate-500">No bookings found yet.</div>
              ) : bookings.map((booking) => (
                <div
                  key={booking._id}
                  className="bg-slate-50 rounded-3xl p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    <h3 className="font-bold text-lg">
                      {booking.workerName}
                    </h3>

                    <p className="text-slate-500">
                      {booking.service}
                    </p>
                  </div>

                  <div className="font-semibold">
                    {new Date(booking.date).toLocaleDateString()}
                  </div>

                  <div>
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        booking.status === "Completed"
                          ? "bg-emerald-100 text-emerald-700"
                          : ["Accepted", "In Progress"].includes(booking.status)
                          ? "bg-indigo-100 text-indigo-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>

                  <div className="font-bold text-slate-700">
                    ₹{Number(booking.totalAmount || 0).toLocaleString("en-IN")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Settings Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white rounded-[30px] p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <h3 className="text-2xl font-bold text-slate-900">
                Account Settings
              </h3>

              <p className="text-slate-500 mt-3">
                Update personal details and preferences.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <h3 className="text-2xl font-bold text-slate-900">
                Payment Methods
              </h3>

              <p className="text-slate-500 mt-3">
                Manage cards and payment options.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <h3 className="text-2xl font-bold text-slate-900">
                Security
              </h3>

              <p className="text-slate-500 mt-3">
                Password, authentication and privacy settings.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Profile;