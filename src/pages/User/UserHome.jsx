import React, { useEffect, useState } from "react";
import axiosInstance from "../../instance/axiosInstance";
import Header from "../../components/Divs/Header";
import Footer from "../../components/Divs/Footer";
import Banner from "../../assets/user/banner.png";
import Collage from "../../assets/user/collage.jpg";
import Button from "../../components/Buttons/Button";
import { Link } from "react-router-dom";
import MusicCard from "../../components/Cards/MusicCard";
import Sajni from "../../assets/user/musics/Sajni.jpg";
import ArtistCard from "../../components/Cards/ArtistCard";
import Arijith from "../../assets/user/artists/arijith.png";
import ArtistSection from "../../assets/user/artistSection.png";
import CollectionCard from "../../components/Cards/CollectionCard";
import Rain from "../../assets/user/collections/rain.jpeg";
import Wedding from "../../assets/user/collections/wedding.png";
import Travel from "../../assets/user/collections/travel.jpeg";
import Party from "../../assets/user/collections/party.png";
import Love from "../../assets/user/collections/love.png";
import Peace from "../../assets/user/collections/peace.png";
import Friends from "../../assets/user/collections/friends.jpg";
import Services from "../../components/Services";
import { MdOutlineCloudDownload } from "react-icons/md";
import { MdOutlineImportantDevices } from "react-icons/md";
import { MdOutlineLiveTv } from "react-icons/md";
import { PiMusicNotesFill } from "react-icons/pi";

function UserHome() {
  const [latestSongs, setLatestSongs] = useState([]);
  const [playingAudio, setPlayingAudio] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axiosInstance.get("/latestSongs");
        setLatestSongs(response.data);
        console.log('latestsongs:',latestSongs);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };
    fetchSongs();
  }, []);

  const togglePlay = (audioElement) => {
    if (playingAudio && playingAudio !== audioElement) {
      playingAudio.pause();
    }
    if (audioElement.paused) {
      audioElement.play();
      setPlayingAudio(audioElement);
    } else {
      audioElement.pause();
      setPlayingAudio(null);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center xxs:pt-5 xs:pt-14 pb-40">
        <div
          style={{
            backgroundImage: `url(${Banner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "97%",
          }}
          className="rounded-md flex flex-col items-end justify-center mt-14 xs:mt-5 lg:mt-10 h-[500px]"
        >
          <div className="flex flex-col items-center xs:px-0 md:px-5 xl:px-40 xxs:bg-black lg:bg-transparent xxs:py-5 sm:py-8 md:py-10 xxs:mx-2 md:mx-32 lg:mx-0 xxs:opacity-80 rounded-md">
            <h1 className="text-gray-200 font-medium flex flex-col gap-2 text-center font-bannerFont">
              <span className="text-5xl xxs:text-3xl md:text-4xl xl:text-5xl text-gray-200">
                Welcome to <span>MeloVibe...</span>
              </span>
              <span className="text-gray-400 text-lg">
                - Your Ultimate Music Companion. <br /> " Dive into a World
                Where Every Beat Matches Your Mood. "
              </span>
            </h1>
            <Link to={"/user/login"}>
              <Button classname="mt-8 py-3 px-6 bg-gradient-to-r from-pink-500 to-blue-900">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col items-start xxs:px-2 xs:px-10 sm:px-10 md:px-8 lg:pl-5 xl:px-10 py-14">
          <h1 className="text-gray-300 font-bold text-2xl border-b-2 pb-1">
            Latest Hits
          </h1>
          <div className="mt-5 w-full justify-between grid xxs:grid-cols-1 xxs:gap-5 sm:pr-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-9">
            {latestSongs.map((song) => (
              <MusicCard
                key={song._id}
                song={song}
                playingAudio={playingAudio}
                togglePlay={togglePlay}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-start xxs:px-2 xs:px-5 sm:px-10 md:px-8 lg:pl-5 xl:px-10 py-10">
          <h1 className="text-gray-300 font-bold text-2xl border-b-2 pb-1">
            Popular Artists
          </h1>
          <div className="flex xxs:px-10 sm:px-0 gap-6 mt-7 items-center w-full">
            <div className="grid xxs:grid-cols-2 xxs:gap-12 sm:gap-7 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-6 w-full justify-between">
              <ArtistCard
                Img={Arijith}
                gradient="linear-gradient(135deg, rgb(255, 168, 168) 10%, rgb(252, 255, 0) 100%)"
              />
              <ArtistCard
                Img={Arijith}
                gradient="linear-gradient(-20deg, #d558c8 0%, #24d292 100%)"
              />
              <ArtistCard
                Img={Arijith}
                gradient="radial-gradient(circle at 52.1% -29.6%, rgb(144, 17, 105) 0%, rgb(51, 0, 131) 100.2%)"
              />
              <ArtistCard
                Img={Arijith}
                gradient="linear-gradient(to top, #accbee 0%, #e7f0fd 100%)"
              />
              <ArtistCard
                Img={Arijith}
                gradient="radial-gradient(circle at 10% 20%, rgb(255, 19, 120) 0%, rgb(0, 0, 0) 90.5%)"
              />
              <ArtistCard
                Img={Arijith}
                gradient="linear-gradient(109.6deg, rgb(27, 27, 79) 11.2%, rgb(120, 201, 244) 100.2%)"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${Collage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
          className="flex items-center justify-center w-full h-[400px] mt-20"
        >
          <h1 className="text-gray-400 font-bold font-collageFont xxs:text-4xl sm:text-5xl md:text-6xl xl:text-6xl gradient-text">
            Tune into Your Mood
          </h1>
        </div>
        <div className="w-full flex flex-col items-start xxs:px-2 xs:px-3 sm:px-10 md:px-5 xl:px-10 py-10 mt-12">
          <h1 className="text-gray-300 font-bold text-2xl border-b-2 pb-1">
            Trending Collections
          </h1>
          <div className="grid xxs:px-16 xxs:grid-cols-1 xxs:gap-8 xs:px-0 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:gap-7 xl:grid-cols-7 xl:gap-12 mt-7">
            <CollectionCard Img={Rain} title="Monsoon Mix" />
            <CollectionCard Img={Wedding} title="Tie the Knot Tunes" />
            <CollectionCard Img={Travel} title="Voyage Vibes" />
            <CollectionCard Img={Party} title="Party Pulse" />
            <CollectionCard Img={Peace} title="Calm Currents" />
            <CollectionCard Img={Love} title="Whispers of Love" />
            <CollectionCard Img={Friends} title="Buddy Beats" />
          </div>
        </div>
        <div
          className="mt-24 h-[500px] rounded-md flex flex-col items-start justify-center px-10"
          style={{
            backgroundImage: `url(${ArtistSection})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "97%",
          }}
        >
          <h1 className="text-gray-300 font-bold xxs:text-xl xs:text-2xl sm:text-3xl lg:text-4xl">
            The Stage is Set, All That's Missing is You.
          </h1>
          <h1 className="md:w-1/2 xxs:mt-3 xxs:text-sm xs:text-base xs:mt-5 text-gray-500">
            "Elevate your music career with MeloVibe! Our platform is designed
            to help artists like you reach new heights. With MeloVibe, you can
            create a stunning profile, upload your tracks, and connect with a
            dedicated audience of music enthusiasts. Our tools and features are
            tailored to boost your visibility and engagement, making it easier
            than ever to grow your fanbase. Join MeloVibe now and let your music
            be heard around the world!"
          </h1>
          <Link to={"/artist/login"}>
            <Button classname="xxs:mt-5 xs:mt-10 py-3 px-6 bg-gradient-to-r from-pink-500 to-blue-900">
              Join As Artist
            </Button>
          </Link>
        </div>
        <div className="px-1 grid grid-cols-2 gap-x-2 gap-y-5 xs:gap-y-7 md:grid-cols-4 lg:gap-10 items-center justify-center mt-28 xl:gap-20">
          <Services
            className={"text-pink-500"}
            icon={<MdOutlineCloudDownload />}
            text={"Download & Listen"}
          />
          <Services
            className={"text-blue-500"}
            icon={<MdOutlineImportantDevices />}
            text={"Multi-Device Sync"}
          />
          <Services
            className={"text-pink-500"}
            icon={<MdOutlineLiveTv />}
            text={"Live streaming"}
          />
          <Services
            className={"text-blue-500"}
            icon={<PiMusicNotesFill />}
            text={"Personalized Playlists"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserHome;
