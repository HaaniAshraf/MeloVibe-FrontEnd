import React, { useState, useEffect } from "react";
import axiosInstance from "../../instance/axiosInstance";
import { useArtist } from "../../context/ArtistContext";
import SongCard from "../../components/Cards/SongCard";

const SongsList = () => {
  const [songs, setSongs] = useState([]);
  const { artistId } = useArtist();
  const [playingAudio, setPlayingAudio] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axiosInstance.get(`/artist/songs/${artistId}`);
        setSongs(response.data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };
    fetchSongs();
  }, [artistId]);

  const togglePlay = (audioElement) => {
    if (playingAudio && playingAudio !== audioElement) {
      playingAudio.pause();
    }
    if (audioElement.paused) {
      audioElement.play();
      setPlayingAudio(audioElement);
    } else {
      audioElement.pause();
      setPlayingAudio(null);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen lg:w-[calc(100vw-15rem)] lg:ml-[15rem] p-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center gradient lg:mt-10 mb-8">
        MY SONGS
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-8 w-full lg:px-10">
        {songs.map((song) => (
          <SongCard
            key={song._id}
            song={song}
            playingAudio={playingAudio}
            togglePlay={togglePlay}
          />
        ))}
      </div>
    </div>
  );
};

export default SongsList;
