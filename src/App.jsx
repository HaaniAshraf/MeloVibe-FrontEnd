import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRouter from './router/UserRouter'
import AdminRouter from './router/AdminRouter'
import ArtistRouter from './router/ArtistRouter'
import OTPForm from "./components/Otp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<UserRouter/>}/>
        <Route path="/admin/*" element={<AdminRouter/>}/>
        <Route path="/artist/*" element={<ArtistRouter/>}/>
        <Route path="/otp" element={<OTPForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
