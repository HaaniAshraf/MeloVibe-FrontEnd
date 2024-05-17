import React from "react";
import LoginForm from "../../components/LoginForm";
import userLoginBg from "../../assets/user/login-bg.jpg";

function UserLogin() {
  return (
    <LoginForm
      heading=''
      bgImage={userLoginBg}
      signupLink="/signup"
      className="flex items-center"
    />
  );
}

export default UserLogin;
