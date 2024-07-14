import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function MusicCard({ song, playingAudio, togglePlay }) {
  return (
    <div className="flex gap-3 border border-gray-900 rounded-md p-2 bg-gray-950 hover:shadow-customShadow duration-200">
      <img
        src={`http://localhost:3000/uploads/${song.songImage}`}
        alt={song.songName}
        className="w-32 h-32 object-cover rounded-md"
      />
      <div className="flex flex-col justify-between w-3/4">
        <div className="flex flex-col">
          <h1 className="text-white font-semibold text-xl">
            {song.songName}
            {song.album && (
              <span className="text-sm text-gray-400 ml-1">
                - {song.album}
              </span>
            )}
          </h1>
          <h1 className="text-gray-400 text-base">
            {song.artistName}
          </h1>
        </div>
        <div className="flex justify-between items-center mt-1">
          <div className="flex gap-2">
            <FavoriteBorderRoundedIcon className="text-gray-400 hover:text-pink-500 duration-200" />
            <AddCircleOutlineIcon className="text-gray-400 hover:text-blue-500 duration-200" />
          </div>
          <div>
            <audio
              id={`audio-${song._id}`}
              src={`http://localhost:3000/uploads/${song.musicAudio}`}
              className="hidden"
            />
            <button
              onClick={() =>
                togglePlay(
                  document.getElementById(`audio-${song._id}`),
                  song._id
                )
              }
              className="bg-pink-600 hover:bg-blue-600 text-white font-bold rounded-full h-10 w-10 flex items-center justify-center transition duration-150"
            >
              {playingAudio && playingAudio.id === `audio-${song._id}` ? (
                <FaPause />
              ) : (
                <FaPlay />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicCard;
