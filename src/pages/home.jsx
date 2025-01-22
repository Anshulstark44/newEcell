import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeP = () => {
  const navigate = useNavigate();
  const [gridColors, setGridColors] = useState(Array(9).fill("bg-gradient-to-br from-blue-500 to-black"));
  const [clickedIndices, setClickedIndices] = useState([]);

  const handleSquareClick = (index) => {
    const updatedColors = [...gridColors];
    updatedColors[index] = "bg-red-700"; 
    setGridColors(updatedColors);

    if (!clickedIndices.includes(index)) {
      setClickedIndices([...clickedIndices, index]);
    }

    if (index === 8) {
      clickedIndices.forEach((clickedIndex, i) => {
        setTimeout(() => {
          const sequenceColors = [...gridColors];
          sequenceColors[clickedIndex] = "bg-gradient-to-br from-blue-500 to-black";
          setGridColors(sequenceColors);
        }, i * 300);
      });

      setTimeout(() => {
        setClickedIndices([]);
      }, clickedIndices.length * 300);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-red-900 text-white flex flex-col">
      {/* Navbar */}
      <nav className="w-full py-6 px-10 bg-gradient-to-r from-red-500 via-black to-red-800 shadow-lg flex justify-between items-center rounded-b-xl animate__animated animate__fadeIn">
        <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
          SquidSpace
        </div>
        <div className="flex space-x-6">
          <button
            onClick={() => navigate("/second")}
            className="text-lg font-semibold text-white hover:text-green-300 transition-all duration-300"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/")}
            className="text-lg font-semibold text-white hover:text-green-300 transition-all duration-300"
          >
            Grid
          </button>
          <a
            href="https://www.linkedin.com/in/anshul-verma-b208752a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-white hover:text-green-300 transition-all duration-300"
          >
            LinkedIn
          </a>
        </div>
      </nav>

      {/* Body */}
      <div className="flex flex-col items-center gap-16 mt-16 mx-auto w-11/12 max-w-screen-xl">
        {/* Decorative Section */}
        <div className="relative bg-gradient-to-br from-gray-900 to-black p-10 rounded-xl shadow-2xl border border-gray-700 animate__animated animate__fadeIn animate__delay-1s">
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-purple-800 rounded-full blur-3xl opacity-20 animate__animated animate__pulse animate__infinite animate__slow"></div>
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-green-600 rounded-full blur-3xl opacity-20 animate__animated animate__pulse animate__infinite animate__slow"></div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-green-400">
            Welcome to SquidSpace
          </h2>
          <p className="mt-4 text-gray-300">
            A twist on Squid Game's theme, now with interactive elements. Click the grid below and test your reflexes!
          </p>
        </div>

        {/* Logo Section */}
        <div className="relative bg-gradient-to-r from-red-800 to-black rounded-xl shadow-lg flex justify-center items-center h-64 animate__animated animate__zoomIn">
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-green-500 rounded-full blur-2xl opacity-30 animate__animated animate__pulse animate__infinite animate__slow"></div>
          <img
            src="data:image/jpeg;base64,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"
            alt="Squid Game Logo"
            className="h-40 w-auto object-contain drop-shadow-xl animate__animated animate__bounceIn"
          />
        </div>

        {/* Squid Game Symbols */}
        <div className="flex gap-8 justify-center mb-8">
          <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center transform transition-transform hover:scale-125">
            <span className="text-2xl">●</span> 
          </div>
          <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center transform transition-transform hover:scale-125">
            <span className="text-2xl">△</span> 
          </div>
          <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center transform transition-transform hover:scale-125">
            <span className="text-2xl">■</span>
          </div>
        </div>

        {/* Interactive Grid */}
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 rounded-xl shadow-inner border border-gray-700 animate__animated animate__fadeIn animate__delay-2s">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400">
            Squid Game Interactive Grid
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {gridColors.map((color, index) => (
              <div
                key={index}
                onClick={() => handleSquareClick(index)}
                className={`${color} w-24 h-24 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-110 hover:shadow-lg animate__animated animate__bounceIn`}
                style={{
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 py-8 bg-gradient-to-r from-red-400 to-black text-center rounded-t-xl shadow-lg animate__animated animate__fadeIn animate__delay-3s">
        <p className="text-sm">
          Created with ❤️ by{" "}
          <span className="text-pink-700 font-semibold">Your Name</span>. © 2025 All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomeP;
