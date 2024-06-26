import React from "react";
import Header from "../components/Divs/Header";
import Footer from "../components/Divs/Footer";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default UserLayout;
