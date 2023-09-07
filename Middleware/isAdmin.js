// isAdmin.js
function isAdmin(req, res, next) {
    if (req.user && req.user.isAdmin) {
      // User is an admin
      return next();
    } else {
      return res.status(403).json({ error: 'Admin permission required' });
    }
  }
  
module.exports = isAdmin;
  