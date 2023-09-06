const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const jobPostRoutes = require("./routes/jobPostRoutes");
const user = require("./models/User")

const app = express();
const mongoURI = "mongodb+srv://test:testing123@cluster0.nqzaqxd.mongodb.net/?retryWrites=true&w=majority"
// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB", err));

// Middleware and route configuration
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/jobPosts", jobPostRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
