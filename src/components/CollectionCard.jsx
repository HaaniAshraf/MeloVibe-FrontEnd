import React from "react";

function CollectionCard({Img,title}) {
  return (
    <div
      style={{
        backgroundImage: `url(${Img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-40 w-40 p-2 rounded-md flex items-center justify-center text-gray-400 font-bold font-collageFont text-3xl text-center opacity-90 hover:opacity-100 cursor-pointer"
    >
      {title}
    </div>
  );
}

export default CollectionCard;
