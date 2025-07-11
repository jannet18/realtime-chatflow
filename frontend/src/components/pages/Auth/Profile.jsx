// import React, { useRef, useState, useEffect } from "react";
// import { useAuth } from "../../context/UserContext";
// import { Camera, Mail, Trash2, User } from "lucide-react";

// function Profile() {
//   const { user, updateProfile } = useAuth();
//   const imageRef = useRef(null);

//   const [selectedImg, setSelectedImg] = useState(null); // base64 image to send
//   const [previewUrl, setPreviewUrl] = useState(""); // image preview URL
//   const [isUploading, setIsUploading] = useState(false); // upload state

//   // Set initial preview from user data
//   useEffect(() => {
//     if (user?.profileImageUrl) {
//       setPreviewUrl(user.profileImageUrl);
//     }
//   }, [user]);

//   const handleImageUpload = async (e) => {
//     const file = e.target?.files[0];
//     if (!file) return;

//     setIsUploading(true);

//     const reader = new FileReader();
//     reader.readAsDataURL(file);

//     reader.onloadend = async () => {
//       const base64Image = reader.result;
//       setSelectedImg(base64Image);
//       setPreviewUrl(URL.createObjectURL(file)); // temporary local preview

//       try {
//         await updateProfile({ profilePic: base64Image });
//       } catch (error) {
//         console.error("Upload failed:", error);
//       } finally {
//         setIsUploading(false);
//       }
//     };

//     reader.onerror = () => {
//       console.error("Image reading failed.");
//       setIsUploading(false);
//     };
//   };

//   const handleRemoveImage = async () => {
//     setSelectedImg(null);
//     setPreviewUrl("");
//     try {
//       await updateProfile({ profilePic: null });
//     } catch (err) {
//       console.error("Failed to remove image:", err);
//     }
//   };

//   return (
//     <div className="bg-gray-800 p-20 text-white/80">
//       <div className="max-w-2xl mx-auto p-4 py-8">
//         <div className="rounded-xl p-6 space-y-8">
//           <div className="text-center">
//             <h1 className="text-2xl font-semibold">Profile</h1>
//             <p className="mt-8">Your profile information</p>
//           </div>

//           {/* Profile photo section */}
//           <div className="flex flex-col items-center gap-4">
//             <div className="relative">
//               {previewUrl ? (
//                 <img
//                   src={previewUrl || user.profilePic || "/avatar.png"}
//                   alt="Profile"
//                   className="w-32 h-32 rounded-full object-cover border-2 bg-purple-100"
//                 />
//               ) : (
//                 <div className="w-32 h-32 rounded-full flex items-center justify-center bg-purple-100 border-2">
//                   <User className="w-12 h-12 text-blue-500" />
//                 </div>
//               )}

//               <label
//                 htmlFor="avatar-upload"
//                 className={`absolute bottom-5 right-4 p-2 rounded-full cursor-pointer bg-blue-800/80 transition-all duration-200 hover:scale-105 ${
//                   isUploading ? "animate-pulse pointer-events-none" : ""
//                 }`}
//               >
//                 <Camera className="w-4 h-4 text-white" />
//                 <input
//                   type="file"
//                   id="avatar-upload"
//                   className="hidden"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   disabled={isUploading}
//                   ref={imageRef}
//                 />
//               </label>
//             </div>

//             {previewUrl && (
//               <button
//                 onClick={handleRemoveImage}
//                 className="flex items-center gap-2 text-sm text-red-400 hover:text-red-600"
//                 disabled={isUploading}
//               >
//                 <Trash2 className="w-4 h-4" />
//                 Remove photo
//               </button>
//             )}

//             <p className="text-sm text-zinc-400">
//               {isUploading
//                 ? "Uploading..."
//                 : "Click the camera icon to update your photo"}
//             </p>
//           </div>

//           {/* Profile details */}
//           <div className="space-y-6">
//             <div className="space-y-1.5">
//               <div className="text-sm text-zinc-400 flex items-center gap-2">
//                 <User className="w-4 h-4" />
//                 Full Name
//               </div>
//               <p className="p-4 rounded-lg border">{user?.fullName || "—"}</p>
//             </div>

//             <div className="space-y-1.5">
//               <div className="text-sm text-zinc-400 flex items-center gap-2">
//                 <Mail className="w-4 h-4" />
//                 Email Address
//               </div>
//               <p className="p-4 bg-base-200 rounded-lg border">
//                 {user?.email || "—"}
//               </p>
//             </div>
//           </div>

//           {/* Account info */}
//           <div className="mt-6 bg-base-300 rounded-xl p-6">
//             <h2 className="text-lg font-medium mb-4">Account Information</h2>
//             <div className="space-y-3 text-sm">
//               <div className="flex items-center justify-between py-2 border-b border-zinc-700">
//                 <span>Member Since</span>
//                 <span>{user?.createdAt?.split("T")[0] || "—"}</span>
//               </div>
//               <div className="flex items-center justify-between py-2">
//                 <span>Account Status</span>
//                 <span className="text-green-500">Active</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;

import { useRef, useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, Trash2, User } from "lucide-react";
import { useAuth } from "../../context/UserContext";

const Profile = () => {
  const { user, isUpdatingProfile, updateProfile } = useAuth();
  const imageRef = useRef(null);
  const [selectedImg, setSelectedImg] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(""); // image preview URL
  const [isUploading, setIsUploading] = useState(false); // upload state

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsUploading(true);
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      setPreviewUrl(URL.createObjectURL(file)); // temporary local preview

      try {
        await updateProfile({ profilePic: base64Image });
      } catch (error) {
        console.error("Upload failed:", error);
      } finally {
        setIsUploading(false);
      }
    };

    reader.onerror = () => {
      console.error("Image reading failed.");
      setIsUploading(false);
    };
  };

  const handleRemoveImage = async () => {
    setSelectedImg(null);
    setPreviewUrl("");
    try {
      await updateProfile({ profilePic: null });
    } catch (err) {
      console.error("Failed to remove image:", err);
    }
  };

  return (
    <div className="h-screen pt-20">
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="bg-base-300 rounded-xl p-6 space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold ">Profile</h1>
            <p className="mt-2">Your profile information</p>
          </div>

          {/* avatar upload section */}

          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              {previewUrl ? (
                <img
                  src={previewUrl || user?.profilePic || "/avatar.png"}
                  alt="Profile"
                  className="size-32 rounded-full object-cover border-4 "
                />
              ) : (
                <div className="w-32 h-32 rounded-full flex items-center justify-center bg-purple-100 border-2">
                  <User className="w-12 h-12 text-blue-500" />
                </div>
              )}
              <label
                htmlFor="avatar-upload"
                className={`absolute bottom-5 right-4 p-2 rounded-full cursor-pointer bg-blue-800/80 transition-all duration-200 hover:scale-105 ${
                  isUploading ? "animate-pulse pointer-events-none" : ""
                }`}
              >
                <Camera className="w-4 h-4 text-white" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUploading}
                  ref={imageRef}
                />
              </label>
            </div>
            {previewUrl && (
              <button
                onClick={handleRemoveImage}
                className="flex items-center gap-2 text-sm text-red-400 hover:text-red-600"
                disabled={isUploading}
              >
                <Trash2 className="w-4 h-4" />
                Remove photo
              </button>
            )}
            <p className="text-sm text-zinc-400">
              {isUploading
                ? "Uploading..."
                : "Click the camera icon to update your photo"}
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">
                {user?.fullName}
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">
                {user?.email}
              </p>
            </div>
          </div>

          <div className="mt-6 bg-base-300 rounded-xl p-6">
            <h2 className="text-lg font-medium  mb-4">Account Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                <span>Member Since</span>
                <span>{user?.createdAt?.split("T")[0]}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Account Status</span>
                <span className="text-green-500">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
