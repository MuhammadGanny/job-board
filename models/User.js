// User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: String,
  password: String,
  isAdmin: Boolean, 
  // Other user fields
});

module.exports = mongoose.model("User", userSchema);
