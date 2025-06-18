const Message = require("../models/Message");
const User = require("../models/User");
const cloudinary = require("cloudinary").v2;

const getSidebarUsers = async (req, res) => {
  // get all users except the current user logged in
  try {
    const isLoggedInUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: isLoggedInUserId },
    }).select("-password");

    res.status(201).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getMessages = async (req, res) => {
  try {
    const { id: senderToChat } = req.params;
    const myId = req.user._id;
    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: senderToChat },
        { senderId: senderToChat, receiverId: myId },
      ],
    });
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error getting messages: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const { senderId } = req.user._id;

    let imageUrl;
    if (image) {
      const imageUploadRes = await cloudinary.uploader.upload(image);
      imageUrl = imageUploadRes.secure_url;
    }

    const newMessage = await Message.create({
      receiverId,
      senderId,
      text,
      imageUrl,
    });

    //todo: realtime functionality => socket.io
    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error sending message", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = { getSidebarUsers, getMessages, sendMessage };
