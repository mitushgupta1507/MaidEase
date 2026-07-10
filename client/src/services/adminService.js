import api from "./api";

// ===============================
// Dashboard
// ===============================

export const getDashboardStats = async () => {
  const { data } = await api.get("/admin/dashboard");
  return data;
};

// ===============================
// Users
// ===============================

export const getAdminUsers = async () => {
  const { data } = await api.get("/admin/users");
  return data;
};

// ===============================
// Workers
// ===============================

export const getAdminWorkers = async () => {
  const { data } = await api.get("/admin/workers");
  return data;
};

export const deleteWorker = async (workerId) => {
  const { data } = await api.delete(`/admin/workers/${workerId}`);
  return data;
};

export const updateWorkerStatus = async (workerId, status) => {
  const { data } = await api.patch(
    `/admin/workers/${workerId}/status`,
    { status }
  );

  return data;
};

// ===============================
// Bookings
// ===============================

export const getAdminBookings = async () => {
  const { data } = await api.get("/bookings/admin/all");
  return data;
};

export const updateAdminBookingStatus = async (
  bookingId,
  status
) => {
  const { data } = await api.put(
    `/bookings/${bookingId}/status`,
    { status }
  );

  return data;
};