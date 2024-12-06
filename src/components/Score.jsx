// Score.jsx
/*import React from 'react';

const Score = ({ score, totalQuestions }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-sm w-full bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Votre score final</h2>
        <p className="text-xl text-gray-700">Vous avez répondu correctement à {score} sur {totalQuestions} questions !</p>
      </div>
    </div>
  );
};

export default Score;*/

import React from 'react';

const Score = ({ score, totalQuestions }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      <div className="max-w-sm w-full bg-black p-6 rounded-lg shadow-[0_0_10px_5px_rgba(191,123,255,0.7)] text-center">
        <h2 className="text-2xl font-semibold mb-4 text-white">Votre score final</h2>
        <p className="text-xl text-purple-300">
          Vous avez répondu correctement à{' '}
          <span className="text-purple-400 font-semibold">{score}</span> sur{' '}
          <span className="text-purple-400 font-semibold">{totalQuestions}</span> questions !
        </p>
        <p className="mt-4 text-gray-400">Merci d'avoir joué !</p>
      </div>
    </div>
  );
};

export default Score;

