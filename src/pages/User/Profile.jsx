import React from "react";
import ProfileCard from '../../components/ProfileCard'

function Profile() {
  return (
    <div className="text-gray-200 py-24">
      <div className="text-center gradient">
        <h1 className="text-4xl font-bold">Profile</h1>
      </div>
      <ProfileCard/>
    </div>
  );
}

export default Profile;
