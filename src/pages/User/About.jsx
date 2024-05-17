import React from "react";
import homeBg from "../../assets/homeBg.png";
import Header from "../../components/Header";

function About() {
  return (
    <div
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <Header/>
    </div>
  );
}

export default About;
