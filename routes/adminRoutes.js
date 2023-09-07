const express = require('express');
const router = express.Router();
const isAdmin = require('../middlewares/isAdmin');
const AdminController = require('../controllers/AdminController');


router.get('/users', isAdmin, AdminController.getUserList);
// Example route that requires admin privileges
router.post('/suspend-user/:userId', isAdmin, AdminController.suspendUser);

// Example route that requires admin privileges
router.post('/ban-user/:userId', isAdmin, AdminController.banUser);

module.exports = router;
