import React, { useState } from 'react';

const QuizApp = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Rome'],
      answer: 'Paris',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
      answer: 'Leonardo da Vinci',
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Mars', 'Saturn', 'Jupiter', 'Earth'],
      answer: 'Jupiter',
    },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    setSelectedOption('');
    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedOption('');
    setShowResult(false);
  };

  return (
    <div>
      <h2>Quiz App</h2>

      {showResult ? (
        <div>
          <h3>Quiz Result</h3>
          <p>Your score: {score}</p>
          <button onClick={handleRestart}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h3>Question {currentQuestionIndex + 1}</h3>
          <p>{questions[currentQuestionIndex].question}</p>

          <div>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                {option}
              </label>
            ))}
          </div>

          <button onClick={handleNextQuestion}>Next</button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;