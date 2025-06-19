export const API_BASE_URL =
  import.meta.env.MODE === "development" ? "" : import.meta.env.API_BASE_URL;

export const API_URLS = {
  AUTH: {
    REGISTER: "/api/v1/auth/register",
    LOGIN: "/api/v1/auth/login",
    GET_USER: "/api/v1/auth/getUser",
    UPDATE_PROFILE: "/api/v1/auth/update-profile",
    UPDATE_USER: "/api/v1/auth/updateUser",
    LOGOUT: "/api/v1/auth/logout",
  },
  IMAGE: {
    UPLOAD_IMAGE: "/api/v1/auth/upload-image",
  },
  MESSAGES: {
    GET_ALL_USERS: "/api/v1/messages/users",
    GET_USER_MESSAGES: (userId) => `/api/v1/messages/${userId}`,
    SENT_MESSAGE: "/api/v1/auth/send-message",
    // UPDATE_PROFILE: "/api/v1/auth/update-profile",
    // UPDATE_USER: "/api/v1/auth/updateUser",
    // LOGOUT: "/api/v1/auth/logout",
  },
};
