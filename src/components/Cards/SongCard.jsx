import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";

function SongCard({ song, playingAudio, togglePlay }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-full sm:w-48 md:w-52 hover:scale-105 duration-300">
      <img
        src={`http://localhost:3000/uploads/${song.songImage}`}
        alt={song.songName}
        className="w-full h-40 sm:h-48 md:h-52 object-cover"
      />
      <div className="p-3 sm:p-4">
        <h2 className="text-lg sm:text-xl font-semibold text-white mb-1 truncate">
          {song.songName}
          {song.album && (
            <span className="text-sm sm:text-base text-gray-400 block sm:inline sm:ml-1">
              - {song.album}
            </span>
          )}
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 truncate">
          {song.musicCategory}
        </p>
        <audio
          id={`audio-${song._id}`}
          src={`http://localhost:3000/uploads/${song.musicAudio}`}
          className="hidden"
        />
        <button
          onClick={() =>
            togglePlay(document.getElementById(`audio-${song._id}`), song._id)
          }
          className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-1 sm:py-2 px-3 sm:px-4 rounded-full flex items-center justify-center w-full transition-colors duration-300 text-sm sm:text-base"
        >
          {playingAudio && playingAudio.id === `audio-${song._id}` ? (
            <FaPause className="mr-1 sm:mr-2" />
          ) : (
            <FaPlay className="mr-1 sm:mr-2" />
          )}
          {playingAudio && playingAudio.id === `audio-${song._id}`
            ? "Pause"
            : "Play"}
        </button>
      </div>
    </div>
  );
}

export default SongCard;
