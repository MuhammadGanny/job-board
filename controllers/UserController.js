// UserController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs"); // Require bcryptjs

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const saltRounds = 10; // You can adjust this value for the desired level of security

    const newUser = new User({
      username,
      email,
      password: bcrypt.hashSync(password, saltRounds), // Hash the password
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by their username
    const user = await User.findOne({ username });

    // If the user doesn't exist, return an error
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    if (bcrypt.compareSync(password, user.password)) {
      // Passwords match, proceed with login
      res.status(200).json({ message: "User logged in successfully" });
    } else {
      // Passwords do not match, return an error
      res.status(401).json({ error: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error logging in user" });
  }
};


// Implement user registration, login, and other actions
