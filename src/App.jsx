import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeP from './pages/home';
import SecondPage from './pages/second';


const App = () => {
  

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeP></HomeP>}></Route>
          <Route path='/second' element={<SecondPage></SecondPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
