import React, { useState } from "react";
import SignupForm from "../../components/Forms/SignupForm";
import ArtistSignupBg from "../../assets/artist/artistSignup.png";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../instance/axiosInstance";

function ArtistSignup() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    const formData = new FormData();
    formData.append("profileImg", data.profileImg);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    try {
      const response = await axiosInstance.post(
        "/artist/signup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/artist/otp");
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
    <SignupForm
      bgImage={ArtistSignupBg}
      loginLink="/artist/login"
      className="flex justify-start"
      handleSubmit={handleSubmit}
      type="artist"
      error={error}
    />
  );
}

export default ArtistSignup;
