// controllers/authController.js
console.log("JWT Secret:", process.env.JWT_SECRET);
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// Helper: Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// -------------------------
//  REGISTER CONTROLLER
// -------------------------
export const registerUser = async (req, res) => {
  try {
    const { rollNo, fullName, email, password } = req.body;

    // Validation
    if (!rollNo || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check existing user
    const existingUser = await User.findOne({ $or: [{ email }, { rollNo }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email or roll number already exists" });
    }

    // Create user
    const user = await User.create({
      rollNo,
      fullName,
      email,
      password,
    });

    // Generate JWT
    const token = generateToken(user._id);

    // Return response (excluding password)
    res.status(201).json({
      _id: user._id,
      rollNo: user.rollNo,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      preferences: user.preferences,
      token,
    });
  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ message: "Server error during registration" });
  }
};

// -------------------------
//  LOGIN CONTROLLER
// -------------------------
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "Please provide email and password" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    // Check password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    // Generate JWT
    const token = generateToken(user._id);

    // Return response
    res.status(200).json({
      _id: user._id,
      rollNo: user.rollNo,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      preferences: user.preferences,
      token,
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Server error during login" });
  }
};
