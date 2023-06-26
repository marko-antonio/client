import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Loginform from './Loginform'
import Register from './Register'
import { Card, CardContent, Stack } from '@mui/material'

function Index() {
  return (

    <Stack
      spacing={2}
      useFlexGap flexWrap="wrap"
      margin="20px auto"
      direction="row"
      justifyContent="center"
      alignItems="center">

      <Card sx={{ minWidth: 275 }} variant="outlined">
        <CardContent>
          <Router>
            <Routes>
              <Route exact path='/login' element={<Loginform />} />
              <Route exact path='/register' element={<Register />} />
            </Routes>
            <Stack direction="row" justifyContent='space-between'>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </Stack>
          </Router>
        </CardContent>
      </Card>
    </Stack>
  )
}

export default Index
