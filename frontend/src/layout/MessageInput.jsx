import React from "react";
import Input from "../components/inputs/Input";
import { Paperclip } from "lucide-react";

const MessageInput = () => {
  return (
    <div className="p-4 border-t border-gray-700 bg-gray-800">
      <div className="flex items-center space-x-3">
        <div className="flex-1 relative">
          <Input type="text" value="" placeholder="Type your message" />
          <div className="absolute right-2 top1/2 transform -translate-y-1/2 flex space-x-2">
            <Paperclip className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Smile className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
        <button
          onClick=""
          disabled=""
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg p-3 transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
