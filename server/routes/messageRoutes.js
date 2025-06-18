const express = require("express");
const { authMiddleware } = require("../middlewares/auth.Middleware");
const {
  getSidebarUsers,
  getMessages,
  sendMessage,
} = require("../controllers/getSidebarUsers");

const router = express.Router();

router.get("/users", authMiddleware, getSidebarUsers);
router.get("/:id", authMiddleware, getMessages);
router.post("", authMiddleware, sendMessage);
module.exports = router;
