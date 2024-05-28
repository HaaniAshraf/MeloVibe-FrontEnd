import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../instance/axiosInstance";

function ArtistHome() {
  const { email } = useParams();
  const [artist, setArtist] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const response = await axiosInstance.get(
          `/artist/artistHome/${email}`
        );
        setArtist(response.data.data);
      } catch (error) {
        console.error("Error fetching artist data:", error);
        setError("Failed to fetch artist data.");
      }
    };
    fetchArtistData();
  }, [email]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="text-white">
      <h1>Artist Home</h1>
      <h3>Name: {artist.name}</h3>
      <h3>Email: {artist.email}</h3>
      <img
        src={`http://localhost:3000/uploads/${artist.profileImg}`}
        alt="Profile"
        className="h-20 w-20"
      />
    </div>
  );
}

export default ArtistHome;
