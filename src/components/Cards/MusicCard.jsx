import React from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function MusicCard({ Img, song, movie, artists }) {
  return (
    <div className="flex gap-3 border-2 h-[120px] border-gray-900 rounded-md p-2 bg-gray-950 hover:shadow-customShadow duration-200">
      <img src={Img} alt="" className="h-auto" />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <h1 className="text-white font-semibold text-lg">
            {song}
            <span className="text-gray-500 text-sm"> - {movie}</span>
          </h1>
          <h1 className="text-gray-400 text-xs">{artists}</h1>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <FavoriteBorderRoundedIcon
              fontSize="medium"
              className="text-gray-400 hover:text-pink-500 duration-200"
            />
            <AddCircleOutlineIcon
              fontSize="medium"
              className="text-gray-400 hover:text-blue-500 duration-200"
            />
          </div>
          <div>
            <PlayCircleFilledWhiteIcon
              className="text-pink-500 hover:text-blue-500 duration-200 text-3xl cursor-pointer"
              fontSize="large"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicCard;
