import User from "../models/User.js";
import Booking from "../models/Booking.js";
import generateToken from "../utils/generateToken.js";

// @desc Register User
// @route POST /api/auth/register
// @access Public
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    if (!name || !email || !password || !phone || !address) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
      phone,
      address,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Login User
// @route POST /api/auth/login
// @access Public
// @desc Login User
// @route POST /api/auth/login
// @access Public
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("========== LOGIN DEBUG ==========");
    console.log("Email Entered:", email);
    console.log("Password Entered:", password);

    const user = await User.findOne({ email });

    console.log("User Found:", !!user);

    if (user) {
      console.log("Database Email:", user.email);
      console.log("Database Role:", user.role);

      const isMatch = await user.matchPassword(password);

      console.log("Password Match:", isMatch);

      if (isMatch) {
        console.log("✅ LOGIN SUCCESS");

        return res.status(200).json({
          success: true,
          message: "Login successful",
          token: generateToken(user._id),
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            role: user.role,
          },
        });
      }
    }

    console.log("❌ LOGIN FAILED");

    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  } catch (error) {
    console.log("LOGIN ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// @desc Get User Profile
// @route GET /api/auth/profile
// @access Private
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select(
      "name email phone address role status createdAt"
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
        status: user.status || "Active",
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Update User Profile
// @route PUT /api/auth/profile
// @access Private
export const updateUserProfile = async (req, res) => {
  try {
    const { name, phone, address } = req.body;
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (name) user.name = name;
    if (phone) user.phone = phone;
    if (address) user.address = address;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
        status: user.status || "Active",
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Get Recent Bookings for Logged In User
// @route GET /api/auth/profile/bookings
// @access Private
export const getUserProfileBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate("worker", "name serviceType")
      .sort({ createdAt: -1 })
      .limit(5);

    const formattedBookings = bookings.map((booking) => ({
      _id: booking._id,
      workerName: booking.worker?.name || "Worker",
      service: booking.worker?.serviceType || "Service",
      status: booking.status,
      date: booking.serviceDate,
      totalAmount: booking.totalAmount,
    }));

    res.status(200).json({
      success: true,
      bookings: formattedBookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};