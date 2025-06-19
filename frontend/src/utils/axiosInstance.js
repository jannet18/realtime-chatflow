import axios from "axios";
import { API_BASE_URL } from "./apiPath";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    // console.log("Sending", config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      // Not authenticated
      console.warn("User not authenticated. Redirecting to login...");
    } else if (status === 500) {
      console.error("Server error occurred.");
    }

    return Promise.reject(error);
  }
);
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 401) {
//       console.log("Not authenticated. Redirecting to Login...");
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
