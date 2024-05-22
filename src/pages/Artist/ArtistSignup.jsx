import React from "react";
import SignupForm from "../../components/SignupForm";
import ArtistSignupBg from "../../assets/artist/artistSignup.png";

function ArtistSignup() {
  return (
    <SignupForm
      bgImage={ArtistSignupBg}
      loginLink="/artist/login"
      className="flex justify-start"
      profilePicInput={true}
    />
  );
}

export default ArtistSignup;
