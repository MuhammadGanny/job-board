const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: true }, // Mark this user as an admin
  // Add other admin-specific fields here
});

// Hash the password before saving it to the database
adminSchema.pre("save", async function (next) {
  const admin = this;
  if (admin.isModified("password")) {
    admin.password = await bcrypt.hash(admin.password, 10);
  }
  next();
});

module.exports = mongoose.model("Admin", adminSchema);
