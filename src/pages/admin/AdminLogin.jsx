import React from "react";
import LoginForm from "../../components/LoginForm";
import adminLoginBg from "../../assets/admin/adminLogin-bg.png";

function AdminLogin() {
  return (
    <LoginForm
      bgImage={adminLoginBg}
      signupLink="/admin/signup"
      className="flex items-start"
    />
  );
}

export default AdminLogin;
