import axiosInstance from "./axiosInstance";
import { API_URLS } from "./apiPath";

const uploadImage = async (imageFile) => {
  const formData = new FormData();

  formData.append("image", imageFile);

  try {
    const response = await axiosInstance.post(
      API_URLS.IMAGE.UPLOAD_IMAGE,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response?.data || error.message);
    throw error;
    // return { imageUrl: "" };
  }
};

export default uploadImage;
