import React, { useState } from "react";
import { Link, NavLink ,useNavigate} from "react-router-dom";
import { useTheme } from "../contextapi/themeContext/theme";

import SideBar from "./Sidebar"
import { useAuthContext } from "../contextapi/Authcontext/Authcontext";
function Navbar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const {user} = useAuthContext()
    const {theme ,toggleTheme} = useTheme()
    // const [themeColor,setThemeColor] = useState("light")

 
console.log("user in navbar", user);
console.log("auth-token", localStorage.getItem("auth-token"));

  //for side bar
  return (
    <div className="bg-gray-900 dark:bg-gray-950 fixed top-0 left-0 z-50 w-full">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-teal-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="white"
            >
              <rect x="3" y="1" width="7" height="12"></rect>
              <rect x="3" y="17" width="7" height="6"></rect>
              <rect x="14" y="1" width="7" height="6"></rect>
              <rect x="14" y="11" width="7" height="12"></rect>
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
            {user?.firstName}
            </span>
          </Link>
          <ul className="flex items-center  space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                aria-label="Our product"
                title="Our product"
                className={({ isActive }) =>
                  `font-medium tracking-wide ${
                    isActive
                      ? "relative transition-all duration-300 ease-linear bottom-2 pb-2 border-b-orange-100 border-b-2 text-orange-600"
                      : "text-gray-100"
                  } transition-colors duration-200 hover:text-teal-accent-400`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/listing"
                aria-label="Our product"
                title="Our product"
                className={({ isActive }) =>
                  `font-medium tracking-wide ${
                    isActive
                      ? "relative transition-all duration-300 ease-linear bottom-2 pb-2 border-b-orange-100 border-b-2 text-orange-600"
                      : "text-gray-100"
                  } transition-colors duration-200 hover:text-teal-accent-400`
                }
              >
                Explore Stays
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addlisting"
                aria-label="Product pricing"
                title="Product pricing"
                className={({ isActive }) =>
                  `font-medium tracking-wide ${
                    isActive
                      ? "relative transition-all duration-300 ease-linear bottom-2 pb-2 border-b-orange-100 border-b-2 text-orange-600"
                      : "text-gray-100"
                  } transition-colors duration-200 hover:text-teal-accent-400`
                }
              >
                Add Listing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                aria-label="About us"
                title="About us"
                className={({ isActive }) =>
                  `font-medium tracking-wide ${
                    isActive
                      ? "relative transition-all duration-300 ease-linear bottom-2 pb-2 border-b-orange-100 border-b-2 text-orange-600"
                      : "text-gray-100"
                  } transition-colors duration-200 hover:text-teal-accent-400`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                aria-label="About us"
                title="About us"
                className={({ isActive }) =>
                  `font-medium tracking-wide ${
                    isActive
                      ? "relative transition-all duration-300 ease-linear bottom-2 pb-2 border-b-orange-100 border-b-2 text-orange-600"
                      : "text-gray-100"
                  } transition-colors duration-200 hover:text-teal-accent-400`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <ul className="flex items-center  space-x-8 lg:flex">
             <li className="text-white text-xl cursor-pointer" onClick={toggleTheme}>
      {theme === "light" ? (
        <i className="fa-solid fa-moon"></i>
      ) : (
        <i className="fa-solid fa-sun"></i>
      )}
    </li>
            <li className="text-white text-xl cursor-pointer">
              <i className="fa-solid fa-bell"></i>
            </li>
            <li>
              {localStorage.getItem("auth-token") ? (
               <img
                  className="w-12 h-12 cursor-pointer rounded-full"
                  src={user.avatar || "/default-avatar.png"}
                  alt=""
                  onClick={() => {
                    setOpen(true);
                  }}
                
                />
      ) : (
        <Link
          to="/login"
          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Login
        </Link>
      )}
    
            </li>
          </ul>
            <SideBar open={open} setOpen={setOpen} navigate={navigate} />
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
