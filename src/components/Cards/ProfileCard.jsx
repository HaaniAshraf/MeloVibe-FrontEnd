import React, { useState } from "react";
import Button from "../Buttons/Button";
import axiosInstance from "../../instance/axiosInstance";
import Swal from "sweetalert2";

function ProfileCard({ type }) {
  const [profileImg, setProfileImg] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const [name, setName] = useState(type.name || "");
  const [phone, setPhone] = useState(type.phone || "");
  const [dob, setDob] = useState("");

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const saveChanges = await Swal.fire({
      title: "Save changes?",
      text: "Are you sure you want to update your profile?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Save",
      cancelButtonText: "Cancel",
      backdrop: "rgba(0,0,0,0.7)",
      customClass: {
        container: "custom-swal-container",
        popup: "custom-swal-popup",
        title: "custom-swal-title",
        text: "custom-swal-text",
        confirmButton: "custom-swal-confirm-button",
        cancelButton: "custom-swal-cancel-button",
        backdrop: "rgba(0,0,0,0.7)",
      },
    });
    if (!saveChanges.isConfirmed) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name || type.name);
    formData.append("phone", phone || type.phone);
    formData.append("dob", dob || type.dob);
    if (profileImg) {
      formData.append("profileImg", profileImg);
    }

    try {
      const response = await axiosInstance.put(
        `/artist/updateProfile/${type._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: response.data.message,
          backdrop: "rgba(0,0,0,0.7)",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to update profile.",
          text: response.data.message,
          backdrop: "rgba(0,0,0,0.7)",
        });
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setProfileImg(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImg(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreviewImg(null);
    }
  };
  const formatDateForInput = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD
  }

  return (
    <form
      className="flex flex-col items-center mt-6 rounded-md px-5 py-7 sm:px-7 sm:py-8 md:px-10 lg:py-10"
      id="profileCard"
      onSubmit={handleUpdateProfile}
    >
      <div className="relative">
        {previewImg ? (
          <img
            src={previewImg}
            alt="Profile Preview"
            className="h-20 w-20 md:h-28 md:w-28 rounded-full cursor-pointer"
            onClick={() => document.getElementById("fileInput").click()}
          />
        ) : type && type.profileImg ? (
          <img
            src={`http://localhost:3000/uploads/${type.profileImg}`}
            alt="Profile"
            className="h-20 w-20 md:h-28 md:w-28 rounded-full cursor-pointer"
            onClick={() => document.getElementById("fileInput").click()}
          />
        ) : (
          <div
            className="h-20 w-20 md:h-28 md:w-28 rounded-full cursor-pointer bg-gray-300 flex items-center justify-center"
            onClick={() => document.getElementById("fileInput").click()}
          >
            <span className="text-gray-500 text-xl">+</span>
          </div>
        )}
        <input
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
          id="fileInput"
        />
      </div>
      <div className="mt-4 md:mt-6 flex flex-col gap-4 md:gap-5">
        <div className="flex justify-between items-center">
          <label htmlFor="">Name : </label>
          <input
            type="text"
            placeholder={type.name}
            className="p-1 bg-gray-800 opacity-80 rounded-sm placeholder:text-white"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="">Email : </label>
          <input
            type="text"
            value={type.email}
            placeholder={type.email}
            disabled
            className="p-1 bg-gray-800 opacity-80 rounded-sm"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="">Phone : </label>
          <input
            type="number"
            placeholder={type.phone}
            className="p-1 bg-gray-800 opacity-80 rounded-sm placeholder:text-white"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="">DOB : </label>
          <input
            type="date"
            defaultValue={type.dob ? formatDateForInput(type.dob) : ""}
            className="p-1 bg-gray-800 opacity-80 rounded-sm w-[189px]"
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          classname="w-full mt-2 py-3 px-6 bg-gradient-to-r from-pink-500 to-blue-900"
        >
          Update
        </Button>
      </div>
    </form>
  );
}

export default ProfileCard;
