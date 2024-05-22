import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLogin from "../pages/User/UserLogin";
import UserSignup from "../pages/User/UserSignup";
import UserHome from "../pages/User/UserHome";
import About from "../pages/User/About";
import Liked from "../pages/User/Liked";
import Playlists from "../pages/User/Playlists";

function UserRouter() {
  return (
    <Routes>
      <Route path="login" element={<UserLogin />} />
      <Route path="signup" element={<UserSignup type={'user'}/>} />
      <Route path="/" element={<UserHome />} />
      <Route path="about" element={<About />} />
      <Route path="liked" element={<Liked />} />
      <Route path="playlists" element={<Playlists />} />
    </Routes>
  );
}

export default UserRouter;
