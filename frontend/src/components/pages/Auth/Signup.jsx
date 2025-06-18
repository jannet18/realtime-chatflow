import React, { useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import { API_URLS } from "../../../utils/apiPath";
import { validateEmail } from "../../../utils/helper";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/UserContext";
import ProfilePhotoSelector from "../../inputs/ProfilePhotoSelector";
import uploadImage from "../../../utils/uploadImage";
import Input from "../../inputs/Input";
import { useAuth } from "../../context/UserContext";
import toast from "react-hot-toast";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState(null);

  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let profileImageUrl = "";

    if (!fullName) {
      setError("Please enter your Full Name.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter your email.");
      return;
    }
    if (!fullName) {
      setError("Please enter your password.");
      return;
    }
    setError("");

    try {
      if (profilePic) {
        const imageRes = await uploadImage(profilePic);
        profileImageUrl = imageRes.imageUrl;
      }
      const response = await axiosInstance.post(
        API_URLS.AUTH.REGISTER,
        {
          fullName,
          email,
          password,
          profileImageUrl,
        },
        { withCredentials: true }
      );
      if (response?.data) {
        setUser(user);
        // console.log(response.data);
        navigate("/dashboard");
        toast.success("Account created successfully!");
      }
    } catch (error) {
      const message = error.response.message || error.response;
      setError("Something went wrong. Please try again later.", error);
      toast.error(message);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
          Create an Account
        </h2>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <form className="" onSubmit={handleSubmit}>
          <div className="flex items-center justify-center mt-10">
            <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          </div>

          <Input
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            placeholder="Jane Doe"
            type="text"
            label="Full Name"
          />

          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="text"
            label="Email Address"
            placeholder="janedoe@gmail.com"
          />
          <div>
            <Input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="password"
              placeholder="Min 8 characters"
              type="password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:text-blue-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
