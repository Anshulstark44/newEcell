import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import HomeP from './pages/home';
import SecondPage from './pages/second';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Determine if we are on the homepage or second page
  const isSecondPage = location.pathname === '/second';

  return (
    <nav
      className={`w-full py-6 px-10 shadow-lg flex justify-between items-center animate__animated animate__fadeIn ${isSecondPage ? 'bg-gradient-to-r from-red-600 via-black to-red-800' : 'bg-white'}`}
    >
      <div className="flex space-x-6 ml-auto">
        <button
          onClick={() => navigate("/second")}
          className={`text-lg font-semibold ${isSecondPage ? 'text-white' : 'text-black'} hover:text-green-300 transition-all duration-300`}
        >
          Home
        </button>
        <button
          onClick={() => navigate("/")}
          className={`text-lg font-semibold ${isSecondPage ? 'text-white' : 'text-black'} hover:text-green-300 transition-all duration-300`}
        >
          Grid
        </button>
        <a
          href="https://www.linkedin.com/in/anshul-verma-b208752a7/"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-lg font-semibold ${isSecondPage ? 'text-white' : 'text-black'} hover:text-green-300 transition-all duration-300`}
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeP />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </div>
  );
};

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
