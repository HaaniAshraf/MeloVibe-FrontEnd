import React, { useState } from "react";
import SignupForm from "../../components/Forms/SignupForm";
import adminSignupBg from "../../assets/admin/adminSignup-bg.png";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../instance/axiosInstance";

function AdminSignup() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/admin/signup", data);
      navigate("/admin/otp");
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
      bgImage={adminSignupBg}
      loginLink="/admin/login"
      className="flex justify-end"
      handleSubmit={handleSubmit}
      type="admin"
      error={error}
    />
  );
}

export default AdminSignup;
