import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLogin from "../pages/User/UserLogin";
import UserSignup from "../pages/User/UserSignup";
import UserOtp from "../pages/User/UserOtp";
import ForgotPassUser from "../pages/User/ForgotPassUser";
import NewPassUser from "../pages/User/NewPassUser";
import About from "../pages/User/About";
import Profile from "../pages/User/Profile";
import Liked from "../pages/User/Liked";
import Playlists from "../pages/User/Playlists";
import UserLayout from "../layout/UserLayout";

function UserRouter() {
  return (
    <Routes>
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup type={"user"} />} />
      <Route path="/otp" element={<UserOtp />} />
      <Route path="/inputEmail" element={<ForgotPassUser />} />
      <Route path="/newPassword" element={<NewPassUser />} />
      <Route element={<UserLayout />}>
        <Route path="/about" element={<About />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/playlists" element={<Playlists />} />
      </Route>
    </Routes>
  );
}

export default UserRouter;
