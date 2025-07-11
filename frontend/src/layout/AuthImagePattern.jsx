import React from "react";

function AuthImagePattern({ title, subtitle }) {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-blue-600/30 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            ></div>
          ))}
        </div>
        <h2 className="text-3xl font-semibold mb-4 text-white/90">{title}</h2>
        <p className="text-lg tracking-wider text-white/90">{subtitle}</p>
      </div>
    </div>
  );
}

export default AuthImagePattern;
