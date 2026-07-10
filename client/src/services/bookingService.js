import api from "./api";

// ==============================
// Create Booking
// ==============================
export const createBooking = async (bookingData) => {
  const { data } = await api.post(
    "/bookings",
    bookingData
  );

  return data;
};

// ==============================
// Get Logged In User Bookings
// ==============================
export const getMyBookings = async () => {
  const { data } = await api.get(
    "/bookings"
  );

  return data;
};

// ==============================
// Cancel Booking
// ==============================
export const cancelBooking = async (bookingId) => {
  const { data } = await api.put(
    `/bookings/${bookingId}/cancel`
  );

  return data;
};

// ==============================
// Admin - Get All Bookings
// ==============================
export const getAllBookings = async () => {
  const { data } = await api.get(
    "/bookings/admin/all"
  );

  return data;
};

// ==============================
// Admin - Update Booking Status
// ==============================
export const updateBookingStatus = async (
  bookingId,
  status
) => {
  const { data } = await api.put(
    `/bookings/${bookingId}/status`,
    { status }
  );

  return data;
};