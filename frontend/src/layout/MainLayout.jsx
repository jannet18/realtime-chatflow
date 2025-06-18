import React from "react";
import Signup from "../components/pages/Auth/Signup";
import AuthImagePattern from "./AuthImagePattern";
import { MessageSquare, MoreVertical } from "lucide-react";
import Messages from "../components/pages/Dashboard/Messages";
import TypingIndicator from "../components/pages/Dashboard/TypingIndicator";
const MainLayout = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 border-b border-gray-700 bg-gry-800">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Chats</h2>
            <p className="text-sm text-gray-400"></p>
          </div>
          <MoreVertical className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
        </div>
      </div>
      <Messages />
      <TypingIndicator />
    </div>
  );
};

export default MainLayout;
