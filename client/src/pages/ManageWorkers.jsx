import AddWorkerModal from "../components/Admin/AddWorkerModal";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { deleteWorker, getAdminWorkers, updateWorkerStatus } from "../services/workerService";

const ManageWorkers = () => {
  const [search, setSearch] = useState("");
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const fetchWorkers = async () => {
    try {
      setLoading(true);

      const data = await getAdminWorkers();

      setWorkers(data.workers || []);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Failed to load workers"
      );
    } finally {
      setLoading(false);
    }
  };

useEffect(() => {
  fetchWorkers();
}, []);

  const filteredWorkers = useMemo(() => {
    const query = search.toLowerCase();

    return workers.filter((worker) => {
      const name = worker.name?.toLowerCase() || "";
      const role = worker.serviceType?.toLowerCase() || "";
      const location = worker.location?.toLowerCase() || "";
      const id = String(worker._id || "").toLowerCase();

      return (
        name.includes(query) ||
        role.includes(query) ||
        location.includes(query) ||
        id.includes(query)
      );
    });
  }, [workers, search]);

  const stats = useMemo(() => ({
    total: workers.length,
    active: workers.filter((worker) => worker.status === "Active").length,
    pending: workers.filter((worker) => worker.status === "Pending").length,
    blocked: workers.filter((worker) => worker.status === "Blocked").length,
  }), [workers]);

  const statusColor = (status) => {
    if (status === "Active") return "bg-emerald-100 text-emerald-700";
    if (status === "Pending") return "bg-amber-100 text-amber-700";
    return "bg-red-100 text-red-700";
  };

  const confirmDelete = (id) => {
    toast.custom((t) => (
      <div className={`rounded-2xl bg-white p-4 shadow-xl border ${t.visible ? "animate-enter" : "animate-leave"}`}>
        <p className="font-semibold text-slate-900">Delete this worker?</p>
        <p className="text-sm text-slate-500 mt-1">This action cannot be undone.</p>
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => {
              toast.dismiss(t.id);
              handleDelete(id);
            }}
            className="px-3 py-2 rounded-xl bg-red-600 text-white text-sm font-semibold"
          >
            Delete
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="px-3 py-2 rounded-xl bg-slate-100 text-slate-700 text-sm font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    ), {
      duration: Infinity,
    });
  };

  const handleDelete = async (id) => {
    try {
      await toast.promise(deleteWorker(id), {
        loading: "Deleting worker...",
        success: "Worker deleted",
        error: (error) => error.response?.data?.message || "Unable to delete worker",
      });
      setWorkers((prev) => prev.filter((worker) => worker._id !== id));
    } catch (error) {
      // handled by toast
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      const response = await toast.promise(updateWorkerStatus(id, status), {
        loading: "Updating status...",
        success: "Worker status updated",
        error: (error) => error.response?.data?.message || "Unable to update status",
      });

      if (response?.worker?.status) {
        setWorkers((prev) =>
          prev.map((worker) =>
            worker._id === id ? { ...worker, status: response.worker.status } : worker
          )
        );
      }
    } catch (error) {
      // handled by toast
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <section className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-6 py-16 relative">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div>
                <span className="px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold">
                  Admin Management
                </span>

                <h1 className="mt-6 text-5xl lg:text-7xl font-black text-slate-900">
                  Manage
                  <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                    Workers
                  </span>
                </h1>

                <p className="mt-5 text-lg text-slate-600 max-w-2xl">
                  Manage all registered maids, babysitters and
                  nannies from a centralized dashboard.
                </p>
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white font-bold shadow-xl hover:scale-105 transition-all duration-300"
              >
                + Add New Worker
              </button>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="bg-white rounded-[35px] p-8 shadow-xl">
              <h2 className="text-5xl font-black text-indigo-600">{stats.total}</h2>
              <p className="text-slate-500 mt-3">Total Workers</p>
            </div>
            <div className="bg-white rounded-[35px] p-8 shadow-xl">
              <h2 className="text-5xl font-black text-emerald-600">{stats.active}</h2>
              <p className="text-slate-500 mt-3">Active Workers</p>
            </div>
            <div className="bg-white rounded-[35px] p-8 shadow-xl">
              <h2 className="text-5xl font-black text-amber-500">{stats.pending}</h2>
              <p className="text-slate-500 mt-3">Pending Approval</p>
            </div>
            <div className="bg-white rounded-[35px] p-8 shadow-xl">
              <h2 className="text-5xl font-black text-violet-600">{stats.blocked}</h2>
              <p className="text-slate-500 mt-3">Blocked Workers</p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-10 pb-24">
          <div className="bg-white rounded-[35px] shadow-xl overflow-hidden">
            <div className="p-8 border-b border-slate-100">
              <div className="flex flex-col lg:flex-row gap-4 justify-between">
                <h2 className="text-3xl font-bold text-slate-900">Worker Directory</h2>
                <input
                  type="text"
                  placeholder="Search workers..."
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
                    <th className="text-left p-6">ID</th>
                    <th className="text-left p-6">Worker</th>
                    <th className="text-left p-6">Role</th>
                    <th className="text-left p-6">Location</th>
                    <th className="text-left p-6">Rating</th>
                    <th className="text-left p-6">Status</th>
                    <th className="text-left p-6">Rate</th>
                    <th className="text-left p-6">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="8" className="p-10 text-center text-slate-500">Loading workers...</td>
                    </tr>
                  ) : filteredWorkers.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="p-10 text-center text-slate-500">No workers found.</td>
                    </tr>
                  ) : filteredWorkers.map((worker) => (
                    <tr key={worker._id} className="border-b border-slate-100 hover:bg-slate-50 transition-all">
                      <td className="p-6 font-semibold">{String(worker._id).slice(-6).toUpperCase()}</td>
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <img src={worker.image} alt={worker.name} className="w-12 h-12 rounded-full object-cover" />
                          <div>
                            <span className="font-semibold block">{worker.name}</span>
                            <span className="text-sm text-slate-500">{worker.experience} yrs exp</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-6">{worker.serviceType}</td>
                      <td className="p-6">{worker.location}</td>
                      <td className="p-6">⭐ {worker.rating?.toFixed(1) || "0.0"} / 5</td>
                      <td className="p-6">
                        <div className="flex flex-col gap-2">
                          <span className={`px-4 py-2 rounded-full text-sm font-semibold ${statusColor(worker.status || "Active")}`}>
                            {worker.status || "Active"}
                          </span>
                          {worker.verified ? (
                            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold w-fit">
                              Verified
                            </span>
                          ) : (
                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold w-fit">
                              Not Verified
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-6 font-bold text-indigo-600">₹{Number(worker.price || 0).toLocaleString("en-IN")}/day</td>
                      <td className="p-6">
                        <div className="flex flex-col gap-2">
                          <select
                            value={worker.status || "Active"}
                            onChange={(e) => handleStatusChange(worker._id, e.target.value)}
                            className="px-3 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 outline-none"
                          >
                            <option value="Active">Active</option>
                            <option value="Pending">Pending</option>
                            <option value="Blocked">Blocked</option>
                          </select>
                          <button onClick={() => confirmDelete(worker._id)} className="px-3 py-2 rounded-xl bg-red-100 text-red-700 font-semibold hover:bg-red-200">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-slate-50 flex justify-between items-center">
              <span className="text-slate-500">Showing {filteredWorkers.length} workers</span>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-xl bg-white shadow">1</button>
                <button className="w-10 h-10 rounded-xl bg-indigo-600 text-white shadow">2</button>
                <button className="w-10 h-10 rounded-xl bg-white shadow">3</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AddWorkerModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSuccess={fetchWorkers}
      />
      <Footer />
    </>
  );
};

export default ManageWorkers;