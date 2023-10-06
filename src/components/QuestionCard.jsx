import React from 'react'
import questions from '../data/question'
import { Box, Stack, Checkbox, Typography } from '@mui/material'



const QuestionCard = ({ questionNum, selectedOption, setSelectedOption }) => {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent='space-around'
      sx={{  boxShadow:3,borderRadius:4, m:2}}
    >

      <Box sx={{ m: 2 , width:"200px"}}>
   
        {
          questions.map((item, idx) => {
            if (idx === questionNum) {
              return <Typography variant='body1' key={idx}>{questionNum + 1}.{item.question}</Typography>
            }
          })}
      </Box>

      <Box sx={{ m: 2 ,width:"auto"}} >
        {questions[questionNum].option.map((option, index) => (
          <Box key={index} sx={{ border: "1px solid green", mb: 2, p:1,minWidth: "200px", maxWidth:"auto", borderRadius: 2 }}>
            <Checkbox
              color="success"
              id={option}
              value={option}
              checked={option === selectedOption}
              onChange={(e) => {
                setSelectedOption(e.target.value)
              }}
            />
            <label>{option}</label>
            <br />
          </Box>
        ))}
      </Box>
    </Stack>
  )
}

export default QuestionCard