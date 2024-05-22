import React from "react";
import SignupForm from "../../components/SignupForm";
import userSignupBg from "../../assets/user/signup-bg.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserSignup({type}) {
  const navigate = useNavigate();
  const handleSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/signup", data);
      navigate("/login");
    } catch (error) {
      console.error("There was an error!", error);
    }
  };
  return (
    <SignupForm
      bgImage={userSignupBg}
      loginLink="/login"
      className="flex justify-center"
      handleSubmit={handleSubmit}
      type={type}
    />
  );
}

export default UserSignup;
