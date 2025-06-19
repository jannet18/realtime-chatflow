import React from "react";
import { useAuth } from "../../context/UserContext";
import { useMessage } from "../../context/messageContext";

function Messages() {
  const { user } = useAuth();
  const { messages, selectedUser } = useMessage();

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      <div>
        {messages.map((msg, index) => {
          const isMe = msg.senderId === user._id;
          return (
            <div
              key={index}
              className={`flex ${isMe ? "justify-end" : "justify-start"} mb-4`}
            >
              <div
                className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
                  isMe ? "flex-row-reverse space-x-reverse" : ""
                }`}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-sm flex-shrink-0">
                  {isMe
                    ? user.fullName?.charAt(0)
                    : selectedUser?.fullName?.charAt(0)}
                </div>
                <div
                  className={`${
                    isMe ? "bg-blue-600" : "bg-gray-700"
                  } rounded-2xl px-4 py-2`}
                >
                  <p className="text-xs font-medium text-blue-400 mb-1">
                    {isMe ? "You" : selectedUser(fullName)}
                  </p>
                  <p className="text-sm break-words">{msg.message}</p>
                  <p className="text-xs text-gray-300 mt-1">
                    {new Date(msg.createAt)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex justify-center my-4">
          <span className="bg-gray-700 px-3 py-2 rounded-full text-xs text-gray-300">
            timestamp
          </span>
        </div>
      </div>
    </div>
  );
}

export default Messages;
