import React from 'react'
import questions from './data/question'
import { useState } from 'react'

const App = () => {

   const [questionNum, setQuestionNum] = useState(0)
   const [selectedOption, setSelectedOption] = useState('')
   const [mark, setMark] = useState(0)

   const handlePrev = () => {
      if (questionNum == 0) {
         setQuestionNum(0);
      }
      else {
         setQuestionNum(questionNum - 1)
      }
   }

   const handleNext = () => {

      questions[questionNum].option.map((option, index) => {
         if (option === selectedOption) {
            setMark(mark + 1)
            console.log(mark)
         }
      })

      if (questionNum === questions.length - 1) {
         setQuestionNum(questions.length - 1)
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


         <button onClick={handlePrev}>prev</button>
         {questionNum < questions.length - 1 && <button onClick={handleNext}>next</button>}
         {questionNum === questions.length - 1 && <button  >finish</button>}


      </div>
   )
}

export default App
