import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <div>
      <Header userId={userId} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default UserLayout;
