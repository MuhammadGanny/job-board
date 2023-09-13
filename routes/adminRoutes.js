const express = require('express');
const router = express.Router();
const isAdmin = require('../Middleware/isAdmin');
const AdminController = require('../controllers/AdminController');

// Route to register a new admin
router.post("/register", AdminController.registerAdmin);

// Route to log in an admin
router.post("/login", AdminController.loginAdmin);

router.get('/users', isAdmin, AdminController.getUserList);
// Example route that requires admin privileges
router.post('/suspend-user/:userId', isAdmin, AdminController.suspendUser);

// Example route that requires admin privileges
router.post('/ban-user/:userId', isAdmin, AdminController.banUser);

module.exports = router;
