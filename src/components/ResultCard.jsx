import React from 'react'

const ResultCard = ({mark,handleRestart}) => {
  return (
    <div>
               <h3>Quiz Result</h3>
               <p>Your score: {mark}</p>
               <button onClick={handleRestart}>Restart Quiz</button>
            </div>
  )
}

export default ResultCard