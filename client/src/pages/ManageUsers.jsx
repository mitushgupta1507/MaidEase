import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";

const ManageUsers = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await api.get("/admin/users");
        setUsers(data.users || []);
      } catch (error) {
        console.error("Failed to load users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    const query = search.toLowerCase();

    return users.filter((user) => {
      const name = user.name?.toLowerCase() || "";
      const email = user.email?.toLowerCase() || "";
      const phone = user.phone?.toLowerCase() || "";
      const id = String(user._id || "").toLowerCase();

      return (
        name.includes(query) ||
        email.includes(query) ||
        phone.includes(query) ||
        id.includes(query)
      );
    });
  }, [users, search]);

  const newCustomersCount = useMemo(() => {
    const now = new Date();

    return users.filter((user) => {
      const createdAt = new Date(user.createdAt);
      return (
        createdAt.getFullYear() === now.getFullYear() &&
        createdAt.getMonth() === now.getMonth()
      );
    }).length;
  }, [users]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-emerald-100 text-emerald-700";
      case "Pending":
        return "bg-amber-100 text-amber-700";
      default:
        return "bg-red-100 text-red-700";
    }
  };

  const getPlanColor = (plan) => {
    switch (plan) {
      case "Elite":
        return "bg-purple-100 text-purple-700";
      case "Premium":
        return "bg-indigo-100 text-indigo-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-6 py-16 relative">
            <div className="flex flex-col lg:flex-row justify-between gap-8 items-center">
              <div>
                <span className="px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold">
                  Customer Management
                </span>

                <h1 className="mt-6 text-5xl lg:text-7xl font-black text-slate-900">
                  Manage
                  <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                    Users
                  </span>
                </h1>

                <p className="mt-5 text-lg text-slate-600 max-w-2xl">
                  Monitor users, subscriptions, bookings and
                  platform activity from a centralized dashboard.
                </p>
              </div>

              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white font-bold shadow-xl hover:scale-105 transition-all duration-300">
                Export Users
              </button>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="bg-white rounded-[35px] p-8 shadow-xl">
              <h2 className="text-5xl font-black text-indigo-600">
                {users.length}
              </h2>
              <p className="text-slate-500 mt-3">
                Total Users
              </p>
            </div>

            <div className="bg-white rounded-[35px] p-8 shadow-xl">
              <h2 className="text-5xl font-black text-emerald-600">
                {users.filter((user) => user.status === "Active").length}
              </h2>
              <p className="text-slate-500 mt-3">
                Active Users
              </p>
            </div>

            <div className="bg-white rounded-[35px] p-8 shadow-xl">
              <h2 className="text-5xl font-black text-violet-600">
                {users.length}
              </h2>
              <p className="text-slate-500 mt-3">
                Customer Accounts
              </p>
            </div>

            <div className="bg-white rounded-[35px] p-8 shadow-xl">
              <h2 className="text-5xl font-black text-amber-500">
                {newCustomersCount}
              </h2>
              <p className="text-slate-500 mt-3">
                New Customers
              </p>
            </div>
          </div>
        </section>

        {/* User Table */}
        <section className="max-w-7xl mx-auto px-6 py-10 pb-24">
          <div className="bg-white rounded-[35px] shadow-xl overflow-hidden">
            <div className="p-8 border-b border-slate-100">
              <div className="flex flex-col lg:flex-row gap-4 justify-between">
                <h2 className="text-3xl font-bold text-slate-900">
                  User Directory
                </h2>

                <input
                  type="text"
                  placeholder="Search users..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="px-5 py-3 rounded-2xl border border-slate-200 outline-none focus:border-indigo-500 lg:w-96"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left p-6">User</th>
                    <th className="text-left p-6">Email</th>
                    <th className="text-left p-6">Phone</th>
                    <th className="text-left p-6">Plan</th>
                    <th className="text-left p-6">Bookings</th>
                    <th className="text-left p-6">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="7" className="p-10 text-center text-slate-500">
                        Loading users...
                      </td>
                    </tr>
                  ) : filteredUsers.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="p-10 text-center text-slate-500">
                        No users found.
                      </td>
                    </tr>
                  ) : filteredUsers.map((user) => (
                    <tr
                      key={user._id}
                      className="border-b border-slate-100 hover:bg-slate-50 transition-all"
                    >
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600"></div>

                          <div>
                            <h4 className="font-bold">
                              {user.name}
                            </h4>

                            <p className="text-sm text-slate-500">
                              {String(user._id).slice(-6).toUpperCase()}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="p-6">{user.email}</td>

                      <td className="p-6">{user.phone || "N/A"}</td>

                      <td className="p-6">
                        <span className="px-4 py-2 rounded-full text-sm font-semibold bg-slate-100 text-slate-700">
                          Standard
                        </span>
                      </td>

                      <td className="p-6 font-bold text-indigo-600">
                        {user.bookingCount ?? 0}
                      </td>

                      <td className="p-6">
                        <span
                          className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                            user.status || "Active"
                          )}`}
                        >
                          {user.status || "Active"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-slate-50 flex justify-between items-center">
              <span className="text-slate-500">
                Showing {filteredUsers.length} users
              </span>

              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-xl bg-white shadow">
                  1
                </button>

                <button className="w-10 h-10 rounded-xl bg-indigo-600 text-white shadow">
                  2
                </button>

                <button className="w-10 h-10 rounded-xl bg-white shadow">
                  3
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ManageUsers;