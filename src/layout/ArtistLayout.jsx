import React from "react";
import Sidebar from "../components/Divs/Sidebar";
import { Outlet } from "react-router-dom";

function ArtistLayout() {
  return (
    <div>
      <Sidebar/>
      <Outlet />
    </div>
  )
}

export default ArtistLayout