import React from 'react'
import questions from './data/question'
import { useState } from 'react'

const App = () => {

   const [questionNum, setQuestionNum] = useState(0)
   const [selectedOption, setSelectedOption] = useState('')
   const [mark, setMark] = useState(0)
   const [showResult, setShowResult] = useState(false);

   const handleNext = () => {
      if (questionNum === questions.length - 1) {
         setQuestionNum(questions.length - 1)
      } else {
         setQuestionNum(questionNum + 1)
      }

      if (selectedOption === questions[questionNum].answer) { 
         setMark(mark + 1)
      }
      setSelectedOption('')

   }

   const handleFinish = () => {
      if (selectedOption === questions[questionNum].answer) {
         console.log(selectedOption, questions[questionNum].answer, mark)
         setMark(mark + 1)
      }
      setShowResult(true)
   }

   const handleRestart = () => {
      setMark(0);
      setQuestionNum(0);
      setSelectedOption('');
      setShowResult(false);
   };

   return (
      <div>
         {showResult ? (
            <div>
               <h3>Quiz Result</h3>
               <p>Your score: {mark}</p>
               <button onClick={handleRestart}>Restart Quiz</button>
            </div>
         ) : (
            <div>
               {
                  questions.map((item, idx) => {
                     if (idx === questionNum) {
                        return <h3 key={idx}>{item.question}</h3>
                     }
                  })}


               {questions[questionNum].option.map((option, index) => (
                  <div key={index}>
                     <input
                        type="radio"
                        id={option}
                        value={option}
                        checked={option === selectedOption}
                        onChange={(e) => {
                           setSelectedOption(e.target.value)
                        }}
                     />
                     <label>{option}</label>
                     <br />
                  </div>
               ))}

               {questionNum < questions.length - 1 && <button onClick={handleNext}>next</button>}
               {questionNum === questions.length - 1 && <button onClick={handleFinish} >finish</button>}

            </div>
         )}
      </div>
   )
}

export default App
