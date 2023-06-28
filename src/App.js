import React from 'react'
import Stack from '@mui/material/Stack';
import Login from './components/login/Login';

function App() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}>
      <Login/>
    </Stack>
  )
}

export default App
