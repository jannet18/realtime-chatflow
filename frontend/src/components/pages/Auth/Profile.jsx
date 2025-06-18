import React, { useRef, useState } from "react";
import { useAuth } from "../../context/UserContext";
import { Camera, Mail, User } from "lucide-react";

function Profile({ image, setImage }) {
  const { user, setUser, isUpdatingProfile, updateProfile } = useAuth();
  const [selectedImg, setSelectedImg] = useState(null);
  const imageRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleImageUpload = async (e) => {
    const file = e.target?.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);

    reader.onerror = () => {
      console.error("Image reading failed!");
    };
  };

  const handleImageChange = () => {};

  //   const onChooseFile = () => {
  //     imageRef.current.click();
  //   };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(preview);
  };
  return (
    <div className="bg-gray-800 p-20 text-white/80">
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="rounded-xl p-6 space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold ">Profile</h1>
            <p className="mt-8">Your profile information</p>
          </div>

          {/* avatar upload section */}

          <div className="flex flex-col items-center gap-4">
            {!image ? (
              <>
                <div className="relative">
                  <img
                    src={selectedImg || "/avatar.png"}
                    alt="Profile"
                    className="w-32 h-32 text-center rounded-full object-cover border-2 bg-purple-100"
                  />
                  <label
                    htmlFor="avatar-upload"
                    className={`
              absolute bottom-5 right-4 
              bg-blue-800/80 hover:scale-105
              p-2 rounded-full cursor-pointer 
              transition-all duration-200
              ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
            `}
                  >
                    <Camera className="w-4 h-4 text-base-200" />
                    <input
                      type="file"
                      id="avatar-upload"
                      className="hidden "
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={isUpdatingProfile}
                    />
                  </label>
                </div>
                <p className="text-sm text-zinc-400">
                  {isUpdatingProfile
                    ? "Uploading..."
                    : "Click the camera icon to update your photo"}
                </p>
              </>
            ) : (
              <div className="relative">
                <img
                  src={previewUrl}
                  alt="profile photo"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <button
                  type="button"
                  className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 right-1"
                  onClick={handleRemoveImage}
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </div>
              <p className="p-4 rounded-lg border">{user?.fullName}</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </div>
              <p className="p-4 bg-base-200 rounded-lg border">{user?.email}</p>
            </div>
          </div>

          <div className="mt-6 bg-base-300 rounded-xl p-6">
            <h2 className="text-lg font-medium  mb-4">Account Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                <span>Member Since</span>
                {/* <span>{user.createdAt?.split("T")[0]}</span> */}
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
}

export default Profile;
