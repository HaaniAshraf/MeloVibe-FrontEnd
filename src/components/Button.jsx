import React from "react";

function Button({ children, onClick, classname, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full tracking-wide text-white rounded-md font-bold transition duration-300 transform hover:scale-105 shadow-md cursor-pointer ${classname}`}
    >
      {children}
    </button>
  );
}

export default Button;
