import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./pages/User/UserLogin";
import UserSignup from './pages/User/UserSignup'
import UserHome from "./pages/User/UserHome";
import AdminLogin from './pages/admin/AdminLogin'
import AdminSignup from './pages/admin/AdminSignup'
import ArtistLogin from './pages/Artist/ArtistLogin'
import ArtistSignup from "./pages/Artist/ArtistSignup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<UserLogin />} />
        <Route path="signup" element={<UserSignup />} />
        <Route path="/" element={<UserHome />} />
        <Route path="adminLogin" element={<AdminLogin />} />
        <Route path="adminSignup" element={<AdminSignup />} />
        <Route path="artistLogin" element={<ArtistLogin />} />
        <Route path="artistSignup" element={<ArtistSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
