import { React, useState, useEffect } from "react";
import axiosInstance from "../../instance/axiosInstance";
import { useArtist } from "../../context/ArtistContext";

function ArtistHome() {
  const { artistId } = useArtist();
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const response = await axiosInstance.get(
          `/artist/artistHome/${artistId}`
        );
        setArtist(response.data.data);
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };
    fetchArtistData();
  }, [artistId]);

  return (
    <div className="text-white pt-6 h-screen flex flex-col items-center lg:w-[calc(100vw-15rem)] lg:ml-[15rem]">
      <h3 className="gradient-text font-bold flex gap-2 items-end font-collageFont">
        <span className="text-2xl">Welcome..</span>
        <span className="text-3xl">{artist.name}</span>
      </h3>
    </div>
  );
}

export default ArtistHome;
