// userRoutes.js
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");


router.post("/register",UserController.register)
// Define routes for user actions (registration, login, etc.)
