import React, { useRef, useState } from "react";
import { Trash2, User, Upload } from "lucide-react";

function ProfilePhotoSelector({ image, setImage }) {
  const imageRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) setImage(file);

    // get image url preview
    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    imageRef.current.click();
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={imageRef}
        onChange={handleImageChange}
        className="hidden"
      />
      {!image ? (
        <div className="relative flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full">
          <User className="text-4xl text-blue-500" />
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full absolute -bottom-1 -right-1"
            onClick={onChooseFile}
          >
            <Upload className="w-5 h-5" />
          </button>
        </div>
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
  );
}

export default ProfilePhotoSelector;
