import { React, useState } from "react";
import LoginForm from "../../components/Forms/LoginForm";
import adminLoginBg from "../../assets/admin/adminLogin-bg.png";
import axiosInstance from "../../instance/axiosInstance";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/admin/login", data);
      if (response.data.success) {
        navigate(`/admin/adminHome/`);
      }
    } catch (error) {
      console.error("There was an error!", error);
      if (error.response && error.response.data) {
        setError(error.response.data.error);
        if (error.response.data.redirect) {
          setTimeout(() => {
            navigate("/admin/otp");
          }, 1000);
        }
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };
  return (
    <LoginForm
      bgImage={adminLoginBg}
      signupLink="/admin/signup"
      className="flex items-start"
      handleSubmit={handleSubmit}
      error={error}
      forgotLink="/admin/input-email"
    />
  );
}

export default AdminLogin;
