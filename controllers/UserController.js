// UserController.js
const User = require("../models/User");
// const bcrypt = require("bcrypt");


exports.register = async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // Hash the password before storing it
      // const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });
  
      await newUser.save();
  
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error registering user" });
    }
  };

// Implement user registration, login, and other actions
