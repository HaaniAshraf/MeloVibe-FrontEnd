import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRouter from './router/UserRouter'
import AdminRouter from './router/AdminRouter'
import ArtistRouter from './router/ArtistRouter'
import UserHome from './pages/User/UserHome'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/*" element={<UserRouter/>}/>
        <Route path="/admin/*" element={<AdminRouter/>}/>
        <Route path="/artist/*" element={<ArtistRouter/>}/>
        <Route path="/" element={<UserHome/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
