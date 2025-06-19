import { Users } from "lucide-react";
import React, { useEffect } from "react";
import { useMessage } from "../components/context/messageContext";

function UsersLayout() {
  const {
    getUsers,
    users = [],
    selectedUser,
    setSelectedUser,
    loading,
  } = useMessage();

  const onlineUsers = [];
  useEffect(() => {
    getUsers();
  }, []);

  if (loading) return <>Loading</>;
  return (
    <div className="p-4">
      <div className="flex items-center mb-3 gap-1">
        <Users className="w-4 h-4 mr-2 text-green-400" />
        <span className="text-sm font-medium">Online</span>
      </div>
      <div className="space-y-2">
        {Array.isArray(users) &&
          users?.map((user, _) => (
            <button
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`w-full p-3 flex items-center gap-3 hover:bg-gray-300 ${
                selectedUser?._id === user._id
                  ? "bg-purple-300 ring-1 ring-purple-300"
                  : ""
              }`}
            >
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
                <div className="relative">
                  <div className="w-8 h-9 bg-gradient-to-r from-blue-500 to-purplr-500 rounded-full flex items-center justify-center text-sm">
                    {user.fullName?.charAt(0)}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-800"></div>
                </div>
                <span className="text-sm">{user.fullName}</span>
              </div>
            </button>
            // <button
            //   key={user._id}
            //   onClick={() => setSelectedUser(user)}
            //   className={`
            //   w-full p-3 flex items-center gap-3
            //   hover:bg-base-300 transition-colors
            //   ${
            //     selectedUser?._id === user._id
            //       ? "bg-base-300 ring-1 ring-base-300"
            //       : ""
            //   }
            // `}
            // >
            //   <div className="relative mx-auto lg:mx-0">
            //     <img
            //       src={user.profilePic || "/avatar.png"}
            //       alt={user.name}
            //       className="size-12 object-cover rounded-full"
            //     />
            //     {onlineUsers.includes(user._id) && (
            //       <span
            //         className="absolute bottom-0 right-0 size-3 bg-green-500
            //       rounded-full ring-2 ring-zinc-900"
            //       />
            //     )}
            //   </div>

            //   {/* User info - only visible on larger screens */}
            //   <div className="hidden lg:block text-left min-w-0">
            //     <div className="font-medium truncate">{user.fullName}</div>
            //     <div className="text-sm text-zinc-400">
            //       {onlineUsers.includes(user._id) ? "Online" : "Offline"}
            //     </div>
            //   </div>
            // </button>
          ))}
      </div>
    </div>
  );
}

export default UsersLayout;
