import React from 'react';
import '../App.css';
import './Style/WelcomePage.css';
import Links from './Links';
import Resume from './Resume';
import ProfilePic from '../Capture.PNG';

function WelcomePage() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-green-400 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl md:grid grid-cols-2 gap-8 rounded-lg overflow-hidden shadow-lg bg-white transform translate-y-4 transition-transform duration-500 hover:translate-y-0 hover:shadow-2xl">
        <div className="p-4 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
            Hi All, I am Vineet Mishra <span className="wave">👋</span>
          </h1>
          <p className="text-base md:text-xl text-gray-700 mt-4">
            A passionate Full Stack Software Developer 🚀 with experience in building web and mobile applications using JavaScript, React, Node.js, SQL, NoSQL, React Native, and other exciting technologies.
          </p>
          <div className="mt-4 md:mt-8">
            <Resume />
            <Links />
          </div>
        </div>
        <div className="hidden md:block mt-4">
          <img className="w-full max-h-96 object-cover rounded-full" src={ProfilePic} alt="Profile" />
        </div>
      </div>
      <div className="md:hidden mt-4 flex items-center justify-center">
        <img className="w-48 h-48 object-cover rounded-full" src={ProfilePic} alt="Profile" />
      </div>
    </div>
  );
}

export default WelcomePage;
