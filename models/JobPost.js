// JobPost.js
const mongoose = require("mongoose");

const jobPostSchema = new mongoose.Schema({
  jobTitle: String,
  description: String,
  location: String,
  deadline: Date,
  // Other job post fields
});

module.exports = mongoose.model("JobPost", jobPostSchema);
