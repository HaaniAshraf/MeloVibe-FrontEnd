import React from "react";

function ArtistCard({ Img, gradient }) {
  return (
    <div
      className="xxs:h-28 xxs:w-28 sm:h-32 sm:w-32 md:w-36 md:h-36 xl:h-40 xl:w-40 flex items-center justify-center overflow-hidden rounded-full cursor-pointer opacity-60 hover:opacity-100 duration-200"
      style={{
        background: gradient,
      }}
    >
      <img src={Img} alt="" className="h-full w-full object-cover" />
    </div>
  );
}

export default ArtistCard;
