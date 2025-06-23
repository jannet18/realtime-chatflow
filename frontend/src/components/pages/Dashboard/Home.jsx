import React from "react";
// import { Search } from "lucide-react";
// import Input from "../../inputs/Input";
// import UsersLayout from "../../../layout/UsersLayout";
import MainLayout from "../../../layout/MainLayout";
import { useMessage } from "../../context/messageContext";
// import { useAuth } from "../../context/UserContext";
import NoChatSelected from "../../Chats/NoChatSelected";
import ChatContainer from "../../Chats/ChatContainer";
import Sidebar from "./Sidebar";

function Home() {
  // const { user } = useAuth();
  const { selectedUser } = useMessage();
  return (
    // <div className="flex h-screen bg-gray-900 text-black">
    //   <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col">
    //     <div className="p-4 border-b border-gray-700 mt-20">
    //       <div className="relative">
    //         <Search className="w-5 h-5 absolute right-8 top-6.5 text-gray-400 z-10" />
    //         <Input type="text" placeholder="Search" className="" />
    //       </div>
    //     </div>
    //     <UsersLayout />
    //     {!selectedUser && !user ? <NoChatSelected /> : <ChatContainer />}
    //   </div>
    //   <MainLayout />
    // </div>
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
          <MainLayout />
        </div>
      </div>
    </div>
  );
}

export default Home;
