import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { Stack } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Stack justifyContent='center' alignItems="center">
      <App />
    </Stack>
  </React.StrictMode>
);
