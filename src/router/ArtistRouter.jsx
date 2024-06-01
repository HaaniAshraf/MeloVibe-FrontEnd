import React from "react";
import { Routes, Route } from "react-router-dom";
import ArtistLogin from "../pages/Artist/ArtistLogin";
import ArtistSignup from "../pages/Artist/ArtistSignup";
import ArtistOtp from ".././pages/Artist/ArtistOtp";
import ForgotPassArtist from '../pages/Artist/ForgottPassArtist'
import NewPassArtist from '../pages/Artist/NewPassArtist'
import ArtistHome from "../pages/Artist/ArtistHome";
import ArtistLayout from "../layout/ArtistLayout";
import ArtistProfile from '../pages/Artist/ArtistProfile'

function ArtistRouter() {
  return (
    <Routes>
      <Route path="/login" element={<ArtistLogin />} />
      <Route path="/signup" element={<ArtistSignup type={"artist"} />} />
      <Route path="/otp" element={<ArtistOtp />} />
      <Route path="/inputEmail" element={<ForgotPassArtist />} />
      <Route path="/newPassword" element={<NewPassArtist />} />
      <Route element={<ArtistLayout />}>
        <Route path="/artistHome/:id" element={<ArtistHome />} />
        <Route path="/artistProfile/:id" element={<ArtistProfile />} />
      </Route>
    </Routes>
  );
}

export default ArtistRouter;
