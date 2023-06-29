import { Box, Card } from '@mui/material'
import React from 'react'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';


function Login() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (

    <Box sx={{ width: '25%', typography: 'body1', marginTop: 15 }}>
      <Card>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Login" value="1" />
              <Tab label="Sign Up" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <LoginForm/>
          </TabPanel>
          <TabPanel value="2">
            <RegistrationForm/>
          </TabPanel>
        </TabContext>
      </Card>
    </Box>

  )
}

export default Login
