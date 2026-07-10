import api from "./api";

// ==============================
// Login
// ==============================
export const loginUser = async (userData) => {
  const { data } = await api.post("/auth/login", userData);

  if (data.token) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  }

  return data;
};

// ==============================
// Register
// ==============================
export const registerUser = async (userData) => {
  const { data } = await api.post("/auth/register", userData);

  if (data.token) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  }

  return data;
};

// ==============================
// Get Logged In User Profile
// ==============================
export const getProfile = async () => {
  const { data } = await api.get("/auth/profile");
  return data;
};

// ==============================
// Get Current User
// ==============================
export const getCurrentUser = () => {
  const user = localStorage.getItem("user");

  return user ? JSON.parse(user) : null;
};

// ==============================
// Check Authentication
// ==============================
export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

// ==============================
// Logout
// ==============================
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};