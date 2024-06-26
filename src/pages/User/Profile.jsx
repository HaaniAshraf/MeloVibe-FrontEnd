import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../instance/axiosInstance";
import ProfileCard from "../../components/Cards/ProfileCard";

function ArtistProfile() {
  const params = useParams();
  const { id } = params;
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get(`/user/profile/${id}`);
        setArtist(response.data.data);
      } catch (error) {
        console.error("Error fetching artist data:", error);
        setError("Failed to fetch artist data.");
      }
    };
    if (id) {
      fetchUserData();
    } else {
      console.log("ID not available");
    }
  }, [id]);

  return (
    <div className="text-white h-screen flex flex-col items-center lg:mt-6 xl:mt-14">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center gradient">
        PROFILE
      </h1>
      {error && <p className="text-red-500">{error}</p>}
      <ProfileCard type={user} />
    </div>
  );
}

export default ArtistProfile;
