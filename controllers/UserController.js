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
        password //: hashedPassword,
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
  
      // Compare the provided password with the password stored in the database
      if (password === user.password) {
        // You can create a token here for user authentication (e.g., using JWT)
        // Return the token to the client
        // Example:
        // const token = createToken(user);
  
        res.status(200).json({ message: "User logged in successfully", token });
      } else {
        res.status(401).json({ error: "Invalid username or password" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error logging in user" });
    }
  };

// Implement user registration, login, and other actions
