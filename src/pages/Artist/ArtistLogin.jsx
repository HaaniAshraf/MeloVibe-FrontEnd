import React from "react";
import LoginForm from "../../components/LoginForm";
import ArtistLoginBg from '../../assets/artist/artistLogin.png'

function ArtistLogin() {
  return (
    <LoginForm
      bgImage={ArtistLoginBg}
      signupLink="/artist/signup"
      className="flex items-end"
    />
  );
}

export default ArtistLogin;
