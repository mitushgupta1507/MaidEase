import { useEffect, useState } from "react";

import DashboardHero from "../components/Admin/DashboardHero";
import DashboardStats from "../components/Admin/DashboardStats";
import RevenueChart from "../components/Admin/RevenueChart";
import RecentBookings from "../components/Admin/RecentBookings";
import RecentUsers from "../components/Admin/RecentUsers";
import TopWorkers from "../components/Admin/TopWorkers";
import QuickActions from "../components/Admin/QuickActions";

import { getDashboardStats } from "../services/adminService";

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response =
          await getDashboardStats();

        setDashboardData(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50">

      <DashboardHero stats={dashboardData} loading={loading} />

      <DashboardStats
        stats={dashboardData}
        loading={loading}
      />

      <RevenueChart
        stats={dashboardData}
        loading={loading}
      />

      <RecentBookings
        bookings={dashboardData?.recentBookings}
        loading={loading}
      />

      <RecentUsers
        users={dashboardData?.recentUsers}
        loading={loading}
      />

      <TopWorkers
        workers={dashboardData?.topWorkers}
        loading={loading}
      />

      <QuickActions />

    </main>
  );
};

export default AdminDashboard;