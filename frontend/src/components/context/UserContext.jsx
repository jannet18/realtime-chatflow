import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { API_URLS } from "../../utils/apiPath";

export const UserContext = createContext();

export const useAuth = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   Fetch user on page load
  const fetchUser = async () => {
    try {
      const response = await axiosInstance.get(API_URLS.AUTH.GET_USER, {
        withCredentials: true,
      });
      if (response.data) {
        setUser(response.data);
      }
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }

    // Call user once on mount
    useEffect(() => {
      fetchUser();
    }, []);
  };
  // Logout
  const clearUser = async () => {
    try {
      await axiosInstance.post(API_URLS.AUTH.LOGOUT);
      setUser(null);
    } catch (error) {
      console.error("Logout failed.", error);
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
      return { success: true };
    } catch (error) {
      console.error("Failed to update user:", error);
      return {
        sucess: false,
        messgae: error.response.data.message || "Update failed.",
      };
    }
  };
  const value = {
    user,
    loading,
    fetchUser,
    setUser,
    isAuthenticated: !!user,
    clearUser,
    updateUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
