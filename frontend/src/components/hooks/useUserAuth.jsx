import React, { useEffect } from "react";
import { useAuth } from "../context/UserContext";
import axiosInstance from "../../utils/axiosInstance";
import { API_URLS } from "../../utils/apiPath";

async function useUserAuth() {
  useEffect(() => {
    const { user, setUser } = useAuth();

    let isMounted = true;
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get(API_URLS.AUTH.GET_USER, {
          withCredentials: true,
        });

        if (isMounted && response.data) {
          console.log(response.data);
          setUser(user);
        }
      } catch (error) {
        if (error) {
          const message = error.response.data || error.response.data;
          setError(message);
        }
      }
    };
    fetchUser();
  }, []);

  return <div>useUserAuth</div>;
}

export default useUserAuth;
