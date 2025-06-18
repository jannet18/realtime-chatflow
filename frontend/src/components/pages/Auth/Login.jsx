import React, { useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import { API_URLS } from "../../../utils/apiPath";
import { useAuth } from "../../context/UserContext";
import Input from "../../inputs/Input";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { setUser, user } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        API_URLS.AUTH.LOGIN,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      if (response?.data) {
        setUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      const message = error?.response?.data.message || error?.message;
      setError(message);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-800">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white/80">
          Login
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-3" onSubmit={handleSubmit}>
          <Input
            className="block text-gray-900 rounded-md font-medium w-full bg-white p-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            type="text"
            label="Email"
            onChange={({ target }) => setEmail(target.value)}
            placeholder="Email Address"
            value={email}
          />

          <Input
            className="block text-gray-900 rounded-md font-medium w-full bg-white p-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            type="password"
            label="Password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            placeholder="Min 8 characters"
          />

          <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-blue-600 hover:text-blue-500"
            >
              Forgot password?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-blue-600 hover:text-blue-500"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
