import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/UserContext";

function Navbar() {
  const { user, setUser, clearUser } = useAuth();
  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
  backdrop-blur-lg"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">ChatFlow</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={"/settings"}
              className={`
            btn btn-sm gap-2 transition-colors
            
            `}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {user && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button
                  className="flex gap-2 items-center cursor-pointer"
                  onClick={clearUser}
                >
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
// import { Link, useNavigate } from "react-router-dom";

// import { LogOut, MessageSquare, Settings, User } from "lucide-react";
// import { useAuth } from "../../context/UserContext";

// const Navbar = () => {
//   const { clearUser, setUser } = useAuth();
//   const navigate = useNavigate();

//   return (
//     <header
//       className="border-b border-base-300 fixed w-full top-0 z-40
//     backdrop-blur-lg bg-slate-700"
//     >
//       <div className="container mx-auto px-4 h-16">
//         <div className="flex items-center justify-between h-full">
//           <div className="flex items-center gap-8">
//             <Link
//               to="/"
//               className="flex items-center gap-2.5 hover:opacity-80 transition-all"
//             >
//               <div className="w-9 h-9 rounded-lg bg-gray-800/10 flex items-center justify-center">
//                 <MessageSquare className="w-5 h-5 text-white" />
//               </div>
//               <h1 className="text-lg font-bold text-white">Chatty</h1>
//             </Link>
//           </div>

//           <div className="flex items-center justify-center gap-4 text-white">
//             <Link
//               to={"/settings"}
//               className={`
//               btn btn-sm gap-2 transition-colors

//               `}
//             >
//               <Settings className="w-4 h-4" />
//               <span className="hidden sm:inline">Settings</span>
//             </Link>

//             {setUser && (
//               <>
//                 <Link to={"/profile"} className={`btn btn-sm gap-2`}>
//                   <User className="size-5" />
//                   <span className="hidden sm:inline">Profile</span>
//                 </Link>

//                 <button
//                   type="button"
//                   className="flex gap-2 items-center cursor-pointer"
//                   onClick={clearUser}
//                 >
//                   <LogOut className="size-5" />
//                   <Link to="/login" className="hidden sm:inline">
//                     Logout
//                   </Link>
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Navbar;
