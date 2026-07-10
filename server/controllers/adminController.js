import User from "../models/User.js";
import Worker from "../models/Worker.js";
import Booking from "../models/Booking.js";

export const getAdminWorkers = async (req, res) => {
  try {
    const workers = await Worker.find({})
      .select(
        "name age gender serviceType experience availability price image rating description location verified status createdAt"
      )
      .sort({ createdAt: -1 });

    const formattedWorkers = workers.map((worker) => ({
      _id: worker._id,
      name: worker.name,
      age: worker.age,
      gender: worker.gender,
      serviceType: worker.serviceType,
      experience: worker.experience,
      availability: worker.availability,
      price: worker.price,
      image: worker.image,
      rating: worker.rating,
      description: worker.description,
      location: worker.location,
      verified: worker.verified,
      status: worker.status || "Active",
      createdAt: worker.createdAt,
    }));

    res.status(200).json({
      success: true,
      workers: formattedWorkers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteAdminWorker = async (req, res) => {
  try {
    const worker = await Worker.findById(req.params.id);

    if (!worker) {
      return res.status(404).json({
        success: false,
        message: "Worker not found",
      });
    }

    await worker.deleteOne();

    res.status(200).json({
      success: true,
      message: "Worker deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateAdminWorkerStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const allowedStatuses = ["Active", "Pending", "Blocked"];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status",
      });
    }

    const worker = await Worker.findById(req.params.id);

    if (!worker) {
      return res.status(404).json({
        success: false,
        message: "Worker not found",
      });
    }

    worker.status = status;
    await worker.save();

    res.status(200).json({
      success: true,
      message: "Worker status updated successfully",
      worker: {
        _id: worker._id,
        status: worker.status,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAdminUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "user" })
      .select("name email phone createdAt role status")
      .sort({ createdAt: -1 });

    const bookingCounts = await Booking.aggregate([
      {
        $group: {
          _id: "$user",
          bookingCount: { $sum: 1 },
        },
      },
    ]);

    const bookingCountMap = new Map(
      bookingCounts.map((entry) => [entry._id.toString(), entry.bookingCount])
    );

    const formattedUsers = users.map((user) => ({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      createdAt: user.createdAt,
      role: user.role,
      status: user.status || "Active",
      bookingCount: bookingCountMap.get(user._id.toString()) || 0,
    }));

    res.status(200).json({
      success: true,
      users: formattedUsers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Admin Dashboard Analytics
// @route GET /api/admin/dashboard
// @access Admin
export const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: "user" });

    const totalWorkers = await Worker.countDocuments();

    const totalBookings = await Booking.countDocuments();

    const revenueResult = await Booking.aggregate([
      {
        $match: {
          paymentStatus: "Paid",
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$totalAmount",
          },
        },
      },
    ]);

    const totalRevenue = revenueResult[0]?.totalRevenue || 0;

    const monthlyRevenueData = await Booking.aggregate([
      { $match: { paymentStatus: "Paid" } },
      {
        $group: {
          _id: {
            month: { $month: "$createdAt" },
            year: { $year: "$createdAt" },
          },
          revenue: { $sum: "$totalAmount" },
        },
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } },
    ]);

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const monthlyRevenue = Array.from({ length: 12 }, (_, index) => {
      const date = new Date();
      date.setMonth(date.getMonth() - 11 + index);

      const key = `${date.getFullYear()}-${date.getMonth() + 1}`;
      const matchedEntry = monthlyRevenueData.find(
        (entry) => `${entry._id.year}-${entry._id.month}` === key
      );

      return {
        month: monthNames[date.getMonth()],
        revenue: matchedEntry?.revenue || 0,
      };
    });

    const recentUsers = await User.find({ role: "user" })
      .select("name email phone createdAt")
      .sort({ createdAt: -1 })
      .limit(5);

    const topWorkers = await Worker.aggregate([
      {
        $lookup: {
          from: "bookings",
          let: { workerId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$worker", "$$workerId"] },
                status: "Completed",
                paymentStatus: "Paid",
              },
            },
          ],
          as: "bookings",
        },
      },
      {
        $addFields: {
          bookings: { $size: "$bookings" },
          earnings: {
            $reduce: {
              input: "$bookings",
              initialValue: 0,
              in: { $add: ["$$value", "$$this.totalAmount"] },
            },
          },
        },
      },
      { $sort: { earnings: -1, bookings: -1, rating: -1 } },
      { $limit: 4 },
    ]);

    const recentBookings = await Booking.find()
      .populate("user", "name email")
      .populate("worker", "name serviceType")
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      success: true,

      stats: {
        totalUsers,
        totalWorkers,
        totalBookings,
        totalRevenue,
      },

      monthlyRevenue,
      recentUsers,
      topWorkers,
      recentBookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};