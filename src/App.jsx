import React from 'react'
import questions from './data/question'
import { useState } from 'react'
import ResultCard from './components/ResultCard'
import QuestionCard from './components/QuestionCard'
import { Typography,Stack,Button ,Box} from '@mui/material'

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
      <Stack >

         <Typography variant='h2'>Quiz App</Typography>

         {showResult ? (<ResultCard mark={mark} handleRestart={handleRestart} />) : (
            <div>

               <QuestionCard
                  questionNum={questionNum}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
               />

               <Box sx={{display:'flex' , justifyContent:"right", mr:2}}>
                  {questionNum < questions.length - 1 && <Button variant='contained'  color="success" onClick={handleNext}>Next</Button>}
                  {questionNum === questions.length - 1 && <Button variant='contained'  color="success" onClick={handleFinish} >Finish</Button>}
               </Box>

            </div>
         )}

      </Stack>
   )
}

export default App
