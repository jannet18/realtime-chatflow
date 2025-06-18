import { Users } from "lucide-react";
import React from "react";

function UsersLayout() {
  return (
    <div className="p-4">
      <div className="flex items-center mb-3 gap-1">
        <Users className="w-4 h-4 mr-2 text-green-400" />
        <span className="text-sm font-medium">Online</span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          <div className="relative">
            <div className="w-8 h-9 bg-gradient-to-r from-blue-500 to-purplr-500 rounded-full flex items-center justify-center text-sm"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-800"></div>
          </div>
          <span className="text-sm"></span>
        </div>
      </div>
    </div>
  );
}

export default UsersLayout;
