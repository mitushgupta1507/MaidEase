import api from "./api";

// ==============================
// Get Logged-in User Profile
// ==============================
export const getProfile = async () => {
  const { data } = await api.get("/users/profile");
  return data;
};

// ==============================
// Update User Profile
// ==============================
export const updateProfile = async (profileData) => {
  const { data } = await api.put("/users/profile", profileData);
  return data;
};

// ==============================
// Get User's Recent Bookings
// ==============================
export const getRecentBookings = async () => {
  const { data } = await api.get("/users/profile/bookings");
  return data;
};

// ==============================
// Upload Profile Image (Future)
// ==============================
export const uploadProfileImage = async (formData) => {
  const { data } = await api.put("/users/profile/image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};