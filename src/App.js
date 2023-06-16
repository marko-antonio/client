import React from 'react'
import Rightbar from './components/Rightbar'
import Navbar from './components/Navbar'
import { Box, Stack, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SmsIcon from '@mui/icons-material/Sms';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard'
import Thesis from './components/Thesis'
import Schedule from './components/Schedule'
import Sms from './components/Sms'




function App() {
  return (
    <Box>
      {/* Navbar component */}
      <Navbar />
      <Router>
        <Stack direction="row" justifyContent="space-between">
          {/* sidebar component */}
          <Box flex={1} p={2} >
            <List>
              {/* Home */}
              <ListItem disablePadding>
                <ListItemButton component="a" to='/dashboard'>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" to='/thesis'>
                  <ListItemIcon>
                    <LibraryBooksIcon />
                  </ListItemIcon>
                  <ListItemText primary="Thesis" />
                </ListItemButton>
              </ListItem>
              {/* Schedule */}
              <ListItem disablePadding>
                <ListItemButton component="a" to='/schedule'>
                  <ListItemIcon>
                    <ScheduleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Schedule" />
                </ListItemButton>
              </ListItem>
              {/* SMS */}
              <ListItem disablePadding>
                <ListItemButton component="a" to='/sms'>
                  <ListItemIcon>
                    <SmsIcon />
                  </ListItemIcon>
                  <ListItemText primary="SMS" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
          {/* feed component */}
          <Box flex={5} p={2} justifyContent="space-between">
            <Routes >
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/thesis" element={<Thesis />} />
              <Route exact path="/schedule" element={<Schedule />} />
              <Route exact path="/sms" element={<Sms />} />
            </Routes>
          </Box>
          {/* right bar component */}
          <Box flex={1} p={2}>
            <Rightbar />
          </Box>
        </Stack>
      </Router>
    </Box>
  )
}

export default App

