import React, { useState, useRef, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { MusicValidationSchema } from "../../utils/FieldValidation";
import Button from "../Buttons/Button";
import { PiMusicNotesPlusFill } from "react-icons/pi";
import { FaMusic } from "react-icons/fa";
import Swal from "sweetalert2";
import axiosInstance from "../../instance/axiosInstance";
import { useArtist } from "../../context/ArtistContext";

const initialValues = {
  songImage: "",
  songName: "",
  album: "",
  musicCategory: "",
  musicAudio: "",
};

const MusicForm = () => {
  const [formError, setFormError] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);
  const audioInputRef = useRef(null);
  const dropdownRef = useRef(null);
  const [audioFileName, setAudioFileName] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [artist, setArtist] = useState([]);
  const { artistId } = useArtist();

  const validateForm = (values) => {
    try {
      MusicValidationSchema.validateSync(values, { abortEarly: false });
      setFormError(null);
    } catch (err) {
      setFormError("All fields are required");
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleAudioClick = () => {
    audioInputRef.current.click();
  };

  const handleImageChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setFieldValue("songImage", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleAudioChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setFieldValue("musicAudio", file);
      setAudioFileName(file.name);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsCategoryOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const response = await axiosInstance.get(
          `/artist/artistHome/${artistId}`
        );
        setArtist(response.data.data);
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };
    fetchArtistData();
  }, [artistId]);

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    validateForm(values);
    if (!formError) {
      const formData = new FormData();
      formData.append("songImage", values.songImage);
      formData.append("songName", values.songName);
      formData.append("artistName", artist.name);
      formData.append("artistId", artistId);
      formData.append("album", values.album);
      formData.append("musicCategory", values.musicCategory);
      formData.append("musicAudio", values.musicAudio);
      try {
        const response = await axiosInstance.post("/artist/addSong", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        if (response.status === 201) {
          Swal.fire("Success!", "Song added successfully", "success");
          resetForm();
          setPreviewImage(null);
          setAudioFileName("");
        } else {
          throw new Error("Failed to add song");
        }
      } catch (error) {
        Swal.fire("Error", "An error occurred while saving the song", "error");
      }
    }
    setSubmitting(false);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={onSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ setFieldValue, values }) => (
          <Form className="mt-3 lg:mt-8 text-white flex flex-col gap-4 lg:gap-5 bg-gray-950 px-5 py-3 sm:py-4 md:py-5 rounded-md items-center justify-center">
            <div
              className="h-20 lg:h-28 w-20 lg:w-28 rounded-full bg-gray-900 flex flex-col items-center justify-center text-gray-600 cursor-pointer overflow-hidden"
              onClick={handleImageClick}
            >
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <h1 className="font-semibold hidden lg:block">Music Image</h1>
                  <PiMusicNotesPlusFill className="text-3xl" />
                </>
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              style={{ display: "none" }}
              onChange={(event) => handleImageChange(event, setFieldValue)}
            />
            <Field
              type="text"
              id="songName"
              name="songName"
              className="bg-gray-900 pl-1 h-8 rounded-sm w-64 placeholder:text-gray-600"
              placeholder="Song name"
            />
            <Field
              type="text"
              id="artistName"
              name="artistName"
              className="bg-gray-900 pl-1 h-8 rounded-sm w-64"
              placeholder={artist.name}
              value={artist.name}
              disabled
            />
            <Field
              type="text"
              id="album"
              name="album"
              className="bg-gray-900 pl-1 h-8 rounded-sm w-64 placeholder:text-gray-600"
              placeholder="Album name"
            />
            <div className="relative w-64" ref={dropdownRef}>
              <div
                className="bg-gray-900 w-full h-12 rounded-sm flex items-center justify-between px-3 cursor-pointer"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              >
                <span
                  className={
                    values.musicCategory ? "text-white" : "text-gray-600"
                  }
                >
                  {values.musicCategory || "Select a category"}
                </span>
                <span
                  className={`text-pink-500 transition-transform duration-200 ${
                    isCategoryOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </div>
              {isCategoryOpen && (
                <div className="absolute top-full left-0 w-full bg-gray-900 rounded-sm mt-1 shadow-lg z-10 p-2">
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Monsoon",
                      "Celebration",
                      "Travel",
                      "Party",
                      "Peace",
                      "Love",
                      "Friendship",
                      "Other",
                    ].map((category) => (
                      <div
                        key={category}
                        className="px-3 py-2 hover:bg-gray-800 cursor-pointer text-sm rounded"
                        onClick={() => {
                          setFieldValue("musicCategory", category);
                          setIsCategoryOpen(false);
                        }}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div
              className={`bg-gray-900 w-64 h-12 rounded-sm flex items-center justify-between px-3 cursor-pointer ${
                audioFileName ? "text-white" : "text-gray-600"
              }`}
              onClick={handleAudioClick}
            >
              <div className="flex items-center">
                <FaMusic className="text-gray-700 mr-2" />
                <span className="truncate">
                  {audioFileName || "Choose audio file"}
                </span>
              </div>
              <span className="text-pink-500 text-sm">Browse</span>
            </div>
            <input
              type="file"
              ref={audioInputRef}
              accept="audio/*"
              style={{ display: "none" }}
              onChange={(event) => handleAudioChange(event, setFieldValue)}
            />
            {formError && <div className="text-red-400">{formError}</div>}
            <Button
              type="submit"
              classname="w-full mt-2 py-3 px-6 bg-gradient-to-r from-pink-500 to-blue-900"
            >
              Add Song
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MusicForm;
