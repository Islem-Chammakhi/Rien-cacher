import React, { useState, useEffect } from 'react';
import questions from './quizData';
import Card from './Card';
import Score from './Score';
import { motion } from 'framer-motion';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(85); // 10 seconds for testing

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    const correctAnswer = currentQuestion.answer;
    setIsCorrect(answer === correctAnswer);
    setIsAnswered(true);
    if (answer === correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setQuizFinished(true);
    } else {
      setIsAnswered(false);
      setIsCorrect(null);
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };
  const loaderVariants = {
    animationOne: {
      x: [-20, 20],
      y: [0, -60],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.1,
        },
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.55,
          ease: 'easeOut'
        }
      }
    }
  };

  useEffect(() => {
    if (timeLeft > 0 && !quizFinished) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer); // Cleanup
    } else if (timeLeft === 0) {
      setQuizFinished(true); // End quiz when time runs out
    }
  }, [timeLeft, quizFinished]);

  return (
    
        <div className='my-5'>
            {!quizFinished && <motion.div
                className="w-3 h-3 mx-auto mt-10 bg-white  rounded-full"
                variants={loaderVariants}
                animate="animationOne"
            > 
            </motion.div>}
            <div className=" text-center text-6xl font-bold mb-8"
                style={{ color: timeLeft < 60 ? 'red' : 'white', backgroundColor: 'transparent' }}>
              <span className="animate-pulse">{timeLeft}</span>
          </div>
            {quizFinished ? (
              <Score score={score} totalQuestions={questions.length} />
            ) : (
              <Card
                question={currentQuestion}
                onAnswer={handleAnswer}
                isAnswered={isAnswered}
                isCorrect={isCorrect}
                explanation={currentQuestion.explanation}
                onNext={nextQuestion}
                timeLeft={timeLeft}
              />
            )}
          </div>


      
  );
};

export default Quiz;
