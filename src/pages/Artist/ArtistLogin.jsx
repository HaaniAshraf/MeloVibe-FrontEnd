import { React, useState } from "react";
import LoginForm from "../../components/LoginForm";
import ArtistLoginBg from "../../assets/artist/artistLogin.png";
import axiosInstance from '../../instance/axiosInstance'
import { useNavigate } from "react-router-dom";

function ArtistLogin() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (data) => {
    try {
      const response = await axiosInstance.post(
        "/artist/login",
        data
      );
      const email = response.data.data;
      navigate(`/artist/artistHome/${email}`);
    } catch (error) {
      console.error("There was an error!", error);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
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
    />
  );
}

export default ArtistLogin;
