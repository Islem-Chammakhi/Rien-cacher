import React from 'react';
import Navbar from './components/Navbar'; // Import du composant Navbar
import Head from './components/Head'; // Import du composant Head
import { motion } from 'framer-motion';
import Loader from './components/Loader';
import Quiz from './components/Quiz';


const App = () => {
  const svgVariants = {
    hidden: { rotate: -180 },
    visible: { 
      rotate: 0,
      transition: { duration : 1 }
    },
  }
  
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut",
      }
    }
  };
  return (
    <div className=" bg-gray-900 ">
      
      {/* Contenu principal */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-ce">
        <Quiz />
        <Loader />
      </div>

    </div>
  );
};

export default App;
