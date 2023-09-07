// userRoutes.js
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");



router.post("/register",UserController.register)

router.post("/login", UserController.login);
// Define routes for user actions (registration, login, etc.)
module.exports = router;