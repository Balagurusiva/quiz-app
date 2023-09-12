import React from 'react'
import questions from './data/question'
import { useState } from 'react'

const App = () => {

   const [questionNum, setQuestionNum] = useState(0)
   const handlePrev = () => {
      if (questionNum == 0) {
         setQuestionNum(0);
      }
      else {
         setQuestionNum(questionNum - 1)
      }
   } 

   const handleNext = () => {
      if (questionNum == questions.length-1) {
         setQuestionNum( questions.length-1)
      } else {
         setQuestionNum(questionNum + 1)
      }
   }
   return (
      <div>

         {
            questions.map((item, idx) => {
               if (idx === questionNum) {
                  return <h3 key={idx}>{item.question}</h3>
               }
            })}



         {questions[questionNum].option.map((option, index) => (
            <label key={index}>
               <input
                  type="radio"
                  value={option}
               />
               {option}
            </label>
         ))}





         <button onClick={handlePrev}>prev</button>
         <button onClick={handleNext}>next</button>

      </div>
   )
}

export default App
