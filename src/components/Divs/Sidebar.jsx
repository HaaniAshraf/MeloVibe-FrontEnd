import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdDashboard, MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import { FaBars, FaRegBell } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { PiMusicNotesPlusFill } from "react-icons/pi";
import { GiMusicalNotes } from "react-icons/gi";
import Logo from "../../assets/trans-logo.png";
import Swal from "sweetalert2";
import { useArtist } from "../../context/ArtistContext";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  const { logout } = useArtist();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Logout",
      cancelButtonText: "Cancel",
      backdrop: "rgba(0,0,0,0.7)",
      customClass: {
        container: "custom-swal-container",
        popup: "custom-swal-popup",
        title: "custom-swal-title",
        text: "custom-swal-text",
        confirmButton: "custom-swal-confirm-button",
        cancelButton: "custom-swal-cancel-button",
        backdrop: "rgba(0,0,0,0.7)",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("jwtToken");
        logout();
        navigate("/artist/login");
      }
    });
  };

  return (
    <>
      <div className="lg:hidden">
        <button
          onClick={toggleSidebar}
          className="flex items-center text-2xl px-3 pt-5 text-gray-400 hover:text-white duration-150"
        >
          <FaBars />
        </button>
      </div>
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 w-[16rem] bg-gray-950 z-10 text-white transition-all duration-300 lg:translate-x-0 ${
          isOpen ? "" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-6 border-b border-gray-700">
            <Link to={"/"}>
              <div className="flex items-center justify-center">
                <img src={Logo} alt="" className="xxs:h-10 sm:h-12 lg:h-16" />
                <h1 className="xxs:text-2xl sm:text-3xl lg:text-4xl font-semibold font-signature gradient-bg">
                  MeloVibe
                </h1>
              </div>
            </Link>
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-gray-400 text-2xl hover:text-white duration-150"
            >
              <IoClose />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto">
            <nav className="px-4 py-6">
              <ul>
                <li>
                  <NavLink
                    to="/artist/artist-home"
                    className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-900 hover:text-pink-400 duration-150 rounded text-lg"
                    activeClassName="bg-gray-800"
                  >
                    <MdDashboard className="w-5 h-5 mr-2" />
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/artist/my-songs"
                    className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-900 hover:text-pink-400 duration-150 rounded text-lg"
                    activeClassName="bg-gray-800"
                  >
                    <GiMusicalNotes className="w-5 h-5 mr-2" />
                    My Songs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/artist/add-music"
                    className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-900 hover:text-pink-400 duration-150 rounded text-lg"
                    activeClassName="bg-gray-800"
                  >
                    <PiMusicNotesPlusFill className="w-5 h-5 mr-2" />
                    Add Song
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/artist/artist-profile"
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
            <button
              onClick={handleLogout}
              className="flex items-center text-lg px-4 text-gray-300 hover:text-red-400 duration-150"
            >
              <MdLogout className="w-5 h-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
