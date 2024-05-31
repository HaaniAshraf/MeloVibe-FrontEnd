import React from "react";
import { Routes, Route } from "react-router-dom";
import ArtistLogin from "../pages/Artist/ArtistLogin";
import ArtistSignup from "../pages/Artist/ArtistSignup";
import ArtistHome from "../pages/Artist/ArtistHome";
import ArtistOtp from ".././pages/Artist/ArtistOtp";
import ArtistLayout from "../layout/ArtistLayout";
import ArtistProfile from '../pages/Artist/ArtistProfile'

function ArtistRouter() {
  return (
    <Routes>
      <Route path="/login" element={<ArtistLogin />} />
      <Route path="/signup" element={<ArtistSignup type={"artist"} />} />
      <Route path="/otp" element={<ArtistOtp />} />
      <Route element={<ArtistLayout />}>
        <Route path="/artistHome/:id" element={<ArtistHome />} />
        <Route path="/artistProfile/:id" element={<ArtistProfile />} />
      </Route>
    </Routes>
  );
}

export default ArtistRouter;
