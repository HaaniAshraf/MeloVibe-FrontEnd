import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./pages/User/UserLogin";
import UserSignup from './pages/User/UserSignup'
import UserHome from "./pages/User/UserHome";
import About from "./pages/User/UserHome";
import Liked from "./pages/User/UserHome";
import Playlists from "./pages/User/UserHome";
import AdminLogin from './pages/admin/AdminLogin'
import AdminSignup from './pages/admin/AdminSignup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        // ************ User ************//
        <Route path="login" element={<UserLogin />} />
        <Route path="signup" element={<UserSignup />} />
        <Route path="/" element={<UserHome />} />
        <Route path="about" element={<About />} />
        <Route path="liked" element={<Liked />} />
        <Route path="playlists" element={<Playlists />} />
        // ************ Admin ************//
        <Route path="adminLogin" element={<AdminLogin />} />
        <Route path="adminSignup" element={<AdminSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
