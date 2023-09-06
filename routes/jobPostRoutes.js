// jobPostRoutes.js
const express = require("express");
const router = express.Router();
const JobPostController = require("../controllers/JobPostController");

// Other routes

// Route to create a new job post
router.post("/", JobPostController.createJobPost);

// Route to edit an existing job post by ID
router.put("/:id", JobPostController.editJobPost);

// Route to delete a job post by ID
router.delete("/:id", JobPostController.deleteJobPost);

router.get("/", JobPostController.getJobPosts);
module.exports = router;

// Define routes for job post actions (create, edit, delete, etc.)
