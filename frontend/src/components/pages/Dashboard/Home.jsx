import React from "react";
import { Search, Settings } from "lucide-react";
import Input from "../../inputs/Input";
import UsersLayout from "../../../layout/UsersLayout";
import MainLayout from "../../../layout/MainLayout";

function Home() {
  return (
    // <MainLayout />
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-blue-400">ChatFlow</h1>
            <Settings />
          </div>
          <div className="relative">
            <Search className="w-5 h-5 absolute right-8 top-8 text-gray-400 z-10" />
            <Input type="text" placeholder="Search" className="" />
          </div>
        </div>
        <UsersLayout />
        <MainLayout />
      </div>
    </div>
  );
}

export default Home;
