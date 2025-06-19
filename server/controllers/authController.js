const { cloudinary } = require("../config/cloudinaryConfig");
const User = require("../models/User");
const generateTokenAndSetCookie = require("../utils/generateTokenAndSetCookie");

const registerUser = async (req, res) => {
  const { fullName, email, password, profileImageUrl } = req.body;

  if (!fullName || !email || !password | !profileImageUrl)
    return res.status(404).json({ message: "All fields are required!" });

  if (password.length < 8) {
    return res
      .status(400)
      .json({ message: "Password must be at least 8 characters." });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists!" });

    const newUser = new User({
      fullName,
      email,
      password,
      profileImageUrl,
    });
    await newUser.save();
    if (newUser) {
      await generateTokenAndSetCookie(res, newUser._id);

      return res.status(201).json({ id: newUser._id, newUser });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({ message: "All fields are required." });
  }

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    if (user) {
      generateTokenAndSetCookie(res, user._id);
      res.status(201).json({ id: user._id, user });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again.",
      error: error.message,
    });
  }
};
const logoutUser = async (req, res) => {
  try {
    res.cookie("token", "", {
      maxAge: 0,
      httpOnly: true,
      expires: new Date(0),
    });
    return res.status(201).json({ message: "Logged out successfully!" });
  } catch (error) {
    console.error(
      "Something went wrong. Please try again later.",
      error.message
    );
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
  } catch (error) {
    console.error(
      "Something went wrong. Please try again later.",
      error.message
    );
    res.status(500).json({ message: "Internal Server Error" });
  }
  // try {
  //   res.status(201).json(req.user);
  //   return;
  // } catch (error) {
  //   console.error(
  //     "Something went wrong. Please try again later.",
  //     error.message
  //   );
  //   res.status(500).json({ message: "Internal Server Error" });
  // }
};

const updateProfile = async (req, res) => {
  try {
    // acquire parameter to update
    const { profileImageUrl } = req.body;
    const userId = req.user._id;
    // update imageurl in cloudinary and user in DB
    const imageUpdate = await cloudinary.uploader.upload(profileImageUrl);
    const updateUser = await User.findByIdAndUpdate(
      { userId, profileImageUrl: imageUpdate.secure_url },
      { new: true }
    );

    res.status(201).json(updateUser);
  } catch (error) {
    console.error(
      "Something went wrong. Please try again later.",
      error.message
    );
    res.status(500).json({ message: "Internal Serve Error" });
  }
};
module.exports = {
  registerUser,
  loginUser,
  getUser,
  logoutUser,
  updateProfile,
};
