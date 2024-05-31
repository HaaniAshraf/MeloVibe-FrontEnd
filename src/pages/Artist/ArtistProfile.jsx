import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../instance/axiosInstance";
import ProfileCard from "../../components/ProfileCard";

function ArtistProfile() {
  const params = useParams();
  const { id } = params;
  const [artist, setArtist] = useState([]);
  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const response = await axiosInstance.get(`/artist/artistProfile/${id}`);
        setArtist(response.data.data);
      } catch (error) {
        console.error("Error fetching artist data:", error);
        setError("Failed to fetch artist data.");
      }
    };
    fetchArtistData();
  }, [id]);

  return (
    <div className="text-white h-screen flex flex-col items-center lg:mt-6 xl:mt-14">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center gradient">PROFILE</h1>
      <ProfileCard artist={artist} />
    </div>
  );
}

export default ArtistProfile;
