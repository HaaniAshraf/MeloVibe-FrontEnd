import React from "react";
import homeBg from "../../assets/homeBg.png";

function Liked() {
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
    </div>
  );
}

export default Liked;
