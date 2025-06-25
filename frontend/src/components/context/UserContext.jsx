import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { API_URLS } from "../../utils/apiPath";
import toast from "react-hot-toast";
import { useSocket } from "./socketContext";

export const UserContext = createContext();

export const useAuth = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const socket = useSocket();

  const fetchUser = async () => {
    let isMounted = true;
    try {
      const response = await axiosInstance.get(API_URLS.AUTH.GET_USER, {
        withCredentials: true,
      });

      if (isMounted && response.data) {
        console.log(response.data);
        setUser(response.data);
        toast.success("Success");
      }
    } catch (error) {
      if (error) {
        console.error(
          "Failed to fetch user:",
          error.response?.data || error.message
        );
        const message = error.response?.data || error.response?.data;
        toast.error(message);
      }
    }
  };

  useEffect(() => {
    let isMounted = true;
    // if (isAuthenticated) {
    fetchUser();
    // }
    return () => {
      isMounted = false;
    };
  }, [setUser]);

  useEffect(() => {
    if (user && socket && !socket.connected) {
      socket.connect();
      socket.emit("authenticated", { userId: user.id, token: user.token });
    } else if (!user && socket && socket.connected) {
      socket.disconnect();
    }
  }, [socket, user]);
  // Fetch user on page load
  // Logout
  const clearUser = async () => {
    try {
      await axiosInstance.post(API_URLS.AUTH.LOGOUT);
      setUser(null);
      toast.success("Logout successful!");
    } catch (error) {
      // console.error("Logout failed.", error);
      toast.error("Logout failed!", error);
    }
  };

  //   Update User
  const updateUser = async (updatedUser) => {
    try {
      const response = await axiosInstance.put(
        API_URLS.AUTH.UPDATE_USER,
        updatedUser
      );
      setUser(response.data);
      toast.success("User updated!");
      return { success: true };
    } catch (error) {
      toast.error("Failed to update user:", error);
      return {
        sucess: false,
        messgae: error.response.data.message || "Update failed.",
      };
    }
  };

  const updateProfile = async (data) => {
    setLoading(true);
    try {
      const response = await axiosInstance.put(
        API_URLS.AUTH.UPDATE_PROFILE,
        data,
        { withCredentials: true }
      );
      setUser(response?.data);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.log("Error updating profile:", error);
      toast.error("Error updating profile:", error.response?.message);
    } finally {
      setUser((prev) => ({ ...prev, loading: true }));
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    fetchUser,
    setUser,
    onlineUsers,
    setOnlineUsers,
    setLoading,
    isAuthenticated: !!user,
    isUpdatingProfile: !!user,
    clearUser,
    updateUser,
    updateProfile,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
