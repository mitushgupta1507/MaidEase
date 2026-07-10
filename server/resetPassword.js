import mongoose from "mongoose";
import dotenv from "dotenv";

import User from "./models/User.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const email = "mitush@gmail.com";
const newPassword = "Admin123";

const user = await User.findOne({ email });

if (!user) {
  console.log("User not found");
  process.exit();
}

// DO NOT HASH HERE
user.password = newPassword;

await user.save();

console.log("✅ Password Reset Successfully");

await mongoose.disconnect();
process.exit();