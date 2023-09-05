// JobPostController.js
const JobPost = require("../models/JobPost");


// Create a new job post
exports.createJobPost = async (req, res) => {
    try {
      const { jobTitle, description, location, deadline } = req.body;
  
      const newJobPost = new JobPost({
        jobTitle,
        description,
        location,
        deadline,
      });
  
      await newJobPost.save();
  
      res.status(201).json({ message: "Job post created successfully", jobPost: newJobPost });
    } catch (error) {
      res.status(500).json({ error: "Error creating job post" });
    }
  };
  
  // Edit an existing job post
  exports.editJobPost = async (req, res) => {
    try {
      const { id } = req.params; // Job post ID
      const { jobTitle, description, location, deadline } = req.body;
  
      // Find the job post by ID and update its fields
      const updatedJobPost = await JobPost.findByIdAndUpdate(id, {
        jobTitle,
        description,
        location,
        deadline,
      });
  
      res.status(200).json({ message: "Job post updated successfully", jobPost: updatedJobPost });
    } catch (error) {
      res.status(500).json({ error: "Error editing job post" });
    }
  };
  
  // Delete a job post
  exports.deleteJobPost = async (req, res) => {
    try {
      const { id } = req.params; // Job post ID
  
      // Find the job post by ID and delete it
      await JobPost.findByIdAndDelete(id);
  
      res.status(200).json({ message: "Job post deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error deleting job post" });
    }
  };

// Implement job post creation, editing, deletion, etc.
