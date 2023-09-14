import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Stack } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Stack justifyContent='center'  alignItems="center" sx={{ mt: "100px" }}>
      <App />
    </Stack>
  </React.StrictMode>
);
