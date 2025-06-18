import React from "react";

function Messages() {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      <div>
        <div className="flex justify-center my-4">
          <span className="bg-gray-700 px-3 py-2 rounded-full text-xs text-gray-300">
            timestamp
          </span>
        </div>
        <div className={`flex ${"" ? "justify-end" : "justify-start"} mb-4`}>
          <div
            className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
              "" ? "flex-row-reverse space-x-reverse" : ""
            }`}
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-sm flex-shrink-0">
              AL
            </div>
            <div
              className={`${
                "" ? "bg-blue-600" : "bg-gray-700"
              } rounded-2xl px-4 py-2`}
            >
              <p className="text-xs font-medium text-blue-400 mb-1">user</p>
              <p className="text-sm break-words">message</p>
              <p className="text-xs text-gray-300 mt-1">time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
