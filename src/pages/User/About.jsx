import React, { useState, useEffect } from "react";
import axios from "axios";
import MemberCard from "../../components/MemberCard";
import Shimmer from "../../components/Shimmer";

function About() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const usernames = ["HaaniAshraf", "yadukrishnan0", "favas17"];
      const membersData = [];
      for (const username of usernames) {
        try {
          const response = await axios.get(
            `https://api.github.com/users/${username}`
          );
          membersData.push(response.data);
        } catch (error) {
          console.error(`Error fetching data for ${username}:`, error);
        }
      }
      setData(membersData);
      setLoading(false);
    };
    fetchData();
  }, []);

  const roles = {
    HaaniAshraf: "Founder & CEO",
    yadukrishnan0: "Chief Technology Officer",
    favas17: "Head of Marketing",
  };

  return (
    <div>
      <div className="text-gray-200 py-24">
        <div className="text-center gradient">
          <h1 className="text-4xl font-bold">About Us</h1>
        </div>
        <div className="mx-auto p-8">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Welcome to MeloVibe</h2>
            <p className="mb-4">
              At MeloVibe, we believe that music is more than just a collection
              of sounds; it’s a universal language that brings people together,
              evokes emotions, and creates unforgettable moments. Our mission is
              to enhance your musical journey by providing a seamless and
              personalized music experience.
            </p>
            <p className="mb-4">
              Founded by a group of passionate music enthusiasts, MeloVibe aims
              to revolutionize the way you discover, listen to, and interact
              with music. Whether you’re an avid music lover, an emerging
              artist, or someone who simply enjoys a good tune, our platform is
              designed to cater to all your musical needs.
            </p>
            <h2 className="text-3xl font-semibold mt-10 mb-6">Our Features</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Offline Playback: Enjoy your favorite tracks anytime, anywhere
                without worrying about internet connectivity.
              </li>
              <li>
                Multi-Device Sync: Seamlessly switch between devices without
                missing a beat.
              </li>
              <li>
                Live Streaming & Virtual Concerts: Experience live music from
                your favorite artists right from the comfort of your home.
              </li>
              <li>
                Personalized Recommendations: Discover new music tailored to
                your unique taste.
              </li>
              <li>
                Extensive Music Library: Access a vast collection of songs,
                albums, and playlists across various genres.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6">Meet the Team</h2>
            <div className="flex flex-wrap justify-center gap-10">
              {loading
                ? Array(3)
                    .fill()
                    .map((_, index) => <Shimmer key={index} />)
                : data.map((member, index) => (
                    <MemberCard
                      key={index}
                      member={member}
                      role={roles[member.login]}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
