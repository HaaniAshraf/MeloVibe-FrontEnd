import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminSignup from "../pages/admin/AdminSignup";
import AdminOtp from '../pages/admin/AdminOtp'

function AdminRouter() {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/signup" element={<AdminSignup />} />
      <Route path="/otp" element={<AdminOtp />} />
    </Routes>
  );
}

export default AdminRouter;
