import React, { useState, useEffect } from "react";
import axiosInstance from "../../instance/axiosInstance";
import ProfileCard from "../../components/Cards/ProfileCard";
import { useArtist } from "../../context/ArtistContext";

function ArtistProfile() {
  const { artistId } = useArtist();
  const [artist, setArtist] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const response = await axiosInstance.get(`/artist/artistProfile/${artistId}`);
        setArtist(response.data.data);
      } catch (error) {
        console.error("Error fetching artist data:", error);
        setError("Failed to fetch artist data.");
      }
    };
    if (artistId) {
      fetchArtistData();
    } else {
      console.log("ID not available");
    }
  }, [artistId]);

  return (
    <div
      className="text-white flex flex-col items-center h-screen"
    >
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center gradient lg:mt-10">
        PROFILE
      </h1>
      {error && <p className="text-red-500">{error}</p>}
      <ProfileCard type={artist} />
    </div>
  );
}

export default ArtistProfile;
