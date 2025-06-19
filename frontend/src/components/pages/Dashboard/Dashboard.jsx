import { MessageSquare } from "lucide-react";
import React from "react";
import Signup from "../Auth/Signup";
import AuthImagePattern from "../../../layout/AuthImagePattern";

function Dashboard() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-gray-800">
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-blue-800/30 flex items-center justify-center group-hover:bg-blue-800/20 transition-colors"></div>
              {/* message square */}
              <MessageSquare className="size-6 text-blue-500" />
            </div>
            <p className="text-3xl font-semibold text-white/70">
              Get Started with your free account
            </p>
          </div>
        </div>
      </div>
      <Signup />
      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with loved ones!"
      />
    </div>
  );
}

export default Dashboard;
