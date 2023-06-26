import { Box } from '@mui/material'
import React from 'react'

import Account from './Account';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';




function System() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="New Account" value="1" />
                        <Tab label="New Thesis" value="2" />
                        <Tab label="New Schedule" value="3" />
                        <Tab label="Sent Items" value="4" />
                        <Tab label="Reports" value="5" />
                        <Tab label="Back up" value="6" />
                    </TabList>
                </Box>
                <TabPanel value="1">New Account Here</TabPanel>
                <TabPanel value="2">New Thesis Here</TabPanel>
                <TabPanel value="3">New Schedule Here</TabPanel>
                <TabPanel value="4">Sent Items Here</TabPanel>
                <TabPanel value="5">Reports Here</TabPanel>
                <TabPanel value="6">Backup Here</TabPanel>
            </TabContext>
        </Box>
    )
}

export default System
