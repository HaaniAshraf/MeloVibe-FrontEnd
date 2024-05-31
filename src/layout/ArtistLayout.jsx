import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet, useParams } from "react-router-dom";

function ArtistLayout() {
  const params = useParams();
  const { id } = params;
  return (
    <div>
      <Sidebar artistId={id}/>
      <Outlet />
    </div>
  )
}

export default ArtistLayout