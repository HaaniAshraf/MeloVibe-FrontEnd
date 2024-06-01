import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminSignup from "../pages/admin/AdminSignup";
import AdminOtp from '../pages/admin/AdminOtp'
import ForgotPassAdmin from '../pages/admin/ForgotPassAdmin'
import NewPassAdmin from "../pages/admin/NewPassAdmin";
import AdminHome from "../pages/admin/AdminHome";

function AdminRouter() {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/signup" element={<AdminSignup />} />
      <Route path="/otp" element={<AdminOtp />} />
      <Route path="/inputEmail" element={<ForgotPassAdmin />} />
      <Route path="/newPassword" element={<NewPassAdmin />} />
      <Route path="/home" element={<AdminHome />} />
    </Routes>
  );
}

export default AdminRouter;
