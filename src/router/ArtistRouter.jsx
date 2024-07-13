import React from "react";
import { Routes, Route } from "react-router-dom";
import { ArtistProvider } from "../context/ArtistContext";
import ArtistLogin from "../pages/Artist/ArtistLogin";
import ArtistSignup from "../pages/Artist/ArtistSignup";
import ArtistOtp from "../pages/Artist/ArtistOtp";
import ForgotPassArtist from "../pages/Artist/ForgottPassArtist";
import NewPassArtist from "../pages/Artist/NewPassArtist";
import ArtistHome from "../pages/Artist/ArtistHome";
import ArtistLayout from "../layout/ArtistLayout";
import ArtistProfile from "../pages/Artist/ArtistProfile";
import AddMusic from "../pages/Artist/AddMusic";
import SongsList from "../pages/Artist/SongsList";

function ArtistRouter() {
  return (
    <ArtistProvider>
      <Routes>
        <Route path="/login" element={<ArtistLogin />} />
        <Route path="/signup" element={<ArtistSignup type={"artist"} />} />
        <Route path="/otp" element={<ArtistOtp />} />
        <Route path="/input-email" element={<ForgotPassArtist />} />
        <Route path="/new-password" element={<NewPassArtist />} />
        <Route element={<ArtistLayout />}>
          <Route path="/artist-home" element={<ArtistHome />} />
          <Route path="/artist-profile" element={<ArtistProfile />} />
          <Route path="/add-music" element={<AddMusic />} />
          <Route path="/my-songs" element={<SongsList />} />
        </Route>
      </Routes>
    </ArtistProvider>
  );
}

export default ArtistRouter;
