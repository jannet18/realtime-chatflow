const jwt = require("jsonwebtoken");

const generateTokenAndSetCookie = async (res, userId) => {
  // const jwt = req.cookies.token;
  // if (!user) return res.status(401).json({ message: "Not authenticated" });
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.cookie("jwt", token, {
      httpOnly: true, //prevents XSS attacks cross-site scripting attacks
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict", // CSRF attacks cross-site request forgery attacks
      MaxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return token;
  } catch (error) {
    console.log(error);
  }
};

module.exports = generateTokenAndSetCookie;
