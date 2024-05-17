import React from "react";
import LoginForm from "../../components/LoginForm";
import artistLoginBg from "../../assets/artist/artistLogin-bg.png";

function ArtistLogin() {
  return (
    <LoginForm
      bgImage={artistLoginBg}
      signupLink={"/artistSignup"}
      className="flex items-start"
    />
  );
}

export default ArtistLogin;
