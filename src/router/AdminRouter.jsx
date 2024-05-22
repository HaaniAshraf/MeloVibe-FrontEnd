import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminSignup from "../pages/admin/AdminSignup";

function AdminRouter() {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/signup" element={<AdminSignup />} />
    </Routes>
  );
}

export default AdminRouter;
