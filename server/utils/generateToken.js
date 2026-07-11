import jwt from "jsonwebtoken";

const generateToken = (id) => {
  console.log("========== GENERATE TOKEN ==========");
  console.log("JWT_SECRET:", process.env.JWT_SECRET);
  console.log("ID:", id);
  console.log("====================================");

  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};

export default generateToken;