// import React, { useEffect } from "react";
// import { useAuth } from "../context/UserContext";
// import axiosInstance from "../../utils/axiosInstance";
// import { API_URLS } from "../../utils/apiPath";
// import toast from "react-hot-toast";

// function useAuth() {
//   const { setUser } = useAuth();

//   useEffect(() => {
//     let isMounted = true;

//     const fetchUser = async () => {
//       try {
//         const response = await axiosInstance.get(API_URLS.AUTH.GET_USER, {
//           withCredentials: true,
//         });

//         if (isMounted && response.data) {
//           console.log(response.data);
//           setUser(response.data);
//           toast.success("Success");
//         }
//       } catch (error) {
//         if (error) {
//           console.error(
//             "Failed to fetch user:",
//             error.response?.data || error.message
//           );
//           const message = error.response.data || error.response.data;
//           toast.error(message);
//         }
//       }
//     };

//     fetchUser();
//     return () => {
//       isMounted = false;
//     };
//   }, [setUser]);
// }

// export default useUserAuth;
