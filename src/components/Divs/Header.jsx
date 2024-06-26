import React, { useState } from "react";
import Logo from "../../assets/trans-logo.png";
import { IoSearch } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import QueueMusicOutlinedIcon from "@mui/icons-material/QueueMusicOutlined";

function Header() {
  const location = useLocation();
  const [nav, setNav] = useState(false);

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="z-50 fixed w-full px-1 xs:px-2 py-3 flex justify-between items-center bg-gray-950 bg-opacity-90">
      <Link to={"/"}>
        <div className="flex items-center justify-center">
          <img src={Logo} alt="" className="xxs:h-10 sm:h-12 lg:h-16" />
          <h1 className="xxs:text-2xl sm:text-3xl lg:text-4xl font-semibold font-signature gradient-bg">
            MeloVibe
          </h1>
        </div>
      </Link>
      <div className="w-1/2 xxs:w-1/3 xs:w-1/2 md:w-1/3 relative h-9">
        <input
          type="text"
          className="w-full sm:w-full sm:ml pl-2 h-full rounded-md text-white bg-gray-700 bg-opacity-50 placeholder-gray-400 placeholder-pl-2 placeholder-ml-2"
          placeholder="Search..."
        />
        <IoSearch className="cursor-pointer absolute inset-y-0 right-2 sm:right-1 md:right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pink-500" />
      </div>
      <ul className="md:flex hidden items-center gap-10 text-2xl pr-5">
        <Link to={"/"} title="Home">
          <li
            className={location.pathname === "/" ? "active-link" : "nav-item"}
          >
            <HomeRoundedIcon />
          </li>
        </Link>
        <Link to={`/user/profile/`} title="Profile">
          <li
            className={
              location.pathname === "/user/profile" ? "active-link" : "nav-item"
            }
          >
            <AccountCircleOutlinedIcon />
          </li>
        </Link>
        <Link to={"/user/about"} title="About Us">
          <li
            className={
              location.pathname === "/user/about" ? "active-link" : "nav-item"
            }
          >
            <InfoOutlinedIcon />
          </li>
        </Link>
        <Link to={"/user/liked"} title="Liked">
          <li
            className={
              location.pathname === "/user/liked" ? "active-link" : "nav-item"
            }
          >
            <FavoriteBorderRoundedIcon />
          </li>
        </Link>
        <Link to={"/user/playlists"} title="Playlists">
          <li
            className={
              location.pathname === "/user/playlists" ? "active-link" : "nav-item"
            }
          >
            <QueueMusicOutlinedIcon />
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
        <ul
          className={`flex flex-col items-center justify-center text-gray-300 bg-gray-950 bg-opacity-95 absolute top-16 left-0 w-full py-4 transform origin-top transition-transform duration-300 ease-out ${
            nav ? "scale-y-100" : "scale-y-0"
          }`}
        >
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
              to={`/user/profile/`}
              onClick={closeNav}
              className=" hover:text-pink-500 font-semibold text-xl"
            >
              Profile
            </Link>
          </li>
          <li className="my-2">
            <Link
              to={"/user/about"}
              onClick={closeNav}
              className=" hover:text-pink-500 font-semibold text-xl"
            >
              About
            </Link>
          </li>
          <li className="my-2">
            <Link
              to={"/user/liked"}
              onClick={closeNav}
              className=" hover:text-pink-500 font-semibold text-xl"
            >
              Liked
            </Link>
          </li>
          <li className="my-2">
            <Link
              to={"/user/playlists"}
              onClick={closeNav}
              className=" hover:text-pink-500 font-semibold text-xl"
            >
              Playlists
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
