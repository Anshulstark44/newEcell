import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Image from "./logo.png";

const FirstPage = () => {
  const navigate = useNavigate();

  const [screenSize, setScreenSize] = useState("desktop");
  const [gridColors, setGridColors] = useState([
    ...Array(8).fill("bg-[#00407A]"),
    "bg-[#7A0000]", 
  ]);
  const [clickedIndices, setClickedIndices] = useState([]);

  const handleSquareClick = (index) => {
    if (index === 8) {
      clickedIndices.forEach((clickedIndex, i) => {
        setTimeout(() => {
          setGridColors((prevColors) => {
            const newColors = [...prevColors];
            newColors[clickedIndex] = "bg-[#00407A]";
            return newColors;
          });
        }, i * 200);
      });
      setClickedIndices([]);
    } else {
      setGridColors((prevColors) => {
        const updatedColors = [...prevColors];
        updatedColors[index] = "bg-[#7A0000]";
        return updatedColors;
      });
      setClickedIndices([...clickedIndices, index]);
    }
  };


  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setScreenSize("desktop");
      else if (width >= 768) setScreenSize("tablet");
      else setScreenSize("smartphone");
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const renderLayout = () => {
    if (screenSize === "desktop") {
      return (
        <div className="flex flex-row gap-10 px-4">
          {renderDiv1()}
          {renderDiv2()}
          {renderDiv3()}
        </div>
      );
    } else if (screenSize === "tablet") {
      return (
        <div className="flex flex-col gap-10 px-4">
          {renderDiv1()}
          <div className="flex flex-row gap-10">
            {renderDiv2()}
            {renderDiv3()}
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col gap-10 px-4">
          {renderDiv3()}
          {renderDiv2()}
          {renderDiv1()}
        </div>
      );
    }
  };

  const renderDiv1 = () => (
    <div className="w-full lg:w-1/3 h-64 md:h-96 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg border-[3px] border-slate-300 flex justify-center items-center animate__animated animate__pulse">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Welcome to SquidSpace
        </h1>
      </div>
    </div>

  );

  const renderDiv2 = () => (
    <div className="w-full md:w-1/2 lg:w-1/3 h-64 md:h-96 rounded-xl bg-white flex items-center justify-center px-4 border-4 border-slate-400 shadow-xl transform transition duration-300 hover:scale-105 animate__animated animate__fadeInDown">
      <img
        src={Image}
        alt="Squid Game Logo"
        className="w-[100%] h-[100%] object-contain rounded-lg"
      />
    </div>
  );

  const renderDiv3 = () => (
    <div className="w-full md:w-1/2 lg:w-1/3 h-64 md:h-96 rounded-xl bg-[#D9D9D9] shadow-inner p-6 flex items-center justify-center px-4">
      <div className="grid grid-cols-3 gap-2">
        {gridColors.map((color, index) => (
          <div
            key={index}
            className={`h-16 md:h-24 w-16 md:w-24 ${color} rounded-lg cursor-pointer transform transition duration-300 hover:scale-110`}
            onClick={() => handleSquareClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-200 p-4 md:p-10 flex flex-col items-center gap-10">

      {renderLayout()}
    </div>
  );
};

export default FirstPage;
