const bcrypt = require("bcryptjs");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

// POST /api/auth/register
const registerUser = async (req, res) => {
  try {
    const { name, email, password, userType } = req.body;

    if (!name || !email || !password || !userType) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      userType,
    });

    return res.status(201).json({
      message: "Account create successfully",
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

// POST /api/auth/login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    return res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        userType: user.userType,
      },
      token: generateToken(user._id),
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

// GET /api/auth/me
  const getCurrentUser = (req, res) => {
    res.json({
      user: req.user,
    });
  };


module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
};
