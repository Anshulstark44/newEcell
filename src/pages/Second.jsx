import React from "react";
import { useNavigate } from "react-router-dom";
import anshulImage from "./anshul.jpg"

const SecondPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-800 text-white flex flex-col items-center justify-center p-6 relative">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Squid Game-themed container */}
      <div className="relative z-10 bg-gradient-to-r from-red-600 to-red-900 p-10 rounded-3xl shadow-2xl w-full max-w-lg">
        {/* Profile Picture Section */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={anshulImage}
            alt="Your Name"
            className="w-40 h-40 rounded-full border-4 border-white mb-4 transform transition-all duration-500 hover:scale-105"
          />
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
            Anshul Verma
          </h1>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
              안술 버마
          </h1>
          <p className="text-lg text-gray-300 mt-2">Reg. No. : 20233065</p>
        </div>

        {/* Squid Game Symbols */}
        <div className="flex gap-8 justify-center mb-8">
          <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center transform transition-transform hover:scale-125">
            <span className="text-2xl">●</span> {/* Circle icon */}
          </div>
          <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center transform transition-transform hover:scale-125">
            <span className="text-2xl">△</span> {/* Triangle icon */}
          </div>
          <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center transform transition-transform hover:scale-125">
            <span className="text-2xl">■</span> {/* Square icon */}
          </div>
        </div>

        {/* Instagram Button */}
        <div className="flex justify-center mb-8">
          <a
            href="https://www.instagram.com/anshul_verma4444/" // Replace with your Instagram URL
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-8 rounded-xl text-xl font-semibold transition-all transform hover:scale-110 hover:bg-gradient-to-r from-yellow-500 to-pink-600"
          >
            Visit My Instagram
          </a>
        </div>

        {/* Back to Home Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="text-lg font-semibold text-white hover:text-gray-300 transition-all duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>

      {/* Creative Animations for Squid Game Vibe */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-pink-500 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-yellow-500 rounded-full opacity-50 animate-pulse"></div>

      <div className="absolute top-20 left-32 w-24 h-24 bg-red-700 opacity-60 animate-spin"></div>
      <div className="absolute bottom-20 right-40 w-16 h-16 bg-purple-600 opacity-50 animate-ping"></div>
    </div>
  );
};

export default SecondPage;
