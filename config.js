require('dotenv').config(); // Load environment variables

// Access the secret key using process.env
const secretKey = process.env.JWT_SECRET;
module.exports = {
    secretKey: process.env.JWT_SECRET,
    // Other configuration settings can be added here
};
  