import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ProtectedRoute from "../utils/ProtectedRoute";

function UserLayout() {
  return (
    <div>
      <Header />
      <ProtectedRoute />
      <Outlet />
      <Footer />
    </div>
  );
}

export default UserLayout;
