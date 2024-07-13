import React from "react";
import MusicForm from "../../components/Forms/MusicForm";

function AddMusic() {
  return (
    <div className="flex flex-col items-center h-screen lg:w-[calc(100vw-15rem)] lg:ml-[15rem]">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center gradient lg:mt-10">
        Upload Your Music
      </h1>
      <MusicForm />
    </div>
  );
}

export default AddMusic;
