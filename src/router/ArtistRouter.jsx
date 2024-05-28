import React from "react";
import { Routes, Route } from "react-router-dom";
import ArtistLogin from "../pages/Artist/ArtistLogin";
import ArtistSignup from "../pages/Artist/ArtistSignup";
import ArtistHome from "../pages/Artist/ArtistHome";

function ArtistRouter() {
  return (
    <Routes>
      <Route path="/login" element={<ArtistLogin />} />
      <Route path="/signup" element={<ArtistSignup type={"artist"} />} />
      <Route path="/artistHome/:email" element={<ArtistHome />} />
    </Routes>
  );
}

export default ArtistRouter;
