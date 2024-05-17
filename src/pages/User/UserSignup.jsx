import React from "react";
import SignupForm from "../../components/SignupForm";
import userSignupBg from "../../assets/user/signup-bg.jpg";

function UserSignup() {
  return (
    <SignupForm
      bgImage={userSignupBg}
      loginLink="/login"
      className="flex justify-center"
    />
  );
}

export default UserSignup;
