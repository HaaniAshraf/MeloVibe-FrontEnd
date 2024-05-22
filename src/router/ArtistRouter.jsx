import React from "react";
import { Routes, Route } from "react-router-dom";
import ArtistLogin from "../pages/Artist/ArtistLogin";
import ArtistSignup from "../pages/Artist/ArtistSignup";

function ArtistRouter() {
  return (
    <Routes>
      <Route path="/login" element={<ArtistLogin />} />
      <Route path="/signup" element={<ArtistSignup type={'artist'}/>} />
    </Routes>
  );
}

export default ArtistRouter;
