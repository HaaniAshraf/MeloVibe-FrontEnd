import { React, useState } from "react";
import LoginForm from "../../components/Forms/LoginForm";
import ArtistLoginBg from "../../assets/artist/artistLogin.png";
import axiosInstance from "../../instance/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useArtist } from "../../context/ArtistContext";
import * as jwt from "jwt-decode";

function ArtistLogin() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useArtist();
  const handleSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/artist/login", data);
      if (response.data.success) {
        const { token } = response.data;
        const decoded = jwt.jwtDecode(token);
        const { id } = decoded;
        localStorage.setItem("jwtToken", token);
        login(id);
        navigate(`/artist/artist-home`);
      }
    } catch (error) {
      console.error("There was an error!", error);
      if (error.response && error.response.data) {
        setError(error.response.data.error);
        if (error.response.data.redirect) {
          setTimeout(() => {
            navigate("/artist/otp");
          }, 1000);
        }
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };
  return (
    <LoginForm
      bgImage={ArtistLoginBg}
      signupLink="/artist/signup"
      className="flex items-end"
      handleSubmit={handleSubmit}
      error={error}
      forgotLink="/artist/input-email"
    />
  );
}

export default ArtistLogin;
