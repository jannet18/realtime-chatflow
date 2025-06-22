import React from "react";
import { Search } from "lucide-react";
import Input from "../../inputs/Input";
import UsersLayout from "../../../layout/UsersLayout";
import MainLayout from "../../../layout/MainLayout";
import { useMessage } from "../../context/messageContext";
import { useAuth } from "../../context/UserContext";

function Home() {
  const { user } = useAuth();
  const { selectedUser } = useMessage();
  return (
    <div className="flex h-screen bg-gray-900 text-black">
      <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col">
        <div className="p-4 border-b border-gray-700 mt-20">
          <div className="relative">
            <Search className="w-5 h-5 absolute right-8 top-6.5 text-gray-400 z-10" />
            <Input type="text" placeholder="Search" className="" />
          </div>
        </div>
        <UsersLayout />
        {!selectedUser ? <></> : <></>}
      </div>
      <MainLayout />
    </div>
  );
}

export default Home;
