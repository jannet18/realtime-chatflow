import React from "react";
import { MoreVertical } from "lucide-react";
import Messages from "../components/pages/Dashboard/Messages";
import TypingIndicator from "../components/pages/Dashboard/TypingIndicator";
import { useMessage } from "../components/context/messageContext";

const MainLayout = () => {
  const { selectedUser } = useMessage();
  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 border-b border-gray-700 bg-gry-800">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">
              {selectedUser?.fullName || "Select a user"}
            </h2>
            <p className="text-sm text-gray-400">{selectedUser?.email}</p>
          </div>
          <MoreVertical className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
        </div>
      </div>
      <Messages />
      {selectedUser && <TypingIndicator />}
    </div>
  );
};

export default MainLayout;
