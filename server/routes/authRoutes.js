const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
  logoutUser,
  updateProfile,
} = require("../controllers/authController");
const { authMiddleware } = require("../middlewares/auth.Middleware");
const upload = require("../middlewares/upload.Middleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", authMiddleware, getUser);
router.get("/getUser", authMiddleware, getUser);
router.get("/update-profile", authMiddleware, updateProfile);
router.post("/logout", logoutUser);
router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file || !req.file.path) {
    return res.status(404).json({ message: "No file uploaded." });
  }
  res.status(200).json({
    message: "Upload successful!",
    imageUrl: req.file.path || req.file.secure_url || "",
  });
});

module.exports = router;
