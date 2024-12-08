import React  from 'react';
import Loader from './Loader';
import { useNavigate,useLocation } from "react-router-dom";
const Head = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goToQuiz = () =>{
    location.pathname==='/quiz'? navigate(0):navigate('/quiz')
    }
  return (
    
    <div className='flex flex-col md:flex-row items-center justify-center gap-2 '>
          <div className=" sm:max-w-lg ml-5 mr-5 text-center my-10 sm:mx-auto md:ml-10 lg:mx-auto ">
      {/* Titre principal */}
      <h1 className="text-4xl font-extrabold tracking-wide text-white md:text-3xl sm:text-5xl lg:text-5xl">
        Protéger l’Avenir de Notre Planète
      </h1>

      {/* Paragraphe descriptif */}
      <p className="mt-6  text-lg sm:text-xl text-gray-300 leading-relaxed">
        Les cybermenaces sont partout, mais vous avez le pouvoir de les combattre ! 
        Participez à notre <span className="text-purple-400 font-bold">quiz interactif </span> 
        pour tester vos réflexes et contribuer à un avenir plus sûr.
      </p>

      {/* Bouton */}
      <button 
      onClick={goToQuiz}
      className="my-10  px-8 py-2   sm:h-14 sm:px-16  sm:text-sm font-bold text-purple-300 bg-purple-700 border-2 border-purple-300 rounded-full shadow-[0_0_4em_1em_rgba(191,123,255,0.781)] hover:text-purple-700 hover:bg-purple-300 hover:shadow-[0_0_4em_2em_rgba(191,123,255,0.781)] active:shadow-[0_0_2.5em_2em_rgba(191,123,255,0.781)] focus:outline-none transition-all duration-300">
        lancer défi !
      </button>
      
          </div>
          <Loader/>
    </div>
  );
};

export default Head;
