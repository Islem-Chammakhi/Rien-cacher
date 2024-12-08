import React from 'react';
import Navbar from './components/Navbar'; // Import du composant Navbar
import Head from './components/Head'; // Import du composant Head
import Quiz from './components/Quiz';
import {  Routes, Route } from 'react-router-dom';

const App = () => {
    


  
  return (
    <>
    <Navbar/>
    <div className="flex   justify-center  min-h-screen bg-black">
          <Routes>
          <Route path="/" element={<Head />} />
          <Route path="/quiz" element={<Quiz />} />
          </Routes>
    </div>
    </>
  );
};

export default App;
