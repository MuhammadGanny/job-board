// User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: String,
  password: String, // Hashed password will be stored
  // Other user fields
});

module.exports = mongoose.model("User", userSchema);
