import React from 'react'
import { Stack, Button } from '@mui/material'

const ResultCard = ({ mark, handleRestart }) => {
  return (
    <Stack
      direction='column'
      height='150px'
      justifyContent='space-around'
      sx={{ boxShadow: 3, borderRadius: 4, m: 2, p: '10px' }}
    >
      <div>
        <h3>Quiz Result</h3>
        <br/ >
        <p >Your score: {mark}</p>
      </div>

      <Button variant='contained' color="success" onClick={handleRestart}>Restart Quiz</Button>
    </Stack>
  )
}

export default ResultCard