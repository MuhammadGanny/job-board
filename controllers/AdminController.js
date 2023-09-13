// AdminController.js
const User = require('../models/User');
const Admin = require("../models/Admin"); // Adjust the path as needed


exports.registerAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = new Admin({ username, password });
    await admin.save();
    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error registering admin" });
  }
};
exports.loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (isPasswordValid) {
      // Generate a token here for admin authentication (e.g., using JWT)
      // Return the token to the client
      // Example:
      // const token = createToken(admin);

      res.status(200).json({ message: "Admin logged in successfully", token });
    } else {
      res.status(401).json({ error: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error logging in admin" });
  }
};

exports.suspendUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    // Find the user by ID and update their status to 'suspended'
    await User.findByIdAndUpdate(userId, { status: 'suspended' });
    res.json({ message: 'User suspended successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error suspending user' });
  }
};

exports.banUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    // Find the user by ID and update their status to 'banned'
    await User.findByIdAndUpdate(userId, { status: 'banned' });
    res.json({ message: 'User banned successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error banning user' });
  }
};
exports.getUserList = async (req, res) => {
    try {
      // Retrieve the list of users
      const userList = await User.find({}, 'username email isAdmin'); // You can specify the fields you want to retrieve
  
      res.json(userList);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving user list' });
    }
};
