import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import { FaBars, FaRegBell } from "react-icons/fa";
import { IoClose, IoMusicalNotes } from "react-icons/io5";
import Logo from "../../assets/trans-logo.png";

function Sidebar({ artistId }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="lg:hidden">
        <button
          onClick={toggleSidebar}
          className="flex items-center text-2xl px-3 pt-5 text-gray-400 hover:text-white duration-150 focus:outline-none"
        >
          <FaBars />
        </button>
      </div>
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-950 z-10 text-white transition-all duration-300 lg:translate-x-0 ${
          isOpen ? "" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-6 border-b border-gray-700">
            <div className="flex items-center justify-center">
              <img src={Logo} alt="" className="xxs:h-10 sm:h-12 lg:h-16" />
              <h1 className="xxs:text-2xl sm:text-3xl lg:text-4xl font-semibold font-signature gradient-bg">
                MeloVibe
              </h1>
            </div>
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-gray-400 text-2xl hover:text-white duration-150 focus:outline-none"
            >
              <IoClose />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto">
            <nav className="px-4 py-6">
              <ul>
                <li>
                  <NavLink
                    to={`/artist/artistHome/${artistId}`}
                    className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-900 hover:text-pink-400 duration-150 rounded text-lg"
                    activeClassName="bg-gray-800"
                  >
                    <MdDashboard className="w-5 h-5 mr-2" />
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to=""
                    className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-900 hover:text-pink-400 duration-150 rounded text-lg"
                    activeClassName="bg-gray-800"
                  >
                    <IoMusicalNotes className="w-5 h-5 mr-2" />
                    Add Song
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/artist/artistProfile/${artistId}`}
                    className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-900 hover:text-pink-400 duration-150 rounded text-lg"
                    activeClassName="bg-gray-800"
                  >
                    <CgProfile className="w-5 h-5 mr-2" />
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to=""
                    className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-900 hover:text-pink-400 duration-150 rounded text-lg"
                    activeClassName="bg-gray-800"
                  >
                    <FaRegBell className="w-5 h-5 mr-2" />
                    Notifications
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/favorites"
                    className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-900 hover:text-pink-400 duration-150 rounded text-lg"
                    activeClassName="bg-gray-800"
                  >
                    <TiMessages className="w-5 h-5 mr-2" />
                    Messages
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="px-4 py-6 border-t border-gray-700">
            <NavLink
              to=""
              className="flex items-center text-lg px-4 text-gray-300 hover:text-red-400 duration-150"
              activeClassName="text-white"
            >
              <MdLogout className="w-5 h-5 mr-2" />
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
