import React, { useState } from "react";
import SignupForm from "../../components/Forms/SignupForm";
import userSignupBg from "../../assets/user/signup-bg.jpg";
import axiosInstance from "../../instance/axiosInstance";
import { useNavigate } from "react-router-dom";

function UserSignup({ type }) {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/signup", data);
      navigate("/user/otp");
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
      bgImage={userSignupBg}
      loginLink="/user/login"
      className="flex justify-center"
      handleSubmit={handleSubmit}
      type={type}
      error={error}
    />
  );
}

export default UserSignup;
