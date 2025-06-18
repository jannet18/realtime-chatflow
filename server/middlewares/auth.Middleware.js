const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Not authenticated!" });
  }
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    user = await User.findById(user._id).select("-password");
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid Credentials!" });
  }
};

module.exports = { authMiddleware };
