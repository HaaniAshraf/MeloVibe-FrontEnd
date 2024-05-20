import React from "react";

function Services({ className, icon, text }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 ${className}`}
    >
      <div className="sm:text-lg  lg:text-3xl">{icon}</div>
      <h1 className="sm:text-lg  lg:text-xl">{text}</h1>
    </div>
  );
}

export default Services;
