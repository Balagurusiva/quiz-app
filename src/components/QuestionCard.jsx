import React from 'react'
import questions from '../data/question'
import { Box, Stack, Checkbox } from '@mui/material'


const QuestionCard = ({ questionNum, selectedOption, setSelectedOption }) => {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent='space-around'
      sx={{ width: "600px", border: '2px solid black',boxShadow:2}}
    >

      <Box sx={{ m: 2 }}>
        {
          questions.map((item, idx) => {
            if (idx === questionNum) {
              return <p key={idx}>{questionNum + 1}.{item.question}</p>
            }
          })}
      </Box>

      <Box sx={{ m: 2 }} >
        {questions[questionNum].option.map((option, index) => (
          <Box key={index} sx={{ border: "1px solid green", mb: 2, width: 200, borderRadius: 2 }}>
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