// AdminController.js
const User = require('../models/User');

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
