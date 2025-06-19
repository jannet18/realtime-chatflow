import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { API_URLS } from "../../utils/apiPath";
import toast from "react-hot-toast";

const MessageContext = createContext();

export const useMessage = () => {
  return useContext(MessageContext);
};

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    if (loading) {
      setLoading(true);
    }
    try {
      const response = await axiosInstance.get(API_URLS.MESSAGES.GET_ALL_USERS);
      setUsers(response?.data || []);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const getMessages = async (userId) => {
    if (loading) {
      setLoading(true);
    }
    try {
      const response = await axiosInstance.get(
        `${API_URLS.MESSAGES.GET_USER_MESSAGES}/${userId}`
      );
      setMessages(response?.data || []);
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  // todo: optimize later
  useEffect(() => {
    if (selectedUser) {
      setSelectedUser(users._id);
    }
  }, [selectedUser]);

  return (
    <MessageContext.Provider
      value={{
        messages,
        users,
        selectedUser,
        setMessages,
        getMessages,
        getUsers,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
