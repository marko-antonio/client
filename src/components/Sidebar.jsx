import React from 'react'
import Rightbar from './Rightbar'
import Navbar from './Navbar'
import { Box, Stack, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard'
import Thesis from './Thesis'
import Schedule from './Schedule'
import Sms from './Sms'
import SettingsIcon from '@mui/icons-material/Settings';
import System from './system/System';

function Sidebar() {
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
           
             {/* System */}
             <ListItem disablePadding>
              <ListItemButton component="a" to='/system'>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="System" />
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
            <Route exact path="/system" element={<System />} />
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

export default Sidebar
