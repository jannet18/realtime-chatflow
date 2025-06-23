import React, { useEffect } from "react";
import ChatHeader from "../inputs/ChatHeader";
import MessageInput from "../inputs/MessageInput";
import { useMessage } from "../context/messageContext";
import { formatMessageTime } from "../../utils/helper";

function ChatContainer() {
  const { messages, getMessages, isMessageLoading, selectedUser } =
    useMessage();

  useEffect(() => {
    if (selectedUser._id) {
      getMessages(selectedUser?._id);
    }
  }, [selectedUser._id, getMessages]);

  if (isMessageLoading) return <div>Loading...</div>;

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`chat ${
              message.senderId === user._id ? "chat-end" : "chat-start"
            }`}
            ref={messageEndRef}
          >
            <div className=" chat-image avatar">
              <div className="size-10 rounded-full border">
                <img
                  src={
                    message.senderId === user._id
                      ? user.profilePic || "/avatar.png"
                      : selectedUser.profilePic || "/avatar.png"
                  }
                  alt="profile pic"
                />
              </div>
            </div>
            <div className="chat-header mb-1">
              <time className="text-xs opacity-50 ml-1">
                {formatMessageTime(message.createdAt)}
              </time>
            </div>
            <div className="chat-bubble flex flex-col">
              {message.image && (
                <img
                  src={message.image}
                  alt="Attachment"
                  className="sm:max-w-[200px] rounded-md mb-2"
                />
              )}
              {message.text && <p>{message.text}</p>}
            </div>
          </div>
        ))}
      </div>

      <MessageInput />
    </div>
  );
}

export default ChatContainer;
