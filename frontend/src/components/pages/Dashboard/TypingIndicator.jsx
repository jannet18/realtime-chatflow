import React from "react";

function TypingIndicator() {
  return (
    <div className="flex items-center space-x-2 text-gray-400 text-sm px-4">
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
        <div
          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <span>User is typing</span>
      </div>
      <div>messagesEnd</div>
    </div>
  );
}

export default TypingIndicator;
