import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
const Head = () => {

  return (
    <div className="lg:w-1/3 sm:max-w-lg text-center">
      {/* Titre principal */}
      <h1 className="text-4xl font-extrabold tracking-wide text-white sm:text-5xl lg:text-6xl">
        Protéger l’Avenir de Notre Planète
      </h1>

      {/* Paragraphe descriptif */}
      <p className="mt-6  text-lg sm:text-xl text-gray-300 leading-relaxed">
        Les cybermenaces sont partout, mais vous avez le pouvoir de les combattre ! 
        Participez à notre <span className="text-purple-400 font-bold">quiz interactif</span> 
        pour tester vos réflexes et contribuer à un avenir plus sûr.
      </p>

      {/* Bouton */}
      <button 
      className="mt-10 py-4 px-8 text-sm font-bold text-purple-300 bg-purple-700 border-2 border-purple-300 rounded-full shadow-[0_0_4em_1em_rgba(191,123,255,0.781)] hover:text-purple-700 hover:bg-purple-300 hover:shadow-[0_0_4em_2em_rgba(191,123,255,0.781)] active:shadow-[0_0_2.5em_2em_rgba(191,123,255,0.781)] focus:outline-none transition-all duration-300">
        lancer défi !
      </button>
    </div>
  );
};

export default Head;
