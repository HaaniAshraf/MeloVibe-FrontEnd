import React from "react";
import Shimmer from "./Shimmer";

function MemberCard({ member, role }) {
  return (
    <div className="bg-gray-950 opacity-95 rounded-lg shadow-lg p-6 text-center">
      <img
        src={member.avatar_url}
        alt={`${member.login} Avatar`}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
      <p className="text-gray-500">{role}</p>
    </div>
  );
}

export default MemberCard;
