import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Workers from "./pages/Workers";
import WorkerDetails from "./pages/WorkerDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Bookings from "./pages/Bookings";
import BookingHistory from "./pages/BookingHistory";

import AdminDashboard from "./pages/AdminDashboard";
import ManageWorkers from "./pages/ManageWorkers";
import ManageUsers from "./pages/ManageUsers";
import ManageBookings from "./pages/ManageBookings";

import NotFound from "./pages/NotFound";

// Route Protection
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

function App() {
  const location = useLocation();

  // Hide Navbar & Footer on Admin and Auth pages
  const hideLayout =
    location.pathname.startsWith("/admin") ||
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        {/* ========================= */}
        {/* Public Routes */}
        {/* ========================= */}

        <Route path="/" element={<Home />} />

        <Route path="/workers" element={<Workers />} />

        <Route
          path="/workers/:id"
          element={<WorkerDetails />}
        />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        {/* ========================= */}
        {/* Protected User Routes */}
        {/* ========================= */}

        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />

          <Route path="/bookings" element={<Bookings />} />

          <Route
            path="/booking-history"
            element={<BookingHistory />}
          />
        </Route>

        {/* ========================= */}
        {/* Admin Routes */}
        {/* ========================= */}

        <Route element={<AdminRoute />}>
          {/* Redirect /admin -> /admin/dashboard */}
          <Route
            path="/admin"
            element={<Navigate to="/admin/dashboard" replace />}
          />

          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />

          <Route
            path="/admin/workers"
            element={<ManageWorkers />}
          />

          <Route
            path="/admin/users"
            element={<ManageUsers />}
          />

          <Route
            path="/admin/bookings"
            element={<ManageBookings />}
          />
        </Route>

        {/* ========================= */}
        {/* 404 */}
        {/* ========================= */}

        <Route path="*" element={<NotFound />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;