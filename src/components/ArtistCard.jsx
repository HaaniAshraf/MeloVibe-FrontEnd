import React from "react";

function ArtistCard({ Img, gradient }) {
  return (
    <div
      className="xxs:h-32 xxs:w-32 sm:h-28 sm:w-28 lg:h-36 lg:w-36 flex items-center justify-center overflow-hidden rounded-full cursor-pointer"
      style={{
        background: gradient,
      }}
    >
      <img src={Img} alt="" className="h-full w-full object-cover" />
    </div>
  );
}

export default ArtistCard;
