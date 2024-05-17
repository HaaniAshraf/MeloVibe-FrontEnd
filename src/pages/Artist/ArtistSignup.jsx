import React from "react";
import SignupForm from "../../components/SignupForm";
import artistSignupBg from "../../assets/artist/artistSignup-bg.png";

function ArtistSignup() {
  return (
    <SignupForm
      bgImage={artistSignupBg}
      loginLink={"/artistLogin"}
      className="flex justify-end"
    />
  );
}

export default ArtistSignup;
