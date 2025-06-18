import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

const Input = ({ type, value, onChange, placeholder, label }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center p-3 lg:p-4">
      <div className="text-white/80">{label}</div>
      <div className="mt-2 relative">
        <input
          type={
            type == "password" ? (showPassword ? "text" : "password") : type
          }
          required
          placeholder={placeholder}
          value={value}
          className="block text-gray-900 rounded-md font-medium w-full bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          onChange={(e) => onChange(e)}
        />
        {type === "password" && (
          <>
            {showPassword ? (
              <Eye
                onClick={() => toggleShowPassword()}
                className="text-blue-500 cursor-pointer absolute bottom-1 right-3"
              />
            ) : (
              <EyeOff
                onClick={() => toggleShowPassword()}
                className="text-slate-400 cursor-pointer absolute bottom-1 right-3"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
