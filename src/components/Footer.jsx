import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Logo from '../assets/trans-logo.png'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-8">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:mb-0 flex items-center justify-center">
            <img src={Logo} alt="" className='h-10' />
            <h2 className="text-xl font-bold text-gray-400">MeloVibe</h2>
          </div>
          <div className="flex xxs:gap-3 sm:gap-8 mb-4">
            <Link to="" className="hover:text-pink-500">Contact</Link>
            <Link to="" className="hover:text-pink-500">Terms of Service</Link>
            <Link to="" className="hover:text-pink-500">Privacy Policy</Link>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
              <FaFacebook size="1.5em" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
              <FaTwitter size="1.5em" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
              <FaInstagram size="1.5em" />
            </a>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-xs">&copy; 2024 MeloVibe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
