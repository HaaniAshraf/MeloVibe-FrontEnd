import React, { useState } from "react";
import LoginForm from "../../components/LoginForm";
import userLoginBg from "../../assets/user/login-bg.jpg";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../instance/axiosInstance";

function UserLogin() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/login", data);
      if (response.data.success) {
        navigate("/");
      }
    } catch (error) {
      console.error("There was an error!", error);
      if (error.response && error.response.data) {
        setError(error.response.data.error);
        if (error.response.data.redirect) {
          setTimeout(() => {
            navigate("/user/otp");
          }, 1000);
        }
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };
  return (
    <LoginForm
      bgImage={userLoginBg}
      signupLink="/user/signup"
      className="flex items-center"
      handleSubmit={handleSubmit}
      error={error}
    />
  );
}

export default UserLogin;
