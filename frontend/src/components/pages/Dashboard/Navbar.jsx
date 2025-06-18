// import { LogOut, MessageSquare, Settings, User } from "lucide-react";
// import React from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../context/UserContext";

// function Navbar() {
//   const { user } = useAuth();
//   return (
//     <nav className="border-gray-200 bg-gray-50 dark:bg-indigo-600 dark:border-indigo-500">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <MessageSquare className="w-6 h-6 text-white" />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
//         </a>
//         <button
//           data-collapse-toggle="navbar-solid-bg"
//           type="button"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-solid-bg"
//           aria-expanded="false"
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>
//         <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
//           <Link to="/settings" className={`text-white flex items-center gap-3`}>
//             <Settings className="w-4 h-4" />
//             <span className="hidden sm:inline">Settings</span>
//           </Link>
//           {user && (
//             <>
//               <Link to="/profile" className={`btn btn-sm gap-2`}>
//                 <User className="w-5 h-5" />
//                 <span className="hidden sm:inline">Profile</span>
//               </Link>

//               <button className="flex gap-2 items-center" onClick={logout}>
//                 <LogOut className="w-5 h-5" />
//                 <span className="hidden sm:inline">Logout</span>
//               </button>
//             </>
//           )}
//           {/* <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
//                 aria-current="page"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 Pricing
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul> */}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import { Link } from "react-router-dom";

import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import { useAuth } from "../../context/UserContext";

const Navbar = () => {
  const { clearUser, setUser } = useAuth();

  return (
    <header
      className="border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-slate-700"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="w-9 h-9 rounded-lg bg-gray-800/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-lg font-bold text-white">Chatty</h1>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-4 text-white">
            <Link
              to={"/settings"}
              className={`
              btn btn-sm gap-2 transition-colors
              
              `}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {setUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button
                  type="button"
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
};
export default Navbar;
