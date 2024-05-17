import { React, useState } from "react";
import Logo from "../assets/trans-logo.png";
import { IoSearch } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { BiSolidPlaylist } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="z-50 fixed w-full px-1 xs:px-2 py-3 flex justify-between items-center bg-gray-950 bg-opacity-75">
      <div className="flex items-center justify-center">
        <img src={Logo} alt="" className="xxs:h-10 sm:h-12 lg:h-16" />
        <h1 className="xxs:text-2xl sm:text-3xl lg:text-4xl font-semibold font-signature gradient-bg">
          MeloVibe
        </h1>
      </div>
      <div className="w-1/2 xxs:w-1/3 xs:w-1/2 md:w-1/3 relative h-9">
        <input
          type="text"
          className="w-full sm:w-full sm:ml pl-2 h-full rounded-md text-white bg-gray-700 bg-opacity-50 placeholder-gray-400 placeholder-pl-2 placeholder-ml-2"
          placeholder="Search..."
        />
        <IoSearch className="cursor-pointer absolute inset-y-0 right-2 sm:right-1 md:right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text- hover:text-pink-500" />
      </div>
      <ul className="md:flex hidden items-center gap-10 text-2xl pr-5">
        <Link to={"/"}>
          <li
            className={location.pathname === "/" ? "active-link" : "nav-item"}
          >
            <HiHome/>
          </li>
        </Link>
        <Link to={"/about"}>
          <li
            className={
              location.pathname === "/about" ? "active-link" : "nav-item"
            }
          >
            <IoMdInformationCircleOutline/>
          </li>
        </Link>
        <Link to={"/liked"}>
          <li
            className={
              location.pathname === "/liked" ? "active-link" : "nav-item"
            }
          >
            <FaRegHeart/>
          </li>
        </Link>
        <Link to={"/playlists"}>
          <li
            className={
              location.pathname === "/playlists" ? "active-link" : "nav-item"
            }
          >
            <BiSolidPlaylist/>
          </li>
        </Link>
      </ul>
      <div className="md:hidden">
        <button
          onClick={() => setNav(!nav)}
          className="text-3xl pr-2 pt-2 text-gray-200 hover:text-blue-500"
        >
          {nav ? <FaTimes /> : <FaBars />}
        </button>
        {nav && (
            <ul className="flex flex-col items-center justify-center text-gray-300 bg-gray-900 bg-opacity-90 absolute top-16 left-0 w-full py-4">
            <li className="my-2">
              <Link
                to={"/"}
                onClick={closeNav}
                className=" hover:text-pink-500 font-semibold text-xl"
              >
                Home
              </Link>
            </li>
            <li className="my-2">
              <Link
                to={"/about"}
                onClick={closeNav}
                className=" hover:text-pink-500 font-semibold text-xl"
              >
                Profile
              </Link>
            </li>
            <li className="my-2">
              <Link
                to={"/liked"}
                onClick={closeNav}
                className=" hover:text-pink-500 font-semibold text-xl"
              >
                Liked
              </Link>
            </li>
            <li className="my-2">
              <Link
                to={"/playlists"}
                onClick={closeNav}
                className=" hover:text-pink-500 font-semibold text-xl"
              >
                Playlists
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
