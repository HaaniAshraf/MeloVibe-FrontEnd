import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function About() {
  return (
    <div>
      <Header />
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
            <div className="bg-gray-950 opacity-95 rounded-lg shadow-lg p-6 text-center">
              <img src={''} alt="Team Member 1" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Haani Ashraf</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="bg-gray-950 opacity-95 rounded-lg shadow-lg p-6 text-center">
              <img src={''} alt="Team Member 2" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Yadu Krishnan</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
            </div>
            <div className="bg-gray-950 opacity-95 rounded-lg shadow-lg p-6 text-center">
              <img src={''} alt="Team Member 3" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Favas</h3>
              <p className="text-gray-600">Head of Marketing</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
